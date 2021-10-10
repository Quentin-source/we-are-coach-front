import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';

import debug from '../middlewares/debug'
import ajax from '../middlewares/ajax';
import image from '../middlewares/image'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(debug, ajax, image),
);

const store = createStore(reducer, enhancers);

export default store;
