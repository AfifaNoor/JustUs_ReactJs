import React from 'react';
import './HomePage.css'; // import the CSS file

const HomePage = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-white">daisyUI</a>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Page Content */}
      <div className="p-10 text-center">
        <h1 className="main-heading">Welcome to the Home Page</h1>
        <p className="subtext">
          This is a modern layout powered by <span className="font-semibold text-primary">Tailwind CSS</span> and <span className="font-semibold text-secondary">DaisyUI</span>.
        </p>
        <div className="mt-8">
          <button className="hero-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
