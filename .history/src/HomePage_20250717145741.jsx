import React, { useState } from 'react';
import './HomePage.css';
import avatar from './Assets/AfifaNoor.png';
import bell from './Assets/notificationbell.png';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className='home-page'>
      {/* <div className='header'>
        <div className='logo'>
          <p> JustUs </p>
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
      </div> */}

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'collapsed'}`}>
        <button className='menu-button' onClick={toggleSidebar}>
          <span className='menu-icon'>☰</span>
        </button>

        {isSidebarOpen && (
          <>
            <div className='wardrobe-toggle'>
              <button className='wardrobe-btn'>His</button>
              <button className='wardrobe-btn'>Her</button>
            </div>

            <div className='her-wardrobe-section'>
              <h3>Her wardrobe</h3>
              <ul className='category-list'>
                <li>
                  Cool Dresses
                  <ul className='subcategory-list'>
                    <li>Babydoll</li>
                    <li>Revealing Dresses</li>
                    <li>Saree & Blouse</li>
                  </ul>
                </li>
                <li>Cool Toys</li>
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

            <div className='his-wardrobe-section'>
              <h3>His Wardrobe</h3>
              <ul className='category-list'>
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
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;