import React from 'react';

type WhyChooseUsCard = {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
};

const WhyChooseUsCard: React.FC<WhyChooseUsCard> = ({
  title,
  description,
  imageSrc,
  className = ''
}) => {
  return (
    <div 
      className={`flex flex-col items-center bg-white ${className}`}
      style={{
        width: '302px',
        height: '261.68px'
      }}
    >
      {/* Image container - fixed dimensions */}
      <div className="relative w-[113.68px] h-[113.68px] mb-6">
       
        <div className="absolute inset-0 bg-[#EDE4FF] rounded-full overflow-hidden p-5 flex items-center justify-center">
          
          <div className="w-16 h-16 flex items-center justify-center"> 
            <img
              src={imageSrc}
              alt={title}
              className="max-w-full max-h-full object-contain"
              style={{
                width: '64px',
                height: '64px',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="w-full flex flex-col items-center px-4">
        <h3 className="text-2xl font-bold mb-3 text-center tracking-tighter">{title}</h3>
        <p className="text-gray-600 mb-6 text-center tracking-tighter">{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
