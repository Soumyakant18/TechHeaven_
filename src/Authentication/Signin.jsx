

import React, { useState } from 'react';
import '../Authentication/Signin.css';
import backgroundImage from '../../../TechHeaven_/src/assets/signin.jpg'; 
 import { Link,NavLink, Navigate, useNavigate } from "react-router-dom";

const Signin = () => {
  const [signup,setSignup]=useState({
    username: "",
    password: ""
  })
  const navigate=useNavigate()

  const handelSubmit=((e)=>{
    e.preventDefault()
    const val={...signup}
    const username=val.username
    const password=val.password
    const data={password,username}
    // console.log(data)
    rs()
            async function rs() {
                let ft=await fetch(`http://localhost:8090/login/${data.username}/${data.password}`,{
                    method:"get",
                    headers:{"Content-Type":"application/json"}, 
                })
                let jsf=await ft.json();
                // const roles=jsf.role
                if (jsf) {
                  navigate(`/home`);
                }
            }

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
    minHeight: '100vh', // Set your desired height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
   
      <div className='body_sgn'>
       
        <form className='sii' onSubmit={handelSubmit}>
          <h2 className='size_signin'>Sign In</h2>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={signup.username} onChange={Signupchange} required/>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={signup.password} onChange={Signupchange} required/>

          <button type="submit">Sign In</button>
          <p>Don't have a account?? <NavLink to="/Signup">Signup</NavLink> </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;
