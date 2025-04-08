import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    const products = [
        { 
          id: 123456, 
          images: ['/prod4.jpg', '/prod5.jpg', '/prod4.jpg', '/prod5.jpg'],  
          rating: 4.5, 
          reviewCount: 45, 
          name: 'Premium Wireless Headphones', 
          price: 199.99, // Removed $ sign for numeric operations
          description: 'Noise-canceling Bluetooth headphones with 40mm drivers and 30-hour battery life' 
        },
        { 
          id: 234567, 
          images: ['/prod4.jpg', '/prod5.jpg', '/prod4.jpg', '/prod5.jpg'],
          rating: 4.7, 
          reviewCount: 112, 
          name: '4K Action Camera', 
          price: 349.99, // Removed $ sign for numeric operations
          description: 'Waterproof adventure camera with 4K/60fps video and 20MP photos' 
        },
        { 
          id: 345678, 
          images: ['/prod4.jpg', '/prod5.jpg', '/prod4.jpg', '/prod5.jpg'],
          rating: 4.3, 
          reviewCount: 89, 
          name: 'Smart Fitness Tracker', 
          price: 79.99, // Removed $ sign for numeric operations
          description: '24/7 heart rate monitoring with GPS and 50m water resistance' 
        },
        { 
          id: 456789, 
          images: ['/prod4.jpg', '/prod5.jpg', '/prod4.jpg', '/prod5.jpg'],
          rating: 4.6, 
          reviewCount: 204, 
          name: 'Wireless Charging Station', 
          price: 49.99, // Removed $ sign for numeric operations
          description: '3-device Qi charging pad with over-temperature protection' 
        },
        { 
          id: 567890, 
          images: ['/prod4.jpg', '/prod5.jpg', '/prod4.jpg', '/prod5.jpg'],
          rating: 4.4, 
          reviewCount: 156, 
          name: 'Ergonomic Office Chair', 
          price: 299.99, // Removed $ sign for numeric operations
          description: 'Mesh-back executive chair with adjustable lumbar support' 
        },
        { 
          id: 678901, 
          images: ['/prod4.jpg', '/prod5.jpg', '/prod4.jpg', '/prod5.jpg'],
          rating: 4.8, 
          reviewCount: 67, 
          name: 'Professional Studio Mic', 
          price: 149.99, // Removed $ sign for numeric operations
          description: 'Cardioid condenser microphone with anti-vibration shock mount' 
        },
        { 
          id: 789012, 
          images: ['/prod4.jpg', '/prod5.jpg', '/prod4.jpg', '/prod5.jpg'],
          rating: 4.2, 
          reviewCount: 34, 
          name: 'Smart LED Plant Grow Light', 
          price: 89.99, // Removed $ sign for numeric operations
          description: 'Full spectrum indoor gardening light with smart scheduling' 
        },
        { 
          id: 890123, 
          images: ['/prod4.jpg', '/prod5.jpg', '/prod4.jpg', '/prod5.jpg'],
          rating: 4.9, 
          reviewCount: 189, 
          name: 'Portable Espresso Maker', 
          price: 129.99, // Removed $ sign for numeric operations
          description: 'Rechargeable coffee maker with 15-bar pressure system' 
        },
        { 
          id: 901234, 
          images: ['/prod4.jpg', '/prod5.jpg', '/prod4.jpg', '/prod5.jpg'],
          rating: 4.1, 
          reviewCount: 97, 
          name: 'Solar Power Bank', 
          price: 59.99, // Removed $ sign for numeric operations
          description: '20000mAh dual-input charger with IP67 waterproof rating' 
        },
        { 
          id: 112233, 
          images: ['/prod4.jpg', '/prod5.jpg', '/prod4.jpg', '/prod5.jpg'],
          rating: 4.7, 
          reviewCount: 142, 
          name: '4K Drone with Camera', 
          price: 499.99, // Removed $ sign for numeric operations
          description: 'Foldable GPS drone with 3-axis gimbal and 1km transmission' 
        }
    ];
      
    const addToCart = (productId, quantity = 1) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.productId === productId);
            if (existingItem) {
                return prevCart.map(item =>
                    item.productId === productId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prevCart, { productId, quantity }];
        });
        
        console.log("Item added to cart");
    };
    
    // New updateCart function
    const updateCart = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            // If quantity is 0 or negative, remove the item
            removeFromCart(productId);
            return;
        }
        
        setCart(prevCart => 
            prevCart.map(item => 
                item.productId === productId 
                ? { ...item, quantity: newQuantity } 
                : item
            )
        );
        
        console.log(`Updated product ${productId} quantity to ${newQuantity}`);
    };
    
    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.productId !== productId));
        console.log(`Removed product ${productId} from cart`);
    };
    
    // Optional: Save cart to localStorage whenever it changes
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);
    
    // Optional: Load cart from localStorage on initial render
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (error) {
                console.error('Failed to parse cart from localStorage', error);
            }
        }
    }, []);
    
    const contextValue = { 
        products,
        cart,
        addToCart,
        updateCart,  // Added the new updateCart function
        removeFromCart
    };

    return (
        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;