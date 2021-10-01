import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});
api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

let token = "";

const ajaxMiddleware = (store) => (next) => (action) => {


    // action récupération des données de la page home
    if (action.type === 'API_LOG') {
        const categoryPromise = api.get('/api/home/category');
        const homeWorkoutPromise = api.get('/api/home/workout');

        Promise.all([categoryPromise,homeWorkoutPromise])
            .then((response)=> {
                const [categories, homeWorkout] = response;
                store.dispatch({
                    type: 'FETCH_HOME',
                    cat: categories.data,
                    top: homeWorkout.data,
                });
                store.dispatch({type: 'LOADING_OFF'});
            })
            .catch((error) => {
                alert('Problème communication serveur');
            });
    };

    // action : connection utilisateur et récupération pseudo image en cas de succes 
    if (action.type === 'ASK_LOGIN') {
        const state = store.getState();
        api.post('/api/login_check', {
            username: state.user.inputEmail,
            password: state.user.inputPassword,
        })
            .then((response) => {
                token = response.data.token;
                
                store.dispatch({
                    type: 'CONNECTION',
                    userLogged: true,
                    userPseudo: response.data.data.pseudo,
                    userPicture: response.data.data.picture,
                });
                console.log('Connection réussie');
                
            })
            .catch((error) => {
                console.error('pb identification', error);
                alert('Utilisateur non reconnu');
            });
    }  
    
    if(action.type === 'ASK_SEARCH')  {

        api.get('/api/search', {params:{search : action.value}}).then((response)=>(console.log(response.data))).catch((error)=>(console.error(error)));

    }
    
    next(action);
};
export default ajaxMiddleware;