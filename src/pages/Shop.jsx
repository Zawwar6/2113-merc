import React from 'react';
import Footer from '../components/Footer';

const ProductGrid = () => {
  const products = [
    {
      image: '/prod1.jpg',
      name: 'PRODUCT NAME',
      price: '$25.00',
    },
    {
      image: '/prod2.jpg',
      name: 'PRODUCT NAME',
      price: '$25.00',
    },
    {
      image: '/prod2.jpg',
      name: 'PRODUCT NAME',
      price: '$25.00',
    },
    {
      image: '/prod1.jpg',
      name: 'PRODUCT NAME',
      price: '$25.00',
    },
    {
      image: '/prod2.jpg',
      name: 'PRODUCT NAME',
      price: '$25.00',
    },
    {
      image: '/prod1.jpg',
      name: 'PRODUCT NAME',
      price: '$25.00',
    },
  ];

  return (
    <>
      <div className="min-h-screen  flex justify-center items-center py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-7xl">
          {products.map((product, index) => (
            <div
              key={index}
              className=" p-4  transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover mb-4 rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <div className="text-black font-bold text-lg">{product.name}</div>
              <div className="text-gray-700 text-sm mt-1">{product.price}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductGrid;
