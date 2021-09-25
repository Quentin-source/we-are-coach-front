export const initialState = {
    list: [],
    loading: true,
    userMenu : false,
    dropMenu : false,
    connectPop : false,
    connected : false,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case 'CONNECTION':
        return (
            {
                ...state,
                connected: !state.connected,
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
    case 'TOGGLE_LOADING':
        return (
            {
                ...state,
                loading: !state.loading,
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
    default:
        return state;
    }
};

export default reducer;
