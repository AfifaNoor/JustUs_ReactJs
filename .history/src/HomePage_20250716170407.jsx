import React, { useState } from 'react';
import './HomePage.css';
import avatar from "C:\\justus\\src\\Assets\\avatar.png";
import { useNavigate } from 'react-router-dom'; 
import bell from "C:\\justus\\src\\Assets\\notificationbell.png";


const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className='home-page'>
    <div className='header'>
      <h1>homepage</h1>
      <div className='header-right'>
        <div className='avatar'>
          <img src={avatar} alt='User Avatar' />
          
          <div className='bell-icon'>
            <img src={bell} alt='Notification Bell' />
            <span className='notification-count'>3</span>
          </div>
        </div>
      </div>
    </div>
    <div className='main-content'>
      <h2>Welcome to the Homepage</h2>
      <p>This is the main content area.</p>
    </div>
  </div>
  
  );
};

export default HomePage;



