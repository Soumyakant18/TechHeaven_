

import React from 'react'; 
import './App.css'; 
import { Route, Routes, BrowserRouter } from 'react-router-dom'; 
import ItemList from './Detaileditem/itemlist'; 

import Signin from './Authentication/Signin';
import Signup from './Authentication/Signup';

import ItemWatch from './Detaileditem/itemwatch'; 
import Home from './components/Home';  
import Itemphone from './Detaileditem/itemphone'; 
import Itempc from './Detaileditem/itempc'; 
import Itemtws from './Detaileditem/itemtws'; 
import Vendor from './Vendor/Vendor';
import Footer from './components/Footer';
import Category from './components/Category';
import Planding from './components/Planding';
import Wishlist from './Like/Wishlist';
import Buy from './Buy/Buy';
import Payment from './Payment/Payment';
 
 
 
function App() { 
  
  return ( 
    <BrowserRouter> 
    
    <Routes> 
      <Route path='/' element={<Signin/>}></Route>
      
      <Route path='/Signup' element={<Signup/>}></Route> 
      <Route path='/itemwatch' element={<ItemWatch/>}></Route> 
      <Route path='/itemtws' element={<Itemtws/>}></Route> 
      <Route path="/home" element={<Home />} />
      <Route path="/buy" element={<Buy />} />
      <Route path='/vendor' element={<Vendor/>}/>
     <Route path="/payment" element={<Payment/>}/>
      <Route path='/itemphone' element={<Itemphone/>}></Route> 
      <Route path='/itempc' element={<Itempc/>}></Route> 
      <Route path='/listitem' element={<ItemList/>}></Route> 
      <Route path='/footer' element={<Footer/>}></Route>
      <Route path='/category' element={<Category/>}></Route>
      <Route path='/planding' element={<Planding/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
    </Routes> 
    </BrowserRouter> 
  ); 
} 
 
export default App;
