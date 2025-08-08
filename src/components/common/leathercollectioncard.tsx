import React from 'react';
import Button from './button';

type LeatherCollectionCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  buttonText?: string;
  className?: string;
};

const LeatherCollectionCard: React.FC<LeatherCollectionCardProps> = ({
  title,
  description,
  imageSrc,
  buttonText = 'Explore',
  className = ''
}) => {
  return (
    <div 
      className={`flex flex-col items-center rounded-xl overflow-hidden shadow-md ${className}`}
      style={{
        backgroundColor: '#F9F6FF',
        width: '368.34px',
        height: '444px'
      }}
    >
      {/* Image container */}
      <div className="w-[107px] h-[107px] bg-white rounded-xl flex items-center justify-center mt-12 border border-gray-200">
        {/* Image */}
        <div className="w-[54px] h-[54px] relative">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-8 w-full flex flex-col items-center">
        <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
        <p className="text-gray-600 mb-6 text-center px-4">{description}</p>
        <div className="mt-auto">
        
        </div>
      </div>
    </div>
  );
};

export default LeatherCollectionCard;