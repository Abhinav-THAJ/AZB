'use client';

import React from 'react';
import Link from 'next/link';
import StoreImage from './StoreImage';
import { useCartStore } from '@/store/useCartStore';

interface ProductCardProps {
  id: string | number;
  name: string;
  price: string;
  originalPrice?: string;
  imageFallback: string;
  imageSrc?: string | null;
}

export default function ProductCard({ id, name, price, originalPrice, imageFallback, imageSrc = null }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      image: imageSrc || imageFallback,
    });
  };

  return (
    <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundColor: 'var(--color-surface)', display: 'flex', flexDirection: 'column' }}>
      <Link href={`/product/${id}`} className="block group">
        <StoreImage 
          src={imageSrc} 
          fallback={imageFallback}
          alt={name} 
          aspectRatio="1/1"
          style={{ objectFit: 'cover' }} 
          containerClassName="transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div style={{ padding: 'var(--spacing-4)', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Link href={`/product/${id}`} className="block hover:text-gold transition-colors">
          <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--spacing-2)', height: '2.8rem', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            {name}
          </h3>
        </Link>
        
        <div style={{ marginTop: 'auto' }}>
          <div className="flex items-center gap-2 mb-4">
            <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>{price}</span>
            {originalPrice && (
              <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', textDecoration: 'line-through' }}>{originalPrice}</span>
            )}
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="btn btn-primary w-full"
            style={{ padding: '0.5rem', fontSize: '0.875rem' }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
