import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});
api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

let token = "";

const ajaxMiddleware = (store) => (next) => (action) => {


    // action récupération des données de la page home
    if (action.type === 'FETCH_COMMON') {
        const categoriesPromise = api.get('/api/category');
        const sportsPromise = api.get('/api/sport')

        Promise.all([categoriesPromise, sportsPromise])
            .then((response)=> {
                const [categories, sports] = response;
                store.dispatch({
                    type: 'SAVE_COMMON',
                    categories: categories.data,
                    sports: sports.data,
                });
                setTimeout(()=>(store.dispatch({type: 'LOADING_OFF'})), 2000);
            })
            .catch((error) => {
                alert('Problème communication serveur');
            });
    };

    if (action.type === 'FETCH_HOME') {
        
        api.get('/api/home/workout')
            .then((response)=> {
                store.dispatch({
                    type: 'SAVE_HOME',
                    top: response.data,
                });
                setTimeout(()=>(store.dispatch({type: 'LOADING_OFF'})), 2000);
            })
            .catch((error) => {
                alert('Problème communication serveur');
            });
    };

    // action : connection utilisateur et récupération pseudo image en cas de succes 
    if (action.type === 'ASK_LOGIN') {
        
        const connectionPromise = api.post('/api/login_check', {
            username: action.email,
            password: action.password,
        });
        const fetchUserPromise = api.get('api/user');

        
        Promise.all([connectionPromise, fetchUserPromise])
            .then((response) => {
                const [connectionData, userData] = response;
                const information = connectionData.data;
                const user = userData.data.find((item) => (item.email === action.email));
                token = information.token;     
                console.log(user, information);
                     
                store.dispatch({
                    type: 'CONNECTION',
                    userLogged: true,
                    userPseudo: information.data.pseudo,
                    userPicture: information.data.picture,
                    user: user, 
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
    
    if(action.type === 'FETCH_TRAININGS')  {

        const workoutPromise = api.get('/api/workout');
        const categoriesPromise = api.get('/api/category');
        const sportsPromise = api.get('api/sport');

        Promise.all([categoriesPromise,sportsPromise,workoutPromise])        
            .then((response)=> {

                const [categories, sports, trainings] = response;
                // console.log(categories,sports, trainings);
                

                store.dispatch({
                    type : 'SAVE_TRAININGS',
                    trainings : trainings.data,
                    categories : categories.data,
                    sports : sports.data,
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


    if (action.type === 'ASK_CREATE_TRAINING') {

        console.log('middleware create training connecté');
        
        api.defaults.headers.common.Authorization = `bearer ${token}`;
        api.post('/api/workout/add', {
            name: action.values.name,
            description: action.values.description,
            picture : action.picture,
            level: action.values.level,
            sport: action.values.sport,
            user: store.getState().user.user.id,
        }).then((response) => (console.log(response)))
    }


   
    next(action);
};
export default ajaxMiddleware;


