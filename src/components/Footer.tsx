
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sage-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/a596d65b-64f9-410e-8a8b-6a6cdc63f3f5.png" 
              alt="Tiny Cuddles" 
              className="h-16 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-sage-200 leading-relaxed max-w-md">
              Sustainable children's wear made with love by a mother, for every mother. 
              Because every child deserves to be wrapped in comfort and care.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-sage-200">
              <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Onesies & Bodysuits</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rompers & Sets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Seasonal Collection</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Connect</h4>
            <ul className="space-y-2 text-sage-200">
              <li><a href="#story" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-sage-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sage-300 text-sm mb-4 md:mb-0">
              © 2024 Tiny Cuddles. Made with love for little ones everywhere.
            </p>
            <div className="flex space-x-6 text-sage-300">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Pinterest</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
