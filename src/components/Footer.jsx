import React from "react"
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelopeOpen,faFacebook} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <>
    <div className="footer">
        <div className="top">
            <div className="social">
                <h3>Get coonected with us on Social networks</h3>
                <FontAwesomeIcon icon={faEnvelopeOpen} />
                <FontAwesomeIcon icon={faEnvelopeOpen} />
                <FontAwesomeIcon icon={faEnvelopeOpen} />
                <i class="bi bi-instagram"></i>
                
                
            </div>
        </div>
        <div className="middle">
            <div className="description">
                    <h1>Description</h1>
                    <h3>Lorem, ipsum dolor sit amet consectetur <br></br> adipisicing elit. Debitis temporibus quasi neque.<br></br> Officia accusamus debitis quis molestiae quia <br></br>ducimus neque atque labore, adipisci recusandae deleniti.<br></br> Officia sit totam assumenda non.</h3>
            </div>
            <div className="products">
                    <h1>Products</h1>
                    <h3>Headphones</h3>
                    <h3>Laptops</h3>
                    <h3>SmartWatches</h3>
                    <h3>Smartphones</h3>
            </div>
            <div className="useful-links">
                <h1>Links</h1>
                <h3>Home</h3>
                <h3>Orders</h3>
                <h3>Contact</h3>
            </div>
            <div className="contact">
                <h1>Contact</h1>
                <h3>Jatni , Bhubaneswar 752050</h3>
                <h3>rajeshgoura96@gmail.com</h3>
                <h3>+91 999999999</h3>
                
            </div>
        </div>
        <div className="bottom">
                <h3>Copyright 2023</h3>
                <h3>All rights reserved by rajesh,soumya,rashmikant,dibya</h3>
        </div>
    </div>
    
    </>
  )
}
