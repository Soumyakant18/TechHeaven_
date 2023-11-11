import React from 'react';
import './Navbar.css'; // Create a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart,faMagnifyingGlass,faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Navbar = () => {
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
                <div className="right">
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "white",margin:'10%'}} className="custom-icon" />
                <FontAwesomeIcon icon={faHeart} style={{color: "white",margin:'20%'}} className="custom-icon"/>
                <Link to="/Cart"><FontAwesomeIcon icon={faCartShopping} style={{color: "white",margin:'10%'}} className="custom-icon"/></Link>
                
                
                </div>
            </div>
        </>
    );
    
};

export default Navbar;
