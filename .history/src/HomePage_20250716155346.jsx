import React, { useState } from 'react';
import { Bell, Search, Menu, LogOut, Settings, User } from 'lucide-react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex h-16 w-full items-center justify-between bg-[#FFEFF4] px-4 shadow-md text-[#2C3E50]">
      {/* Sidebar + Logo */}
      <div className="flex items-center gap-4">
        {/* Menu Icon */}
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-[#FDEAEF] rounded-lg">
          <Menu />
        </button>
        {/* Logo */}
        <h1 className="text-xl font-bold text-[#A4004E]">MyBrand</h1>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/* Search Input */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-full border border-[#A4004E] bg-white py-1 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#A4004E]"
          />
          <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-[#A4004E]" />
        </div>

        {/* Notification Icon */}
        <button className="p-2 hover:bg-[#FDEAEF] rounded-full relative">
          <Bell className="text-[#A4004E]" />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* Avatar Dropdown */}
        <div className="relative">
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="h-10 w-10 rounded-full border-2 border-[#A4004E] cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg text-sm z-10">
              <div className="flex items-center gap-2 p-3 border-b">
                <User className="text-[#A4004E]" />
                <span>Profile Settings</span>
              </div>
              <div className="flex items-center gap-2 p-3 hover:bg-[#FFEFF4] cursor-pointer">
                <Settings className="text-[#A4004E]" />
                <span>Settings</span>
              </div>
              <div className="flex items-center gap-2 p-3 hover:bg-[#FFEFF4] cursor-pointer">
                <LogOut className="text-[#A4004E]" />
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
