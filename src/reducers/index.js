import { combineReducers } from 'redux';

import homeReducer from './home';
import userReducer from './user';
import categoriesReducer from './categories';
import trainingsReducer from './trainings';

const rootReducer = combineReducers({
    home: homeReducer,
    user: userReducer,
    cat: categoriesReducer,
    training: trainingsReducer,
});

export default rootReducer;
