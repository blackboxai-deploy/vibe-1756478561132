// Types for Men's Clothing Website

export interface MensClothing {
  id: string;
  name: string;
  category: 'topwear' | 'bottomwear' | 'traditional' | 'seasonal';
  subcategory: 'shirt' | 'tshirt' | 'jeans' | 'trousers' | 'kurta' | 'jacket' | 'sweater' | 'shorts' | 'sherwani' | 'blazer' | 'suit';
  clothingType: string;
  brand: string;
  price: number;
  discountPrice?: number;
  sizes: string[];
  colors: string[];
  fabric: string;
  fitType: 'slim' | 'regular' | 'relaxed' | 'oversized';
  occasion: string[];
  season: string[];
  collarType?: string;
  sleeveType?: string;
  pattern: string;
  careInstructions: string;
  images: string[];
  description: string;
  specifications: {
    material: string;
    washCare: string;
    countryOfOrigin: string;
    manufacturer: string;
  };
  ratings: number;
  reviewCount: number;
  reviews: Review[];
  inStock: boolean;
  featured: boolean;
  new: boolean;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
  helpful: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  addresses: Address[];
  orders: Order[];
  wishlist: string[];
  sizePreferences: {
    topwear: string;
    bottomwear: string;
    traditional: string;
  };
  preferences: {
    brands: string[];
    priceRange: [number, number];
    fitTypes: string[];
  };
}

export interface Address {
  id: string;
  type: 'home' | 'office' | 'other';
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  product: MensClothing;
  size: string;
  color: string;
  quantity: number;
  addedAt: string;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  discount: number;
  shippingCharge: number;
  finalAmount: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled' | 'returned';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  paymentMethod: string;
  shippingAddress: Address;
  billingAddress: Address;
  orderDate: string;
  deliveryDate?: string;
  trackingId?: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
  image: string;
}

export interface FilterOptions {
  categories: string[];
  subcategories: string[];
  brands: string[];
  priceRange: [number, number];
  sizes: string[];
  colors: string[];
  fabrics: string[];
  fitTypes: string[];
  occasions: string[];
  patterns: string[];
  inStock?: boolean;
  onSale?: boolean;
  featured?: boolean;
  new?: boolean;
}

export interface SortOption {
  value: string;
  label: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  subcategories: Subcategory[];
  description: string;
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
}