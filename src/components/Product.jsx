import React from 'react'

const Product = ({product,index}) => {
  return (
    <div
    key={index}
    className=" p-2 sm:p-4"
  >
    <div className='overflow-hidden  flex items-center justify-center  my-3 '>

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 sm:h-[280px]  transition-transform duration-300 hover:scale-110 object-cover "
      />
    </div>
    <div className="text-black font-bold text-xs sm:text-lg">{product.name}</div>
    <div className="text-gray-700 text-xs sm:text-sm mt-1">{product.price}</div>
  </div>
  )
}

export default Product