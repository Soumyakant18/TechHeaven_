import React from 'react';
import Navbar from './Navbar'; 
import Banner from './Banner'; 
import './Home.css'; 
import { Route, Routes } from 'react-router-dom';
import Cart from '../CartedItems/cart';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

export default Home;
