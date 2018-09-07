import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  var myHeader = {
    color: 'red'
  };
    return (
      <div>
        <h1>Header</h1>
        <Link to="/">Home</Link> | <Link to="/newTapp">NewTapp</Link>
      </div>
    );
  }

  export default Header;