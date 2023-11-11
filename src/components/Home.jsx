import React from 'react';
import Navbar from './Navbar'; 
import Banner from './Banner';
import Front from './Front' 
import Featuredp from './Featuredp';
import Watches from './Watches';
import './Home.css'; 
import { Route, Routes } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home">
      <Navbar />
{/* <<<<<<< HEAD
      <Banner />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        {/* Add more routes as needed */}
      {/* </Routes>
======= */}
      <Front/>
      <Banner/>
      <Featuredp/>
      <Watches/>

    </div>
  );
};

export default Home;
