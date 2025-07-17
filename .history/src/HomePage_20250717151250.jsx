import React from "react";
import "./HomePage.css";
import bellIcon from "./Assets/notificationbell.png"; // adjust path
import avatarImage from "./Assets/avatar.png"; // adjust path

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
        <div className="logo">JustUs</div>

        <div className="header-right">
          <div className="bell-icon">
            <img src={bellIcon} alt="Notifications" />
            {/* <div className="notification-count">3</div> */}
          </div>
          <div className="avatar">
            <img src={avatarImage} alt="Profile" />
          </div>
        </div>
      </header>
      
        <div className="wardrobe-toggle">
          <button className="wardrobe-btn">His Wardrobe</button>
          <button className="wardrobe-btn">Her Wardrobe</button>
        </div>
    </div>
  );
};

export default HomePage;
