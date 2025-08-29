import { NextRequest, NextResponse } from 'next/server';
import { mensClothing } from '@/lib/data/mens-clothing';
import { MensClothing } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Extract query parameters
    const category = searchParams.get('category');
    const subcategory = searchParams.get('subcategory');
    const brand = searchParams.get('brand');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const size = searchParams.get('size');
    const color = searchParams.get('color');
    const fabric = searchParams.get('fabric');
    const fitType = searchParams.get('fitType');
    const occasion = searchParams.get('occasion');
    const pattern = searchParams.get('pattern');
    const inStock = searchParams.get('inStock');
    const featured = searchParams.get('featured');
    const new_ = searchParams.get('new');
    const search = searchParams.get('search');
    const sortBy = searchParams.get('sortBy') || 'name';
    const sortOrder = searchParams.get('sortOrder') || 'asc';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');

    let filteredProducts: MensClothing[] = [...mensClothing];

    // Apply filters
    if (category) {
      filteredProducts = filteredProducts.filter(p => p.category === category);
    }
    
    if (subcategory) {
      filteredProducts = filteredProducts.filter(p => p.subcategory === subcategory);
    }
    
    if (brand) {
      filteredProducts = filteredProducts.filter(p => 
        p.brand.toLowerCase().includes(brand.toLowerCase())
      );
    }
    
    if (minPrice) {
      const min = parseInt(minPrice);
      filteredProducts = filteredProducts.filter(p => 
        (p.discountPrice || p.price) >= min
      );
    }
    
    if (maxPrice) {
      const max = parseInt(maxPrice);
      filteredProducts = filteredProducts.filter(p => 
        (p.discountPrice || p.price) <= max
      );
    }
    
    if (size) {
      filteredProducts = filteredProducts.filter(p => 
        p.sizes.includes(size)
      );
    }
    
    if (color) {
      filteredProducts = filteredProducts.filter(p => 
        p.colors.some(c => c.toLowerCase().includes(color.toLowerCase()))
      );
    }
    
    if (fabric) {
      filteredProducts = filteredProducts.filter(p => 
        p.fabric.toLowerCase().includes(fabric.toLowerCase())
      );
    }
    
    if (fitType) {
      filteredProducts = filteredProducts.filter(p => p.fitType === fitType);
    }
    
    if (occasion) {
      filteredProducts = filteredProducts.filter(p => 
        p.occasion.includes(occasion)
      );
    }
    
    if (pattern) {
      filteredProducts = filteredProducts.filter(p => 
        p.pattern.toLowerCase().includes(pattern.toLowerCase())
      );
    }
    
    if (inStock === 'true') {
      filteredProducts = filteredProducts.filter(p => p.inStock);
    }
    
    if (featured === 'true') {
      filteredProducts = filteredProducts.filter(p => p.featured);
    }
    
    if (new_ === 'true') {
      filteredProducts = filteredProducts.filter(p => p.new);
    }
    
    if (search) {
      const searchTerm = search.toLowerCase();
      filteredProducts = filteredProducts.filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.brand.toLowerCase().includes(searchTerm) ||
        p.fabric.toLowerCase().includes(searchTerm) ||
        p.clothingType.toLowerCase().includes(searchTerm)
      );
    }

    // Apply sorting
    filteredProducts.sort((a, b) => {
      let aValue: any;
      let bValue: any;
      
      switch (sortBy) {
        case 'price':
          aValue = a.discountPrice || a.price;
          bValue = b.discountPrice || b.price;
          break;
        case 'rating':
          aValue = a.ratings;
          bValue = b.ratings;
          break;
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'new':
          aValue = a.new ? 1 : 0;
          bValue = b.new ? 1 : 0;
          break;
        case 'featured':
          aValue = a.featured ? 1 : 0;
          bValue = b.featured ? 1 : 0;
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }
      
      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    // Apply pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    // Calculate pagination info
    const totalProducts = filteredProducts.length;
    const totalPages = Math.ceil(totalProducts / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    return NextResponse.json({
      success: true,
      data: {
        products: paginatedProducts,
        pagination: {
          currentPage: page,
          totalPages,
          totalProducts,
          hasNextPage,
          hasPrevPage,
          limit
        },
        filters: {
          category,
          subcategory,
          brand,
          minPrice,
          maxPrice,
          size,
          color,
          fabric,
          fitType,
          occasion,
          pattern,
          inStock,
          featured,
          new: new_,
          search
        }
      }
    });

  } catch (error) {
    console.error('Products API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}