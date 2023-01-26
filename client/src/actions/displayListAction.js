import { DISPLAY_LIST } from './types.js';

export const displayList = () => dispatch => {
    console.log('Display List Action');
    fetch('http://localhost:3000/api/react')
    .then(res => res.json())
    .then(contributors => 
        dispatch({
            type: DISPLAY_LIST,
            payload: contributors
        }));
};