import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm px-4 sticky top-0 z-50">
        {/* Left - Hamburger Dropdown */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              {/* Clean hamburger icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><a href="#">Homepage</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>
        </div>

        {/* Center - Brand */}
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">JustUs</a>
        </div>

        {/* Right - (Optional) */}
        <div className="navbar-end">
          {/* You can place avatar or search input here if needed */}
        </div>
      </div>

      {/* Page Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold">Welcome to JustUs</h1>
        <p>This is the homepage content.</p>
      </div>
    </div>
  );
};

export default HomePage;
