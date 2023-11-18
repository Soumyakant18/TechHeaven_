import React from 'react';
import Navbar from './Navbar'; 
import Banner from './Banner';
import Front from './Front' 
import Featuredp from './Featuredp';
import Watches from './Watches';
import Category from './Category';
import Footer from './Footer';
import Singleproduct from './Singleproduct';
import Planding from './Planding';
import './Home.css'; 
import Logpage from '../Authentication/Logpage';





const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Front/>
      <Banner/>
      <Featuredp/>
      <Category/>
      <Watches/>
      <Footer/>
      {/* <Planding/> */}
      
      {/* <Logpage/> */}
      
    
      

    </div>
  );
};
 
export default Home;
