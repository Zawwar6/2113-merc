import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = window.location.pathname;
  const textColor = location === '/' ? 'text-white' : 'text-black';

  return (
    <nav className="relative">
      <div className="flex justify-between items-center px-4 py-3 md:justify-around md:px-0">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img className="h-12 w-auto" src="/logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex gap-8 ${textColor} text-sm md:text-base font-medium`}>
          <Link to="/shop"><li>Shop</li></Link>
          <Link to="/services"><li>Services</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <Link to="/cart"><li>Cart</li></Link>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke={textColor === 'text-white' ? 'white' : 'black'} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 w-full h-screen bg-white z-50">
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 p-2"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Menu Items */}
          <div className="h-full flex flex-col items-center justify-center">
            <ul className="flex flex-col text-black items-center space-y-8 text-xl">
              <Link to="/shop" onClick={() => setIsMenuOpen(false)}><li className="hover:text-gray-500 transition-colors">Shop</li></Link>
              <Link to="/services" onClick={() => setIsMenuOpen(false)}><li className="hover:text-gray-500 transition-colors">Services</li></Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}><li className="hover:text-gray-500 transition-colors">About</li></Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}><li className="hover:text-gray-500 transition-colors">Contact</li></Link>
              <Link to="/cart" onClick={() => setIsMenuOpen(false)}><li className="hover:text-gray-500 transition-colors">Cart</li></Link>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;