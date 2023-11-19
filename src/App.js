import React from 'react'; 
import './App.css'; 
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'; 
import ItemList from './Detaileditem/itemlist'; 
import Cart from './CartedItems/cart';
import ItemWatch from './Detaileditem/itemwatch'; 
import Home from './components/Home'; 
import Watches from './components/Watches'; 
import Itemphone from './Detaileditem/itemphone'; 
import Itempc from './Detaileditem/itempc'; 
import Itemtws from './Detaileditem/itemtws'; 
import Planding from './components/Planding';
import Signin from './Authentication/Signin';
import Signup from './Authentication/Signup';
import itemlist from './Detaileditem/itemlist';
import itempc from './Detaileditem/itempc';
import itemphone from './Detaileditem/itemphone';
import itemtws from './Detaileditem/itemtws';
import itemwatch from './Detaileditem/itemwatch';


import CheckoutPage from './CartedItems/Checkout';
 
 
 
function App() { 
  return ( 
    <BrowserRouter> 
    <Routes> 
      <Route path="/" element={<Home/>}></Route> 
      <Route path='/itemwatch' element={<ItemWatch/>}></Route> 
      <Route path='/itemtws' element={<Itemtws/>}></Route> 
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Checkout"element={<CheckoutPage/>}></Route>
      <Route path='/itemphone' element={<Itemphone/>}></Route> 
      <Route path='/itempc' element={<Itempc/>}></Route> 
      <Route path='/listitem' element={<ItemList/>}></Route> 
      <Route path="/Planding" element={<Planding/>} />
      <Route path="/Signin" element={<Signin/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      {/* <Route path="/headphones" element={<itemlist/>}/>
      <Route path="/laptops" element={<itempc/>}/>
      <Route path="/smartphones" element={<itemphone/>}/>
      <Route path="/smartwatches" element={<itemwatch/>}/> */}
      

    </Routes> 
 
     
    </BrowserRouter> 
  ); 
} 
 
export default App;