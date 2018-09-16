import React from 'react';
import PropTypes from  'prop-types';
// import Moment from 'moment';
import { v4 } from 'uuid';
var center={
  padding: '20px',
  textAlign:'center',
}

function NewTapp(props){

  let _name = null;
  let _brewer= null;
  let _description= null;
  let _abv = null;
  let _price= null;

  function handleNewOrder(event){
    event.preventDefault();
    props.onNewTap({name: _name.value, brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value, id: v4()});

    _name.value = '';
    _brewer.value= '';
    _description.value= '';
    _abv.value= '';
    _price.value= '';
  }

  return (
    <div style={center}>
      <form onSubmit={handleNewOrder}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>
      
        <input
          type='text'
          id='brewer'
          placeholder='Brewer'
          ref={(input) => {_brewer = input;}}/>
        <input
          type='text'
          id='description'
          placeholder='Description'
          ref={(input) => {_description = input;}}/>
        <input
          type='text'
          id='abv'
          placeholder='Abv'
          ref={(input) => {_abv = input;}}/>
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <button type='submit'>Submit!</button>
      </form>
    </div>
  );
}

NewTapp.propTypes = {
  onNewTap: PropTypes.func
};

export default NewTapp;
