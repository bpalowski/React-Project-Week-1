import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){


  return(

    <div>
      <h1>{props.name}</h1>
      <p>{props.brewer}</p>
      <p>{props.description}</p>
      <p>{props.abv}</p>
      <p>$ {props.price}</p>
      <p>{props.remaining}</p>
      <button type="submit">Delete</button>
      <button type= "submit">Edit</button>

    </div>
  );
}

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.isRequired,
};

export default Tap;
