<<<<<<< HEAD
=======


>>>>>>> 4cb684b14ae46cf9cb189b3441d89c92e25777e5
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
<<<<<<< HEAD
import Vendor from './Vendor/Vendor';
import Footer from './components/Footer';
import Category from './components/Category';
import Planding from './components/Planding';
import Wishlist from './Like/Wishlist';
import Buy from './Buy/Buy';
import Payment from './Payment/Payment';
=======
import Planding from './components/Planding';
import Signin from './Authentication/Signin';
import Signup from './Authentication/Signup';
import itemlist from './Detaileditem/itemlist';
import itempc from './Detaileditem/itempc';
import itemphone from './Detaileditem/itemphone';
import itemtws from './Detaileditem/itemtws';
import itemwatch from './Detaileditem/itemwatch';


import CheckoutPage from './CartedItems/Checkout';
>>>>>>> ff57b3875a3dcf329df2302e6543b08588ffc5d2
 
 
 
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
<<<<<<< HEAD
      <Route path='/footer' element={<Footer/>}></Route>
      <Route path='/category' element={<Category/>}></Route>
      <Route path='/planding' element={<Planding/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
=======
      <Route path="/Planding" element={<Planding/>} />
      <Route path="/Signin" element={<Signin/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      {/* <Route path="/headphones" element={<itemlist/>}/>
      <Route path="/laptops" element={<itempc/>}/>
      <Route path="/smartphones" element={<itemphone/>}/>
      <Route path="/smartwatches" element={<itemwatch/>}/> */}
      

>>>>>>> ff57b3875a3dcf329df2302e6543b08588ffc5d2
    </Routes> 
    </BrowserRouter> 
  ); 
} 
 
<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 4cb684b14ae46cf9cb189b3441d89c92e25777e5
