import React from 'react';
import { connect } from 'react-redux';

import { displayTime } from '../actions/timeAction.js';

const DisplayTime = (props) => {
  // console.log('DisplayTime Props: ', props);
  return (
    <div>
      <button onClick={() => props.displayTime()}>Time</button>
      <h3>{props.time}</h3>
    </div>
  )
}

// map state from searchReducer to SearchBar props
// called everytime store state changes
// takes in entire store state
// returns object of data specific component needs
const mapStateToProps = state => {
  // console.log('Map State: ', state);
  return {
    time: state.display.time
  }
};

// make function that dispatches when called and map to props
const mapDispatchToProps = dispatch => ({
  displayTime: () => dispatch(displayTime())
});


// export connect function
// connect(mapState, mapDispatch)(Component)
export default connect(mapStateToProps, mapDispatchToProps)(DisplayTime);