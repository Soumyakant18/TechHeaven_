// Signin.jsx

import React from 'react';
import '../Authentication/Signin.css';
import backgroundImage from '../../../TechHeaven_/src/assets/signin.jpg'; 
 import { Link,NavLink } from "react-router-dom";


const Signin = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Set your desired height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      <div className='body_sgn'>
        <form>
          <h2>Sign In</h2>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required/>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required/>

          <button type="submit">Sign In</button>
          <p>Don't have a account?? <NavLink to="/Signup">Signup</NavLink> </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;
