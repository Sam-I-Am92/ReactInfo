import { DISPLAY_LIST } from '../actions/types.js';

const initialState = {
    contributors: []
};

export const listReducer = (state = initialState, action) => {
    // console.log('List Reducer: ', action);
    switch(action.type) {
        case DISPLAY_LIST:
            console.log('React Contributors: ', action);
            return {
                ...state,
                contributors: action.payload
            };
        default:
            return state;
    }
}