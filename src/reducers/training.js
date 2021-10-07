
export const initialState = {

    content:{},
    editState : false,
    commentPop : false,
    commentInput : '',

};

const trainingReducer = (state = initialState, action = {}) => {
    switch (action.type) {


    case  'CHANGE_COMMENT' :
        return(
            {
                ...state,
                commentInput: action.value,
            }
        );

    case 'TOGGLE_COMMENT':
        return (
            {
                ...state,
                commentPop : !state.commentPop,
            }
        );
    
    case 'TOGGLE_EDIT':
        return (
            {
                ...state,
                editState : !state.editState,
            }
        );
    
    case 'SAVE_TRAINING_DETAILS':
        return (
            {
                ...state,
                content: action.datas,              
            }
        );

    default:
        return state;
    }
};

export default trainingReducer;
