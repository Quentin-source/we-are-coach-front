export const initialState = {
    user : {},    
    inputEmail: '',
    inputPassword: '',
    pseudo:'',
    picture:'',
    id: 0,
    trainings : [],
    isLoadedPicture: false,
    picturePreview: '',
    editUserPop : false,

};

const userReducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case 'UPDATE_USER_PASSWORD':
        return (
            {
                ...state,
                inputPassword : action.value,
            }
        );

    case 'UPDATE_USER_EMAIL':
        return (
            {
                ...state,
                inputEmail : action.value,
            }
        );
    
    case 'CONNECTION':
        return (
            {
                ...state,
                pseudo : action.userPseudo,
                picture : action.userPicture,
                inputEmail: '',
                inputPassword: '',
                id: action.userId,
            }
        );
    
    case 'SAVE_USER':
        return (
            {
                ...state,
                user: action.datas,
                trainings: action.datas.workout,
            }
        );
    
    case 'SAVE_USER_TRAININGS':
        return (
            {
                ...state,
                trainings: action.datas.workout,
            }
        );

    case 'LOGOUT':
        return (
            {
                ...state,
                pseudo : '',
                picture:'',
                inputEmail: '',
                inputPassword: '',
                id:0,
                user:{},
            }
        );

    case 'UPLOAD_IMAGE_OK':
        if(action.target === 'user') 
            return (
                {
                    ...state,
                    picturePreview : action.url,
                    isLoadedPicture: action.state,
                }
            );
        else return state;

    case 'TOGGLE_EDIT_USER' :
        return (
            {
                ...state,
                editUserPop : !state.editUserPop,
            }
        );

    
    default:
        return state;
    }
};

export default userReducer;
