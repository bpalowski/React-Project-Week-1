import React from 'react';
import { Link } from 'react-router-dom';

var title ={
  textAlign: 'center',
  fontSize: '50px',
  textColor: 'grey',
  fontFamily: '"Lobster", cursive',
};


function Header(){
  return (
    <div style={title}>
      <Link to="/">Home</Link> | <Link to="/newTap">TappControl</Link>| <Link to="/tapList">TapList</Link>| <Link to="/detail">About</Link>
    </div>
  );
}

export default Header;
