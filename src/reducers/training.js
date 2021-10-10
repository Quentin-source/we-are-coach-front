
export const initialState = {

    content:{},
    editTrainingPop : false,
    commentPop : false,
    commentInput : '',
    comments:[],
    isLoadedPicture : false,
    picturePreview :'',

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
    
    case 'TOGGLE_EDIT_TRAINING':
        return (
            {
                ...state,
                editTrainingPop : !state.editTrainingPop,
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
    case 'UPLOAD_TRAINING_PICTURE':
        return (
            {
                ...state,
                picturePreview : action.file,
                isLoadedPicture: true,
            }
        );

    case 'UNMOUNT__PICTURE':
        return (
            {
                ...state,
                picturePreview : '',
                isLoadedPicture: false,
            }
        );
    

    default:
        return state;
    }
};

export default trainingReducer;
