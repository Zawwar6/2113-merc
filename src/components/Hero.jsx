import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-no-repeat  bg-center h-screen " 
      style={{ backgroundImage: `url(/bg.jpg)` } } 
    >

      
<div className="absolute inset-0 bg-black opacity-50"></div>

      
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white ">
        <div className='absolute top-0 left-0 right-0 '>
      <Navbar></Navbar>

        </div>
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            PIONEERING THE FUTURE OF IMPORTS AND WHOLESALE SOLUTIONS
          </h1>
          <p className="text-lg  md:text-xl mb-6">
            Revolutionizing the world of shipping and logistics, we integrate state-of-the-art technology with future-focused strategies to transform how goods move globally. Experience unparalleled efficiency and agility with our cutting-edge solutions designed to meet the demands of tomorrow, today.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;