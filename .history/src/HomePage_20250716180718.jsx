import React, { useState } from 'react';
import './HomePage.css';
import avatar from './Assets/avatar.png';
import bell from './Assets/notificationbell.png';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className='home-page'>
      <div className='header'>
        <h1>Homepage</h1>
        <div className='header-right'>
          <div className='bell-icon'>
            <img src={bell} alt='Notification Bell' />
            <span className='notification-count'>3</span>
          </div>
          <div className='avatar'>
            <div className='dropdown'>
              <button>
                <img src={avatar} alt='User Avatar' />
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
          </div>
        </div>
      </div>

      <div className='sidebar'>
        <button className='menu-button' >
          <span className='menu-icon'>☰</span>
        </button>
        <div className='wardrobe-toggle'>
          <button className='wardrobe-btn'>His</button>
          <button className='wardrobe-btn'>Her</button>
        </div>
        <div className='her-wardrobe-section'>
          <h3
        </div>
      </div>
    </div>
  );
};

export default HomePage;
