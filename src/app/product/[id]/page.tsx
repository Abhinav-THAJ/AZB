import React from 'react';
import StoreImage from '@/components/ui/StoreImage';
import AddToCartForm from './AddToCartForm';
import Link from 'next/link';

// Mock data fetcher
const getProduct = async (id: string) => {
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
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id);

  if (!product) {
    return <div className="container py-8">Product not found</div>;
  }

  return (
    <div className="container py-8">
      
      {/* Breadcrumbs */}
      <div className="mb-8 text-muted" style={{ fontSize: '0.875rem' }}>
        <Link href="/" className="hover:text-gold transition-colors">Home</Link> &rsaquo; 
        <Link href="/shop" className="hover:text-gold transition-colors" style={{ margin: '0 0.5rem' }}>Shop</Link> &rsaquo; 
        <Link href={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-gold transition-colors" style={{ margin: '0 0.5rem' }}>{product.category}</Link> &rsaquo; 
        <span style={{ color: 'var(--color-text-primary)', marginLeft: '0.5rem' }}>{product.name}</span>
      </div>

      <div className="flex md:flex-col gap-12" style={{ gap: '4rem' }}>
        
        {/* Left Column: Product Images */}
        <div style={{ flex: '1', width: '100%' }}>
          <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundColor: 'var(--color-surface)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <StoreImage 
              src={null}
              fallback={product.fallback}
              alt={product.name}
              aspectRatio="1/1"
              style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              priority={true}
            />
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', backgroundColor: 'var(--color-surface)', cursor: 'pointer', transition: 'border-color var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-gold)'} onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}>
                <StoreImage 
                  src={null}
                  fallback={product.fallback}
                  alt={`${product.name} view ${i}`}
                  aspectRatio="1/1"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Product Info */}
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '0.5rem' }}>{product.name}</h1>
          <div className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '1.5rem' }}>SKU: {product.sku}</div>
          
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}>{product.price}</span>
            {product.originalPrice && (
              <span className="text-muted" style={{ fontSize: '1.125rem', textDecoration: 'line-through', paddingBottom: '0.25rem' }}>{product.originalPrice}</span>
            )}
          </div>

          <p className="text-muted" style={{ fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.6 }}>
            {product.description}
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '1.125rem' }}>Key Features</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none' }}>
              {product.features.map((feature, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <div style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>✓</div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', marginBottom: '2rem' }} />

          {/* Add to Cart Interactive Component */}
          <AddToCartForm product={product} />

          {/* Trust Badges */}
          <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>Secure Checkout with Stripe</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                <span>Free Shipping on orders over ₹1,999</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
