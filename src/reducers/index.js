import { combineReducers } from 'redux';
import homeReducer from './home';
import trainingsReducer from './trainings';
import userReducer from './user';

const rootReducer = combineReducers({
    home: homeReducer,
    trainings: trainingsReducer,
    user: userReducer,
});

export default rootReducer;
