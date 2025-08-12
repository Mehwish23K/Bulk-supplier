import React from 'react';

type ProductCardProps = {
  name: string;
  price: string;
  rating?: string;
  discount?: string;
  imageSrc: string;
  className?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  rating,
  discount,
  imageSrc,
  className = ''
}) => {
  return (
    <div className={`group ${className}`}>
      {/* Product Image Container with Discount Badge */}
      <div className="bg-gray-100 rounded-lg p-4 mb-2 h-64 relative overflow-hidden">
        {imageSrc && (
          <>
            <img
              src={imageSrc}
              alt={name}
              className="w-full h-full object-contain absolute inset-0 transition-transform duration-300 group-hover:scale-105"
            />
            {/* Discount Badge - On Image */}
            {discount && (
              <div className="absolute top-3 left-3 bg-gray-400 bg-opacity-80 rounded-lg px-4 py-1 shadow-sm">
                <span className="text-xs font-medium text-gray-800">{discount}</span>
              </div>
            )}
          </>
        )}
      </div>
      
      {/* Product Info */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-600">${price}</p>
        </div>
        <div className="text-right">
          {rating && (
            <p className="text-xs text-gray-500 flex items-center justify-end">
              <span className="mr-1">★</span> {rating}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;