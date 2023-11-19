import React from "react"
import './Footer.css'
import { Link } from "react-router-dom"

import social1 from '../assets/social1.png'
import social2 from '../assets/social2.png'
import social3 from '../assets/social3.png'
import social4 from '../assets/social4.png'

  
export default function Footer() {
    
  return (
    <>
    <div className="footer">
        <div className="top">
        
            <div className="social">
                <h3>Get coonected with us on Social networks</h3>
                 <img src={social1} alt="nothing" />
                 <img src={social2} alt="nothing" />
                 <img src={social3} alt="nothing" />
                 <img src={social4} alt="nothing" />
                
            </div>
            
        </div>
        <div className="middlee">
            <div className="description">
                    <h1>Description</h1>
                    <h3>Welcome to Techaven  Your Ultimate Destination for Tech Enthusiasts!<br></br> Discover a world of cutting-edge technology and innovation at our <br></br> premier e-commerce platform, where the latest gadgets and<br></br>  electronics are just a click away.</h3>
            </div>
            <div className="products">
                    <h1>Products</h1>
                    <Link to="/listitem"><h3>Headphones</h3></Link>
                    <Link to="/itempc"><h3>Laptops</h3></Link>
                    <Link to="/itemwatch"><h3>SmartWatches</h3></Link>
                    <Link to="/itemphone"><h3>Smartphones</h3></Link>
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
