import React, { use, useContext } from 'react';
import Footer from '../components/Footer';
import Product from '../components/Product';
import { ProductContext } from '../context/Context'
import { Link } from 'react-router-dom';

const ProductGrid = () => {

  const { products } = useContext(ProductContext)



  return (
    <>
      <div className="min-h-screen flex flex-col gap-4 justify-center items-center py-10 px-2 sm:px-4">

        <h1 className='text-3xl sm:text-4xl boldo my-6 leading-relaxed uppercase '>Our Products Collection</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2  sm:gap-8 w-full max-w-7xl">
          {products.map((product, index) => (
            <Link to={`/shop/${product.id}`} key={index}>

              <Product product={product} index={index}  ></Product>
            </Link>
          ))}
        </div>
      </div>
   
    </>
  );
};

export default ProductGrid;
