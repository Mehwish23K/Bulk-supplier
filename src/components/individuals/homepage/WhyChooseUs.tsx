import React from 'react';
import WhyChooseUsCard from '../../common/WhyChooseUsCard';
import Button from '../../common/Button';
import { FiArrowRight } from 'react-icons/fi';

interface WhyChooseUs {
  title: string;
  description: string;
  imageSrc: string;
}

const WhyChooseUs = () => {
  const qualities: WhyChooseUs[] = [
    {
      title: 'Premium Leather',
      description: 'Only the finest quality leather sourced from trusted suppliers worldwide',
      imageSrc: '/images/PreLeather.png'
    },
    {
      title: 'Low MOQs',
      description: 'Flexible minimum order quantities to suit businesses of all sizes',
      imageSrc: '/images/LowMoq.png'
    },
    {
      title: 'Custom Branding',
      description: 'Personalized branding options to make your products uniquely yours',
      imageSrc: '/images/CustomBranding.png'
    },
    {
      title: 'Fast Turnaround',
      description: 'Efficient production processes ensuring quick delivery times',
      imageSrc: '/images/FastTurnAround.png'
    },
    {
      title: 'Export Experience',
      description: 'Decades of international shipping and export expertise',
      imageSrc: '/images/export.png'
    },
    {
      title: 'Transparent Pricing',
      description: 'Clear, upfront pricing with no hidden costs or surprises',
      imageSrc: '/images/Dollar.png'
    }
  ];

  const RightArrow = FiArrowRight as React.ComponentType<{ 
    className?: string;
    size?: number | string;
  }>;
  return (
<section className="bg-white w-[1168px] h-[957.37px] mx-auto overflow-hidden">
  {/* Header */}
  <div className="flex flex-col items-center justify-center py-16">
    <p className="text-center text-gray-400 text-sm font-extralight">The Forth Vale Edge</p>
    <h1 className="text-center text-5xl font-semibold tracking-tight">Why Choose Us</h1>
  </div>
  
  {/* Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
    {qualities.map((quality, index) => (
      <WhyChooseUsCard key={index} {...quality} />
    ))}
  </div>
  
  {/* Centered Button */}
  <div className="flex justify-center pb-16">
    <Button 
      variant="primary" 
      className='text-white flex items-center gap-2 tracking-tighter'
    >
      Book a Consultation
      <RightArrow className="text-white" size={18} />
    </Button>
  </div>
</section>

  );};
  export default WhyChooseUs;