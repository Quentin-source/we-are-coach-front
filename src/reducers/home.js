export const initialState = {
    list: [],
    loading: false,
    userMenu : false,
    dropMenu : false,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
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
            }
        );
    case 'TOGGLE_DROP':
        return (
            {
                ...state,
                dropMenu: !state.dropMenu,
            }
        );
    default:
        return state;
    }
};

export default reducer;
