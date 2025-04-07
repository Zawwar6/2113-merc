import React, { createContext,useEffect,useState } from "react";


export const ProductContext = createContext();

const ProductContextProvider = (props) => {

    const products = [
        { id: 123456, image: '/prod5.jpg',  rating: 4.5, reviewCount: 45, name: 'PRODUCT NAME', price: '$25.00', description: 'A high-quality item perfect for everyday use, designed for durability and style.' },
        { id: 234567, image: '/prod4.jpg', rating: 4.3, reviewCount: 56, name: 'PRODUCT NAME', price: '$25.00', description: 'An elegant product with modern features, ideal for enhancing your lifestyle.' },
        { id: 345678, image: '/prod5.jpg', rating: 4.1, reviewCount: 53, name: 'PRODUCT NAME', price: '$25.00', description: 'Crafted with precision, this product offers unmatched performance and reliability.' },
        { id: 456789, image: '/prod4.jpg', rating: 4.4, reviewCount: 56, name: 'PRODUCT NAME', price: '$25.00', description: 'A versatile item that combines functionality with a sleek, contemporary design.' },
        { id: 567890, image: '/prod5.jpg', rating: 4.5, reviewCount: 12, name: 'PRODUCT NAME', price: '$25.00', description: 'Perfect for all occasions, this product is both practical and aesthetically pleasing.' },
        { id: 678901, image: '/prod4.jpg', rating: 4.6, reviewCount: 23, name: 'PRODUCT NAME', price: '$25.00', description: 'Designed for comfort and efficiency, this item is a must-have for any collection.' },
        { id: 789012, image: '/prod5.jpg', rating: 4.3, reviewCount: 34, name: 'PRODUCT NAME', price: '$25.00', description: 'A premium product that stands out with its innovative features and robust build.' },
        { id: 890123, image: '/prod4.jpg', rating: 4.5, reviewCount: 45, name: 'PRODUCT NAME', price: '$25.00', description: 'This item offers exceptional value, blending style, and functionality seamlessly.' },
        { id: 901234, image: '/prod5.jpg', rating: 4.2, reviewCount: 44, name: 'PRODUCT NAME', price: '$25.00', description: 'An essential product for modern living, packed with features to meet your needs.' },
        { id: 12345, image: '/prod4.jpg', rating: 4.1, reviewCount: 87, name: 'PRODUCT NAME', price: '$25.00', description: 'A stylish and durable product, perfect for those who value quality and design.' },
        { id: 23456, image: '/prod5.jpg', rating: 4.6, reviewCount: 32, name: 'PRODUCT NAME', price: '$25.00', description: 'This product is designed to impress, offering both utility and a modern aesthetic.' },
        { id: 34567, image: '/prod4.jpg', rating: 4.2, reviewCount: 11, name: 'PRODUCT NAME', price: '$25.00', description: 'Ideal for professionals and enthusiasts, this item combines elegance with performance.' },
];
    const contextValue = { products }

    return (

        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>

    )

}
export default ProductContextProvider;






