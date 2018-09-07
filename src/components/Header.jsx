import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <Link to="/#">Home</Link> | <Link to="/tapControl">TappControl</Link>|<Link to="/error404">Error404</Link>

    </div>
  );
}

export default Header;
