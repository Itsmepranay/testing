import React, { useState } from 'react';
import { LogOut, Save, Eye, Upload, Leaf, RefreshCw } from 'lucide-react';
import { useHero } from '../../context/HeroContext';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const { heroProduct, updateHeroProduct, isUpdating } = useHero();
  const [formData, setFormData] = useState({
    title: heroProduct.title,
    description: heroProduct.description,
    image: heroProduct.image,
    ctaText: heroProduct.ctaText,
    ctaLink: heroProduct.ctaLink,
    price: heroProduct.price,
    features: heroProduct.features.join(', ')
  });
  const [previewMode, setPreviewMode] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    const updatedProduct = {
      ...formData,
      features: formData.features.split(',').map(f => f.trim()).filter(f => f.length > 0)
    };
    updateHeroProduct(updatedProduct);
  };

  const handleReset = () => {
    setFormData({
      title: heroProduct.title,
      description: heroProduct.description,
      image: heroProduct.image,
      ctaText: heroProduct.ctaText,
      ctaLink: heroProduct.ctaLink,
      price: heroProduct.price,
      features: heroProduct.features.join(', ')
    });
  };

  const suggestedImages = [
    'https://images.pexels.com/photos/6544373/pexels-photo-6544373.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/6544374/pexels-photo-6544374.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Leaf className="h-8 w-8 text-green-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Everything Coconut</h1>
                <p className="text-sm text-gray-600">Admin Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors"
              >
                <Eye className="h-4 w-4" />
                <span>View Site</span>
              </a>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Hero Banner Settings</h2>
              <div className="flex space-x-2">
                <button
                  onClick={handleReset}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <RefreshCw className="h-4 w-4" />
                  <span>Reset</span>
                </button>
                <button
                  onClick={handleSave}
                  disabled={isUpdating}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Save className="h-4 w-4" />
                  <span>{isUpdating ? 'Saving...' : 'Save Changes'}</span>
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {/* Product Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter product title"
                />
              </div>

              {/* Product Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter product description"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., $24.99"
                />
              </div>

              {/* Product Features */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Features (comma-separated)
                </label>
                <input
                  type="text"
                  name="features"
                  value={formData.features}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Feature 1, Feature 2, Feature 3"
                />
              </div>

              {/* CTA Button Text */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Call-to-Action Button Text
                </label>
                <input
                  type="text"
                  name="ctaText"
                  value={formData.ctaText}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., Shop Now - $24.99"
                />
              </div>

              {/* CTA Link */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Call-to-Action Link
                </label>
                <input
                  type="text"
                  name="ctaLink"
                  value={formData.ctaLink}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., #shop or /products"
                />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Product Image</h3>
            
            {/* Current Image Preview */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Image Preview
              </label>
              <div className="relative">
                <img
                  src={formData.image}
                  alt="Product preview"
                  className="w-full h-64 object-cover rounded-lg border-2 border-gray-200"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.pexels.com/photos/6544373/pexels-photo-6544373.jpeg?auto=compress&cs=tinysrgb&w=1200';
                  }}
                />
              </div>
            </div>

            {/* Image URL Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Suggested Images */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Suggested Images
              </label>
              <div className="grid grid-cols-2 gap-3">
                {suggestedImages.map((imageUrl, index) => (
                  <button
                    key={index}
                    onClick={() => setFormData(prev => ({ ...prev, image: imageUrl }))}
                    className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                      formData.image === imageUrl 
                        ? 'border-green-500 ring-2 ring-green-200' 
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    <img
                      src={imageUrl}
                      alt={`Suggested ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                    {formData.image === imageUrl && (
                      <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                        <div className="bg-green-500 text-white rounded-full p-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${isUpdating ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`}></div>
              <span className="text-sm text-gray-600">
                {isUpdating ? 'Updating hero banner...' : `Last updated: ${new Date(heroProduct.updatedAt).toLocaleString()}`}
              </span>
            </div>
            <div className="text-sm text-gray-500">
              Changes are applied instantly to the live site
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;