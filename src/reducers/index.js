import { combineReducers } from 'redux';

import homeReducer from './home';
import trainingsReducer from './trainings';

const rootReducer = combineReducers({
    home: homeReducer,
    trainings: trainingsReducer,
});

export default rootReducer;
