import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  const location = window.location.pathname;

  
  const textColor = location === '/' ? 'text-white' : 'text-black';

  return (
    <div className="flex justify-around  items-center gap-20 bg-transparent">

      <div className="logo">
        <Link to={"/"}>
          <img className="h-18 w-auto invert-1" src="/logo.png" alt="Logo" />
        </Link>
      </div>


      <ul className={`flex gap-8 ${textColor} text-sm md:text-base font-medium`}>
        <Link to="/shop">
          <li >
            Shop
          </li>
        </Link>
        <Link to="/services">
          <li >
            Services
          </li>
        </Link>
        <Link to="/about">
          <li>
            About
          </li>
        </Link>
        <Link to="/contact">
          <li>
            Contact
          </li>
        </Link>
        <Link to="/cart">
          <li >
            Cart
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;