

export const initialState = {
    loading: false,
    userMenu : false,
    dropMenu : false,
    connectPop : false,
    signUpPop : false,
    connected : false,
    snackBar : false,
    snackAlert : {},
    bestWorkout : [],    
    redirect : false,
    redirectTo : '/',
    scrollValue : 0,
};

const homeReducer = (state = initialState, action = {}) => {

    switch (action.type) {
    case 'CLEAN_MENU':
        return(
            {
                ...state,
                connectPop : false,
                signUpPop : false,
                dropMenu : false,
                userMenu : false,
            }
        );

    case 'CONNECTION':
        return (
            {
                ...state,
                connected: true,
                connectPop : false,
                dropMenu : false,
                userMenu : false,
            }
        );
    
    case 'LOGOUT':
        return (
            {
                ...state,
                connected: false,
                connectPop : false,
                signUpPop : false,
                dropMenu : false,
                userMenu : false,
            }
        );

    case 'OPEN_CONNECTPOP':
        return (
            {
                ...state,
                connectPop: true,
            }
        );
    case 'CLOSE_CONNECTPOP':
        return (
            {
                ...state,
                connectPop: false,
            }
        );
    case 'OPEN_SIGNPOP':
        return (
            {
                ...state,
                signUpPop: true,
            }
        );
    case 'CLOSE_SIGNPOP':
        return (
            {
                ...state,
                signUpPop: false,
            }
        );
    case 'LOADING_ON':
        return (
            {
                ...state,
                loading: true,
            }
        );
    case 'LOADING_OFF':
        return (
            {
                ...state,
                loading: false,
            }
        );
    case 'TOGGLE_MENU':
        return (
            {
                ...state,
                userMenu: !state.userMenu,
                dropMenu: false,
            }
        );
    case 'TOGGLE_DROP':
        return (
            {
                ...state,
                dropMenu: !state.dropMenu,
                userMenu: false,
            }
        );
    case 'CLOSE_SNACK' :
        return(
            {
                ...state,
                snackBar : false,
            }
        );
    case 'OPEN_SNACK' :
        return(
            {
                ...state,
                snackBar : true,
                snackAlert : {
                    severity : action.severity,
                    message : action.message,
                }
            }
        );
    
    case 'API_CONNECTION':
        return (
            {
                ...state,
                apiToken : action.token,
            }
        );
    case 'SAVE_HOME':
        return (
            {
                ...state,
                bestWorkout: action.top,  
            }
        );
    case 'REDIRECT':
        return (
            {
                ...state,
                redirectTo: action.path,
                redirect: true,  
            }
        );

    case 'REDIRECT_OFF':
        return (
            {
                ...state,
                redirectTo: '',
                redirect: false,  
            }
        );

    case 'CHANGE_SCROLL':
        if (action.value >= 0)
            return (
                {
                    ...state,
                    scrollValue : action.value,  
                }
            );
        else return state;
    
    default:
        return state;
    }
};

export default homeReducer;
