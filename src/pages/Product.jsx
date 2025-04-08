import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/Context';
import { Star, ShoppingCart, Heart, Share2, Clock, Shield, Truck, Award, ArrowLeft, ArrowRight } from 'lucide-react';

const Product = () => {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ProductContext);
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  const product = products.find(item => item.id === Number(productId));

  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-xl text-gray-600 px-4">
        <div className="mb-8 text-orange-500 text-6xl md:text-8xl">404</div>
        <div className="mb-4 text-center">Product not found</div>
        <button 
          onClick={() => navigate('/')}
          className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
        >
          Return to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    navigate('/cart');
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  // Create an array of full star ratings
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 !== 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-orange-50 py-6 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb - Hidden on mobile */}
        <div className="mb-4 md:mb-6 text-sm text-gray-500 hidden md:flex items-center gap-2">
          <span className="hover:text-orange-500 cursor-pointer">Home</span>
          <span>/</span>
          <span className="hover:text-orange-500 cursor-pointer">Electronics</span>
          <span>/</span>
          <span className="text-orange-500 font-medium">{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* Image Gallery Section */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative flex items-center justify-center p-2 md:p-4 overflow-hidden group bg-white rounded-md shadow-sm">
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-1 md:p-2 rounded-full shadow-lg z-10 opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
              >
                <ArrowLeft size={16} className="text-gray-800" />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-1 md:p-2 rounded-full shadow-lg z-10 opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
              >
                <ArrowRight size={16} className="text-gray-800" />
              </button>
              
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-64 md:h-80 lg:h-96 object-contain rounded-sm transition-all duration-300"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex items-center justify-center gap-2 md:gap-4 my-2 overflow-x-auto pb-2 px-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 md:w-20 h-16 md:h-20 overflow-hidden rounded-sm transition-all duration-200`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            
            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-2 md:gap-4 mt-4">
              <div className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-white rounded-xl shadow-sm">
                <Shield className="text-orange-500" size={20} />
                <div>
                  <div className="font-medium text-sm md:text-base">2-Year Warranty</div>
                  <div className="text-xs text-gray-500 hidden md:block">Extended protection</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-white rounded-xl shadow-sm">
                <Truck className="text-orange-500" size={20} />
                <div>
                  <div className="font-medium text-sm md:text-base">Free Shipping</div>
                  <div className="text-xs text-gray-500 hidden md:block">2-3 business days</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-white rounded-xl shadow-sm">
                <Clock className="text-orange-500" size={20} />
                <div>
                  <div className="font-medium text-sm md:text-base">30-Day Returns</div>
                  <div className="text-xs text-gray-500 hidden md:block">Hassle-free return</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 md:gap-3 p-2 md:p-4 bg-white rounded-xl shadow-sm">
                <Award className="text-orange-500" size={20} />
                <div>
                  <div className="font-medium text-sm md:text-base">Authentic Product</div>
                  <div className="text-xs text-gray-500 hidden md:block">100% genuine</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-8 rounded-md shadow-sm">
              {/* Product Name & Rating */}
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-2 mb-4 md:mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < fullStars 
                        ? "fill-yellow-400 text-yellow-400" 
                        : i === fullStars && hasHalfStar 
                          ? "text-yellow-400 fill-yellow-400" 
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm md:text-base text-gray-500">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
                <span className="ml-auto flex items-center text-orange-500 font-medium text-sm md:text-base">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  In Stock
                </span>
              </div>
              
              {/* Price */}
              <div className="mb-4 md:mb-6">
                <div className="text-3xl md:text-4xl font-bold text-gray-900">{product.price}</div>
                <div className="text-green-600 mt-1 font-medium text-sm md:text-base">
                  Free shipping + 30-day money-back guarantee
                </div>
              </div>
              
              {/* Short Description */}
              <div className="mb-6 md:mb-8 text-gray-600 border-b border-gray-200 pb-4 md:pb-6">
                <p className="text-base md:text-lg">{product.description}</p>
              </div>
              
              {/* Color/Variant Selection */}
              <div className="mb-4 md:mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2 md:mb-3">Available Colors</h3>
                <div className="flex gap-3">
                  <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black border-2 border-gray-300"></button>
                  <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-2 border-gray-300"></button>
                  <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-500 border-2 border-orange-500"></button>
                  <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500 border-2 border-gray-300"></button>
                </div>
              </div>
              
              {/* Quantity Selector */}
              <div className="flex items-center gap-3 md:gap-4 bg-orange-50 p-3 md:p-4 rounded-lg mb-4 md:mb-6">
                <span className="text-base md:text-lg font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.min(99, Math.max(1, parseInt(e.target.value) || 1)))}
                    className="w-10 md:w-14 h-8 md:h-10 text-center border-y border-gray-300"
                    min="1"
                    max="99"
                  />
                  <button
                    onClick={() => setQuantity(Math.min(99, quantity + 1))}
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-2 md:gap-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 py-3 md:py-4 bg-orange-500 text-white rounded-lg font-bold text-base md:text-lg
                    hover:bg-orange-600 transition-all duration-300 transform hover:scale-105
                    shadow-lg hover:shadow-orange-200 flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
                
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-3 md:p-4 rounded-lg border shadow-md transition-all duration-300 ${
                    isWishlisted 
                      ? 'bg-red-50 border-red-200 text-red-500' 
                      : 'bg-white border-gray-200 text-gray-600'
                  }`}
                >
                  <Heart size={18} className={isWishlisted ? 'fill-red-500 text-red-500' : ''} />
                </button>
                
                <button className="p-3 md:p-4 rounded-lg bg-white border border-gray-200 shadow-md text-gray-600 hover:bg-gray-50">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
            
            {/* Product Information Tabs */}
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`flex-1 py-2 md:py-4 px-2 md:px-6 text-center text-sm md:text-base font-medium ${
                    activeTab === 'description' 
                      ? 'text-orange-500 border-b-2 border-orange-500' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('specifications')}
                  className={`flex-1 py-2 md:py-4 px-2 md:px-6 text-center text-sm md:text-base font-medium ${
                    activeTab === 'specifications' 
                      ? 'text-orange-500 border-b-2 border-orange-500' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Specs
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`flex-1 py-2 md:py-4 px-2 md:px-6 text-center text-sm md:text-base font-medium ${
                    activeTab === 'reviews' 
                      ? 'text-orange-500 border-b-2 border-orange-500' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Reviews
                </button>
              </div>
              
              <div className="p-4 md:p-6">
                {activeTab === 'description' && (
                  <div className="prose prose-sm md:prose-base max-w-none">
                    <p className="mb-4">
                      Experience exceptional sound quality with our {product.name}. Designed for audio enthusiasts who demand the best, these premium headphones deliver crystal-clear highs, rich mids, and deep, powerful bass.
                    </p>
                    <p className="mb-4">
                      With active noise cancellation technology, you can immerse yourself in your music without distractions, whether you're commuting, working, or relaxing at home. The comfortable over-ear design ensures you can listen for hours without discomfort.
                    </p>
                    <p>
                      Connect wirelessly via Bluetooth 5.2 for stable, high-quality audio streaming from your devices. With up to 30 hours of battery life, you'll have plenty of listening time on a single charge.
                    </p>
                  </div>
                )}
                
                {activeTab === 'specifications' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <h3 className="font-medium text-base md:text-lg mb-2 md:mb-3 text-gray-800">Technical Specifications</h3>
                      <div className="space-y-1 md:space-y-2">
                        <div className="flex justify-between py-1 md:py-2 border-b border-gray-100">
                          <span className="text-sm md:text-base text-gray-600">Driver Size</span>
                          <span className="font-medium text-sm md:text-base">40mm</span>
                        </div>
                        <div className="flex justify-between py-1 md:py-2 border-b border-gray-100">
                          <span className="text-sm md:text-base text-gray-600">Frequency Response</span>
                          <span className="font-medium text-sm md:text-base">20Hz - 20kHz</span>
                        </div>
                        <div className="flex justify-between py-1 md:py-2 border-b border-gray-100">
                          <span className="text-sm md:text-base text-gray-600">Impedance</span>
                          <span className="font-medium text-sm md:text-base">32 Ohms</span>
                        </div>
                        <div className="flex justify-between py-1 md:py-2 border-b border-gray-100">
                          <span className="text-sm md:text-base text-gray-600">Battery Life</span>
                          <span className="font-medium text-sm md:text-base">30 hours</span>
                        </div>
                        <div className="flex justify-between py-1 md:py-2 border-b border-gray-100">
                          <span className="text-sm md:text-base text-gray-600">Charging Time</span>
                          <span className="font-medium text-sm md:text-base">2 hours</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-base md:text-lg mb-2 md:mb-3 text-gray-800">Features</h3>
                      <div className="space-y-1 md:space-y-2">
                        <div className="flex items-center gap-2 py-1 md:py-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm md:text-base">Active Noise Cancellation</span>
                        </div>
                        <div className="flex items-center gap-2 py-1 md:py-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm md:text-base">Bluetooth 5.2 Connectivity</span>
                        </div>
                        <div className="flex items-center gap-2 py-1 md:py-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm md:text-base">Built-in Microphone for Calls</span>
                        </div>
                        <div className="flex items-center gap-2 py-1 md:py-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm md:text-base">Touch Controls on Ear Cup</span>
                        </div>
                        <div className="flex items-center gap-2 py-1 md:py-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm md:text-base">Quick Charge (10min = 5hrs)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'reviews' && (
                  <div>
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="text-3xl md:text-5xl font-bold text-gray-900">{product.rating}</div>
                      <div>
                        <div className="flex mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={20} 
                              className={i < fullStars 
                                ? "fill-yellow-400 text-yellow-400" 
                                : i === fullStars && hasHalfStar 
                                  ? "text-yellow-400 fill-yellow-400" 
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                        <div className="text-xs md:text-sm text-gray-500">Based on {product.reviewCount} reviews</div>
                      </div>
                    </div>
                    
                    {/* Sample Reviews */}
                    <div className="space-y-4 md:space-y-6">
                      <div className="border-b border-gray-200 pb-4 md:pb-6">
                        <div className="flex justify-between mb-1 md:mb-2">
                          <div className="font-medium text-sm md:text-base">James Wilson</div>
                          <div className="text-gray-500 text-xs md:text-sm">3 days ago</div>
                        </div>
                        <div className="flex mb-1 md:mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={14} 
                              className={i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                            />
                          ))}
                        </div>
                        <p className="text-xs md:text-sm text-gray-600">
                          Absolutely love these headphones! The sound quality is incredible, and the noise cancellation works extremely well. Battery life is as advertised - I've been using them daily for a week without needing to recharge.
                        </p>
                      </div>
                      
                      <div className="border-b border-gray-200 pb-4 md:pb-6">
                        <div className="flex justify-between mb-1 md:mb-2">
                          <div className="font-medium text-sm md:text-base">Sarah Johnson</div>
                          <div className="text-gray-500 text-xs md:text-sm">1 week ago</div>
                        </div>
                        <div className="flex mb-1 md:mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={14} 
                              className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                            />
                          ))}
                        </div>
                        <p className="text-xs md:text-sm text-gray-600">
                          Great headphones for the price. Very comfortable to wear for long periods, and the sound quality is excellent. My only complaint is that the touch controls can be a bit finicky sometimes.
                        </p>
                      </div>
                      
                      <button className="w-full py-2 md:py-3 bg-gray-100 rounded-lg text-gray-700 text-sm md:text-base font-medium hover:bg-gray-200">
                        Load More Reviews
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products Section */}
        <div className="mt-8 md:mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {/* Related product cards would go here */}
            {Array(4).fill(0).map((_, idx) => (
              <div key={idx} className="bg-white rounded-md shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img src='/prod5.jpg' className="h-32 md:h-48 bg-gray-200"/>
                <div className="p-3 md:p-4">
                  <div className="text-xs md:text-sm text-gray-500">Audio</div>
                  <div className="font-medium text-sm md:text-base">Related Product {idx + 1}</div>
                  <div className="mt-1 md:mt-2 font-bold text-gray-900 text-sm md:text-base">$149.99</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;