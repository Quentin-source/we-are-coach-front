
export const initialState = {

    content:{},
    editState : false,
    commentPop : false,
    commentInput : '',
    comments:[],

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
    case 'CLEAN_COMMENT' :
        return (
            {
                ...state,
                commentInput : '',
                commentPop : false,
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
                comments: action.datas.comment,              
            }
        );
    
    case 'SAVE_TRAINING_COMMENTS':
        return (
            {
                ...state,
                comments: action.comments,              
            }
        );


    default:
        return state;
    }
};

export default trainingReducer;
