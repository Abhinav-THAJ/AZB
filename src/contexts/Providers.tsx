'use client';
import React from 'react';
import { CartProvider } from './CartContext';
import { WishlistProvider } from './WishlistContext';
import { Toaster } from 'react-hot-toast';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <WishlistProvider>
        {children}
        <Toaster position="bottom-right" />
      </WishlistProvider>
    </CartProvider>
  );
}
