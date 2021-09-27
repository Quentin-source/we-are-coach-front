import { combineReducers } from 'redux';

import homeReducer from './home';
import userReducer from './user';
import categoriesReducer from './categories';

const rootReducer = combineReducers({
    home: homeReducer,
    user: userReducer,
    cat: categoriesReducer,
});

export default rootReducer;
