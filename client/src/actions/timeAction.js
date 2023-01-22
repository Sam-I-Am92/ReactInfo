// make sure to import action type from types.js
import { DISPLAY_TIME } from './types.js';

export const displayTime = data => dispatch => {
  // console.log('Display Time Action');
  dispatch({
    type: DISPLAY_TIME
  });
};