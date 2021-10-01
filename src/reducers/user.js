export const initialState = {
    inputEmail: '',
    inputPassword: '',
    pseudo:'',
    picture:'',

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

    case 'OK_INSCIPTION':
        return (
            {
                ...state,
                inputEmail: action.email,
                inputPassword: action.password,
            }
        );
    
    default:
        return state;
    }
};

export default userReducer;
