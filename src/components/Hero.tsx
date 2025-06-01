
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 to-blush-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sage-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blush-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-cream-200 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-full shadow-lg">
              <img 
                src="/lovable-uploads/a596d65b-64f9-410e-8a8b-6a6cdc63f3f5.png" 
                alt="Tiny Cuddles" 
                className="h-16 w-auto"
                style={{ filter: 'brightness(0) saturate(100%) invert(29%) sepia(15%) saturate(1024%) hue-rotate(76deg) brightness(93%) contrast(89%)' }}
                onLoad={() => console.log('Logo loaded successfully')}
                onError={(e) => {
                  console.error('Logo failed to load:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light text-sage-800 mb-6 leading-tight">
            Made by a Mother,
            <br />
            <span className="text-sage-600 font-normal">For Every Mother</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-sage-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Sustainable, Soft, and Full of Love – Clothing That Cares for Your Little One and Our Planet
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-sage-600 text-white px-8 py-4 rounded-full hover:bg-sage-700 transition-all duration-300 hover:scale-105 font-medium text-lg">
              Shop the Collection
            </button>
            <button className="border-2 border-sage-300 text-sage-700 px-8 py-4 rounded-full hover:bg-sage-50 transition-all duration-300 hover:scale-105 font-medium text-lg">
              Meet the Maker
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
