import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});
api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

let token = "";

const ajaxMiddleware = (store) => (next) => (action) => {


    // action récupération des données de la page home
    if (action.type === 'FETCH_HOME') {
        const categoryPromise = api.get('/api/home/category');
        const homeWorkoutPromise = api.get('/api/home/workout');

        Promise.all([categoryPromise,homeWorkoutPromise])
            .then((response)=> {
                const [categories, homeWorkout] = response;
                store.dispatch({
                    type: 'SAVE_HOME',
                    cat: categories.data,
                    top: homeWorkout.data,
                });
                setTimeout(()=>(store.dispatch({type: 'LOADING_OFF'})), 2000);
            })
            .catch((error) => {
                alert('Problème communication serveur');
            });
    };

    // action : connection utilisateur et récupération pseudo image en cas de succes 
    if (action.type === 'ASK_LOGIN') {
        console.log(action.email, action.password);
        
        api.post('/api/login_check', {
            username: action.email,
            password: action.password,
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
    }; 
    
    if(action.type === 'ASK_SEARCH')  {

        api.get('/api/search', {params:{search : action.value}}).then((response)=>(console.log(response.data))).catch((error)=>(console.error(error)));

    };
    
    if(action.type === 'FETCH_TRAINING')  {

        api.get('/api/workout').then((response)=> {
            store.dispatch({
                type : 'SAVE_TRAININGS',
                datas : response.data,
            })
            setTimeout(()=>(store.dispatch({type: 'LOADING_OFF'})), 2000);
        })
            .catch((error) => (console.error(error)));

    };

    if(action.type === 'ASK_INSCRIPTION')  {
        api.post('/api/registration', {
            pseudo : action.userDatas.pseudo,
            firstname : action.userDatas.firstName,
            lastname :  action.userDatas.lastName,
            email :  action.userDatas.email,
            password : action.userDatas.password,
            city :  action.userDatas.city,
            age : parseInt(action.userDatas.age),
            sport1 :  action.userDatas.sports[0],
            sport2 : action.userDatas.sports[1],
            sport3 :  action.userDatas.sports[2],
        
        }).then((response)=> {
            
            alert('Utilisateur enregistré avec succès!')
            console.log(response);
            console.log(action.userDatas.email, action.userDatas.password);
            store.dispatch({
                type: 'ASK_LOGIN',
                email : action.userDatas.email,
                password : action.userDatas.password,

            });
            store.dispatch({
                type : 'CLEAN_MENU'
            });
        }).catch((error) => (console.error(error)));

    }




    next(action);
};
export default ajaxMiddleware;


