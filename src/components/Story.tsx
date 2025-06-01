import React from 'react';
import { Heart } from 'lucide-react';

const Story = () => {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Heart className="w-12 h-12 text-sage-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-light text-sage-800 mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-blush-300 mx-auto rounded-full"></div>
          </div>
          
          <div className="prose prose-lg mx-auto text-sage-700 leading-relaxed">
            <p className="text-xl mb-8 text-center italic">
              "Sometimes the most beautiful things are born from the simplest needs."
            </p>
            
            <div className="bg-cream-50 p-8 rounded-3xl mb-8">
              <p className="mb-6">
                When my twins, Lily and Sam, were born, I found myself searching endlessly for clothing that matched my values as a mother. I wanted pieces that were gentle on their delicate skin, kind to our planet, and beautiful enough to treasure in photos and memories.
              </p>
              
              <p className="mb-6">
                Living far from family, with no nearby support system, those early days were filled with late-night research sessions about organic fabrics, safe dyes, and ethical production. I discovered that truly sustainable, beautifully crafted children's wear was harder to find than I'd imagined.
              </p>
              
              <p className="mb-6">
                So, with a heart full of love and a vision for something better, I started creating the clothes I wished existed. Each piece begins with the question: "Would I feel completely at peace putting this on my own child?"
              </p>
              
              <p className="text-lg font-medium text-sage-800">
                Today, Tiny Cuddles represents that same careful attention, that same mother's touch, in every thread. Because every child deserves to be wrapped in love—and every mother deserves to feel confident in her choices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
