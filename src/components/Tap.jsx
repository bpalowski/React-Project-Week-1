import React from 'react';
import PropTypes from 'prop-types';


function Tap(props){
  return(
    <div>

      <style jsx>{`
          div h1{
            font-size: 60px;
            border: bold;

          }

              `}</style>

      <h1>Name</h1>
      <h1>{props.name}</h1>
      <p>{props.brewer}</p>
      <p>{props.description}</p>
      <p>{props.abv}</p>
      <p>${props.price}</p>
      <p>{props.remaining}</p>

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
