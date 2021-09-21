export const initialState = {
    list: [],
    loading: false,
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
   
    default:
        return state;
    }
};

export default reducer;
