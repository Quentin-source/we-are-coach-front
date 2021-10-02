import { combineReducers } from 'redux';
import homeReducer from './home';
import trainingsReducer from './trainings';
import trainingReducer from './training';
import userReducer from './user';

const rootReducer = combineReducers({
    home: homeReducer,
    trainings: trainingsReducer,
    training: trainingReducer,
    user: userReducer,
});

export default rootReducer;
