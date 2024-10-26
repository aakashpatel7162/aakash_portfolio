  import React, { useState } from 'react';
  import Header from './Header'; 
  import Footer from './Footer'; 
  import { Outlet } from 'react-router-dom';
  import { FrameProvider } from '../cart/FrameProvider';  // Import FrameContext
  import './layout.style.css';
  export default function Layout() {
    const [menuBar, setMenuBar] = useState(false);  // Sidebar state in Layout

  
    const toggleSidebar = () => {
      setMenuBar(!menuBar);
    };

    return (
      <FrameProvider>  {/* Wrap the whole layout inside FrameProvider */}
      <div className={`layout ${menuBar ? 'sidebar-open' : ''}`}>
        <Header toggleSidebar={toggleSidebar} menuBar={menuBar} />  {/* Pass menuBar state to Header */}
        
        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </FrameProvider>
    );
  }
