// src/components/Layout/Navbar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignIn = () => {
    navigate("/login"); // redirect to login page
  };

  const handleCart = () => {
    navigate("/cart"); // redirect to cart page
  };

  return (
    <nav className="bg-white shadow-md py-3 px-6 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6176a08a-8373-4b07-88c9-cb33b4d2040b.png"
            alt="UrbanPro logo"
            className="mr-2"
            height="40"
            width="40"
          />
          <h1 className="text-xl font-bold text-purple-800">UrbanPro</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-purple-800 transition">
            Home
          </Link>
          <a href="#services" className="text-gray-600 hover:text-purple-800 transition">
            Services
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-purple-800 transition">
            How it Works
          </a>
          <Link to="/about" className="text-gray-600 hover:text-purple-800 transition">
            About Us
          </Link>
        </div>

        {/* Auth + Cart Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            className="px-4 py-2 text-gray-600 hover:text-purple-800 flex items-center transition"
            onClick={handleSignIn}
          >
            <span className="mr-1">👤</span> Sign In
          </button>
          <Link
            to="/register"
            className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-900 hover:shadow-md transition"
          >
            Sign Up
          </Link>
          {/* Cart Button (emoji only) */}
          <button
            className="text-2xl hover:text-purple-800 transition"
            onClick={handleCart}
            title="Cart"
          >
            🛒
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 flex flex-col">
          <Link
            to="/"
            className="text-gray-600 hover:text-purple-800 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <a
            href="#services"
            className="text-gray-600 hover:text-purple-800 transition"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#how-it-works"
            className="text-gray-600 hover:text-purple-800 transition"
            onClick={() => setIsOpen(false)}
          >
            How it Works
          </a>
          <Link
            to="/about"
            className="text-gray-600 hover:text-purple-800 transition"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <button
            className="px-4 py-2 text-gray-600 hover:text-purple-800 flex items-center transition"
            onClick={() => {
              setIsOpen(false);
              handleSignIn();
            }}
          >
            <span className="mr-1">👤</span> Sign In
          </button>
          <Link
            to="/register"
            className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-900 hover:shadow-md transition text-center"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
          {/* Mobile Cart Button */}
          <button
            className="text-2xl hover:text-purple-800 transition text-center"
            onClick={() => {
              setIsOpen(false);
              handleCart();
            }}
            title="Cart"
          >
             🛒 
          </button>
        </div>
      )}
    </nav>
  );
}
