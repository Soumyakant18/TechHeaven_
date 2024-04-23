import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar';
import { useState } from 'react';
import Home from './Home';

function Vendor() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <div>
       <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Home />
      </div>
        
    </div>
  )
}

export default Vendor