
export const initialState = {

    content:{},
    editState:{
        name: false,
        sport: false,
        category:false,
        description:false, 
        level:false,
    },

    picturePreview:'',
    isLoadedPicture: false,

};

const trainingReducer = (state = initialState, action = {}) => {
    switch (action.type) {

    case 'TOGGLE_EDIT':
        return (
            {
                ...state,
                editState : {
                    ...state.editState,
                    [action.target] : !state.editState[action.target],
                },

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
