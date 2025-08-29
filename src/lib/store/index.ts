import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, User, MensClothing, FilterOptions } from '@/types';

interface CartStore {
  items: CartItem[];
  addItem: (product: MensClothing, size: string, color: string, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

interface UserStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
}

interface WishlistStore {
  items: string[];
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

interface AppStore {
  recentlyViewed: string[];
  searchQuery: string;
  filters: FilterOptions;
  addToRecentlyViewed: (productId: string) => void;
  setSearchQuery: (query: string) => void;
  updateFilters: (filters: Partial<FilterOptions>) => void;
  clearFilters: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, size, color, quantity = 1) => {
        const existingItemIndex = get().items.findIndex(
          item => item.productId === product.id && item.size === size && item.color === color
        );

        if (existingItemIndex >= 0) {
          set(state => ({
            items: state.items.map((item, index) =>
              index === existingItemIndex
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          }));
        } else {
          const newItem: CartItem = {
            id: `${product.id}-${size}-${color}-${Date.now()}`,
            productId: product.id,
            product,
            size,
            color,
            quantity,
            addedAt: new Date().toISOString()
          };
          set(state => ({ items: [...state.items, newItem] }));
        }
      },
      removeItem: (id) => {
        set(state => ({
          items: state.items.filter(item => item.id !== id)
        }));
      },
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        set(state => ({
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
        }));
      },
      clearCart: () => set({ items: [] }),
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          const price = item.product.discountPrice || item.product.price;
          return total + (price * item.quantity);
        }, 0);
      }
    }),
    {
      name: 'cart-storage'
    }
  )
);

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
      updateProfile: (updates) => set(state => ({
        user: state.user ? { ...state.user, ...updates } : null
      }))
    }),
    {
      name: 'user-storage'
    }
  )
);

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (productId) => {
        if (!get().isInWishlist(productId)) {
          set(state => ({ items: [...state.items, productId] }));
        }
      },
      removeItem: (productId) => {
        set(state => ({
          items: state.items.filter(id => id !== productId)
        }));
      },
      isInWishlist: (productId) => {
        return get().items.includes(productId);
      },
      clearWishlist: () => set({ items: [] })
    }),
    {
      name: 'wishlist-storage'
    }
  )
);

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      recentlyViewed: [],
      searchQuery: '',
      filters: {
        categories: [],
        subcategories: [],
        brands: [],
        priceRange: [0, 10000],
        sizes: [],
        colors: [],
        fabrics: [],
        fitTypes: [],
        occasions: [],
        patterns: []
      },
      addToRecentlyViewed: (productId) => {
        const current = get().recentlyViewed;
        const filtered = current.filter(id => id !== productId);
        const updated = [productId, ...filtered].slice(0, 10); // Keep last 10
        set({ recentlyViewed: updated });
      },
      setSearchQuery: (query) => set({ searchQuery: query }),
      updateFilters: (newFilters) => set(state => ({
        filters: { ...state.filters, ...newFilters }
      })),
      clearFilters: () => set({
        filters: {
          categories: [],
          subcategories: [],
          brands: [],
          priceRange: [0, 10000],
          sizes: [],
          colors: [],
          fabrics: [],
          fitTypes: [],
          occasions: [],
          patterns: []
        }
      })
    }),
    {
      name: 'app-storage'
    }
  )
);