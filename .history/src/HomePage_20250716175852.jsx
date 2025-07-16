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
        <button >
          <span className='menu-icon'>☰</span>
        </button>
        <div className='wardrobe-section'>
    <h3>Her Wardrobe</h3>
    <ul className='sidebar-menu'>
      <li>Sex Dresses</li>
      <li>Babydoll</li>
      <li>Revealing Dresses</li>
      <li>Saree & Blouses</li>
      <li>Sex Toys</li>
      <li>Western Wear</li>
      <li>Desi Diva</li>
      <li>Dream Dress</li>
      <li>Wedding Dress</li>
      <li>Footwear</li>
      <li>Bags</li>
      <li>Skincare & Beauty</li>
      <li>Jewellery</li>
    </ul>
  </div>

  <div className='wardrobe-section'>
    <h3>His Wardrobe</h3>
    <ul className='sidebar-menu'>
      <li>Shirt</li>
      <li>T-Shirt</li>
      <li>Jeans</li>
      <li>Trouser</li>
      <li>Half Pant</li>
      <li>Footwear</li>
      <li>Sunglasses</li>
      <li>Gym Accessories</li>
      <li>Watches</li>
      <li>Kurta</li>
      <li>Perfume</li>
      <li>Suits</li>
      <li>Skincare</li>
      <li>Tech Accessories</li>
    </ul>
  </div>
</div>
    </div>
  );
};

export default HomePage;
