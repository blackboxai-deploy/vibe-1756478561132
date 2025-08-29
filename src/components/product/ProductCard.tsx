'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useCartStore, useWishlistStore } from '@/lib/store';
import { MensClothing } from '@/types';
import { useState } from 'react';

interface ProductCardProps {
  product: MensClothing;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');
  const [selectedColor] = useState(product.colors[0] || '');
  const [isHovered, setIsHovered] = useState(false);

  const { addItem: addToCart } = useCartStore();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore();

  const isWishlisted = isInWishlist(product.id);
  const discountPercentage = product.discountPrice 
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, 1);
  };

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  return (
    <Card 
      className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 space-y-2">
          {product.new && (
            <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
          )}
          {discountPercentage > 0 && (
            <Badge className="bg-red-500 hover:bg-red-600">
              {discountPercentage}% OFF
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="destructive">Out of Stock</Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className={`absolute top-3 right-3 space-y-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button
            size="sm"
            variant="secondary"
            className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
            onClick={handleWishlistToggle}
          >
            <Heart 
              className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </Button>
          <Link href={`/product/${product.id}`}>
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
            >
              <Eye className="h-4 w-4 text-gray-600" />
            </Button>
          </Link>
        </div>

        {/* Overlay with Add to Cart */}
        <div className={`absolute inset-0 bg-black/20 flex items-end justify-center pb-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="mx-4 bg-white text-black hover:bg-gray-100"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Details */}
      <CardContent className="p-4">
        <div className="space-y-2">
          {/* Brand */}
          <p className="text-xs text-gray-500 uppercase tracking-wide">
            {product.brand}
          </p>

          {/* Product Name */}
          <Link href={`/product/${product.id}`}>
            <h3 className="font-medium text-sm line-clamp-2 hover:text-gray-600 transition-colors">
              {product.name}
            </h3>
          </Link>

          {/* Fabric & Fit */}
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <span>{product.fabric}</span>
            <span>•</span>
            <span className="capitalize">{product.fitType} fit</span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            {product.discountPrice ? (
              <>
                <span className="font-semibold text-lg">
                  ₹{product.discountPrice.toLocaleString()}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ₹{product.price.toLocaleString()}
                </span>
              </>
            ) : (
              <span className="font-semibold text-lg">
                ₹{product.price.toLocaleString()}
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${
                    i < Math.floor(product.ratings)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-500">
              {product.ratings} ({product.reviewCount})
            </span>
          </div>

          {/* Size Selector (when hovered) */}
          <div className={`space-y-2 transition-all duration-300 ${
            isHovered ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div>
              <p className="text-xs text-gray-600 mb-1">Size:</p>
              <div className="flex space-x-1">
                {product.sizes.slice(0, 5).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`text-xs px-2 py-1 border rounded transition-colors ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}