import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import BannerImg from "../../../TechHeaven_/src/assets/banner.png";
import './Banner.css';

const Banner = () => {
    return (
        <>
        <div className="body1">
            <div className="main-banner">
                <div className="banner-left">
                    <h1>Buy From our Amazing Range of Products</h1>
                    <h4>From only ₹199.View</h4>
                    <p>Visit now, SALE IS LIVE</p>
                </div>
                <div className="banner-right">
                    {/* Wrap the image with a Link */}
                    <Link to="/destination-page">
                        <img src={BannerImg} alt=""/>
                    </Link>
                </div>
            </div>
            
            <div className="main-price">
            
              <Link to="/itempc"> <div className="pricing">
                
                    <div className="pricing-left">
                        <img src={BannerImg} alt=""/>
                    </div>
                    
                    <div className="pricing-right">
                        <h2>40% OFF</h2>
                        <p>Introducing the HP Pavilion 64, a cutting-edge laptop that seamlessly blends power, performance, and style. Elevate your computing experience with this high-performance device, currently available at an unbeatable offer.</p>
                    </div>
                </div></Link> 
            </div>
        </div>
        </>
    );
}

export default Banner;
