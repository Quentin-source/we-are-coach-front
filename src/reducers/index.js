import { combineReducers } from 'redux';
import homeReducer from './home';
import trainingsReducer from './trainings';
import userReducer from './user';
import dataReducer from './data';

const rootReducer = combineReducers({
    home: homeReducer,
    trainings: trainingsReducer,
    user: userReducer,
    data: dataReducer,
});

export default rootReducer;
