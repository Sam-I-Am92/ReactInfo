import React from 'react';

import DisplayTime from './DisplayTime.js';
import classes from '../../dist/App.css';

const App = (props) => {
  return (
    <div className={classes.App}>
      <h1>Redux Boilerplate!!!</h1>
      <hr />
      <DisplayTime time={props.time} />
    </div>
  )
}

export default App;