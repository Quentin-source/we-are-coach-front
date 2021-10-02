
export const initialState = {

    content:{},

    editName: false,
    editSport: false,
    editCategory:false,
    editDescription:false, 
    editLevel:false,

    picturePreview:'',
    isLoadedPicture: false,

};

const trainingReducer = (state = initialState, action = {}) => {
    switch (action.type) {

    case 'TOGGLE_EDIT':
        return (
            {
                ...state,
                [action.toggle] : !state[action.toggle],
                content :  {
                    [action.target] : action.validateYupSchema,
                    ...state.content,                
                }
            }
        );

    case 'MODIFY_INPUT_TRAINING':
        return (
            {
                ...state,
                content : {
                    ...state.content,
                    [action.target] : action.value,
                },
            }
        );
    
    case 'SAVE_TRAINING_DETAILS':

        console.log(action.datas);
        
        return (
            {
                ...state,
                content: action.datas,              
            }
        );

    default:
        return state;
    }
};

export default trainingReducer;
