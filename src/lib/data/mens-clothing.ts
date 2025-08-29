import { MensClothing, Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'casual',
    name: 'Casual Clothing',
    slug: 'casual-clothing',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4ffb4648-e259-466a-933a-fa5559f3d4b7.png's+clothing+collection+with+comfortable+shirts+and+jeans',
    description: 'Comfortable everyday wear for the modern man',
    subcategories: [
      {
        id: 'casual-shirts',
        name: 'Casual Shirts',
        slug: 'shirts',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/77fb211f-99d2-4a0c-b324-9a724a657d06.png',
        description: 'Stylish shirts for casual occasions'
      },
      {
        id: 'tshirts',
        name: 'T-Shirts',
        slug: 't-shirts',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/75c64e05-0553-4187-aa26-09d5c5beb497.png',
        description: 'Comfortable t-shirts for everyday wear'
      },
      {
        id: 'jeans',
        name: 'Jeans',
        slug: 'jeans',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/278958eb-a624-488f-b27e-6c1aaa80349f.png',
        description: 'Premium denim in various fits'
      },
      {
        id: 'shorts',
        name: 'Shorts',
        slug: 'shorts',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c0367f92-c235-4e44-85d2-59ba61247093.png',
        description: 'Comfortable shorts for warm weather'
      }
    ]
  },
  {
    id: 'formal',
    name: 'Formal Clothing',
    slug: 'formal-clothing',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/41f45bc4-7138-4537-a9ac-12b0e80a2c44.png',
    description: 'Professional attire for the workplace',
    subcategories: [
      {
        id: 'dress-shirts',
        name: 'Dress Shirts',
        slug: 'dress-shirts',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c7130d28-7273-4450-a82a-7d52a9e4615f.png',
        description: 'Crisp formal shirts for office wear'
      },
      {
        id: 'formal-trousers',
        name: 'Formal Trousers',
        slug: 'formal-trousers',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e369866e-180e-425e-a095-72feef0c92e3.png',
        description: 'Tailored trousers for professional look'
      },
      {
        id: 'blazers',
        name: 'Blazers',
        slug: 'blazers',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f6edd691-c12a-4946-9b30-e7a8ab19de79.png',
        description: 'Sophisticated blazers for formal occasions'
      },
      {
        id: 'suits',
        name: 'Suits',
        slug: 'suits',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/af85ba68-6781-4213-9cbb-335c5961d7df.png',
        description: 'Complete formal suits'
      }
    ]
  },
  {
    id: 'traditional',
    name: 'Traditional Clothing',
    slug: 'traditional-clothing',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/571bb1d9-6aa7-4938-ba67-aa2a78b61fd9.png',
    description: 'Ethnic wear for special occasions',
    subcategories: [
      {
        id: 'kurtas',
        name: 'Kurtas',
        slug: 'kurtas',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/303dea2a-c150-4a94-9676-4b100ddffc67.png',
        description: 'Traditional kurtas in various fabrics'
      },
      {
        id: 'sherwanis',
        name: 'Sherwanis',
        slug: 'sherwanis',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0c997afd-bef9-4ac2-8cff-3fd23343adef.png',
        description: 'Elegant sherwanis for weddings'
      },
      {
        id: 'indo-western',
        name: 'Indo-Western',
        slug: 'indo-western',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/02d70a68-a5a6-44ff-be88-06441572ac9f.png',
        description: 'Modern fusion of Indian and Western styles'
      }
    ]
  },
  {
    id: 'seasonal',
    name: 'Seasonal Clothing',
    slug: 'seasonal-clothing',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/15024d96-46ba-40a8-b42e-9401d0dc32f2.png',
    description: 'Weather-appropriate clothing',
    subcategories: [
      {
        id: 'jackets',
        name: 'Jackets',
        slug: 'jackets',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e29d85f5-7117-44f3-bfeb-4c27cd8d1ae8.png',
        description: 'Stylish jackets for all seasons'
      },
      {
        id: 'sweaters',
        name: 'Sweaters',
        slug: 'sweaters',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9369b23b-83f4-40d9-b261-b830524c8934.png',
        description: 'Warm knitwear for winter'
      }
    ]
  }
];

