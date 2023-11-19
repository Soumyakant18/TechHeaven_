import React from 'react'
import './Singleproduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck,faBox,faTruckFast,faMoneyCheckDollar} from '@fortawesome/free-solid-svg-icons';
import product1 from '../assets/cat2.png'
export default function Singleproduct() {
    const buttonStyles = {
        backgroundColor: 'green',
        color: 'white',
        borderRadius: '5px',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
        width:'350px',
      };

  return (
    <>
    <div className="product">
        <div className="leftp">
            <div className="imgboxp">
                <img src={product1} alt="nothing" />
            </div>
        </div>
        <div className="rightp">
            <h1>Airdopes131</h1>
            <p>Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers, IWP Technology, 650mAh Charging Case</p>
            <h4><span>₹</span>89</h4>
            <strike ><h3>₹99</h3></strike> 
            <button style={buttonStyles}>
                Add to Cart 
            </button>
        </div>
    </div>
    <div className="warranty">
        <div className="iconsp">
        <FontAwesomeIcon icon={faCheck} size="2xl"/>
        <FontAwesomeIcon icon={faBox} size="2xl"/>
        <FontAwesomeIcon icon={faTruckFast} size="2xl"/>
        <FontAwesomeIcon icon={faMoneyCheckDollar} size="2xl"/>
        </div>
        <div className="desc">
            <h3>1 year warranty</h3>
            <h3>7 days return</h3>
            <h3>Fast delivery</h3>
            <h3>GST billing</h3>
        </div>
    

    </div>
    <div className="descriptionp">
        <h1>Air Dopes 131 - wireless earbuds</h1>
        <p>Introducing the Air Dopes 131, your gateway to a wireless audio experience like never before. These cutting-edge wireless earbuds redefine convenience, style, and sound quality, ensuring that your music, calls, and entertainment are always at your fingertips.

Designed for the modern lifestyle, the Air Dopes 131 combine sleek aesthetics with advanced technology. The compact and ergonomic design ensures a secure fit, allowing you to enjoy your favorite tunes or take calls on the go without any compromise on comfort.</p>
        
    

    </div>
    </>
  )
}
