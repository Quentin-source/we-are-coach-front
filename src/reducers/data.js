export const initialState = {
    categories:[],
    sports:[],
};

const dataReducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case 'SAVE_COMMON':
        return (
            {
                ...state,
                categories : action.categories,
                sports : action.sports
            }
        );
    default:
        return state;
    }
};

export default dataReducer;
