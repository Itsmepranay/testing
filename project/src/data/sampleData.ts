import { Product, Collection } from '../types';

export const sampleCollections: Collection[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest gadgets and electronic devices',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'clothing',
    name: 'Clothing',
    description: 'Fashion and apparel for all occasions',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'home-garden',
    name: 'Home & Garden',
    description: 'Everything for your home and garden',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'books',
    name: 'Books',
    description: 'Knowledge and entertainment through reading',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'sports',
    name: 'Sports & Outdoors',
    description: 'Gear for active lifestyle and outdoor adventures',
    image: 'https://images.pexels.com/photos/163444/sport-treadmill-tor-start-163444.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: '2024-01-01T00:00:00Z'
  }
];

export const sampleProducts: Product[] = [
  // Electronics
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 89.99,
    description: 'Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Electronics',
    featured: true,
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 249.99,
    description: 'Advanced fitness tracking watch with heart rate monitor, GPS, and smartphone connectivity.',
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Electronics',
    featured: true,
    createdAt: '2024-01-14T09:30:00Z'
  },
  {
    id: '3',
    name: 'Portable Power Bank',
    price: 35.99,
    description: '20,000mAh portable charger with fast charging technology and multiple USB ports.',
    image: 'https://images.pexels.com/photos/4772505/pexels-photo-4772505.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Electronics',
    featured: false,
    createdAt: '2024-01-13T14:20:00Z'
  },
  {
    id: '4',
    name: 'Wireless Mouse',
    price: 29.99,
    description: 'Ergonomic wireless mouse with precision tracking and long battery life.',
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Electronics',
    featured: false,
    createdAt: '2024-01-12T11:15:00Z'
  },

  // Clothing
  {
    id: '5',
    name: 'Premium Cotton T-Shirt',
    price: 24.99,
    description: 'Soft, comfortable 100% organic cotton t-shirt available in multiple colors and sizes.',
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Clothing',
    featured: true,
    createdAt: '2024-01-11T16:45:00Z'
  },
  {
    id: '6',
    name: 'Denim Jacket',
    price: 79.99,
    description: 'Classic denim jacket with modern fit and premium stitching. Perfect for casual wear.',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Clothing',
    featured: false,
    createdAt: '2024-01-10T13:30:00Z'
  },
  {
    id: '7',
    name: 'Running Shoes',
    price: 119.99,
    description: 'Lightweight running shoes with advanced cushioning and breathable mesh upper.',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Clothing',
    featured: true,
    createdAt: '2024-01-09T12:00:00Z'
  },
  {
    id: '8',
    name: 'Winter Scarf',
    price: 34.99,
    description: 'Cozy wool blend scarf available in various colors. Perfect for cold weather.',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Clothing',
    featured: false,
    createdAt: '2024-01-08T15:20:00Z'
  },

  // Home & Garden
  {
    id: '9',
    name: 'Ceramic Plant Pot Set',
    price: 45.99,
    description: 'Set of 3 decorative ceramic plant pots with drainage holes. Perfect for indoor plants.',
    image: 'https://images.pexels.com/photos/4751978/pexels-photo-4751978.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Home & Garden',
    featured: true,
    createdAt: '2024-01-07T10:30:00Z'
  },
  {
    id: '10',
    name: 'LED Desk Lamp',
    price: 59.99,
    description: 'Adjustable LED desk lamp with multiple brightness levels and USB charging port.',
    image: 'https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Home & Garden',
    featured: false,
    createdAt: '2024-01-06T14:15:00Z'
  },
  {
    id: '11',
    name: 'Throw Pillow Set',
    price: 39.99,
    description: 'Set of 2 decorative throw pillows with removable covers. Various patterns available.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Home & Garden',
    featured: false,
    createdAt: '2024-01-05T11:45:00Z'
  },
  {
    id: '12',
    name: 'Garden Tool Set',
    price: 89.99,
    description: 'Complete garden tool set with ergonomic handles and storage case.',
    image: 'https://images.pexels.com/photos/4505168/pexels-photo-4505168.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Home & Garden',
    featured: true,
    createdAt: '2024-01-04T09:20:00Z'
  },

  // Books
  {
    id: '13',
    name: 'Modern Web Development Guide',
    price: 49.99,
    description: 'Comprehensive guide to modern web development technologies and best practices.',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Books',
    featured: false,
    createdAt: '2024-01-03T16:30:00Z'
  },
  {
    id: '14',
    name: 'Mystery Novel Collection',
    price: 29.99,
    description: 'Collection of 3 bestselling mystery novels from award-winning authors.',
    image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Books',
    featured: true,
    createdAt: '2024-01-02T12:45:00Z'
  },
  {
    id: '15',
    name: 'Cookbook - Healthy Recipes',
    price: 34.99,
    description: 'Healthy recipe cookbook with over 200 nutritious and delicious meal ideas.',
    image: 'https://images.pexels.com/photos/4198224/pexels-photo-4198224.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Books',
    featured: false,
    createdAt: '2024-01-01T10:15:00Z'
  },

  // Sports & Outdoors
  {
    id: '16',
    name: 'Yoga Mat Premium',
    price: 49.99,
    description: 'Non-slip premium yoga mat with excellent cushioning and eco-friendly materials.',
    image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Sports & Outdoors',
    featured: true,
    createdAt: '2023-12-31T14:30:00Z'
  },
  {
    id: '17',
    name: 'Water Bottle Insulated',
    price: 24.99,
    description: 'Stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.',
    image: 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Sports & Outdoors',
    featured: false,
    createdAt: '2023-12-30T11:20:00Z'
  },
  {
    id: '18',
    name: 'Camping Backpack',
    price: 129.99,
    description: '50L hiking backpack with multiple compartments and weather-resistant material.',
    image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Sports & Outdoors',
    featured: true,
    createdAt: '2023-12-29T15:45:00Z'
  },
  {
    id: '19',
    name: 'Resistance Bands Set',
    price: 19.99,
    description: 'Set of 5 resistance bands with different resistance levels and door anchor.',
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Sports & Outdoors',
    featured: false,
    createdAt: '2023-12-28T13:10:00Z'
  },
  {
    id: '20',
    name: 'Bluetooth Sports Earbuds',
    price: 79.99,
    description: 'Wireless sports earbuds with sweat resistance and secure fit for active lifestyles.',
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800',
    collection: 'Sports & Outdoors',
    featured: false,
    createdAt: '2023-12-27T16:25:00Z'
  }
];