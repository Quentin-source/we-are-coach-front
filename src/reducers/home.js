export const initialState = {
    loading: false,
    userMenu : false,
    dropMenu : false,
    connectPop : false,
    signUpPop : false,
    categories: [],
    bestWorkout : [],
    
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
                categories: action.cat,
                bestWorkout: action.top,  
            }
        );
    
    default:
        return state;
    }
};

export default homeReducer;
