import React  from "react";
import "./HomePage.css";
import bellIcon from "./Assets/notificationbell.png"; 
import avatarImage from "./Assets/avatar.png"; 
import { useNavigate } from "react-router-dom";

const HomePage = () => {
// const [dropdownOpen, setDropdownOpen] = useState(false);
const navigate=useNavigate();

const handledropdown =() =>{
  navigate('/add-product')
}
const handleAllproduct= ()=>{
  navigate('/all-product')
}
  
  return (
    <div className="home-page">
      <header className="header">
      <div className="dropdown-container">
      <button className="product-btn" onClick={handledropdown}> 
        Add Product
        </button>
      {/* <button className="product-btn"> All Product</button> */}
        {/* <ul className="dropdown-menu">
          <li>His Product</li>
          <li>Her product</li>
        </ul> */}
      </div>
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
      <div className="main-content">
        <div className="wardrobe-toggle">
          <button className="wardrobe-btn" onClick={() => navigate('./his-category')}>His Wardrobe</button>
          <button className="wardrobe-btn"  onClick={() => navigate('./her-category')}>Her Wardrobe</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
