import React from 'react';
import StoreImage from '@/components/ui/StoreImage';

export const metadata = {
  title: 'About Us - AZB Store',
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Story</h1>
        <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-gold)', margin: '0 auto' }}></div>
      </div>

      <div className="flex md:flex-col items-center gap-16 mb-16">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">The AZB Store Vision</h2>
          <p className="text-muted mb-4" style={{ fontSize: '1.125rem' }}>
            Founded with a passion for excellence, AZB Store was born from a simple idea: that everyday objects should bring joy, elegance, and uncompromising quality to your life.
          </p>
          <p className="text-muted" style={{ fontSize: '1.125rem' }}>
            We meticulously source products from the finest creators, ensuring that every item in our catalog meets our strict standards for durability, design, and sustainability. Our curation process is rigorous, because we believe our customers deserve nothing but the best.
          </p>
        </div>
        <div className="flex-1 w-full rounded-lg overflow-hidden shadow-lg">
          <StoreImage 
            src="/images/about/about-lifestyle.jpg" 
            fallback="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop"
            aspectRatio="4/3" 
            alt="AZB Store Vision"
          />
        </div>
      </div>
      
      <div className="bg-warm-neutral p-12 rounded-lg text-center shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-3 md:grid-cols-1 gap-8 text-left">
          <div>
            <div style={{ color: 'var(--color-gold)', fontSize: '2rem', marginBottom: '0.5rem' }}>✧</div>
            <h3 className="font-bold mb-2">Premium Quality</h3>
            <p className="text-muted text-sm">Every product is tested and verified for exceptional build quality and longevity.</p>
          </div>
          <div>
            <div style={{ color: 'var(--color-gold)', fontSize: '2rem', marginBottom: '0.5rem' }}>✧</div>
            <h3 className="font-bold mb-2">Curated Aesthetics</h3>
            <p className="text-muted text-sm">We ensure all our products fit within a modern, elegant design language.</p>
          </div>
          <div>
            <div style={{ color: 'var(--color-gold)', fontSize: '2rem', marginBottom: '0.5rem' }}>✧</div>
            <h3 className="font-bold mb-2">Exceptional Service</h3>
            <p className="text-muted text-sm">Our customer support team is dedicated to providing a seamless shopping experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
