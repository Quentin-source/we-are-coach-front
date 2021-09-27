import { combineReducers } from 'redux';

import homeReducer from './home';
import userReducer from './user';

const rootReducer = combineReducers({
    home: homeReducer,
    user: userReducer,
});

export default rootReducer;
