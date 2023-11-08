import React from "react";
import BannerImg from "../../../TechHeaven_/src/assets/banner.png";
import './Banner.css';


const Banner = () => {
    return (
        <>
        <div classNameName="body">
            <div className="main-banner">

                <div className="banner-left">
                    <h1>Buy From our Amazing Range of Products</h1>
                    <h4>From only $199.View</h4>
                    <p>Visit now , SALE IS LIVE</p>

                </div>
                <div className="banner-right">
                    <img src={BannerImg} alt=""/>
                </div>
            </div>
            <div className="about">
                <h1>Buy now </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores cupiditate debitis cum tempore invento</p>
            </div>
            <div className="main-price">
                <div className="pricing">
                    <div className="pricing-left">
                        <img src={BannerImg} alt=""/>
                    </div>
                <div className="pricing-right">
                    <h2>199.00 USD</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci sed vel quia, tempore error velit alias ipsa accusamus omnis iste consequatur id aliquid rem! Sit laudantium amet ut velit?</p>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}
export default Banner;