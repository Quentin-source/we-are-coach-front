import axios from 'axios';

const userMiddleWare = (store) => (next) => (action) => {
    
    const api = axios.create({
        baseURL: 'http://ec2-54-235-14-192.compute-1.amazonaws.com/api',
    });

    const getUserInformation = (response) => {
        const token = response.data.token;
        api.defaults.headers.common.Authorization = `bearer ${token}`;

        api.get('/user').then((response)=> {
            const userLogged = response.data.find((user)=> ( user.email === store.getState().user.inputEmail ))
            console.log('informations utilisateurs récupérées', userLogged);

            store.dispatch({
                type: 'CONNECTION',
                userLogged: userLogged,
                userToken: token,
            });
            console.log('Connection réussie');

        }).catch((error) => {
            console.log('erreur récupération informations utilisateur');
            alert('Probleme de communication avec le serveur');
        });           
    }

    if (action.type === 'LOGIN') {
        const state = store.getState();
        api.post('/login_check', {
            username: state.user.inputEmail,
            password: state.user.inputPassword,
        })
            .then((response) => {
                console.log('token récupéré');
                getUserInformation(response);
            })
            .catch((error) => {
                console.error('pb identification', error);
                alert('Utilisateur non reconnu');
            });
    }
    next(action);
};

export default userMiddleWare;




