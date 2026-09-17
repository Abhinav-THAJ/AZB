import React from 'react';
import Link from 'next/link';

export default function OfferZone() {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center uppercase tracking-wide mb-8">
        <span className="text-gray-600">OFFER</span>{' '}
        <span className="text-yellow-500">ZONE</span>
      </h2>

      {/* Banner */}
      <Link href="/shop" className="block relative w-full h-[200px] md:h-[280px] lg:h-[350px] rounded-2xl overflow-hidden shadow-sm group">
        <img 
          src="/images/offer_banner.jpg" 
          alt="Offer Zone Banner" 
          className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
        />
        {/* Optional overlay to mimic the image if placeholder is used */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
      </Link>
    </section>
  );
}
