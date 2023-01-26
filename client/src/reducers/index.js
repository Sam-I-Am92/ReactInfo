import { combineReducers } from 'redux';
import { listReducer } from './listReducer.js';

export default combineReducers({
  list: listReducer,
});