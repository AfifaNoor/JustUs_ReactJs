import React, { useState } from 'react';
import './HomePage.css';
import avatar from './Assets/avatar.png';   
import bell from './Assets/notificationbell.png';


const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="homepage">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
          <button onClick={() => setSidebarOpen(false)} className="close-btn">&times;</button>
        </div>
        <ul className="sidebar-links">
          <li><a href="/">Dashboard</a></li>
          <li><a href="/">Profile</a></li>
          <li><a href="/">Settings</a></li>
        </ul>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <button className="menu-btn" onClick={() => setSidebarOpen(true)}>
          &#9776;
        </button>

        <div className="logo">
          <h1>JustUs</h1>
        </div>

        <div className="nav-right">
          <input type="text" className="search-input" placeholder="Search..." />
          <img src={bell} alt="Notifications" className="icon" />

          <div className="profile-container">
            <img
              src={avatar}
              alt="Profile"
              className="avatar"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="dropdown">
                <a href="/">Profile Settings</a>
                <a href="/">Logout</a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="content">
        <h1>Welcome to the Homepage</h1>
      </main>
    </div>
  );
};

export default HomePage;
