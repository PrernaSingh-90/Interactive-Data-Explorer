import React from 'react'

const ProductCard = ({product}) => {
    if(!product) return null;

return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col h-full">
      <div className="h-48 w-full flex items-center justify-center mb-4">
        <img 
          src={product?.image} 
          alt={product?.title} 
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
        {product?.title}
      </h3>
      <p className="text-xs text-gray-500 line-clamp-3 mb-4 grow">
        {product?.description}
      </p>
      <div className="flex justify-between items-center mt-auto text-italic">
        <span className="text-lg font-bold text-blue-600">
            ₹{(product?.price * 93).toLocaleString('en-IN')}
            </span>
        {product?.rating && (
          <span className="bg-yellow-100 text-yellow-800 text-[10px] px-2 py-1 rounded font-medium">
            ⭐ {product.rating.rate}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard


