'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Heart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCartStore, useWishlistStore, useUserStore, useAppStore } from '@/lib/store';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCartStore();
  const { items: wishlistItems } = useWishlistStore();
  const { isAuthenticated, user } = useUserStore();
  const { searchQuery, setSearchQuery } = useAppStore();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const navigationItems = [
    {
      name: 'Casual Clothing',
      href: '/casual-clothing',
      submenu: [
        { name: 'T-Shirts', href: '/casual-clothing/t-shirts' },
        { name: 'Casual Shirts', href: '/casual-clothing/shirts' },
        { name: 'Jeans', href: '/casual-clothing/jeans' },
        { name: 'Shorts', href: '/casual-clothing/shorts' }
      ]
    },
    {
      name: 'Formal Clothing',
      href: '/formal-clothing',
      submenu: [
        { name: 'Dress Shirts', href: '/formal-clothing/dress-shirts' },
        { name: 'Formal Trousers', href: '/formal-clothing/formal-trousers' },
        { name: 'Blazers', href: '/formal-clothing/blazers' },
        { name: 'Suits', href: '/formal-clothing/suits' }
      ]
    },
    {
      name: 'Traditional Clothing',
      href: '/traditional-clothing',
      submenu: [
        { name: 'Kurtas', href: '/traditional-clothing/kurtas' },
        { name: 'Sherwanis', href: '/traditional-clothing/sherwanis' },
        { name: 'Indo-Western', href: '/traditional-clothing/indo-western' }
      ]
    },
    {
      name: 'Seasonal Clothing',
      href: '/seasonal-clothing',
      submenu: [
        { name: 'Jackets', href: '/seasonal-clothing/jackets' },
        { name: 'Sweaters', href: '/seasonal-clothing/sweaters' }
      ]
    }
  ];

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4 text-center text-sm">
          Free shipping on orders above ₹999 | Easy returns within 30 days
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-slate-900">
            MENSWEAR
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/new-arrivals" 
              className="text-sm font-medium hover:text-slate-600 transition-colors"
            >
              New Arrivals
            </Link>
            {navigationItems.map((item) => (
              <div key={item.name} className="group relative">
                <Link 
                  href={item.href}
                  className="text-sm font-medium hover:text-slate-600 transition-colors"
                >
                  {item.name}
                </Link>
                {/* Dropdown menu */}
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <Link 
              href="/sale" 
              className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
            >
              Sale
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search for clothing..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search button for mobile */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Link href="/wishlist">
              <Button variant="ghost" size="sm" className="relative p-2">
                <Heart className="h-5 w-5" />
                {wishlistItems.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs p-0 min-w-5">
                    {wishlistItems.length}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="sm" className="relative p-2">
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs p-0 min-w-5">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* User Account */}
            {isAuthenticated && user ? (
              <Link href="/profile">
                <Button variant="ghost" size="sm" className="p-2">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
            )}

            {/* Mobile menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden p-2"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  {/* Mobile search */}
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        type="text"
                        placeholder="Search clothing..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-2 w-full"
                      />
                    </div>
                  </div>

                  {/* Mobile navigation */}
                  <nav className="flex-1">
                    <div className="space-y-4">
                      <Link 
                        href="/new-arrivals"
                        className="block text-lg font-medium text-slate-900 hover:text-slate-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        New Arrivals
                      </Link>
                      
                      {navigationItems.map((item) => (
                        <div key={item.name} className="space-y-2">
                          <Link
                            href={item.href}
                            className="block text-lg font-medium text-slate-900 hover:text-slate-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                          <div className="ml-4 space-y-2">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block text-sm text-gray-600 hover:text-slate-900 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                      
                      <Link 
                        href="/sale"
                        className="block text-lg font-medium text-red-600 hover:text-red-700 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sale
                      </Link>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}