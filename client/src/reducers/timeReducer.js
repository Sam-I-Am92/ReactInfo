import moment from 'moment';

import { DISPLAY_TIME } from '../actions/types.js';

const initialState = {
  time: ''
};

const timeReducer = ( state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_TIME:
      // console.log('Time Reducer: ', state);
      return {
        ...state,
        time: moment().format("[Today is] dddd, MMMM Do YYYY, h:mm:ss A")
      }
    default:
      return state;
  }
}

export default timeReducer;