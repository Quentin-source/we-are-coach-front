export const initialState = {
    list: [],
    loading: false,
    userMenu : false,
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
    default:
        return state;
    }
};

export default reducer;
