import Link from 'next/link';
import { ArrowRight, Truck, Shield, RotateCcw, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ProductCard from '@/components/product/ProductCard';
import { categories, getFeaturedProducts, getNewProducts } from '@/lib/data/mens-clothing';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 8);
  const newProducts = getNewProducts().slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Redefine Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Style
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Discover premium men's clothing that combines comfort, style, and sophistication. 
                From casual wear to formal attire, find your perfect look.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8"
                  asChild
                >
                  <Link href="/new-arrivals">
                    New Arrivals
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e5fe92c8-acc0-4243-8044-67988653124c.png's+formal+shirt+and+casual+wear+collection+styled+professionally"
                  alt="Premium men's clothing collection featuring shirts and formal wear"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating cards */}
              <div className="absolute -top-6 -right-6 bg-white text-slate-900 p-4 rounded-lg shadow-lg">
                <p className="font-semibold">Free Shipping</p>
                <p className="text-sm text-slate-600">On orders above ₹999</p>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-lg shadow-lg">
                <p className="font-semibold">30-Day Returns</p>
                <p className="text-sm text-slate-600">Easy exchange policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our curated collection of men's clothing designed for every occasion and style preference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={category.slug}>
                <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.description}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Featured Products
              </h2>
              <p className="text-lg text-slate-600">
                Handpicked styles that define modern menswear
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/featured">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                New Arrivals
              </h2>
              <p className="text-lg text-slate-600">
                Fresh styles just landed in our collection
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/new-arrivals">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                Crafted for the Modern Man
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At MENSWEAR, we believe that great style is about more than just clothes—it's about 
                confidence, comfort, and expressing your authentic self. Our carefully curated 
                collection brings together premium fabrics, timeless designs, and contemporary cuts.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                From the boardroom to weekend getaways, from traditional celebrations to casual outings, 
                we have the perfect pieces to elevate your wardrobe and complement your lifestyle.
              </p>
              <Button asChild>
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/06bc6690-a9e3-44ed-b4d8-8be1903d79f1.png's+clothing+showcase+with+formal+and+casual+styling+options"
                  alt="Professional men's clothing showcase featuring various styling options"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Free Shipping</h3>
              <p className="text-slate-300">
                Complimentary shipping on all orders above ₹999 across India.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Secure Payment</h3>
              <p className="text-slate-300">
                Your payment information is processed securely and safely.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <RotateCcw className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Easy Returns</h3>
              <p className="text-slate-300">
                30-day hassle-free return and exchange policy for your peace of mind.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                <Headphones className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-slate-300">
                Dedicated customer support team ready to help you anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Stay Updated with Latest Trends
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter and get exclusive offers, style tips, and early access to new collections.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900"
            />
            <Button className="bg-white text-blue-600 hover:bg-slate-100 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}