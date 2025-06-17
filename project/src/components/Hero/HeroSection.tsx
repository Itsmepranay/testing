import React from 'react';
import { ArrowRight, Leaf, Recycle, Heart, Star } from 'lucide-react';
import { useHero } from '../../context/HeroContext';

const HeroSection: React.FC = () => {
  const { heroProduct, isUpdating } = useHero();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-amber-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-500 ${
          isUpdating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
        }`}>
          
          {/* Content Side */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <Leaf className="h-4 w-4" />
              <span>100% Sustainable & Handcrafted</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {heroProduct.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                {heroProduct.description}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {heroProduct.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Price and CTA */}
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <span className="text-3xl font-bold text-green-600">{heroProduct.price}</span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                  ))}
                  <span className="text-gray-600 ml-2">(4.9/5)</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={heroProduct.ctaLink}
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>{heroProduct.ctaText}</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Recycle className="h-5 w-5 text-green-600" />
                <span className="text-sm">Eco-Friendly</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="text-sm">Handmade</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Leaf className="h-5 w-5 text-green-600" />
                <span className="text-sm">Natural</span>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative group">
              {/* Main Product Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={heroProduct.image}
                  alt={heroProduct.title}
                  className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-amber-400 rounded-full p-4 shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>

              {/* Product Badge */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="text-sm font-medium text-gray-900">Featured Product</div>
                <div className="text-xs text-gray-600">Limited Edition</div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -z-10 top-8 right-8 w-72 h-72 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -z-10 bottom-8 left-8 w-64 h-64 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {isUpdating && (
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center z-10">
          <div className="bg-white rounded-lg p-6 shadow-lg flex items-center space-x-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>
            <span className="text-gray-700 font-medium">Updating hero content...</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;