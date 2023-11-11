import React from 'react'; 
import './App.css'; 
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'; 
import ItemList from './Detaileditem/itemlist'; 
import ItemWatch from './Detaileditem/itemwatch'; 
import Home from './components/Home'; 
import Watches from './components/Watches'; 
import Itemphone from './Detaileditem/itemphone'; 
import Itempc from './Detaileditem/itempc'; 
import Itemtws from './Detaileditem/itemtws'; 
 
 
 
function App() { 
  return ( 
    <BrowserRouter> 
    <Routes> 
      <Route path="/" element={<Home/>}></Route> 
      <Route path='/itemwatch' element={<ItemWatch/>}></Route> 
      <Route path='/itemtws' element={<Itemtws/>}></Route> 
    </Routes> 
 
     
    </BrowserRouter> 
  ); 
} 
 
export default App;