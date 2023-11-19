import React from 'react';
import './Navbar.css'; // Create a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart,faMagnifyingGlass,faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Navbar = (setShow) => {
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
                <div className="cart" onClick={() => setShow(false)}>
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
    
};

export default Navbar;
