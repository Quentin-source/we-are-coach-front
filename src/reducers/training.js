
export const initialState = {

    name : '',
    description : '',
    id : 0,
    sport : '',
    sportId : 0,
    userPseudo : '',
    userId : 0,
    level : 0, 
    picture : '',
    editTrainingPop : false,
    commentPop : false,
    commentInput : '',
    comments : [],
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
                name : action.datas.name,
                description : action.datas.description,
                level : action.datas.level,
                id: action.datas.id,
                picture : action.datas.picture,
                sport : action.datas.sport.name,
                sportId : action.datas.sport.id,
                userPseudo: action.datas.user.pseudo,
                userId: action.datas.user.id,
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
