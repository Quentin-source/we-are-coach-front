import axios from 'axios';
const ajaxMiddleware = (store) => (next) => (action) => {
    //You can create a new instance of axios with a custom config
    console.log(process.env);
    
    const api = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    });

    if (action.type === 'API_LOG') {
        const state = store.getState();
        api.post('/login_check', {
            username: state.home.apiLogin,
            password: state.home.apiPassword,
        })
            .then((tokenResponse) => {
                console.log('token API récupéré');
                const token = tokenResponse.data.token;
                //mise du token dans le state
                store.dispatch({
                    type : 'API_CONNECTION',
                    token : token
                });
                //configuration axios avec le token dans le header
                api.defaults.headers.common.Authorization = `bearer ${token}`;
                //récupération des données de catégories depuis le back
                api.get('/home/category')
                    .then((categoriesResponse) => {
                        console.log('reponse home Page categories', categoriesResponse.data);
                        store.dispatch({
                            type: 'FETCH_CAT',
                            list: categoriesResponse.data,
                        });                      
                    }).then(()=>{
                        api.get('/home/workout')
                            .then((topTrainingsResponse)=> {
                                console.log('reponse home page 3 entrainements', topTrainingsResponse.data);
                                store.dispatch({
                                    type: 'FETCH_BEST_TRAININGS',
                                    best: topTrainingsResponse.data,
                                });
                                store.dispatch({type: 'LOADING_OFF'});
                            })
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