export const mensClothing: MensClothing[] = [
  // Casual Clothing - T-Shirts
  {
    id: 'casual-tshirt-1',
    name: 'Premium Cotton Round Neck T-Shirt',
    category: 'topwear',
    subcategory: 'tshirt',
    clothingType: 'Round Neck T-Shirt',
    brand: 'StyleCraft',
    price: 899,
    discountPrice: 679,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Navy Blue', 'Grey', 'Maroon'],
    fabric: '100% Cotton',
    fitType: 'regular',
    occasion: ['casual', 'weekend'],
    season: ['summer', 'all-season'],
    sleeveType: 'Short Sleeve',
    pattern: 'Solid',
    careInstructions: 'Machine wash cold, tumble dry low',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7f98b8f6-626d-4f8f-9050-cbeee477282f.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a4dcb598-5092-49ba-9194-4800eae04438.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fb606c95-3073-4f1d-b523-67bb997f131d.png'
    ],
    description: 'Classic round neck t-shirt made from premium 100% cotton. Comfortable fit perfect for everyday wear.',
    specifications: {
      material: '100% Cotton',
      washCare: 'Machine wash cold',
      countryOfOrigin: 'India',
      manufacturer: 'StyleCraft Industries'
    },
    ratings: 4.3,
    reviewCount: 245,
    reviews: [],
    inStock: true,
    featured: true,
    new: false
  },
  {
    id: 'casual-tshirt-2',
    name: 'V-Neck Cotton T-Shirt',
    category: 'topwear',
    subcategory: 'tshirt',
    clothingType: 'V-Neck T-Shirt',
    brand: 'ComfortWear',
    price: 799,
    discountPrice: 599,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Royal Blue', 'Forest Green'],
    fabric: '100% Cotton',
    fitType: 'slim',
    occasion: ['casual', 'party'],
    season: ['summer', 'all-season'],
    sleeveType: 'Short Sleeve',
    pattern: 'Solid',
    careInstructions: 'Machine wash cold, do not bleach',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/796f82f8-7a58-4009-9a7b-2415b54082c3.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ebf5557c-4bb9-4d42-bf76-fc61f7956d0d.png'
    ],
    description: 'Stylish v-neck t-shirt with a modern slim fit. Perfect for casual outings and weekend wear.',
    specifications: {
      material: '100% Cotton',
      washCare: 'Machine wash cold',
      countryOfOrigin: 'India',
      manufacturer: 'ComfortWear Ltd'
    },
    ratings: 4.1,
    reviewCount: 178,
    reviews: [],
    inStock: true,
    featured: false,
    new: true
  },
  {
    id: 'casual-tshirt-3',
    name: 'Polo T-Shirt with Collar',
    category: 'topwear',
    subcategory: 'tshirt',
    clothingType: 'Polo T-Shirt',
    brand: 'UrbanStyle',
    price: 1299,
    discountPrice: 999,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy Blue', 'White', 'Sky Blue', 'Olive Green', 'Burgundy'],
    fabric: 'Cotton Pique',
    fitType: 'regular',
    occasion: ['casual', 'office', 'weekend'],
    season: ['summer', 'all-season'],
    sleeveType: 'Short Sleeve',
    collarType: 'Polo Collar',
    pattern: 'Solid',
    careInstructions: 'Machine wash warm, iron if needed',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a136ec11-66f5-4468-8588-3a2b02eb50ae.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d87d04e5-b753-4522-b38e-53fecc6aff54.png'
    ],
    description: 'Classic polo t-shirt with collar and button placket. Versatile piece that works for both casual and semi-formal occasions.',
    specifications: {
      material: 'Cotton Pique',
      washCare: 'Machine wash warm',
      countryOfOrigin: 'India',
      manufacturer: 'UrbanStyle Co'
    },
    ratings: 4.5,
    reviewCount: 312,
    reviews: [],
    inStock: true,
    featured: true,
    new: false
  },

  // Casual Clothing - Shirts
  {
    id: 'casual-shirt-1',
    name: 'Cotton Check Casual Shirt',
    category: 'topwear',
    subcategory: 'shirt',
    clothingType: 'Casual Shirt',
    brand: 'TrendyFit',
    price: 1599,
    discountPrice: 1199,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blue Check', 'Red Check', 'Green Check', 'Black Check'],
    fabric: '100% Cotton',
    fitType: 'regular',
    occasion: ['casual', 'weekend', 'office'],
    season: ['all-season'],
    sleeveType: 'Full Sleeve',
    collarType: 'Spread Collar',
    pattern: 'Checkered',
    careInstructions: 'Machine wash cold, iron on medium heat',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b17694d5-5f7e-41a7-a425-70b1781cffad.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2342ea0f-d755-4e5d-b64f-46d8ec1eac3e.png'
    ],
    description: 'Classic cotton check shirt perfect for casual and semi-formal occasions. Features spread collar and full sleeves.',
    specifications: {
      material: '100% Cotton',
      washCare: 'Machine wash cold',
      countryOfOrigin: 'India',
      manufacturer: 'TrendyFit Apparel'
    },
    ratings: 4.2,
    reviewCount: 189,
    reviews: [],
    inStock: true,
    featured: false,
    new: false
  },
  {
    id: 'casual-shirt-2',
    name: 'Linen Half Sleeve Casual Shirt',
    category: 'topwear',
    subcategory: 'shirt',
    clothingType: 'Casual Shirt',
    brand: 'BreezyWear',
    price: 1899,
    discountPrice: 1424,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Sky Blue', 'Beige', 'Light Grey'],
    fabric: '100% Linen',
    fitType: 'relaxed',
    occasion: ['casual', 'vacation', 'weekend'],
    season: ['summer'],
    sleeveType: 'Half Sleeve',
    collarType: 'Cuban Collar',
    pattern: 'Solid',
    careInstructions: 'Dry clean recommended, or gentle hand wash',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4441638c-ab95-4e91-a453-ab425a73e143.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f30c447d-8459-4064-ad4d-5fd39c894a91.png'
    ],
    description: 'Breathable linen shirt with half sleeves, perfect for summer and vacation wear. Features relaxed fit and Cuban collar.',
    specifications: {
      material: '100% Linen',
      washCare: 'Dry clean recommended',
      countryOfOrigin: 'India',
      manufacturer: 'BreezyWear Ltd'
    },
    ratings: 4.4,
    reviewCount: 156,
    reviews: [],
    inStock: true,
    featured: true,
    new: true
  },

  // Casual Clothing - Jeans
  {
    id: 'casual-jeans-1',
    name: 'Slim Fit Dark Blue Jeans',
    category: 'bottomwear',
    subcategory: 'jeans',
    clothingType: 'Jeans',
    brand: 'DenimCraft',
    price: 2299,
    discountPrice: 1724,
    sizes: ['28', '30', '32', '34', '36', '38', '40'],
    colors: ['Dark Blue', 'Black', 'Light Blue'],
    fabric: '98% Cotton, 2% Elastane',
    fitType: 'slim',
    occasion: ['casual', 'party', 'weekend'],
    season: ['all-season'],
    pattern: 'Solid',
    careInstructions: 'Machine wash cold, inside out, no bleach',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a1220645-deb9-4eca-b117-fa74e0238dd9.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4536ca91-bd45-4024-a1c3-6a84e8c03a9a.png'
    ],
    description: 'Premium slim fit jeans with stretch fabric for comfort. Features classic five-pocket styling and modern cut.',
    specifications: {
      material: '98% Cotton, 2% Elastane',
      washCare: 'Machine wash cold inside out',
      countryOfOrigin: 'India',
      manufacturer: 'DenimCraft Industries'
    },
    ratings: 4.6,
    reviewCount: 423,
    reviews: [],
    inStock: true,
    featured: true,
    new: false
  },
  {
    id: 'casual-jeans-2',
    name: 'Regular Fit Light Wash Jeans',
    category: 'bottomwear',
    subcategory: 'jeans',
    clothingType: 'Jeans',
    brand: 'ClassicDenim',
    price: 1999,
    discountPrice: 1499,
    sizes: ['28', '30', '32', '34', '36', '38', '40'],
    colors: ['Light Blue', 'Medium Blue', 'Stone Wash'],
    fabric: '100% Cotton',
    fitType: 'regular',
    occasion: ['casual', 'weekend'],
    season: ['all-season'],
    pattern: 'Washed',
    careInstructions: 'Machine wash cold, tumble dry low',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cacdbf0d-57b0-4468-baa7-cd689248817a.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/247c5358-06ae-4a6b-bc3f-3175a7d9abed.png'
    ],
    description: 'Classic regular fit jeans with light wash finish. Timeless design with comfortable fit for everyday wear.',
    specifications: {
      material: '100% Cotton',
      washCare: 'Machine wash cold',
      countryOfOrigin: 'India',
      manufacturer: 'ClassicDenim Co'
    },
    ratings: 4.3,
    reviewCount: 298,
    reviews: [],
    inStock: true,
    featured: false,
    new: false
  },

  // Formal Clothing - Dress Shirts
  {
    id: 'formal-shirt-1',
    name: 'White Formal Dress Shirt',
    category: 'topwear',
    subcategory: 'shirt',
    clothingType: 'Dress Shirt',
    brand: 'ExecutiveWear',
    price: 2199,
    discountPrice: 1649,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Light Blue', 'Light Grey'],
    fabric: '100% Cotton',
    fitType: 'slim',
    occasion: ['office', 'formal', 'business'],
    season: ['all-season'],
    sleeveType: 'Full Sleeve',
    collarType: 'Spread Collar',
    pattern: 'Solid',
    careInstructions: 'Machine wash warm, iron on high heat',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cdcf2899-78df-4fac-a9b4-e324d71004b2.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/47c0b718-bc01-4ea3-aa28-7e3205119363.png'
    ],
    description: 'Crisp white formal dress shirt with spread collar. Essential piece for professional wardrobe with slim fit cut.',
    specifications: {
      material: '100% Cotton',
      washCare: 'Machine wash warm',
      countryOfOrigin: 'India',
      manufacturer: 'ExecutiveWear Ltd'
    },
    ratings: 4.5,
    reviewCount: 367,
    reviews: [],
    inStock: true,
    featured: true,
    new: false
  },
  {
    id: 'formal-shirt-2',
    name: 'Light Blue Formal Shirt',
    category: 'topwear',
    subcategory: 'shirt',
    clothingType: 'Dress Shirt',
    brand: 'ProfessionalFit',
    price: 2099,
    discountPrice: 1574,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Light Blue', 'White', 'Light Pink', 'Light Grey'],
    fabric: '100% Cotton',
    fitType: 'regular',
    occasion: ['office', 'formal', 'business'],
    season: ['all-season'],
    sleeveType: 'Full Sleeve',
    collarType: 'Button Down',
    pattern: 'Solid',
    careInstructions: 'Machine wash cold, iron medium heat',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/10f18ad9-efe1-4ff8-920e-1fc78e373102.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e41996a8-b8bd-4e0f-99e3-c62bd4869c97.png'
    ],
    description: 'Professional light blue dress shirt with button-down collar. Perfect for office wear with regular fit.',
    specifications: {
      material: '100% Cotton',
      washCare: 'Machine wash cold',
      countryOfOrigin: 'India',
      manufacturer: 'ProfessionalFit Inc'
    },
    ratings: 4.4,
    reviewCount: 289,
    reviews: [],
    inStock: true,
    featured: false,
    new: false
  },

  // Formal Clothing - Trousers
  {
    id: 'formal-trousers-1',
    name: 'Navy Blue Formal Trousers',
    category: 'bottomwear',
    subcategory: 'trousers',
    clothingType: 'Formal Trousers',
    brand: 'CorporateStyle',
    price: 2599,
    discountPrice: 1949,
    sizes: ['28', '30', '32', '34', '36', '38', '40'],
    colors: ['Navy Blue', 'Charcoal Grey', 'Black', 'Dark Grey'],
    fabric: '65% Polyester, 35% Viscose',
    fitType: 'regular',
    occasion: ['office', 'formal', 'business'],
    season: ['all-season'],
    pattern: 'Solid',
    careInstructions: 'Dry clean only',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/361efb12-9ad1-4181-9143-b1a1c06d9384.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a9a10176-caa2-4cce-9f40-eb758c2f9d1e.png'
    ],
    description: 'Premium formal trousers in navy blue with crisp finish. Perfect for office and business occasions.',
    specifications: {
      material: '65% Polyester, 35% Viscose',
      washCare: 'Dry clean only',
      countryOfOrigin: 'India',
      manufacturer: 'CorporateStyle Ltd'
    },
    ratings: 4.3,
    reviewCount: 234,
    reviews: [],
    inStock: true,
    featured: true,
    new: false
  },
  {
    id: 'formal-trousers-2',
    name: 'Charcoal Grey Formal Trousers',
    category: 'bottomwear',
    subcategory: 'trousers',
    clothingType: 'Formal Trousers',
    brand: 'BusinessWear',
    price: 2399,
    discountPrice: 1799,
    sizes: ['28', '30', '32', '34', '36', '38', '40'],
    colors: ['Charcoal Grey', 'Navy Blue', 'Black'],
    fabric: '70% Polyester, 30% Wool',
    fitType: 'slim',
    occasion: ['office', 'formal', 'business'],
    season: ['all-season'],
    pattern: 'Solid',
    careInstructions: 'Dry clean recommended',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/380a9cfe-ed7e-44a7-8c51-4fe2f09b289a.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9ed3190a-2529-41eb-af99-f916acd8a143.png'
    ],
    description: 'Modern slim fit formal trousers in charcoal grey. Wool blend fabric for premium feel and durability.',
    specifications: {
      material: '70% Polyester, 30% Wool',
      washCare: 'Dry clean recommended',
      countryOfOrigin: 'India',
      manufacturer: 'BusinessWear Corp'
    },
    ratings: 4.5,
    reviewCount: 198,
    reviews: [],
    inStock: true,
    featured: false,
    new: true
  },

  // Traditional Clothing - Kurtas
  {
    id: 'traditional-kurta-1',
    name: 'White Cotton Kurta',
    category: 'traditional',
    subcategory: 'kurta',
    clothingType: 'Kurta',
    brand: 'EthnicStyle',
    price: 1899,
    discountPrice: 1424,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Cream', 'Light Blue', 'Light Grey'],
    fabric: '100% Cotton',
    fitType: 'regular',
    occasion: ['festival', 'casual', 'religious'],
    season: ['summer', 'all-season'],
    sleeveType: 'Full Sleeve',
    collarType: 'Band Collar',
    pattern: 'Solid',
    careInstructions: 'Machine wash cold, iron on medium',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7cbf4184-dce2-4b8a-9169-6c0b7a623d30.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/188eebeb-076c-430c-aaa6-63cd7cc0d8ff.png'
    ],
    description: 'Classic white cotton kurta with traditional band collar. Perfect for festivals and casual ethnic occasions.',
    specifications: {
      material: '100% Cotton',
      washCare: 'Machine wash cold',
      countryOfOrigin: 'India',
      manufacturer: 'EthnicStyle Weavers'
    },
    ratings: 4.4,
    reviewCount: 278,
    reviews: [],
    inStock: true,
    featured: true,
    new: false
  },
  {
    id: 'traditional-kurta-2',
    name: 'Silk Blend Festive Kurta',
    category: 'traditional',
    subcategory: 'kurta',
    clothingType: 'Kurta',
    brand: 'RoyalTradition',
    price: 3299,
    discountPrice: 2474,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Royal Blue', 'Maroon', 'Golden', 'Deep Green'],
    fabric: '60% Silk, 40% Cotton',
    fitType: 'regular',
    occasion: ['festival', 'wedding', 'party'],
    season: ['winter', 'all-season'],
    sleeveType: 'Full Sleeve',
    collarType: 'Mandarin Collar',
    pattern: 'Embroidered',
    careInstructions: 'Dry clean only',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e5216a06-349b-41a6-9d23-b091f5133b0d.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/66591eac-cf6d-4250-ad8a-e9124563fdb6.png'
    ],
    description: 'Luxurious silk blend kurta with intricate embroidery. Perfect for weddings and special festive occasions.',
    specifications: {
      material: '60% Silk, 40% Cotton',
      washCare: 'Dry clean only',
      countryOfOrigin: 'India',
      manufacturer: 'RoyalTradition Crafts'
    },
    ratings: 4.6,
    reviewCount: 145,
    reviews: [],
    inStock: true,
    featured: true,
    new: true
  },

  // Traditional Clothing - Sherwanis
  {
    id: 'traditional-sherwani-1',
    name: 'Cream Silk Sherwani Set',
    category: 'traditional',
    subcategory: 'sherwani',
    clothingType: 'Sherwani',
    brand: 'WeddingRoyale',
    price: 8999,
    discountPrice: 6749,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Cream', 'Golden', 'Maroon', 'Royal Blue'],
    fabric: '100% Silk',
    fitType: 'regular',
    occasion: ['wedding', 'engagement', 'festival'],
    season: ['winter', 'all-season'],
    sleeveType: 'Full Sleeve',
    collarType: 'High Neck',
    pattern: 'Embroidered',
    careInstructions: 'Dry clean only, store in garment bag',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8caca620-7a76-4b3f-be1f-b595f93ceacb.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cf019b88-56fe-486d-8ecd-169e82e32a21.png'
    ],
    description: 'Elegant cream silk sherwani with gold thread embroidery. Complete set includes matching churidar and dupatta.',
    specifications: {
      material: '100% Silk',
      washCare: 'Dry clean only',
      countryOfOrigin: 'India',
      manufacturer: 'WeddingRoyale Couture'
    },
    ratings: 4.8,
    reviewCount: 89,
    reviews: [],
    inStock: true,
    featured: true,
    new: false
  },

  // Seasonal Clothing - Jackets
  {
    id: 'seasonal-jacket-1',
    name: 'Denim Casual Jacket',
    category: 'seasonal',
    subcategory: 'jacket',
    clothingType: 'Denim Jacket',
    brand: 'StreetStyle',
    price: 2999,
    discountPrice: 2249,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Dark Blue', 'Light Blue', 'Black', 'Grey'],
    fabric: '100% Cotton Denim',
    fitType: 'regular',
    occasion: ['casual', 'weekend', 'party'],
    season: ['winter', 'monsoon'],
    sleeveType: 'Full Sleeve',
    pattern: 'Solid',
    careInstructions: 'Machine wash cold, air dry',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2c1bf210-4c6d-47a1-8e12-d31947f426fc.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/077711ba-5c5d-4db6-bc6a-a40363b474ee.png'
    ],
    description: 'Classic denim jacket perfect for layering. Features traditional styling with modern fit.',
    specifications: {
      material: '100% Cotton Denim',
      washCare: 'Machine wash cold',
      countryOfOrigin: 'India',
      manufacturer: 'StreetStyle Co'
    },
    ratings: 4.3,
    reviewCount: 167,
    reviews: [],
    inStock: true,
    featured: false,
    new: false
  },
  {
    id: 'seasonal-sweater-1',
    name: 'Wool Blend V-Neck Sweater',
    category: 'seasonal',
    subcategory: 'sweater',
    clothingType: 'Sweater',
    brand: 'WinterWear',
    price: 2799,
    discountPrice: 2099,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy Blue', 'Charcoal', 'Burgundy', 'Forest Green'],
    fabric: '70% Wool, 30% Acrylic',
    fitType: 'regular',
    occasion: ['casual', 'office', 'weekend'],
    season: ['winter'],
    sleeveType: 'Full Sleeve',
    pattern: 'Solid',
    careInstructions: 'Hand wash cold, lay flat to dry',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6429bd02-9284-4565-a697-dd88407b862a.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c4c0d1ad-fa13-41e8-a7d2-934b82c07338.png'
    ],
    description: 'Warm wool blend v-neck sweater perfect for winter. Comfortable fit suitable for both casual and office wear.',
    specifications: {
      material: '70% Wool, 30% Acrylic',
      washCare: 'Hand wash cold',
      countryOfOrigin: 'India',
      manufacturer: 'WinterWear Industries'
    },
    ratings: 4.5,
    reviewCount: 203,
    reviews: [],
    inStock: true,
    featured: true,
    new: true
  }
];

// Helper functions
export const getProductsByCategory = (category: string): MensClothing[] => {
  return mensClothing.filter(product => product.category === category);
};

export const getProductsBySubcategory = (subcategory: string): MensClothing[] => {
  return mensClothing.filter(product => product.subcategory === subcategory);
};

export const getFeaturedProducts = (): MensClothing[] => {
  return mensClothing.filter(product => product.featured);
};

export const getNewProducts = (): MensClothing[] => {
  return mensClothing.filter(product => product.new);
};

export const getProductById = (id: string): MensClothing | undefined => {
  return mensClothing.find(product => product.id === id);
};