import { Suspense } from 'react';
import ProductCard from '@/components/product/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getProductsByCategory } from '@/lib/data/mens-clothing';
import { Filter, SortAsc } from 'lucide-react';

export default function CasualClothingPage() {
  const casualProducts = getProductsByCategory('topwear').filter(p => 
    p.occasion.includes('casual') || 
    p.subcategory === 'tshirt' || 
    p.subcategory === 'jeans'
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Casual Clothing</h1>
              <p className="text-slate-600 mt-2">
                Comfortable and stylish everyday wear for the modern man
              </p>
              <div className="flex items-center mt-4 space-x-2">
                <Badge variant="secondary">{casualProducts.length} Products</Badge>
                <Badge variant="outline">Free Shipping Available</Badge>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <SortAsc className="h-4 w-4 mr-2" />
                Sort
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-6 overflow-x-auto">
            <Button variant="default" size="sm">All Casual</Button>
            <Button variant="ghost" size="sm">T-Shirts</Button>
            <Button variant="ghost" size="sm">Casual Shirts</Button>
            <Button variant="ghost" size="sm">Jeans</Button>
            <Button variant="ghost" size="sm">Shorts</Button>
            <Button variant="ghost" size="sm">Polo Shirts</Button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg h-96 animate-pulse" />
            ))}
          </div>
        }>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {casualProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Suspense>

        {casualProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>

      {/* Category Benefits */}
      <div className="bg-white border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-slate-900 mb-2">Premium Cotton</h3>
              <p className="text-sm text-slate-600">
                Soft, breathable fabrics for all-day comfort
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-slate-900 mb-2">Perfect Fit</h3>
              <p className="text-sm text-slate-600">
                Multiple fit options from slim to relaxed
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-slate-900 mb-2">Easy Care</h3>
              <p className="text-sm text-slate-600">
                Machine washable, wrinkle-resistant materials
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}