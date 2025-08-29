import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Stay in Style</h3>
            <p className="text-slate-300 mb-6">
              Subscribe to get updates about new arrivals, exclusive offers, and fashion tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 flex-1"
              />
              <Button className="bg-white text-slate-900 hover:bg-slate-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">MENSWEAR</h3>
            <p className="text-slate-300 mb-4">
              Your destination for premium men's clothing. From casual to formal, 
              we have everything you need to look your best.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-slate-300">
                <Phone className="h-4 w-4 mr-2" />
                +91 1800-123-4567
              </div>
              <div className="flex items-center text-sm text-slate-300">
                <Mail className="h-4 w-4 mr-2" />
                support@menswear.com
              </div>
              <div className="flex items-center text-sm text-slate-300">
                <MapPin className="h-4 w-4 mr-2" />
                Mumbai, India
              </div>
            </div>
          </div>

          {/* Shop Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/casual-clothing" className="text-slate-300 hover:text-white transition-colors">
                  Casual Clothing
                </Link>
              </li>
              <li>
                <Link href="/formal-clothing" className="text-slate-300 hover:text-white transition-colors">
                  Formal Clothing
                </Link>
              </li>
              <li>
                <Link href="/traditional-clothing" className="text-slate-300 hover:text-white transition-colors">
                  Traditional Clothing
                </Link>
              </li>
              <li>
                <Link href="/seasonal-clothing" className="text-slate-300 hover:text-white transition-colors">
                  Seasonal Clothing
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-slate-300 hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-slate-300 hover:text-white transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-slate-300 hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-slate-300 hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-slate-300 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-slate-300 hover:text-white transition-colors">
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>

          {/* About & Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">
                  Fashion Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/store-locator" className="text-slate-300 hover:text-white transition-colors">
                  Store Locator
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link 
                href="https://facebook.com" 
                className="text-slate-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="https://instagram.com" 
                className="text-slate-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="https://twitter.com" 
                className="text-slate-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="https://youtube.com" 
                className="text-slate-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-slate-400 text-sm">
                © {currentYear} MENSWEAR. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Made with ♥ for fashion-forward men
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}