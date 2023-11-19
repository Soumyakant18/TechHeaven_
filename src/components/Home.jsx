import React from 'react';
import Navbar from './Navbar'; 
import Banner from './Banner';
import Front from './Front' 
import Featuredp from './Featuredp';
import Watches from './Watches';
import Category from './Category';
import Footer from './Footer';
import Planding from './Planding'
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
      <Category/>
      <Watches/>
      <Footer/>
      

    </div>
  );
};

export default Home;
