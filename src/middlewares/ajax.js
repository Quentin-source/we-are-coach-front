import axios from 'axios';

const ajaxMiddleWare = (store) => (next) => (action) => {
    
    const api = axios.create({
        baseURL: 'http://guillaume-marie.vpnuser.lan:8080/api',
    });
    if (action.type === 'LOGIN') {
        const state = store.getState();
        api.post('/login_check', {
            username: state.user.inputEmail,
            password: state.user.inputPassword,
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
                // alert('Authentification échouée');
            });
    }
    next(action);
};

export default ajaxMiddleWare;
