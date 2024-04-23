// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
// import { Link ,NavLink} from 'react-router-dom';
import './header.css'; // Import the CSS file

function Header() {
  return (
    <div className="navbar">
      <div className="nav-links">
        <Link to="/Signup">Signup</Link>
        <Link to="/Signin">Signin</Link>
      </div>
    </div>
  );
}

export default Header;
