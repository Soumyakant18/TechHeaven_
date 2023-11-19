

import React from 'react'; 
import './App.css'; 
import { Route, Routes, BrowserRouter } from 'react-router-dom'; 
import ItemList from './Detaileditem/itemlist'; 

import Signin from './Authentication/Signin';
import Signup from './Authentication/Signup';
import Cart from './CartedItems/cart';
import ItemWatch from './Detaileditem/itemwatch'; 
import Home from './components/Home';  
import Itemphone from './Detaileditem/itemphone'; 
import Itempc from './Detaileditem/itempc'; 
import Itemtws from './Detaileditem/itemtws'; 
import CheckoutPage from './CartedItems/Checkout';
 
 
 
function App() { 
  return ( 
    <BrowserRouter> 
    <Routes> 
      <Route path='/' element={<Signin/>}></Route>
      
      <Route path='/Signup' element={<Signup/>}></Route> 
      <Route path='/itemwatch' element={<ItemWatch/>}></Route> 
      <Route path='/itemtws' element={<Itemtws/>}></Route> 
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Checkout"element={<CheckoutPage/>}></Route>
      <Route path='/itemphone' element={<Itemphone/>}></Route> 
      <Route path='/itempc' element={<Itempc/>}></Route> 
      <Route path='/listitem' element={<ItemList/>}></Route> 
    </Routes> 
    </BrowserRouter> 
  ); 
} 
 
export default App;
