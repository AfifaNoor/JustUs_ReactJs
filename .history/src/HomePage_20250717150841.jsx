import React from 'react';
import './HomePage.css';
import avatar from './Assets/AfifaNoor.png';
import bell from './Assets/notificationbell.png';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='home-page'>
      <div class="header">
  <div class="logo">YourLogo</div>
  <div class="header-right">
    <div class="bell-icon">
      <img src="notification.png" alt="Notification" />
      <span class="notification-count">3</span>
    </div>
    <div class="avatar">
      <img src="avatar.png" alt="Profile" />
    </div>
  </div>
</div>

<div class="home-page">
  <div class="wardrobe-toggle">
    <button class="wardrobe-btn">His Wardrobe</button>
    <button class="wardrobe-btn">Her Wardrobe</button>
  </div>
</div>
</div>
export default HomePage;
