import { CallToActionSharp } from "@material-ui/icons";

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
    pageSize: 2,
    picturePreview:'',
    isLoadedPicture: false,

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
        console.log(allTrainings);
        
        return (
            {
                ...state,
                displayedTrainings: paginate(allTrainings, state.pageSize, state.currentPage),
                pageCount: Math.ceil(allTrainings.length / state.pageSize),
            }
        );
    
    case 'UPLOAD_TRAINING_PICTURE':
        return (
            {
                ...state,
                picturePreview : action.file,
                isLoadedPicture: true,
            }
        );

    case 'UNMOUNT__PICTURE':
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

export default reducer;
