import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';

import debug from '../middlewares/debug'
import ajax from '../middlewares/ajax';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(debug, ajax),
);

const store = createStore(reducer, enhancers);

export default store;
