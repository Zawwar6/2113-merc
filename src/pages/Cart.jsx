import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/Context';
import { Trash2, Plus, Minus, Loader2 } from 'lucide-react';

const Cart = () => {
  const { cart, products, updateCart, removeFromCart } = useContext(ProductContext) || {};
  const [promoCode, setPromoCode] = useState('');
  const [updatingItem, setUpdatingItem] = useState(null);

  const safeCart = Array.isArray(cart) ? cart : [];
  const safeProducts = Array.isArray(products) ? products : [];

  const getProductDetails = (productId) => {
    return safeProducts.find(product => product.id === productId) || {};
  };

  const calculateTotal = (items) => {
    return items.reduce((sum, item) => {
      const product = getProductDetails(item.productId);
      const price = parseFloat((product.price || '0')) || 0;
      return sum + price * (item.quantity || 1);
    }, 0);
  };

  const subtotal = calculateTotal(safeCart);
  const shippingCost = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const totalAmount = subtotal + shippingCost + tax;

  const handleQuantityChange = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setUpdatingItem(itemId);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      updateCart && updateCart(itemId, newQuantity);
    } finally {
      setUpdatingItem(null);
    }
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart && removeFromCart(itemId);
  };

  if (!safeCart.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 max-w-md bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet</p>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            onClick={() => window.history.back()}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              {safeCart.map((item) => {
                const product = getProductDetails(item.productId);
                const price = parseFloat((product.price || '0')) || 0;
                
                return (
                  <div key={item.productId} className="group relative border-b border-gray-100 last:border-0 py-6">
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 rounded-lg bg-gray-100 overflow-hidden relative">
                          <img
                            src={product.images?.[0] || '/placeholder-product.jpg'}
                            alt={product.name}
                            className="w-full h-full object-cover transition-opacity"
                            onError={(e) => {
                              e.target.src = '/placeholder-product.jpg';
                            }}
                          />
                          {updatingItem === item.productId && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                              <Loader2 className="w-6 h-6 text-white animate-spin" />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                        <p className="text-gray-500 text-sm mt-1">ID: {item.productId}</p>
                        <p className="text-gray-600 mt-2">{product.description}</p>
                      </div>

                      {/* Price and Controls */}
                      <div className="flex flex-col items-end gap-2">
                        <div className="text-lg mr-20 font-medium text-gray-900">
                          ${(price * (item.quantity || 1)).toFixed(2)}
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center border rounded-lg bg-gray-50">
                            <button
                              onClick={() => handleQuantityChange(item.productId, (item.quantity || 1) - 1)}
                              disabled={updatingItem === item.productId}
                              className="p-2 hover:bg-gray-100 disabled:opacity-50 transition-colors"
                            >
                              {updatingItem === item.productId ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                              ) : (
                                <Minus className="w-4 h-4" />
                              )}
                            </button>
                            <span className="px-4 min-w-[40px] text-center">
                              {item.quantity || 1}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(item.productId, (item.quantity || 1) + 1)}
                              disabled={updatingItem === item.productId}
                              className="p-2 hover:bg-gray-100 disabled:opacity-50 transition-colors"
                            >
                              {updatingItem === item.productId ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                              ) : (
                                <Plus className="w-4 h-4" />
                              )}
                            </button>
                          </div>

                          <button
                            onClick={() => handleRemoveItem(item.productId)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-sm p-6 h-fit sticky top-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium text-gray-900">
                  {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (8%)</span>
                <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4 mt-4 flex justify-between">
                <span className="font-bold text-lg text-gray-900">Total</span>
                <span className="font-bold text-lg text-gray-900">${totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Promo Code</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Enter promo code"
                />
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                  Apply
                </button>
              </div>
            </div>

            <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
              Proceed to Checkout
            </button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Free shipping on orders over $50. Taxes calculated at checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;