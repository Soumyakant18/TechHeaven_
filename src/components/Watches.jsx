import React from "react";
import './Watches.css'
import wireless_earphone from '../assets/watches-removebg-preview.png'
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';


const Watches = () => {
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
            <div className="body12">
            <div className="main-banner">
            <div className="banner-right">
                    <img src={wireless_earphone} alt=""/>
                </div>

                <div className="banner-left">
                    <h1>Smart</h1>
                    <h2>Watches</h2>
                    <h4>Starting from $999.</h4>
                    <p>Visit now , SALE IS LIVE</p>
                    
                    <button style={buttonStyles}>Shop Products</button>
    

                </div>
                
            </div>
            
    </div>
        </>
    );
}
export default Watches;