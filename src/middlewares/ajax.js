import axios from 'axios';
import { push } from 'react-router-redux';


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
                setTimeout(()=>(store.dispatch({type: 'LOADING_OFF'})), 1000);
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
                setTimeout(()=>(store.dispatch({type: 'LOADING_OFF'})), 1000);
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

        
        connectionPromise.then((response) => {
            const information = response.data;
            token = information.token;     
                    
            store.dispatch({
                type: 'CONNECTION',
                userLogged: true,
                userPseudo: information.data.pseudo,
                userPicture: information.data.picture,
                userId: information.data.id, 
            });
            console.log('Connection réussie');
            store.dispatch({
                type:'FETCH_USER',
                id: information.data.id,

            });
            store.dispatch({
                type:'OPEN_SNACK',
                message : 'connexion réussie!',
                severity : 'success',
            });
            
        })
            .catch((error) => {
                store.dispatch({
                    type:'OPEN_SNACK',
                    message : 'Echec identification',
                    severity : 'error',
                });
            });
    }; 
    
    if(action.type === 'ASK_SEARCH')  {

        api.get('/api/search', {params:{search : action.value}})
            .then((response)=>{
                console.log(response.data)
                store.dispatch({
                    type : 'SAVE_TRAININGS',
                    trainings : response.data.workouts,
                });
                store.dispatch({
                    type:'OPEN_SNACK',
                    message : 'Recherche réussie!',
                    severity : 'success',
                });
            })
            .catch((error)=>{
                console.error(error);
                store.dispatch({
                    type:'OPEN_SNACK',
                    message : 'Echec recherche!',
                    severity : 'error',
                });

            });

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
                setTimeout(()=>(store.dispatch({type: 'LOADING_OFF'})), 1000);
            })
            .catch((error) => (console.error(error)));

    };

    if(action.type === 'FETCH_TRAINING_DETAILS')  {

        api.get(`/api/workout/${action.slug}`).then((response)=> {
            store.dispatch({
                type : 'SAVE_TRAINING_DETAILS',
                datas : response.data,
            });
            store.dispatch({
                type : 'UPLOAD_IMAGE_OK',
                url : response.data.picture,
                target : 'training',
                state : false,
            });
            setTimeout(()=>(store.dispatch({type: 'LOADING_OFF'})), 1000);
        })
            .catch((error) => (console.error(error)));

    };

    if(action.type === 'FETCH_TRAINING_COMMENTS')  {

        api.get(`/api/workout/${action.slug}`).then((response)=> {
            store.dispatch({
                type : 'SAVE_TRAINING_COMMENTS',
                comments : response.data.comment,
            })
            setTimeout(()=>(store.dispatch({type: 'LOADING_OFF'})), 1000);
        })
            .catch((error) => (console.error(error)));

    };


    if(action.type === 'FETCH_USER')  {

        api.get(`/api/user/${action.id}`).then((response)=> {
            store.dispatch({
                type : 'SAVE_USER',
                datas : response.data,
            })
            setTimeout(()=>(store.dispatch({type: 'LOADING_OFF'})), 1000);
        })
            .catch((error) => (console.error(error)));

    };

    if(action.type === 'FETCH_USER_TRAININGS')  {

        api.get(`/api/user/${action.id}`).then((response)=> {
            store.dispatch({
                type : 'SAVE_USER_TRAININGS',
                datas : response.data,
            });
            setTimeout(()=>(store.dispatch({type: 'LOADING_OFF'})), 1000);
        })
            .catch((error) => (console.error(error)));

    };


    if(action.type === 'ASK_INSCRIPTION')  {
        api.post('/api/registration', {
            picture: action.picture,
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
            store.dispatch({
                type: 'ASK_LOGIN',
                email : action.userDatas.email,
                password : action.userDatas.password,

            });
            store.dispatch({
                type : 'CLEAN_MENU'
            });
            store.dispatch({
                type:'OPEN_SNACK',
                message : 'Inscription réussie!',
                severity : 'success',
            });
        }).catch((error) => {
            console.error(error)
            store.dispatch({
                type:'OPEN_SNACK',
                message : 'Echec Inscription!',
                severity : 'error',
            });
        });

    }

    if (action.type === 'ASK_MODIFY_USER'){
        api.defaults.headers.common.Authorization = `bearer ${token}`;
        const dataToSend = {
            picture : action.picture,
            pseudo : action.userDatas.pseudo,
            firstname : action.userDatas.firstName,
            lastname :  action.userDatas.lastName,
            email :  action.userDatas.email,
            city :  action.userDatas.city,
            age : parseInt(action.userDatas.age),
            sport1 :  action.userDatas.sports[0],
            sport2 : action.userDatas.sports[1],
            sport3 :  action.userDatas.sports[2],
        };
        if(action.userDatas.passwordRequest) Object.defineProperty(dataToSend,'password', {
            value : action.userDatas.password,
        });
        console.log(dataToSend);
        api.patch(`/api/user/${action.id}`, dataToSend)
            .then((response)=>{
                console.log(response);
                store.dispatch({
                    type:'OPEN_SNACK',
                    message : 'Modification Utilisateur réussie!',
                    severity : 'success',
                });
                store.dispatch({
                    type: 'FETCH_USER',
                    id: store.getState().user.id,
                });
                store.dispatch({type: 'TOGGLE_EDIT_USER'});
            })
            .catch((error)=>{
                console.error(error);
                store.dispatch({
                    type:'OPEN_SNACK',
                    message : 'Echec modification utilisateur!',
                    severity : 'error',
                });   
            });
    }

    

    if (action.type === 'ASK_CREATE_TRAINING') {

        console.log('middleware create training connecté');
        api.defaults.headers.common.Authorization = `bearer ${token}`;
        console.table(action);
        api.post('/api/workout/add', {
            name: action.values.name,
            description: action.values.description,
            picture : action.picture,
            level: action.values.level,
            sport: action.values.sport,
            user: store.getState().user.id,
        })
            .then((response) => {
                console.log(response);
                store.dispatch({
                    type:'OPEN_SNACK',
                    message : 'Crétaion de l\'entrainement  réussie!',
                    severity : 'success',
                });
                store.dispatch({
                    type: 'FETCH_USER_TRAININGS',
                    id: store.getState().user.id,

                });
                store.dispatch({
                    type:'REDIRECT',
                    path : `/Entrainement/${response.data.id}`,
                });
                
            }).catch((error)=>{
                console.error(error);
                store.dispatch({
                    type:'OPEN_SNACK',
                    message : 'Echec création Entrainement! ',
                    severity : 'error',
                });
            });
    }

    if (action.type === 'ASK_MODIFY_TRAINING') {

        console.log('middleware modifier training connecté');
        api.defaults.headers.common.Authorization = `bearer ${token}`;
        console.table(action.trainingDatas);
        console.log(action.sportId);
        console.log(action.picture);
        

        
        
        api.put(`/api/workout/${action.id}`, {
            name: action.trainingDatas.name,
            description: action.trainingDatas.description,
            picture : action.picture,
            level: action.trainingDatas.level,
            sport: action.trainingDatas.sport,
            user: store.getState().user.id,
        })
            .then((response) => {
                console.log(response);
                store.dispatch({
                    type:'OPEN_SNACK',
                    message : 'Modification de l\'entrainement  réussie!',
                    severity : 'success',
                });
                store.dispatch({
                    type: 'FETCH_TRAINING_DETAILS',
                    slug: store.getState().training.id,
                });
                store.dispatch({type: 'TOGGLE_EDIT_TRAINING'});
            }).catch((error)=>{
                console.error(error);
                store.dispatch({
                    type:'OPEN_SNACK',
                    message : 'Echec création Entrainement! ',
                    severity : 'error',
                });
            });
    }

    if(action.type === 'ASK_TRAINING_SUPRESS'){

        console.log('middleware modifier training connecté');
        api.defaults.headers.common.Authorization = `bearer ${token}`;
           
        api.delete(`/api/workout/${action.id}`)
            .then((response) => {
                console.log(response);
                store.dispatch({
                    type:'REDIRECT',
                    path : `/Entrainement/`,
                });
                setTimeout(() => store.dispatch({
                    type:'OPEN_SNACK',
                    message : 'Supression de l\'entrainement  réussie!',
                    severity : 'success',
                }),2000);
                
            }).catch((error)=>{
                console.error(error);
                store.dispatch({
                    type:'OPEN_SNACK',
                    message : 'Echec supression de l\'entrainement! ',
                    severity : 'error',
                });
            });

    }

    if(action.type === 'SUBMIT_COMMENT') {

        console.log('middleware creation commentaire connecté');
        api.defaults.headers.common.Authorization = `bearer ${token}`;
        api.post('/api/comment/add', {
            comment : action.comment,
            workout : action.workout,
            user : store.getState().user.user.id,
            published_at : '2021-09-22 10:46:02'
        }).then((response)=> {
            console.log(response);
            store.dispatch({
                type:'FETCH_TRAINING_COMMENTS',
                slug:action.workout,
            });

            store.dispatch({
                type:'CLEAN_COMMENT',
            });
            
            store.dispatch({
                type:'OPEN_SNACK',
                message : 'commentaire envoyé!',
                severity : 'success',
            });

        })
            .catch((error) => {
                console.error(error);
                store.dispatch({
                    type:'OPEN_SNACK',
                    message : 'Echec commentaire!',
                    severity : 'error',
                });
            });
    
    }
    next(action);
};
export default ajaxMiddleware;

