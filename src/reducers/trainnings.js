export const initialState = {
    search: ''
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case '':
        return (
            {
                ...state,
                
            }
        );
    default:
        return state;
    }
};