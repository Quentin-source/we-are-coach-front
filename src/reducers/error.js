export const initialState = {
    type:'404',
    message:'Désolée cette page n\'existe pas!!',
};

const errorReducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case 'SAVE_ERROR':
        return (
            {
                ...state,
                type : action.type,
                message : action.message,
            }
        );
    default:
        return state;
    }
};

export default errorReducer;
