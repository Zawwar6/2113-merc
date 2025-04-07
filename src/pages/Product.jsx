import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/Context';

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find((item) => item.id === Number(productId) || item.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
        Product not found
      </div>
    );
  }

  // Create array with multiple instances of the single image for demonstration
  const thumbnailImages = Array(4).fill(product.image);

  const handleAddToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="flex flex-col gap-2">
            <div className=" ">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full sm:w-[420px] h-[400px] transform transition duration-500 "
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-4 my-4 overflow-x-auto pb-2">
              {thumbnailImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-24 h-24   overflow-hidden transition-all duration-300 
                   
                  `}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6 p-8 bg-black/5 rounded-xl shadow-xl border border-orange-100">
  <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
  
  {/* Rating Stars */}
  <div className="flex items-center gap-2">
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-6 h-6 ${
            index < product.rating
              ? 'text-orange-500'
              : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <span className="text-gray-600 text-sm">({product.reviewCount} reviews)</span>
  </div>

  {/* Price */}
  <div className="flex items-center gap-4">
    <span className="text-3xl font-bold text-orange-500 bg-white px-4 py-2 rounded-lg shadow-inner">
      {product.price}
    </span>
  </div>

  {/* Description */}
  <p className="text-lg text-gray-700 leading-relaxed bg-white p-4 rounded-lg border border-orange-100">
    {product.description}
  </p>

  {/* Add to Cart Button */}
  <button 
    onClick={handleAddToCart}
    className="w-full py-4 bg-orange-500 text-white rounded-lg font-bold text-lg
      hover:bg-orange-600 transition-all duration-300 transform hover:scale-[1.02]
      shadow-lg hover:shadow-orange-200"
  >
    Add to Cart
  </button>
</div>
        </div>
      </div>
    </div>
  );
};

export default Product;