import axios from 'axios';
import { Formik } from 'formik';
const ajaxMiddleware = (store) => (next) => (action) => {
    //You can create a new instance of axios with a custom config
    console.log(process.env);
    
    const api = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    });
    api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

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
                            cat: categoriesResponse.data,
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

    //la pas besoin de state ici on va parler avec l'api
    // la il faut console.log value first thing to do
    // et colle ici le résultat du console.log en commentaire
    //category: "categorie1"
    //description: "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
    //level: 10
    //sportName: "tatat"
    //trainingName: "toto"


    if (action.type === 'ASK_CREATTRAINING') {

        console.log(action.values);
        
        //il faut submit ton formulaire...
        //pour faire envoyer le console.log

        api.post('/CreerEntrainement', {
            trainingName: action.values.trainingName,
            sportName: action.values.sportName,
            description: action.values.description,
            category: action.values.category,
            level: action.values.level,
        })
    }


   
    next(action);
};
export default ajaxMiddleware;