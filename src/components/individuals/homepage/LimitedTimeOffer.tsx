import Button from "../../common/Button";
import { FiArrowRight } from 'react-icons/fi';

export default function LimitedTimeOffer() {
  const RightArrow = FiArrowRight as React.ComponentType<{ 
    className?: string;
    size?: number | string;
  }>;

  return (
    <section className="relative bg-[#F5F5F5]">
      <div className="w-full max-w-[1440px] mx-auto px-4 py-12 md:py-0">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 w-full h-64 md:h-96 lg:h-[566px] order-1 lg:order-none">
            <div className="w-full h-full">
              <img 
                src="/images/22974582821 1.png" 
                alt="Luxury leather goods"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center top' }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2 w-full px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-0 flex flex-col justify-center space-y-4 md:space-y-6">
            {/* Title */}
            <h1 className="text-lg md:text-xl text-gray-700 font-light tracking-wide">
              Limited Time Offer
            </h1>
            
            {/* Paragraph */}
            <p className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900">
              <span className="block">25% Off All Fashion</span>
              <span className="block">Favorites-Limited Time!</span>
            </p>
            
            <h1 className="text-base md:text-lg lg:text-xl text-gray-700 font-light tracking-wide">
              Dummy text
            </h1>
            
            {/* Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                bgColor="bg-[#281158]" 
                textColor="text-white"
                rounded="rounded-lg"
                className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-normal"
              >
                Shop Now
                <RightArrow className="text-white" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
