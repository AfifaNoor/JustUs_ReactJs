import React, { useState } from 'react';
import './HomePage.css';
// import avatar from './Assets/avatar.png';       
// import bell from './Assets/notificationbell.png';


const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className='home-page'>
    <div className='side-bar'>
    <div className='sidebar-header'>
      <h2>Menu</h2>
    </div>

    </div>

    </div>
  );
};

export default HomePage;



