import React from "react";
import './Front.css'
import wireless_earphone from '../assets/wireless_earphone-removebg-preview.png'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';


const Front = () => {
    const buttonStyles = {
        backgroundColor: 'green',
        color: 'white',
        borderRadius: '5px',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
      };
    return (
        <>
            <div className="body">
            <div className="main-banner">

                <div className="banner-left">
                    <h1>True Wireless</h1>
                    <h2>Earbuds</h2>
                    <h4>Starting from $999.</h4>
                    <p>Visit now , SALE IS LIVE</p>
                    <Link to="/itemtws">
                    
                    <button style={buttonStyles}>Buy now</button> </Link>
                    
    

                </div>
                <div className="banner-right">
                    <img src={wireless_earphone} alt=""/>
                </div>
            </div>
            
    </div>
        </>
    );
}
export default Front;