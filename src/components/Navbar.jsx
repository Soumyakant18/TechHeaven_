import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';
import Wishlist from '../Like/Wishlist';

const Navbar = (setShow) => {
<<<<<<< HEAD
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
=======
    return (
        <>
            <div className="main-div">
                <div className="left">
                    
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    
                </div>
                <div className="middle">
                    <h1>TechHeaven</h1>
                </div>
                <div className="cart" >
                <Link to="/cart">
                    <span>
                        <i className="fas fa-cart-plus"></i>
                    </span>
                    <span>2</span>  
                </Link>  
                </div>
            </div>
        </>
    );
    
>>>>>>> ff57b3875a3dcf329df2302e6543b08588ffc5d2
};

export default Navbar;