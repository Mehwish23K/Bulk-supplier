import React from 'react';

const TrustedBySection = () => {
  return (
    <section className="text-center py-12 bg-white font-jakarta">
      <p className="text-lg md:text-4xl font-normal text-center mb-10 md:mb-16">
        <span className="block">Trusted by Esteemed Clientele for</span>
        <span className="block">Unrivaled Leather Solutions</span>
      </p>
      <div className="flex justify-center px-4">
        <img 
          src="/images/Group 1171274981.png"
          alt="Trusted clientele badge"
          className="w-full max-w-[1015px] h-[77px] object-contain"
        />
      </div>
    </section>
  );
};

export default TrustedBySection;