

export const initialState = {
    searchValue: "",
    filterLevelValue: "",
    filterCatValue: "",
    filterSportValue: "",
    filterNoteValue: "",
    page: 1,
    pageCount: 1,
    pageSize: 1,
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


    case 'SEARCH_VALUE':
        return (
            {
                ...state,
                searchValue: action.newSearch, 
            }
        );

    case 'FILTER_VALUE':
        return (
            {
                ...state,
                filterValue: action.newFilter
            }
        );

    case 'CHANGE_PAGE':
        return (
            {
                ...state,
                newPage: action.newPage
            }
        )

    default:
        return state;
    }

};

export default reducer;
