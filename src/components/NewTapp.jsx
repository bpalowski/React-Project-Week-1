import React from 'react';

function NewTapp(){
  return (
    <div>
      <form>
        <li>
          <input
            type='text'
            id='name'
            placeholder='Name'/>
        </li>
        <li>
          <input
            name='text'
            id='brewer'
            placeholder='Brewer'/>
        </li>
        <li>
          <input
            type='text'
            id='description'
            placeholder='Description'/>
        </li>
        <li>
          <input
            type='text'
            id='abv'
            placeholder='Abv'/>
        </li>
        <li>
          <input
            type='text'
            id='price'
            placeholder='Price'/>
        </li>
        <li>
          <input
            type='text'
            id='remaining'
            placeholder='Quantity'/>
        </li>
        <button type='submit'>Submit!</button>
      </form>
    </div>
  );
}

export default NewTapp;
