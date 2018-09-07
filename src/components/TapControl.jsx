import React from 'react';
import { Link } from 'react-router-dom';

function TapControl(){
  return (
    <div>
      <h2>Hello tap Info page</h2>
      <h3>Would you like to see our <Link to="/tapList"> Tap List</Link>?</h3>
      <h4>or</h4>
      <h3>Would you like create a <Link to="/newTapp">New Tapp</Link> ?</h3>
    </div>
  );
}

export default TapControl;
