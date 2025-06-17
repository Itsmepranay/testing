import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, Collection } from '../types';
import { sampleProducts, sampleCollections } from '../data/sampleData';

interface ProductContextType {
  products: Product[];
  collections: Collection[];
  loading: boolean;
  addProduct: (product: Omit<Product, 'id' | 'createdAt'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  addCollection: (collection: Omit<Collection, 'id' | 'createdAt'>) => void;
  updateCollection: (id: string, collection: Partial<Collection>) => void;
  deleteCollection: (id: string) => void;
  getProductById: (id: string) => Product | undefined;
  getCollectionById: (id: string) => Collection | undefined;
  getProductsByCollection: (collection: string) => Product[];
  getFeaturedProducts: () => Product[];
  searchProducts: (query: string) => Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load data from localStorage or use sample data
    const savedProducts = localStorage.getItem('catalogProducts');
    const savedCollections = localStorage.getItem('catalogCollections');
    
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(sampleProducts);
      localStorage.setItem('catalogProducts', JSON.stringify(sampleProducts));
    }

    if (savedCollections) {
      setCollections(JSON.parse(savedCollections));
    } else {
      setCollections(sampleCollections);
      localStorage.setItem('catalogCollections', JSON.stringify(sampleCollections));
    }
    
    setLoading(false);
  }, []);

  useEffect(() => {
    // Save products to localStorage whenever products change
    if (products.length > 0) {
      localStorage.setItem('catalogProducts', JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    // Save collections to localStorage whenever collections change
    if (collections.length > 0) {
      localStorage.setItem('catalogCollections', JSON.stringify(collections));
    }
  }, [collections]);

  const addProduct = (productData: Omit<Product, 'id' | 'createdAt'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (id: string, productData: Partial<Product>) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id ? { ...product, ...productData } : product
      )
    );
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const addCollection = (collectionData: Omit<Collection, 'id' | 'createdAt'>) => {
    const newCollection: Collection = {
      ...collectionData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setCollections(prev => [...prev, newCollection]);
  };

  const updateCollection = (id: string, collectionData: Partial<Collection>) => {
    const oldCollection = collections.find(c => c.id === id);
    if (oldCollection && collectionData.name && oldCollection.name !== collectionData.name) {
      // Update all products that use this collection
      setProducts(prev =>
        prev.map(product =>
          product.collection === oldCollection.name
            ? { ...product, collection: collectionData.name }
            : product
        )
      );
    }
    
    setCollections(prev =>
      prev.map(collection =>
        collection.id === id ? { ...collection, ...collectionData } : collection
      )
    );
  };

  const deleteCollection = (id: string) => {
    const collection = collections.find(c => c.id === id);
    if (collection) {
      // Remove all products in this collection
      setProducts(prev => prev.filter(product => product.collection !== collection.name));
      setCollections(prev => prev.filter(c => c.id !== id));
    }
  };

  const getProductById = (id: string) => {
    return products.find(product => product.id === id);
  };

  const getCollectionById = (id: string) => {
    return collections.find(collection => collection.id === id);
  };

  const getProductsByCollection = (collection: string) => {
    return products.filter(product => 
      collection === 'all' || product.collection.toLowerCase() === collection.toLowerCase()
    );
  };

  const getFeaturedProducts = () => {
    return products.filter(product => product.featured);
  };

  const searchProducts = (query: string) => {
    if (!query.trim()) return products;
    
    const lowercaseQuery = query.toLowerCase();
    return products.filter(product =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.collection.toLowerCase().includes(lowercaseQuery)
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        collections,
        loading,
        addProduct,
        updateProduct,
        deleteProduct,
        addCollection,
        updateCollection,
        deleteCollection,
        getProductById,
        getCollectionById,
        getProductsByCollection,
        getFeaturedProducts,
        searchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};