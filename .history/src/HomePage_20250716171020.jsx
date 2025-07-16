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
          {/* <img src={avatar} alt='User Avatar' /> */}
          <div className='dropdown'>
            <button >
              <img src={avatar} alt='User Avatar' />
              <span className='username'>Username</span>
              <span className='arrow'>▼</span>
            </button>
              <div className='dropdown-menu'>
                <ul>
                  <li>Profile</li>
                  <li>Settings</li>
                  <li>Logout</li>
                </ul>
              </div>
          </div>
          <div className='bell-icon'>
            <img src={bell} alt='Notification Bell' />
            <span className='notification-count'>3</span>
          </div>
        </div>
      </div>
    </div>
    <div className='sidebar'>
      <button >
        <span className='menu-icon'>☰</span>
      </button>
      {sidebarOpen && (
        <ul className='sidebar-menu'>
          <li>Dashboard</li>
          <li>Messages</li>
          <li>Settings</li>
          <li>Help</li>
        </ul>
      )}
  </div>

  );
};

export default HomePage;



