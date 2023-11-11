import React from 'react'; 
import Navbar from './Navbar';  
import Banner from './Banner'; 
import Front from './Front'  
import Featuredp from './Featuredp'; 
import Watches from './Watches'; 
import './Home.css';  
 
const Home = () => { 
  return ( 
    <div className="home"> 
      <Navbar /> 
      <Front/> 
      <Banner/> 
      <Featuredp/> 
      <Watches/> 
 
       
    </div> 
  ); 
}; 
 
export default Home;