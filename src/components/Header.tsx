
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-sage-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/a596d65b-64f9-410e-8a8b-6a6cdc63f3f5.png" 
            alt="Tiny Cuddles" 
            className="h-12 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#shop" className="text-sage-700 hover:text-sage-900 transition-colors font-medium">Shop</a>
          <a href="#story" className="text-sage-700 hover:text-sage-900 transition-colors font-medium">Our Story</a>
          <a href="#community" className="text-sage-700 hover:text-sage-900 transition-colors font-medium">Community</a>
          <a href="#contact" className="text-sage-700 hover:text-sage-900 transition-colors font-medium">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="bg-sage-600 text-white px-6 py-2 rounded-full hover:bg-sage-700 transition-colors font-medium">
            Shop Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
