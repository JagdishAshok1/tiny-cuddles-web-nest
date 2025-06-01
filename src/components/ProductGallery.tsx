
import React from 'react';

const ProductGallery = () => {
  const products = [
    {
      id: 1,
      name: "Dusty Blue Dreams Set",
      description: "Soft overalls with playful patterns, perfect for little explorers",
      price: "$58",
      image: "/lovable-uploads/79f12877-ed68-40c2-97b2-ed5d8d456288.png",
      color: "Dusty Blue"
    },
    {
      id: 2,
      name: "Sage Meadow Romper",
      description: "Gentle sage tones with whimsical details for everyday comfort",
      price: "$52",
      image: "/lovable-uploads/0abdf50e-d548-4f96-bedd-de194408267e.png",
      color: "Soft Sage"
    },
    {
      id: 3,
      name: "Sunshine Citrus Set",
      description: "Bright lemon prints to bring joy to every day",
      price: "$55",
      image: "/lovable-uploads/53b2e3dc-6dae-4911-b511-8b93265e0bb9.png",
      color: "Cream White"
    },
    {
      id: 4,
      name: "Garden Stripe Overalls",
      description: "Fresh stripes in earth tones for nature-loving little ones",
      price: "$56",
      image: "/lovable-uploads/15adc13a-4277-4ecd-84a0-037113239776.png",
      color: "Natural Green"
    },
    {
      id: 5,
      name: "Oh, Baby! Onesie",
      description: "Sweet and simple, made with the softest organic cotton",
      price: "$28",
      image: "/lovable-uploads/6283951b-9b06-482d-a9e6-0739521dcaf0.png",
      color: "Sky Blue"
    },
    {
      id: 6,
      name: "From Mama Bodysuit",
      description: "A love letter from mama to baby, in the gentlest pink",
      price: "$28",
      image: "/lovable-uploads/cd9c5ec5-9745-4e50-a610-0c47cc275ff8.png",
      color: "Blush Pink"
    }
  ];

  return (
    <section id="shop" className="py-20 bg-cream-25">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-sage-800 mb-6">Our Collection</h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            Each piece lovingly crafted with organic materials and finished by hand
          </p>
          <div className="w-24 h-1 bg-blush-300 mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-sage-500 mb-2">{product.color}</div>
                <h3 className="text-xl font-medium text-sage-800 mb-2">{product.name}</h3>
                <p className="text-sage-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-light text-sage-800">{product.price}</span>
                  <button className="bg-sage-600 text-white px-6 py-2 rounded-full hover:bg-sage-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
