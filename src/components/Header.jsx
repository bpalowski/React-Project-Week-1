import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Header</h1>
      <Link to="/#">Home</Link> | <Link to="/newTappControl">newTappControl</Link>|<Link to="/error404">Error404</Link>
    </div>
  );
}

export default Header;
