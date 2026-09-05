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

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    // Add the specific quantity to the cart
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.fallback,
      });
    }
  };

  return (
    <div className="flex flex-col gap-6 mt-auto">
      <div>
        <label className="block text-sm font-medium mb-2">Quantity</label>
        <div className="flex items-center" style={{ width: 'fit-content', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          <button 
            onClick={handleDecrease}
            className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            -
          </button>
          <div className="w-12 h-10 flex items-center justify-center font-medium border-x border-[var(--color-border)]">
            {quantity}
          </div>
          <button 
            onClick={handleIncrease}
            className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex gap-4 w-full">
        <button 
          onClick={handleAddToCart}
          className="btn btn-outline flex-1 py-3 text-lg"
        >
          Add to Cart
        </button>
        <button 
          onClick={handleAddToCart}
          className="btn btn-primary flex-1 py-3 text-lg bg-[var(--color-gold)] text-[var(--color-black)] hover:opacity-90 hover:shadow-lg transition-all"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
