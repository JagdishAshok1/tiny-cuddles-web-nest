
import React from 'react';
import { Leaf, Hand-Heart, Earth, Baby } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Organic Materials",
      description: "GOTS-certified organic cotton, free from harmful chemicals and gentle on delicate skin"
    },
    {
      icon: Hand-Heart,
      title: "Designed by a Mom",
      description: "Every piece created with a mother's intuition and understanding of what babies truly need"
    },
    {
      icon: Baby,
      title: "Hand-finished with Care",
      description: "Each garment receives personal attention and quality checks before reaching your little one"
    },
    {
      icon: Earth,
      title: "Eco-Conscious Production",
      description: "From fabric sourcing to packaging, every step considers our planet's future"
    }
  ];

  return (
    <section className="py-20 bg-sage-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-sage-800 mb-6">
            Why Moms Love Tiny Cuddles
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            More than clothing – it's peace of mind wrapped in love
          </p>
          <div className="w-24 h-1 bg-blush-300 mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="bg-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <feature.icon className="w-10 h-10 text-sage-600" />
              </div>
              <h3 className="text-xl font-medium text-sage-800 mb-4">{feature.title}</h3>
              <p className="text-sage-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
