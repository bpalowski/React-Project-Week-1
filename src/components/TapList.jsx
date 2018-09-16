import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

var list={
  textAlign: 'center',
};


function TapList (props) {
  return(
    <div style={list}>
      {props.tapList.map((tap) =>
        <Tap name ={tap.name}
          brewer={tap.brewer}
          description={tap.description}
          abv={tap.abv}
          price={tap.price}
          remaining={tap.remaining}
          key={tap.id}/>
      )}
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array
};

export default TapList;
