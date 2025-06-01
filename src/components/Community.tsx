
import React from 'react';

const Community = () => {
  return (
    <section id="community" className="py-20 bg-gradient-to-br from-blush-50 to-sage-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-sage-800 mb-6">
            Join the Cuddle Club
          </h2>
          <p className="text-xl text-sage-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Parenting is better together. Join our community of conscious parents for exclusive drops, 
            gentle parenting tips, and a little extra love in your inbox.
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent"
              />
              <button className="bg-sage-600 text-white px-8 py-4 rounded-full hover:bg-sage-700 transition-colors font-medium whitespace-nowrap">
                Join Our Family
              </button>
            </div>
            <p className="text-sm text-sage-500 mt-4">
              No spam, just love. Unsubscribe anytime. 💕
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/60 p-6 rounded-2xl">
              <h4 className="font-medium text-sage-800 mb-2">Early Access</h4>
              <p className="text-sage-600 text-sm">Be the first to shop new collections and limited releases</p>
            </div>
            <div className="bg-white/60 p-6 rounded-2xl">
              <h4 className="font-medium text-sage-800 mb-2">Gentle Guidance</h4>
              <p className="text-sage-600 text-sm">Monthly tips on sustainable parenting and child development</p>
            </div>
            <div className="bg-white/60 p-6 rounded-2xl">
              <h4 className="font-medium text-sage-800 mb-2">Community Love</h4>
              <p className="text-sage-600 text-sm">Connect with like-minded parents on this beautiful journey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
