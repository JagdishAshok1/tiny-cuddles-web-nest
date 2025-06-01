
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Story from '../components/Story';
import ProductGallery from '../components/ProductGallery';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Community from '../components/Community';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Story />
      <ProductGallery />
      <Features />
      <Testimonials />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
