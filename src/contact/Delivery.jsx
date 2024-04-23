import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './del.css'



function Delivery() {



  return (
    <div className='delvad'>
      <div style={{ maxWidth: '400px', margin: '0 auto' } }></div>
        <form >
      <label htmlFor="fullName">Full Name:</label>
      <input type="text" id="fullName" name="fullName"   />

      <label htmlFor="addressLine1">Address Line 1:</label>
      <input type="text" id="addressLine1" name="addressLine1"  />


      <label htmlFor="city">City:</label>
      <input type="text" id="city" name="city"   />

      <label htmlFor="state">State:</label>
      <input type="text" id="state" name="state"  />


     
      <label htmlFor="contact">Contact:</label>
      <input type="text" id="contact" name="contact"  />

      <label htmlFor="price">Price:</label>
      <input type="text" id="price" name="price"   />

      <Link to="/payment">  <button type="submit">Submit</button></Link>
    </form>
    </div>
  );
}

export default Delivery;
