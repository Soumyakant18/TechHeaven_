import React from 'react';
import './Navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart,faMagnifyingGlass,faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { NavLink,Link } from 'react-router-dom';


const Navbar = (setShow) => {
    return (
        <>
            <div className="main-div">
                <div className="left">
                    
                   
                    <li>Home</li>
                    <li>About</li>
                    <li><NavLink to="/category">Category</NavLink></li>
                    <li>   <button className='logout'><NavLink to="/">Logout</NavLink></button></li>
                    
                    
                </div>
                <div className="middle">
                    <h1>Techhaven</h1>
                </div>
                <div className="cart" >
                    
                <Link to="/Cart"><FontAwesomeIcon icon={faCartShopping} style={{color: "white",margin:'10%'}} className="custom-icon"/></Link>
             
                </div>
            </div>
        </>
    );
    
};

export default Navbar;
