export const initialState = {
    best : [],
};

const trainingsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case 'FETCH_BEST_TRAININGS':
        return (
            {
                ...state,
                best: action.best,  
            }
        );
    

    default:
        return state;
    }
};

export default trainingsReducer;
