import React from 'react';
import ProductCard from '@/components/ui/ProductCard';

export const metadata = {
  title: 'Shop - AZB Store',
};

// Mock products for the shop page
const products = [
  { id: 101, name: 'Premium Noise Cancelling Headphones', price: '₹4,999', originalPrice: '₹9,999', fallback: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop' },
  { id: 102, name: 'Smart Fitness Watch Series 7', price: '₹2,499', originalPrice: '₹5,999', fallback: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop' },
  { id: 103, name: 'Professional Camera Lens', price: '₹12,999', originalPrice: '₹15,999', fallback: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop' },
  { id: 104, name: 'Minimalist Leather Wallet', price: '₹999', originalPrice: '₹1,999', fallback: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600&auto=format&fit=crop' },
  { id: 105, name: 'Mechanical Keyboard RGB', price: '₹3,499', fallback: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600&auto=format&fit=crop' },
  { id: 106, name: 'Modern Desk Lamp', price: '₹1,299', fallback: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&auto=format&fit=crop' },
  { id: 107, name: 'Ceramic Coffee Mug Set', price: '₹799', fallback: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=600&auto=format&fit=crop' },
  { id: 108, name: 'Canvas Backpack', price: '₹1,899', fallback: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop' },
];

export default function ShopPage() {
  return (
    <div className="container py-8">
      <div className="flex justify-between items-end mb-8 border-b pb-4 border-gray-200">
        <div>
          <h1 className="text-3xl font-bold mb-2">Shop All Products</h1>
          <p className="text-muted">Discover our complete collection of premium items.</p>
        </div>
        <div>
          <select className="border border-gray-300 rounded p-2 text-sm bg-white text-black" defaultValue="featured">
            <option value="featured">Sort by: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest Arrivals</option>
          </select>
        </div>
      </div>
      
      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <div style={{ width: '250px', flexShrink: 0 }} className="hidden md:block">
          <h3 className="font-bold mb-4">Categories</h3>
          <div className="flex flex-col gap-2 text-muted">
            <label className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors">
              <input type="checkbox" /> Electronics
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors">
              <input type="checkbox" /> Fashion
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors">
              <input type="checkbox" /> Home & Kitchen
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors">
              <input type="checkbox" /> Beauty
            </label>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                imageFallback={product.fallback}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
