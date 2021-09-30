export const initialState = {
    apiLogin: 'test@test.com',
    apiPassword: 'demo',
    apiToken : '',
    loading: false,
    userMenu : false,
    dropMenu : false,
    connectPop : false,
    cat: [],
};

const homeReducer = (state = initialState, action = {}) => {
    switch (action.type) {
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
    case 'FETCH_CAT':
        return (
            {
                ...state,
                cat: action.cat,  
            }
        );
    
    default:
        return state;
    }
};

export default homeReducer;
