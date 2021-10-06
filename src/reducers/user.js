export const initialState = {
    user : {},    
    inputEmail: '',
    inputPassword: '',
    pseudo:'',
    picture:'',
    picturePreview:'',
    isLoadedPicture: false,

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
                user: action.user,
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
            }
        );

    case 'UPLOAD_USER_PICTURE':
        return (
            {
                ...state,
                picturePreview : action.file,
                isLoadedPicture: true,
            }
        );

    case 'UNMOUNT_USER_PICTURE':
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

export default userReducer;
