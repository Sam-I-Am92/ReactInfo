import { createStore, compose, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';

import rootReducer from './reducers/index.js';

const initialState = {};

const middleware = [Thunk];

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ));

export default store;