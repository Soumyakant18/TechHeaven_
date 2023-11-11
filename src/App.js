import React from 'react';
import './App.css';
import First from './Authentication/First';
import Signin from './Authentication/Signin';
import Signup from './Authentication/Signup';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


function App() {
  return (
    
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<First/>}></Route>
      <Route path='/Signin' element={<Signin/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>
      </BrowserRouter>
 
  );
}

export default App;
