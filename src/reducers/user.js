export const initialState = {
    inputEmail: '',
    inputPassword: '',
    userToken: '',
    userLogged: {},

};

const reducer = (state = initialState, action = {}) => {
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
                userLogged : action.userLogged,
                userToken : action.userToken,
                inputEmail: '',
                inputPassword: '',
            }
        );

    case 'LOGOUT':
        return (
            {
                ...state,
                userLogged : {},
                userToken : '',
                inputEmail: '',
                inputPassword: '',
            }
        );
    
    default:
        return state;
    }
};

export default reducer;
