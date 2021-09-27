export const initialState = {
    searchValue: "",
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case 'SEARCH_VALUE':
        return (
            {
                ...state,
                searchValue: action.newSearch, 
            }
        );
    default:
        return state;
    }
};

export default reducer;
