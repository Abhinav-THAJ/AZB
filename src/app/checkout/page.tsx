'use client';

import React from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';

export default function CheckoutPage() {
  const { items, getCartTotal, removeItem } = useCartStore();
  const cartTotal = getCartTotal();

  if (items.length === 0) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link href="/shop" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="flex md:flex-col gap-12">
        {/* Billing Form */}
        <div className="flex-[2]">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">Billing Details</h2>
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input type="text" className="form-input" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input type="text" className="form-input" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input type="email" className="form-input" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Street Address</label>
              <input type="text" className="form-input mb-2" placeholder="House number and street name" />
              <input type="text" className="form-input" placeholder="Apartment, suite, unit, etc. (optional)" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input type="text" className="form-input" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">State / Province</label>
                <input type="text" className="form-input" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-sm font-medium mb-1">PIN / ZIP Code</label>
                <input type="text" className="form-input" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input type="tel" className="form-input" />
              </div>
            </div>
            
            <h2 className="text-xl font-bold mb-4 border-b pb-2">Payment</h2>
            <div className="p-4 border border-[var(--color-border)] rounded bg-warm-neutral mb-4">
              <label className="flex items-center gap-2 cursor-pointer font-medium">
                <input type="radio" name="payment" defaultChecked /> Credit / Debit Card
              </label>
              <div className="mt-4 flex flex-col gap-2">
                <input type="text" className="form-input text-sm" placeholder="Card Number" />
                <div className="grid grid-cols-2 gap-2">
                  <input type="text" className="form-input text-sm" placeholder="MM/YY" />
                  <input type="text" className="form-input text-sm" placeholder="CVC" />
                </div>
              </div>
            </div>
            
            <div className="p-4 border border-gray-300 rounded hover:bg-warm-neutral transition-colors">
              <label className="flex items-center gap-2 cursor-pointer font-medium">
                <input type="radio" name="payment" /> Cash on Delivery (COD)
              </label>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="flex-1">
          <div className="bg-warm-neutral p-6 rounded-lg border border-gray-200 sticky top-24">
            <h2 className="text-xl font-bold mb-4">Your Order</h2>
            
            <div className="flex flex-col gap-4 mb-4 max-h-[400px] overflow-y-auto pr-2">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-gray-200 pb-4">
                  <div className="w-16 h-16 rounded overflow-hidden bg-white flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium line-clamp-2">{item.name}</h4>
                    <div className="text-xs text-muted mt-1">Qty: {item.quantity}</div>
                    <div className="text-sm font-bold mt-1">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-sm mb-4 border-b border-gray-200 pb-4">
              <span>Shipping</span>
              <span className="text-success">Free</span>
            </div>
            <div className="flex justify-between text-lg font-bold mb-6">
              <span>Total</span>
              <span>₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
            
            <button className="btn btn-primary w-full py-3 text-lg">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
