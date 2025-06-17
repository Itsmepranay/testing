export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  collection: string;
  featured: boolean;
  createdAt: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  createdAt: string;
}

export interface FilterState {
  collection: string;
  sortBy: 'name' | 'price-low' | 'price-high' | 'newest';
  searchQuery: string;
}