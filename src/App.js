import React from 'react';
// <<<<<<< HEAD
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import Cart from './CartedItems/cart';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Navigation, Header, or any common elements can be placed here */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/cart" element={<Cart />} />
//           {/* Add more routes as needed */}
//         </Routes>
//       </div>
//     </Router>
// =======
import './App.css';
import Cart from './CartedItems/cart';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import ItemList from './Detaileditem/itemlist';
import ItemWatch from './Detaileditem/itemwatch';
import Home from './components/Home';
import Watches from './components/Watches';
import Itemphone from './Detaileditem/itemphone';
import Itempc from './Detaileditem/itempc';
import Itemtws from './Detaileditem/itemtws';
import CheckoutPage from './CartedItems/Checkout';



function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/itemwatch' element={<ItemWatch/>}></Route>
      <Route path='/itemtws' element={<Itemtws/>}></Route>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Checkout"element={<CheckoutPage/>}></Route>
    </Routes>
  
    </Router>

    
  );
}

export default App;
