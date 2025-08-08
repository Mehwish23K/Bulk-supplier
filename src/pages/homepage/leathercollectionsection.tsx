import React from 'react';
import LeatherCollectionCard from '../../components/common/leathercollectioncard';
import Button from '../../components/common/button';
import { FiArrowRight } from 'react-icons/fi';

interface CollectionItem {
  title: string;
  description: string;
  imageSrc: string;
}

const LeatherCollectionsSection = () => {
  const collections: CollectionItem[] = [
    {
      title: 'Our Wallet\nCollection',
      description: 'Discover our sophisticated range of wallets, meticulously crafted from the finest leather. Designed for ultimate functionality and enduring style, each piece offers smart organization and a luxurious feel, perfect for every discerning individual.',
      imageSrc: '/images/wallet.png'
    },
    {
      title: 'Our Bag\nCollection',
      description: 'Discover our sophisticated range of wallets, meticulously crafted from the finest leather. Designed for ultimate functionality and enduring style, each piece offers smart organization and a luxurious feel, perfect for every discerning individual.',
      imageSrc: '/images/Vector.png'
    },
    {
      title: 'Office\nEssentials',
      description: 'Discover our sophisticated range of wallets, meticulously crafted from the finest leather. Designed for ultimate functionality and enduring style, each piece offers smart organization and a luxurious feel, perfect for every discerning individual.',
      imageSrc: '/images/office-table.png'
    },
    {
      title: 'Custom Leather\nGoods',
      description: 'Discover our sophisticated range of wallets, meticulously crafted from the finest leather. Designed for ultimate functionality and enduring style, each piece offers smart organization and a luxurious feel, perfect for every discerning individual.',
      imageSrc: '/images/leather.png'
    },
    {
      title: 'Corporate\nGifts',
      description: 'Discover our sophisticated range of wallets, meticulously crafted from the finest leather. Designed for ultimate functionality and enduring style, each piece offers smart organization and a luxurious feel, perfect for every discerning individual.',
      imageSrc: '/images/gift.png'
    },
    {
      title: 'Travel\nAccessories',
      description: 'Discover our sophisticated range of wallets, meticulously crafted from the finest leather. Designed for ultimate functionality and enduring style, each piece offers smart organization and a luxurious feel, perfect for every discerning individual.',
      imageSrc: '/images/travel-accessories.png'
    }
  ];

  const RightArrow = FiArrowRight as React.ComponentType<{ 
    className?: string;
    size?: number | string;
  }>;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-normal mb-2 tracking-tight">Our Expertise</h3>
            <h2 className="text-3xl font-bold mb-2 tracking-tighter">
              <span className="block">Explore Our</span>
              <span className="block">Leather Collections</span>
            </h2>
          </div>
          
          {/* Right-aligned content with text above button */}
          <div className="flex flex-col items-end gap-4">
            <h5 className="text-sm font-normal text-right max-w-md text-gray-400">
              Discover a world of finely crafted leather goods designed to complement your lifestyle. 
              Our comprehensive range ensures you'll find the perfect piece. Let's discuss your vision today.
            </h5>
            <Button 
              variant="primary" 
              className='text-white flex items-center gap-2'
            >
              Book a free Consultation
              <RightArrow className="text-white" size={18} />
            </Button>
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <LeatherCollectionCard
              key={index}
              title={collection.title}
              description={collection.description}
              imageSrc={collection.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeatherCollectionsSection;