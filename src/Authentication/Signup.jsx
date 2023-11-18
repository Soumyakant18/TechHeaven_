// Signup.jsx

import React from 'react';
import '../Authentication/Signup.css';
import backgroundImage from '../../../TechHeaven_/src/assets/signin.jpg'; 
import { Link,NavLink } from 'react-router-dom';

const Signup = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      <div class="container_sgu">
        <div class="body_sgu">
            <form class="sgu" action="your-server-endpoint" method="POST">
                <h2>Sign Up</h2>
                <label class="user_sgu" for="username">Username:</label>
                <input type="text" id="username_sgu" name="username" required />

                <label for="email">Email:</label>
                <input type="email" id="email_sgu" name="email" required />

                <label for="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber_sgu" name="phoneNumber" required />

                <label for="password">Password:</label>
                <input type="password" id="password_sgu" name="password" required />

                <button type="submit">Sign up</button>
                <p>Already have an account? <NavLink to="/signin">Signin</NavLink></p>
            </form>
        </div>
    </div>
   </div>
  );
}

export default Signup;
