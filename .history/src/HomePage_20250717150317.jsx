import React from 'react';
import './HomePage.css';
import avatar from './Assets/AfifaNoor.png';
import bell from './Assets/notificationbell.png';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='home-page'>
    <div className='header'>
    <div className='logo'>
      <h2>JustUs</h2>
    </div>
      <div className='header-right'>
          <div className='bell-icon'>
            <img src={bell} alt='Notification Bell' className='image' />
          </div>
          <div className='avatar'>
            <div className='dropdown'>
              <button>
                <img src={avatar} alt='User Avatar' className='image' />
                <span className='arrow'>▼</span>
              </button>

    </div>
    <div className='wardrobe-toggle'>
              <button className='wardrobe-btn'>His</button>
              <button className='wardrobe-btn'>Her</button>
            </div>
      
    </div>
  )
}

export default HomePage;
