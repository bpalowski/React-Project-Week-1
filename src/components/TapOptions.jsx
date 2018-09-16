import React from 'react';
import PropTypes from 'prop-types';

var con={
  textAlign: 'center',
};

function TapOptions(props){
  return (
    <div style={con}>
      <h1>Do you want to add a Item</h1>
      <button onClick={props.onTapConfirmation}>?</button>
    </div>
  );
}

TapOptions.propTypes = {
  onTapConfirmation: PropTypes.func
};

export default TapOptions;
