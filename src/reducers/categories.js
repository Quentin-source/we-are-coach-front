export const initialState = {
    list : [],
};

const categoriesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case 'FETCH_CAT':
        return (
            {
                ...state,
                list: action.list,  
            }
        );
    

    default:
        return state;
    }
};

export default categoriesReducer;
