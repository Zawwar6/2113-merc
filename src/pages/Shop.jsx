import React from 'react';
import Footer from '../components/Footer';

const ProductGrid = () => {
  const products = [
    { image: '/p1.png', name: 'PRODUCT NAME', price: '$25.00' },
    { image: '/p2.png', name: 'PRODUCT NAME', price: '$25.00' },
    { image: '/prod2.jpg', name: 'PRODUCT NAME', price: '$25.00' },
    { image: '/prod1.jpg', name: 'PRODUCT NAME', price: '$25.00' },
    { image: '/prod2.jpg', name: 'PRODUCT NAME', price: '$25.00' },
    { image: '/prod1.jpg', name: 'PRODUCT NAME', price: '$25.00' },
  ];

  return (
    <>
      <div className="min-h-screen flex justify-center items-center py-10 px-2 sm:px-4">
        <div className="grid grid-cols-2 gap-3 sm:gap-6 w-full max-w-7xl">
          {products.map((product, index) => (
            <div
              key={index}
              className=" p-2 sm:p-4  transition-transform duration-300 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 sm:h-[500px] object-cover mb-2 sm:mb-4 rounded-md"
              />
              <div className="text-black font-bold text-xs sm:text-lg">{product.name}</div>
              <div className="text-gray-700 text-xs sm:text-sm mt-1">{product.price}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductGrid;
