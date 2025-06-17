import React from 'react';
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <Leaf className="h-8 w-8 text-green-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full"></div>
              </div>
              <div>
                <span className="text-2xl font-bold">Everything</span>
                <span className="text-2xl font-bold text-green-400 ml-1">Coconut</span>
              </div>
            </div>
            <p className="text-green-100 mb-6 max-w-md">
              Crafting sustainable, beautiful products from upcycled coconut shells. 
              Each piece tells a story of environmental consciousness and artisan craftsmanship, 
              bringing nature's beauty into your everyday life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-300 hover:text-green-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-green-300 hover:text-green-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-green-300 hover:text-green-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Wholesale</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-green-400" />
                <a href="mailto:hello@everythingcoconut.com" className="text-green-100 hover:text-white transition-colors">
                  hello@everythingcoconut.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-green-400" />
                <a href="tel:+1-555-COCONUT" className="text-green-100 hover:text-white transition-colors">
                  +1 (555) COCONUT
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5" />
                <span className="text-green-100">
                  123 Sustainable Street<br />
                  Eco City, EC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8 text-center">
          <p className="text-green-200">
            © 2024 Everything Coconut. All rights reserved. Made with 🥥 and love for the planet.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;