// Header.jsx

import React from 'react';
import { Link ,NavLink} from 'react-router-dom';
import './header.css'; // Import the CSS file

function Header() {
  return (
    <div className="navbar">
      <div className="nav-links">
        <NavLink to="/Signup">Signup</NavLink>
        <NavLink to="/signin">Signin</NavLink>
      </div>
    </div>
  );
}

export default Header;
