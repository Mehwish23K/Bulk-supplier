import Button from "../../components/common/button";
import { FiArrowRight } from 'react-icons/fi';

export function HeroSection() {
  const RightArrow = FiArrowRight as React.ComponentType<{ 
    className?: string;
    size?: number | string;
  }>;

  return (
    <section className="relative  bg-[#F5F5F5]"> {/* Added background color */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* Left Column - Text Content */}
          <div className="md:w-1/2 space-y-6 md:space-y-8"> {/* Increased spacing */}
            {/* Title - matches image styling */}
            <h1 className="text-xl md:text-2xl text-gray-700 font-light tracking-wide text-left">
              Discover Forth Vale Leather Craftsmanship
            </h1>
            
            {/* Paragraph - matches image styling */}
            <p className="text-3xl md:text-4xl font-serif font-normal text-gray-900 text-left
            ">
              <span className="block">Our luxury leather goods</span>
              <span className="block">are designed for a lifetime</span>
              <span className="block">of elegance</span>
            </p>
            
            {/* Buttons - adjusted to match image */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start">
              <Button 
                bgColor="bg-[#281158]" 
                textColor="text-white"
                rounded="rounded-lg"
                className="flex items-center gap-2 px-6 py-3 text-lg font-normal"
              >
                Book a Consultation
                <RightArrow className="text-white" size={20} />
              </Button>
              
              <Button 
                bgColor="bg-transparent" 
                textColor="text-gray-900"
                rounded="rounded-none"
                className="px-6 py-3 text-lg flex items-center gap-2 group underline underline-offset-4"
              >
                Get a Quote
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#281158]">
                  <RightArrow className="text-white" size={14} />
                </span>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="md:w-1/2">
            <div className="w-full h-full min-h-[300px] md:min-h-[400px] rounded-lg overflow-hidden">
              <img 
                src="/images/94691517953 1.png" 
                alt="Luxury leather goods"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}