import { combineReducers } from 'redux';
import homeReducer from './home';
import trainingsReducer from './trainings';
import trainingReducer from './training';
import userReducer from './user';
import dataReducer from './data';

const rootReducer = combineReducers({
    home: homeReducer,
    trainings: trainingsReducer,
    training: trainingReducer,
    user: userReducer,
    data: dataReducer,
});

export default rootReducer;
