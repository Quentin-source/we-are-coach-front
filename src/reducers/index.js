import { combineReducers } from 'redux';

import homeReducer from './home';
import searchTrainingReducer from './Training';

const rootReducer = combineReducers({
    home: homeReducer,
    Training: searchTrainingReducer
});

export default rootReducer;
