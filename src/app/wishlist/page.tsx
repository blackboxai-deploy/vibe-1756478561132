'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/product/ProductCard';
import { useWishlistStore, useCartStore } from '@/lib/store';
import { mensClothing } from '@/lib/data/mens-clothing';

export default function WishlistPage() {
  const { items: wishlistItems, clearWishlist } = useWishlistStore();
  const { addItem: addToCart } = useCartStore();

  const wishlistProducts = useMemo(() => {
    return mensClothing.filter(product => wishlistItems.includes(product.id));
  }, [wishlistItems]);

  const handleAddAllToCart = () => {
    wishlistProducts.forEach(product => {
      if (product.inStock) {
        addToCart(product, product.sizes[0], product.colors[0], 1);
      }
    });
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <Heart className="mx-auto h-24 w-24 text-gray-300 mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Wishlist is Empty</h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Save items you love to your wishlist and shop them later. 
            Start browsing to add items to your wishlist!
          </p>
          <Button size="lg" asChild>
            <Link href="/">
              Start Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
            <p className="text-gray-600 mt-2">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
            </p>
          </div>
          
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <Button
              variant="outline"
              onClick={clearWishlist}
              className="text-red-600 border-red-200 hover:bg-red-50"
            >
              Clear All
            </Button>
            
            <Button
              onClick={handleAddAllToCart}
              disabled={wishlistProducts.every(p => !p.inStock)}
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add All to Cart
            </Button>
          </div>
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {wishlistProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="text-center bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Discover More Styles
          </h2>
          <p className="text-gray-600 mb-6">
            Explore our latest collection and find more items you'll love
          </p>
          <Button size="lg" asChild>
            <Link href="/">
              Continue Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Wishlist Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center bg-white p-6 rounded-lg">
            <Heart className="h-12 w-12 mx-auto text-red-500 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Save for Later</h3>
            <p className="text-sm text-gray-600">
              Keep track of items you want to buy later
            </p>
          </div>
          
          <div className="text-center bg-white p-6 rounded-lg">
            <ShoppingBag className="h-12 w-12 mx-auto text-blue-500 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Quick Add to Cart</h3>
            <p className="text-sm text-gray-600">
              Easily move wishlist items to your shopping cart
            </p>
          </div>
          
          <div className="text-center bg-white p-6 rounded-lg">
            <svg className="h-12 w-12 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zm0 0H9.4a2 2 0 01-1.9-1.4L5.2 7H3m9 10V7a2 2 0 012-2h4.8a2 2 0 011.9 1.4l2.3 9.2c.1.4.1.8 0 1.2" />
            </svg>
            <h3 className="font-semibold text-gray-900 mb-2">Price Drop Alerts</h3>
            <p className="text-sm text-gray-600">
              Get notified when wishlist items go on sale
            </p>
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mensClothing
              .filter(product => !wishlistItems.includes(product.id))
              .filter(product => product.featured)
              .slice(0, 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}