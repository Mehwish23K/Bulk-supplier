import React from "react";
import Button from "../../common/Button";
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
    const RightArrow = FiArrowRight as React.ComponentType<{ 
        className?: string;
        size?: number | string;
      }>;
      const LeftArrow = FiArrowLeft as React.ComponentType<{ 
        className?: string;
        size?: number | string;
      }>;
      const Stars= FaStar as React.ComponentType<{ 
        className?: string;
        size?: number | string;
      }>;
    
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-[1200px]">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-sm font-normal mb-2 tracking-tight text-gray-400">Testimonials</h3>
                        <h2 className="text-4xl font-bold mb-2 tracking-tighter">
                            <span className="block">What Our Client Say</span>
                        </h2>
                    </div>
                    
                    <div className="flex gap-2">  
                        <Button 
                            variant="primary" 
                            className='text-white flex items-center gap-2 py-4 '
                        >
                            <LeftArrow className="text-white" size={18} />
                        </Button>
                        <Button 
                            variant="primary" 
                            className='text-white flex items-center gap-2'
                        >
                            <RightArrow className="text-white" size={18} />
                        </Button>
                    </div>
                </div>
                <div className="w-[996px] h-[508px] bg-gray-100 rounded-lg mx-auto flex items-center justify-center">
                    <div className="w-[857px] h-[352px] bg-gray-100 mx-auto flex items-center justify-center">
                        <div className="relative w-[352px] h-[352px] bg-gray-200">
                            <img 
        src="/images/stylish-confident-businesswoman-smiling 2.png" 
        alt="Main Content" 
        className="w-full h-full object-cover"
      />
       <div className="absolute top-2 right-2 w-[49px] h-[49px]">
        <img 
          src="/images/Group 1171275039.png" 
          alt="Badge" 
          className="w-full h-full object-cover  border-2"
        />
      </div>
    </div>
    <div className="flex-1 bg-gray-100 flex items-center justify-center p-8">
      
      <div>
       <div className="flex items-center mb-6">
                                <div className="flex mr-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Stars key={i} className="text-yellow-400 w-5 h-5" />
                                    ))}
                                </div>
                                <span className="text-lg font-bold text-gray-800">5.0</span>
                            </div>
                            
        <p className="text-gray-600 mb-4">"Working with Forth Vale has been a game-changer for our business. Their custom branding options helped us create truly unique products."</p>
        <p className="font-semibold text-lg">Sarah Ahmed, Lahore</p>
      </div>
    </div>
                        </div>


                    </div>

                </div>
            
        </section>
    );
};

export default Testimonial;