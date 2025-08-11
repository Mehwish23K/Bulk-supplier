import React, { useState } from 'react';
import ProductCard from '../../common/ProductCard';

const PremiumLeatherSection = () => {
  const categories = ['Belts', 'Wallets', 'Backpacks', 'All'];
  const allProducts = [
    { 
      name: 'Trendy Wallet', 
      price: '875.00', 
      rating: '4.8', 
      discount: '10% off',
      imageSrc: '/images/Iphone 14 pro 2.png',
      categories: 'Wallets'
    },
    { 
      name: 'Classic Belt', 
      price: '650.00', 
      rating: '4.7',
      imageSrc: '/images/pngegg 1.png',
      categories: 'Belts'
    },
    { 
      name: 'Travel Backpack', 
      price: '1200.00', 
      rating: '4.9', 
      discount: '5% off',
      imageSrc: '/images/Iphone 14 pro 2.png',
      categories: 'Backpacks'
    },
    { 
      name: 'Trendy Wallet', 
      price: '875.00', 
      rating: '4.8', 
      discount: '10% off',
      imageSrc: '/images/pngegg 1.png',
      categories: 'Wallets'
    },
    { 
      name: 'Classic Belt', 
      price: '650.00', 
      rating: '4.7', 
      discount: '15% off',
      imageSrc: '/images/Iphone 14 pro 2.png',
      categories: 'Belts'
    },
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const [products, setProducts] = useState(allProducts);

  const filterProducts = (category: string) => {
    setActiveCategory(category);
    if (category === 'All') {
      setProducts(allProducts);
    } else {
      setProducts(allProducts.filter(product => product.categories === category));
    }
  };

 return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Changed max-width to match ProductShowCase (1200px) */}
        <div className="w-full max-w-[1200px] mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="mb-8 md:mb-0">
              <h2 className="text-lg">Premium Leather Creations</h2>
              <p className="text-4xl font-bold mb-4">Explore Our<br />Masterpiece Designs</p>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 items-center">
              {categories.map((category) => (
                <button 
                  key={category}
                  onClick={() => filterProducts(category)}
                  className={`px-4 py-2 border border-gray-300 hover:bg-black hover:text-white transition-colors text-sm ${
                    activeCategory === category ? 'bg-black text-white' : ''
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={`${product.name}-${index}`}
                name={product.name}
                price={product.price}
                rating={product.rating}
                discount={product.discount}
                imageSrc={product.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumLeatherSection;