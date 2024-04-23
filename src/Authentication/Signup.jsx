// Signup.jsx

import React, { useState } from 'react';
import '../Authentication/Signup.css';
<<<<<<< HEAD
import backgroundImage from '../../../TechHeaven_/src/assets/signin.jpg';
import  './Signup.css'
// import { Link,NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
=======
import backgroundImage from '../../../TechHeaven_/src/assets/signin.jpg'; 
import { Link,NavLink,useNavigate } from 'react-router-dom';

>>>>>>> 4cb684b14ae46cf9cb189b3441d89c92e25777e5
const Signup = () => {
  const navigate=useNavigate()
  const [signup,setSignup]=useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  })

  const handelSubmit=((e)=>{
    e.preventDefault()
    const val={...signup}
    const username=val.username
    const email=val.email
    const phone=val.phone
    const password=val.password
    const data={email,password,phone,username}

    fetch('http://localhost:9190/api/student', {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
    })
.then(response => {
    navigate(`/Signin`)
})
.catch(error => {
    console.error("Error during fetch:", error);
});

  })

  const Signupchange=((e)=>{
    const name=e.target.name
    const value=e.target.value
    setSignup({...signup, [name]:value})
  })

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
      <div className="container_sgu">
        <div className="body_sgu">
            <form className="sgu" onSubmit={handelSubmit}>
                <h2 className='size_does_not_matter'>Sign Up</h2>
                <label className="user_sgu">Username:</label>
                <input type="text" id="username_sgu"  value={signup.username} onChange={Signupchange} name='username' />

                <label for="email">Email:</label>
                <input type="email" id="email_sgu"  value={signup.email} onChange={Signupchange} name='email' />

                <label for="phoneNumber">Phone Number:</label>
                <input type="text" id="phoneNumber_sgu"  value={signup.phone} onChange={Signupchange} name='phone' />

                <label for="password">Password:</label>
<<<<<<< HEAD
                <input type="password" id="password_sgu" name="password" required />

                <button type="submit">Sign up</button>
                <p>Already have an account? <Link to="/signin">Signin</Link></p>
=======
                <input type="password" id="password_sgu"  value={signup.password} onChange={Signupchange} name='password' />
                
                <button>Sign up</button>
                <p>Already have an account? <NavLink to="/">Signin</NavLink></p>
>>>>>>> 4cb684b14ae46cf9cb189b3441d89c92e25777e5
            </form>
        </div>
    </div>
   </div>
  );
}

export default Signup;
