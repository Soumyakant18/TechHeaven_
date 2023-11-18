// First.jsx

import React from 'react';
import '../Authentication/First.css';
import firstimg from '../../../TechHeaven_/src/assets/first.png';
import Header from './header';

function First() {
  const backgroundImageStyle = {
    backgroundImage: `url(${firstimg})`,
    backgroundSize: 'cover',
    minHeight: '100vh', // Set your desired height
  };

  return (
    <div style={backgroundImageStyle}>
      <div className="navbar">
        {/* Navbar content */}
      </div>
      <div className="container">
        <Header />
        <div className='signup'>
          <div className='first_container'>
            <p>"TechHeaven: Your Gateway to Innovation. Elevate your tech experience with quality products and cutting-edge solutions. Explore, discover, and bring the future into your hands. Welcome to the ultimate tech marketplace."</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;
