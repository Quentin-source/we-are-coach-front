export const initialState = {
    inputEmail: '',
    inputPassword: '',
    userAvatar: '',
    userPseudo: '',
    userToken: '',

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

    
    default:
        return state;
    }
};

export default reducer;
