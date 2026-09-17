'use client';
import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black pt-16 pb-8 mt-12 rounded-t-[2.5rem] relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo & Contact */}
          <div className="flex flex-col gap-8">
            <div className="inline-block w-40">
              <img 
                src="/images/logo.png" 
                alt="AZB Store Logo" 
                className="w-full h-auto drop-shadow-md"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-sm">
                <Phone size={20} fill="currentColor" />
              </div>
              <div>
                <p className="text-white/90 text-sm mb-0.5">Have Question? Call Us 24/7</p>
                <a href="tel:+917306139947" className="text-xl font-bold text-white hover:text-white/80 transition-colors">
                  +917306139947
                </a>
              </div>
            </div>
            
            <div>
              <p className="text-white/90 text-sm">
                Monday-Friday: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          {/* Column 2: Know More */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Know More</h3>
            <ul className="flex flex-col gap-4 text-white/90 text-sm">
              <li><Link href="/policy/return" className="hover:text-white transition-colors">Return, Cancellation & Refund policy</Link></li>
              <li><Link href="/policy/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/policy/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/policy/shipping" className="hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link href="/policy/contact" className="hover:text-white transition-colors">Contact Information</Link></li>
            </ul>
          </div>

          {/* Column 3: Shop Categories */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Shop Categories</h3>
            <ul className="flex flex-col gap-4 text-white/90 text-sm">
              <li><Link href="/outfits" className="hover:text-white transition-colors">Outfits</Link></li>
              <li><Link href="/kids" className="hover:text-white transition-colors">Kids</Link></li>
            </ul>
          </div>

          {/* Column 4: Useful Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Useful Links</h3>
            <ul className="flex flex-col gap-4 text-white/90 text-sm">
              <li><Link href="/cart" className="hover:text-white transition-colors">View Cart</Link></li>
              <li><Link href="/wishlist" className="hover:text-white transition-colors">View Wishlist</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">Shop</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/30 flex flex-col md:flex-row items-center justify-between gap-6 relative">
          
          <div className="flex items-center gap-3">
            <span className="text-white text-sm mr-2">Follow Us:</span>
            <a href="#" className="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center hover:bg-yellow-400 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center hover:bg-yellow-400 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center hover:bg-yellow-400 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>

          <p className="text-white/90 text-xs md:text-sm text-center md:absolute md:left-1/2 md:-translate-x-1/2">
            Copyright 2026 © <span className="font-semibold text-white">AZB Store</span>. v1.1.5 | All rights Reserved | Powered by <a href="#" className="font-semibold text-white hover:underline">riolabz</a>
          </p>
          
          <div className="hidden md:block w-32">
            {/* Empty space to balance the flex container so copyright stays centered */}
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
        <a 
          href="https://wa.me/917306139947" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-yellow-500 rounded-full shadow-lg flex items-center justify-center text-black hover:bg-yellow-400 hover:scale-105 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </div>
    </footer>
  );
}
