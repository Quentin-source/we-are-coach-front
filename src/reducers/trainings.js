export const initialState = {
    inputSearch: "",
    filterLevelValue: [],
    filterCatValue: [],
    filterSportValue: [],
    filterNoteValue: [],
    currentPage: 1,
    pageCount: 1,
    pageSize: 1,
    diplayedTrainings : [{},{},{}],
    best : [],

};



const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case 'MODIFY_FILTER':
        return (
            {
                ...state,
                [action.filterKey]: action.value,
            }
        );

    case 'MODIFY_INPUT':
        return (
            {
                ...state,
                inputSearch: action.value,
            }
        );


    case 'CHANGE_PAGE':
        return (
            {
                ...state,
                currentPage: action.value
            }
        );

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

export default reducer;
