import React from 'react';

type BackgroundColor = 'bg-stone-100' | 'bg-gray-100' | 'bg-slate-100';

export type ProductBoxProps = {
  src: string;
  alt: string;
  title: string;
  items: string[];
  imagePosition?: 'right' | 'left' | 'bottom';
  productCount?: string;
  bgColor?: BackgroundColor;
  className?: string;
};

const ProductBox: React.FC<ProductBoxProps> = ({ 
  src, 
  alt, 
  title, 
  items, 
  imagePosition = 'right',
  productCount = "100+ Products",
  bgColor = 'bg-gray-100',
  className = ''
}) => {
  const getImagePositionClasses = () => {
    switch(imagePosition) {
      case 'bottom':
        return 'inset-x-0 bottom-0 flex justify-center h-[60%] p-4';
      case 'right':
        return 'right-6 bottom-6 w-[45%] h-[70%]';
      case 'left':
        return 'left-6 bottom-6 w-[45%] h-[70%]';
      default:
        return 'right-6 bottom-6 w-[45%] h-[70%]';
    }
  };

  return (
    <div className={`relative rounded-xl border border-gray-200 shadow-sm overflow-hidden ${bgColor} ${className}`}>
      {/* Text content */}
      <div className="absolute left-6 top-6 p-4 z-10">
        <div className="rounded-xl bg-gray-400 px-4 py-2 inline-block mb-3">
          <p className="text-gray-900 text-sm font-bold">{productCount}</p>
        </div>
        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
        <ul className="text-gray-700 mt-2">
          {items.map((item, index) => (
            <li key={index} className="py-1">{item}</li>
          ))}
        </ul>
      </div>
      
      {/* Image container */}
      <div className={`absolute ${getImagePositionClasses()}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ProductBox;