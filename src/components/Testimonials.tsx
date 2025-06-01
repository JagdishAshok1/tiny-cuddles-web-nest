
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I finally found clothes I trust on my baby's skin—and they're so beautiful. Each piece feels like it was made just for us.",
      author: "Rhea M.",
      location: "Portland, OR"
    },
    {
      quote: "It's like receiving a warm hug from one mother to another. The quality and thoughtfulness in every detail brings me such peace.",
      author: "Alina G.",
      location: "Austin, TX"
    },
    {
      quote: "These aren't just clothes—they're little works of art that I know are safe for my daughter. Worth every penny for the love that goes into them.",
      author: "Sarah K.",
      location: "San Francisco, CA"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-sage-800 mb-6">
            Love from Our Community
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            Hear from mothers who've made Tiny Cuddles part of their family's story
          </p>
          <div className="w-24 h-1 bg-blush-300 mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-cream-50 p-8 rounded-3xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl text-blush-300 mb-4">"</div>
              <p className="text-sage-700 mb-6 leading-relaxed italic">
                {testimonial.quote}
              </p>
              <div className="text-sage-800 font-medium">{testimonial.author}</div>
              <div className="text-sage-500 text-sm">{testimonial.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
