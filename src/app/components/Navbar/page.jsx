'use client'
import React, { useState } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white relative">
      <div className="flex items-center space-x-4">
        <button 
          className="md:hidden" 
          onClick={() => setMenuOpen(!menuOpen)}
        >

          ☰
        </button>

        <span className="font-bold">ACME</span>
      </div>
      <ul className="hidden md:flex flex-1 justify-center space-x-6">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">Games</a></li>
        <li><a href="#" className="hover:underline">Menu</a></li>
        <li><a href="#" className="hover:underline">Reservation</a></li>
      </ul>
      <button className="bg-blue-600 px-4 py-2 rounded-md">Sign Up
      
      </button>
      
      {/* Mobile Menu */}
      <div 
        className={`absolute top-full left-0 w-full bg-black bg-opacity-80 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">Games</a></li>
        <li><a href="#" className="hover:underline">Menu</a></li>
        <li><a href="#" className="hover:underline">Reservation</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
