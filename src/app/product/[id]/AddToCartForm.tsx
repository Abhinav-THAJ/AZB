'use client';

import React, { useState } from 'react';
import { useCartStore } from '@/store/useCartStore';

interface AddToCartFormProps {
  product: {
    id: string | number;
    name: string;
    price: string;
    fallback: string;
  };
}

export default function AddToCartForm({ product }: AddToCartFormProps) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);
  const setIsCartOpen = useCartStore((state) => state.setIsOpen);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.fallback,
      });
    }
  };
  
  const handleBuyNow = () => {
    handleAddToCart();
    setIsCartOpen(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: 'auto' }}>
      <div>
        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Quantity</label>
        <div style={{ display: 'flex', alignItems: 'center', width: 'fit-content', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          <button 
            onClick={handleDecrease}
            style={{ width: '2.5rem', height: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color var(--transition-fast)' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(128,128,128,0.1)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            -
          </button>
          <div style={{ width: '3rem', height: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 500, borderLeft: '1px solid var(--color-border)', borderRight: '1px solid var(--color-border)' }}>
            {quantity}
          </div>
          <button 
            onClick={handleIncrease}
            style={{ width: '2.5rem', height: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color var(--transition-fast)' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(128,128,128,0.1)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            +
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
        <button 
          onClick={handleAddToCart}
          className="btn btn-outline"
          style={{ flex: 1, padding: '1rem', fontSize: '1.125rem' }}
        >
          Add to Cart
        </button>
        <button 
          onClick={handleBuyNow}
          className="btn btn-primary"
          style={{ flex: 1, padding: '1rem', fontSize: '1.125rem', backgroundColor: 'var(--color-gold)', color: 'var(--color-black)' }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
