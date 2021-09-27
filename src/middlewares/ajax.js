import axios from 'axios';

const ajaxMiddleWare = (store) => (next) => (action) => {
    
    const api = axios.create({
        baseURL: 'http://guillaume-marie.vpnuser.lan:8080/api',
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

export default ajaxMiddleWare;




// import axios from 'axios';
// const connectionApi = (store) => (next) => (action) => {
//     //You can create a new instance of axios with a custom config
//     const api = axios.create({
//         baseURL: 'http://ec2-3-80-208-180.compute-1.amazonaws.com/projet-connected-school-services/public/api',
//     });
//     if (action.type === 'LOGIN') {
//         const state = store.getState();
//         api.post('/login_check', {
//             username: state.user.email,
//             password: state.user.password,
//         })
//             .then((response) => {
//                 //conditionnal variable when ROLE_ADMIN classroom is null
//                 const classroomId = response.data.data.classroom ? response.data.data.classroom.id : [];
//                 const classroomName = response.data.data.classroom ? response.data.data.classroom.grade+"ème "+response.data.data.classroom.letter.toUpperCase() : "";
//                 //api.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
//                 store.dispatch({
//                     type: 'SAVE_USER',
//                     firstname: response.data.data.firstname,
//                     token: response.data.token,
//                     roles: response.data.data.roles,
//                     classroomId: classroomId,
//                     classroomName: classroomName,
//                 });
//             })
//             .catch((error) => {
//                 console.error(error);
//                 alert('Authentification échouée');
//             });
//     }
//     next(action);
// };
// export default connectionApi;