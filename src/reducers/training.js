
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
        const datasToUpdate = {
            ...state,
            content: action.datas,
            name : action.datas.name,
            description : action.datas.description,
            level : action.datas.level,
            id: action.datas.id,
            picture : action.datas.picture,
            sport : action.datas.sport.name,
            sportId : action.datas.sport.id,
            comments: action.datas.comment,              
        }
        if (action.datas.hasOwnProperty('user')){ 
            Object.defineProperty(datasToUpdate,'userPseudo',{value:action.datas.user.pseudo});
            Object.defineProperty(datasToUpdate,'userId',{value:action.datas.user.id});
        };

        return datasToUpdate;
    
    case 'SAVE_TRAINING_COMMENTS':
        return (
            {
                ...state,
                comments: action.comments,              
            }
        );
    case 'UPLOAD_IMAGE_OK':
        if(action.target === 'training') 
            return (
                {
                    ...state,
                    picturePreview : action.url,
                    isLoadedPicture: action.state,
                }
            );
        else return state;


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
