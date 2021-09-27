import axios from 'axios';
const ajaxMiddleware = (store) => (next) => (action) => {
    //You can create a new instance of axios with a custom config
    const api = axios.create({
        baseURL: 'http://guillaume-marie.vpnuser.lan:8080/api/',
    });

    if (action.type === 'API_LOG') {
        const state = store.getState();
        api.post('/login_check', {
            username: state.home.apiLogin,
            password: state.home.apiPassword,
        })
            .then((response) => {
                console.log('token API récupéré');
                const token = response.data.token;
                store.dispatch({
                    type : 'API_CONNECTION',
                    token : token
                });
                api.defaults.headers.common.Authorization = `bearer ${token}`;
                api.get('/home/category')
                    .then((response) => {
                        console.log('reponse home Page', response.data);
                        store.dispatch({
                            type: 'FETCH_CAT',
                            list: response.data,
                        })
                        store.dispatch({type: 'LOADING_OFF'});
                    })
                    .catch((error) => {
                        console.error(error);
                        alert('Problème communication serveur');
                    });

            })
            .catch((error) => {
                console.error('pb identification api', error);
                alert('Client non reconnu');
            });
    }
   
    next(action);
};
export default ajaxMiddleware;