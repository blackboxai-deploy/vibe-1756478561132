'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Heart, ShoppingCart, Share2, Star, Truck, RotateCcw, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { useCartStore, useWishlistStore, useAppStore } from '@/lib/store';
import { getProductById } from '@/lib/data/mens-clothing';
import { MensClothing } from '@/types';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  
  const [product, setProduct] = useState<MensClothing | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  const { addItem: addToCart } = useCartStore();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore();
  const { addToRecentlyViewed } = useAppStore();

  useEffect(() => {
    if (productId) {
      const foundProduct = getProductById(productId);
      setProduct(foundProduct || null);
      setLoading(false);
      
      if (foundProduct) {
        setSelectedSize(foundProduct.sizes[0] || '');
        setSelectedColor(foundProduct.colors[0] || '');
        addToRecentlyViewed(productId);
      }
    }
  }, [productId, addToRecentlyViewed]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-square bg-gray-200 rounded-lg"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2"></div>
              <div className="h-10 bg-gray-200 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-gray-600">The product you're looking for doesn't exist.</p>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);
  const discountPercentage = product.discountPrice 
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
  };

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-8">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span className="capitalize">{product.category}</span>
          <span className="mx-2">/</span>
          <span className="capitalize">{product.subcategory}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square w-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-black' : 'border-transparent'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex space-x-2">
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

            {/* Brand & Name */}
            <div>
              <p className="text-sm text-gray-600 uppercase tracking-wide">{product.brand}</p>
              <h1 className="text-3xl font-bold text-gray-900 mt-1">{product.name}</h1>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.ratings)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-medium">{product.ratings}</span>
              <span className="text-gray-600">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-3">
              {product.discountPrice ? (
                <>
                  <span className="text-3xl font-bold text-gray-900">
                    ₹{product.discountPrice.toLocaleString()}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    ₹{product.price.toLocaleString()}
                  </span>
                </>
              ) : (
                <span className="text-3xl font-bold text-gray-900">
                  ₹{product.price.toLocaleString()}
                </span>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-3">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Fabric:</span>
                <span>{product.fabric}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-medium">Fit:</span>
                <span className="capitalize">{product.fitType}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-medium">Occasion:</span>
                <span className="capitalize">{product.occasion.join(', ')}</span>
              </div>
            </div>

            <Separator />

            {/* Color Selection */}
            <div className="space-y-3">
              <h3 className="font-medium">Color: <span className="font-normal">{selectedColor}</span></h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-md transition-colors ${
                      selectedColor === color
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <h3 className="font-medium">Size: <span className="font-normal">{selectedSize}</span></h3>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md transition-colors ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="font-medium">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            <Separator />

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock || !selectedSize}
                  className="flex-1"
                  size="lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                
                <Button
                  onClick={handleWishlistToggle}
                  variant="outline"
                  size="lg"
                  className="px-6"
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                
                <Button variant="outline" size="lg" className="px-6">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              
              {!product.inStock && (
                <p className="text-red-600 text-sm">This item is currently out of stock.</p>
              )}
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <Truck className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-gray-600">On orders above ₹999</p>
              </div>
              
              <div className="text-center">
                <RotateCcw className="h-8 w-8 mx-auto text-green-600 mb-2" />
                <p className="text-sm font-medium">Easy Returns</p>
                <p className="text-xs text-gray-600">30-day return policy</p>
              </div>
              
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto text-purple-600 mb-2" />
                <p className="text-sm font-medium">Secure Payment</p>
                <p className="text-xs text-gray-600">100% secure checkout</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="care">Care Instructions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="specifications" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-3">Product Details</h4>
                    <dl className="space-y-2">
                      <div className="flex">
                        <dt className="w-1/3 text-sm text-gray-600">Material:</dt>
                        <dd className="text-sm">{product.specifications.material}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-1/3 text-sm text-gray-600">Fit:</dt>
                        <dd className="text-sm capitalize">{product.fitType}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-1/3 text-sm text-gray-600">Pattern:</dt>
                        <dd className="text-sm">{product.pattern}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-1/3 text-sm text-gray-600">Sleeve Type:</dt>
                        <dd className="text-sm">{product.sleeveType || 'N/A'}</dd>
                      </div>
                    </dl>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Manufacturing</h4>
                    <dl className="space-y-2">
                      <div className="flex">
                        <dt className="w-1/3 text-sm text-gray-600">Country:</dt>
                        <dd className="text-sm">{product.specifications.countryOfOrigin}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-1/3 text-sm text-gray-600">Manufacturer:</dt>
                        <dd className="text-sm">{product.specifications.manufacturer}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="care" className="mt-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Care Instructions</h4>
                  <p className="text-gray-700">{product.careInstructions}</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Additional Tips</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Wash similar colors together</li>
                      <li>• Do not use fabric softener</li>
                      <li>• Hang to dry for best results</li>
                      <li>• Iron on reverse side if needed</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}