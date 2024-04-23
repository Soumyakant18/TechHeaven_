import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';
import Wishlist from '../Like/Wishlist';

const Navbar = (setShow) => {
  return (
    <>
      <div className="main-div">
        <div className="left">
          
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/category">
            <li>Category</li>
          </Link>
          <li>
            <button className="logout">
              <NavLink to="/">Logout</NavLink>
            </button>
          </li>
        </div>
        <div className="middle">
        
        </div>
        <div className="cart">
          <Link to="/wishlist">
            <FontAwesomeIcon icon={faHeart} style={{ color: "white", margin: '10%' }} className="custom-icon" />
          </Link>
          <Link to="/buy">
            <FontAwesomeIcon icon={faCartShopping} style={{ color: "white", margin: '10%' }} className="custom-icon" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;