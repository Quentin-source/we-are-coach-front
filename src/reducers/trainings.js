let allTrainings = [];

const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
};

export const initialState = {
    displayedTrainings:[],
    inputSearch: "",
    filterLevelValue: [],
    filterCatValue: [],
    filterSportValue: [],
    filterNoteValue: [],
    currentPage: 1,
    pageCount: 0,
    pageSize: 3,
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
                currentPage: action.value,
                displayedTrainings : paginate(allTrainings, state.pageSize, action.value),
            }
        );
    

    case 'SAVE_TRAININGS':
        allTrainings = action.trainings;
        
        return (
            {
                ...state,
                displayedTrainings: paginate(allTrainings, state.pageSize, state.currentPage),
                pageCount: Math.ceil(allTrainings.length / state.pageSize),
            }
        );
    
    

    default:
        return state;
    }

};

export default reducer;
