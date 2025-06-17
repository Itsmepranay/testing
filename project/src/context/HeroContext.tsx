import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface HeroProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  price: string;
  features: string[];
  updatedAt: string;
}

interface HeroContextType {
  heroProduct: HeroProduct;
  updateHeroProduct: (product: Partial<HeroProduct>) => void;
  isUpdating: boolean;
}

const defaultHeroProduct: HeroProduct = {
  id: 'coconut-bowl-set',
  title: 'Handcrafted Coconut Bowl Set',
  description: 'Transform your dining experience with our beautifully handcrafted coconut bowls. Each piece is uniquely upcycled from discarded coconut shells, creating sustainable tableware that tells a story of environmental consciousness and artisan craftsmanship.',
  image: 'https://images.pexels.com/photos/6544373/pexels-photo-6544373.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ctaText: 'Shop Now - $24.99',
  ctaLink: '#shop',
  price: '$24.99',
  features: ['100% Natural Coconut Shell', 'Handcrafted by Artisans', 'Eco-Friendly & Sustainable', 'Food Safe Finish'],
  updatedAt: new Date().toISOString()
};

const HeroContext = createContext<HeroContextType | undefined>(undefined);

export const useHero = () => {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error('useHero must be used within a HeroProvider');
  }
  return context;
};

interface HeroProviderProps {
  children: ReactNode;
}

export const HeroProvider: React.FC<HeroProviderProps> = ({ children }) => {
  const [heroProduct, setHeroProduct] = useState<HeroProduct>(defaultHeroProduct);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    // Load hero product from localStorage
    const savedHeroProduct = localStorage.getItem('coconutHeroProduct');
    if (savedHeroProduct) {
      try {
        setHeroProduct(JSON.parse(savedHeroProduct));
      } catch (error) {
        console.error('Error loading hero product:', error);
      }
    }
  }, []);

  const updateHeroProduct = (productData: Partial<HeroProduct>) => {
    setIsUpdating(true);
    
    setTimeout(() => {
      const updatedProduct = {
        ...heroProduct,
        ...productData,
        updatedAt: new Date().toISOString()
      };
      
      setHeroProduct(updatedProduct);
      localStorage.setItem('coconutHeroProduct', JSON.stringify(updatedProduct));
      setIsUpdating(false);
    }, 500); // Simulate update delay for smooth transition
  };

  return (
    <HeroContext.Provider value={{ heroProduct, updateHeroProduct, isUpdating }}>
      {children}
    </HeroContext.Provider>
  );
};