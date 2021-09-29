import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import homeReducer from './home';
import trainingsReducer from './trainings';
import userReducer from './user';

const rootReducer = combineReducers({
    home: homeReducer,
    trainings: trainingsReducer,
    user: userReducer,
    cat: categoriesReducer,
});

export default rootReducer;
