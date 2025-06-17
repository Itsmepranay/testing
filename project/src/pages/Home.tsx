import React from 'react';
import HeroSection from '../components/Hero/HeroSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Additional sections can be added here */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Product Collections</h2>
          <p className="text-gray-600 mb-8">Coming soon - Browse our full range of sustainable coconut products</p>
        </div>
      </section>
    </div>
  );
};

export default Home;