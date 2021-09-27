import { combineReducers } from 'redux';

import homeReducer from './home';
import searchTrainingReducer from './searchTraining';

const rootReducer = combineReducers({
    home: homeReducer,
    searchTraining: searchTrainingReducer
});

export default rootReducer;
