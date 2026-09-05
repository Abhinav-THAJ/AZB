'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';

const categories = [
  'Electronics', 'Home & Kitchen', 'Fashion', 'Beauty', 
  'Bags', 'Books', 'Kids', 'Fitness'
];

export default function Header() {
  const { items, isOpen: isCartOpen, setIsOpen: setIsCartOpen, removeItem, getCartTotal } = useCartStore();
  const [isShopHovered, setIsShopHovered] = useState(false);

  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = getCartTotal();

  return (
    <>
      <header style={{ borderBottom: '1px solid var(--color-border)', padding: 'var(--spacing-4) 0', position: 'sticky', top: 0, backgroundColor: 'var(--color-background)', zIndex: 40 }}>
        <div className="container flex justify-between items-center">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/">
              <img src="/logo.png" alt="AZB Store" style={{ height: '80px', width: 'auto' }} />
            </Link>
          </div>
          
          <nav style={{ display: 'flex', gap: 'var(--spacing-6)', fontWeight: 500, position: 'relative' }}>
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            
            <div 
              onMouseEnter={() => setIsShopHovered(true)}
              onMouseLeave={() => setIsShopHovered(false)}
              style={{ paddingBottom: '1rem', marginBottom: '-1rem' }} // extended hit area
            >
              <Link href="/shop" className="hover:text-gold transition-colors" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                Shop
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </Link>
              
              {/* Mega Menu */}
              {isShopHovered && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginTop: '0.5rem',
                  backgroundColor: 'var(--color-surface)',
                  boxShadow: 'var(--shadow-lg)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--spacing-6)',
                  width: '600px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 'var(--spacing-4)',
                  zIndex: 50,
                  border: '1px solid var(--color-border)'
                }}>
                  {categories.map((cat, idx) => (
                    <Link 
                      key={idx} 
                      href={`/shop?category=${cat.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                      className="hover:text-gold transition-colors"
                      style={{ fontSize: '0.875rem' }}
                    >
                      {cat}
                    </Link>
                  ))}
                  <div style={{ gridColumn: 'span 3', marginTop: 'var(--spacing-2)', paddingTop: 'var(--spacing-4)', borderTop: '1px solid var(--color-border)' }}>
                    <Link href="/shop" className="text-gold font-medium hover:underline" style={{ fontSize: '0.875rem' }}>View All Products &rarr;</Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/about" className="hover:text-gold transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
          </nav>

          <div>
            <button 
              className="btn btn-primary" 
              style={{ padding: '0.5rem 1rem' }}
              onClick={() => setIsCartOpen(true)}
            >
              Cart ({cartItemsCount})
            </button>
          </div>
        </div>
      </header>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', justifyContent: 'flex-end' }}>
          <div 
            style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', cursor: 'pointer' }}
            onClick={() => setIsCartOpen(false)}
          />
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px', backgroundColor: 'var(--color-surface)', height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-lg)', animation: 'slideInRight 0.3s ease-out' }}>
            <div style={{ padding: 'var(--spacing-6)', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} style={{ fontSize: '1.5rem', lineHeight: 1 }}>&times;</button>
            </div>
            
            <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--spacing-6)' }}>
              {items.length === 0 ? (
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)' }}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 'var(--spacing-4)', opacity: 0.5 }}>
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  <p>Your cart is empty.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <div key={item.id} style={{ display: 'flex', gap: 'var(--spacing-4)', borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--spacing-4)' }}>
                      <div style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-md)', overflow: 'hidden', flexShrink: 0, backgroundColor: 'var(--color-background)' }}>
                        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          <h3 style={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: 1.2, marginBottom: '0.25rem' }}>{item.name}</h3>
                          <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{item.price}</div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Qty: {item.quantity}</span>
                          <button 
                            onClick={() => removeItem(item.id)}
                            style={{ fontSize: '0.75rem', color: 'var(--color-error)' }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div style={{ padding: 'var(--spacing-6)', borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-background)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-4)', fontWeight: 600 }}>
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <Link href="/checkout" onClick={() => setIsCartOpen(false)}>
                  <button className="btn btn-primary w-full">Proceed to Checkout</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}} />
    </>
  );
}
