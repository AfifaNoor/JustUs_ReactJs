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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
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

        {/* Right - Search and Avatar */}
        <div className="navbar-end flex gap-2">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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

      {/* Page Content */}
      <div className="p-6">
        <h1 className="text-2xl font-semibold">Welcome to JustUs Home Page</h1>
        <p>This is your homepage content area.</p>
      </div>
    </div>
  );
};

export default HomePage;
