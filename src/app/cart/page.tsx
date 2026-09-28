'use client';
import React from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className='container mx-auto px-4 py-32 text-center min-h-[60vh] flex flex-col items-center justify-center'>
        <ShoppingBag size={64} className='text-gray-300 mb-6' />
        <h1 className='text-2xl sm:text-4xl font-bold mb-4 text-gray-800'>Your Cart is Empty</h1>
        <p className='text-gray-500 mb-8'>Looks like you haven't added anything to your cart yet.</p>
        <Link href='/shop' className='bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-full transition-colors'>
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-12 md:py-16'>
      <h1 className='text-2xl sm:text-3xl font-bold mb-8 text-gray-900'>Shopping Cart</h1>
      
      <div className='flex flex-col lg:flex-row gap-8'>
        <div className='lg:w-2/3'>
          <div className='bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden'>
            <div className='hidden sm:grid grid-cols-12 gap-4 p-4 border-b border-gray-100 bg-gray-50 text-xs font-semibold text-gray-500 uppercase'>
              <div className='col-span-6'>Product</div>
              <div className='col-span-2 text-center'>Price</div>
              <div className='col-span-2 text-center'>Quantity</div>
              <div className='col-span-2 text-right'>Total</div>
            </div>
            
            <div className='divide-y divide-gray-100'>
              {cart.map((item) => (
                <div key={item.id} className='p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center'>
                  <div className='sm:col-span-6 flex items-center gap-4'>
                    <img src={item.image} alt={item.title} className='w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg bg-gray-100' />
                    <div className='flex-1'>
                      <h3 className='font-bold text-sm sm:text-base text-gray-900 line-clamp-2'>{item.title}</h3>
                      <p className='text-xs text-gray-500 mt-1'>{item.category}</p>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className='text-xs text-red-500 hover:text-red-700 font-semibold mt-2 flex items-center gap-1 transition-colors'
                      >
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>
                  
                  <div className='sm:col-span-2 flex justify-between sm:block text-sm font-bold text-gray-900 sm:text-center'>
                    <span className='sm:hidden text-gray-500 font-normal'>Price: </span>
                    ₹{item.price}
                  </div>
                  
                  <div className='sm:col-span-2 flex justify-center'>
                    <div className='flex items-center bg-gray-50 border border-gray-200 rounded-lg overflow-hidden'>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className='p-2 hover:bg-gray-200 text-gray-600 transition-colors'
                      >
                        <Minus size={14} />
                      </button>
                      <span className='w-8 text-center text-sm font-bold'>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className='p-2 hover:bg-gray-200 text-gray-600 transition-colors'
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  
                  <div className='sm:col-span-2 flex justify-between sm:block text-sm font-extrabold text-gray-900 sm:text-right'>
                    <span className='sm:hidden text-gray-500 font-normal'>Total: </span>
                    ₹{item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className='lg:w-1/3'>
          <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24'>
            <h2 className='text-lg font-bold text-gray-900 mb-6'>Order Summary</h2>
            
            <div className='space-y-4 text-sm'>
              <div className='flex justify-between text-gray-600'>
                <span>Subtotal</span>
                <span className='font-bold text-gray-900'>₹{totalPrice}</span>
              </div>
              <div className='flex justify-between text-gray-600'>
                <span>Shipping</span>
                <span className='font-bold text-green-600'>Free</span>
              </div>
              <div className='border-t border-gray-100 pt-4 flex justify-between items-end'>
                <span className='font-bold text-gray-900 text-base'>Total</span>
                <span className='font-extrabold text-2xl text-gray-900'>₹{totalPrice}</span>
              </div>
            </div>
            
            <button className='w-full bg-black text-white hover:bg-gray-800 font-bold py-3.5 rounded-xl mt-8 transition-colors text-sm uppercase tracking-wide'>
              Proceed to Checkout
            </button>
            
            <p className='text-xs text-center text-gray-400 mt-4'>
              Taxes included. Shipping calculated at checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
