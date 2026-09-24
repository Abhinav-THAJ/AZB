'use client';
import React, { useState, useEffect } from 'react';

const messages = [
  "📦 Unedited Unboxing Video Must for Damage Claims",
  "🚫 Products are non-returnable",
  "🚚 All India Free Shipping",
  "📅 Shipping Days : Wednesday & Saturday"
];

export default function PromoRibbon() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % messages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-100 border-b border-gray-200 overflow-hidden text-xs sm:text-sm">
      {/* Desktop View: Full horizontal inline strip */}
      <div className="hidden md:block py-2 px-4 text-center">
        <p className="text-gray-700 text-xs tracking-wide">
          <span>Unedited Unboxing Video Must for Damage Claims</span>
          <span className="text-red-500 mx-3">|</span>
          <span>Products are non-returnable</span>
          <span className="text-red-500 mx-3">|</span>
          <span className="font-semibold text-gray-900">All India Free Shipping</span>
          <span className="text-red-500 mx-3">|</span>
          <span className="text-black font-medium">Shipping Days : Wednesday & Saturday</span>
        </p>
      </div>

      {/* Mobile View: Smooth Rotating Notice */}
      <div className="md:hidden py-1.5 px-4 text-center flex items-center justify-center min-h-[30px]">
        <div 
          key={currentIdx}
          className="text-gray-800 text-[11px] font-medium animate-in fade-in slide-in-from-bottom-1 duration-300 truncate"
        >
          {messages[currentIdx]}
        </div>
      </div>
    </div>
  );
}
