import React from 'react';


function NewTappControl(){
  return(
    <div>
      <form>
        <input
          type='text'
          id='brew'
          placeholder='Brew'/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}
export default NewTappControl;
