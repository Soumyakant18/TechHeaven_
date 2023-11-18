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
            <h4><span>$</span>89</h4>
            <strike ><h3>$99</h3></strike> 
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, recusandae magni provident dicta, cupiditate eveniet modi perspiciatis tenetur nam vitae culpa iste molestias maxime officia inventore tempora, repellendus facilis nisi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod illum quibusdam necessitatibus, ex aliquam doloribus quos dignissimos, ipsam ducimus reprehenderit sed repudiandae quia voluptate, corporis iure quo nesciunt saepe eaque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. In accusantium fugit nemo, error praesentium dolor soluta consequatur molestias commodi sed aspernatur distinctio odio quaerat sunt? Non cum esse porro ipsa.</p>
        
    

    </div>
    </>
  )
}
