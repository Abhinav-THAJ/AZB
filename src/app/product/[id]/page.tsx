import React from 'react';
import StoreImage from '@/components/ui/StoreImage';
import AddToCartForm from './AddToCartForm';
import Link from 'next/link';

// Mock data fetcher
const getProduct = async (id: string) => {
  // Mock data representing a single product
  return {
    id,
    name: 'Premium Noise Cancelling Headphones',
    price: '₹4,999',
    originalPrice: '₹9,999',
    fallback: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
    description: 'Experience unparalleled sound quality with our industry-leading noise cancellation. Perfect for commuting, working from home, or just immersing yourself in your favorite music.',
    features: [
      'Active Noise Cancellation (ANC)',
      'Up to 30 hours of battery life',
      'Ultra-comfortable over-ear design',
      'Built-in microphone for crystal clear calls',
      'Bluetooth 5.0 connectivity'
    ],
    sku: 'AZB-HP-001',
    category: 'Electronics'
  };
};

export default async function ProductPage({ params }: { params: { id: string } }) {
  // Await the params before using them as required by Next.js 15+
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container py-12">
      <div className="mb-8 text-sm text-muted">
        <Link href="/" className="hover:text-gold transition-colors">Home</Link> &rsaquo; 
        <Link href="/shop" className="hover:text-gold transition-colors mx-2">Shop</Link> &rsaquo; 
        <Link href={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-gold transition-colors mx-2">{product.category}</Link> &rsaquo; 
        <span className="text-primary ml-2">{product.name}</span>
      </div>

      <div className="flex md:flex-col gap-12 lg:gap-16">
        {/* Product Images */}
        <div className="flex-1">
          <div className="border border-[var(--color-border)] rounded-lg overflow-hidden bg-[var(--color-surface)] mb-4">
            <StoreImage 
              src={null}
              fallback={product.fallback}
              alt={product.name}
              aspectRatio="1/1"
              style={{ objectFit: 'contain', padding: 'var(--spacing-8)' }}
              priority={true}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border border-[var(--color-border)] rounded-lg overflow-hidden bg-[var(--color-surface)] cursor-pointer hover:border-gold transition-colors">
                <StoreImage 
                  src={null}
                  fallback={product.fallback}
                  alt={`${product.name} view ${i}`}
                  aspectRatio="1/1"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">{product.name}</h1>
          <div className="text-sm text-muted mb-6">SKU: {product.sku}</div>
          
          <div className="flex items-end gap-4 mb-6">
            <span className="text-3xl font-bold">{product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-muted line-through mb-1">{product.originalPrice}</span>
            )}
          </div>

          <p className="text-muted text-lg mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="mb-8">
            <h3 className="font-bold mb-4">Key Features</h3>
            <ul className="flex flex-col gap-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div style={{ color: 'var(--color-gold)', marginTop: '2px' }}>✓</div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-[var(--color-border)] mb-8" />

          {/* Add to Cart Interactive Component */}
          <AddToCartForm product={product} />

          <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>Secure Checkout</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                <span>Free Shipping on orders over ₹1,999</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.21L21.5 8"></path></svg>
                <span>30-Day Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
