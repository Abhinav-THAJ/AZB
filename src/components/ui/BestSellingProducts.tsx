'use client';
import React, { useRef, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "Dual Tip Alcohol Based Marker Cum Sketch (48 Piece Box)",
    category: "Kids",
    price: 699,
    originalPrice: 999,
    discount: "30% Off",
    soldOut: true,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=400&h=500"
  },
  {
    id: 2,
    title: "Twistup Rolling Crayon",
    category: "Kids",
    price: 319,
    originalPrice: 399,
    discount: "20% Off",
    soldOut: false,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=400&h=500"
  },
  {
    id: 3,
    title: "Girls Short Sets (Upto 4 Years)",
    category: "Kids, Outfits",
    price: 349,
    originalPrice: 449,
    discount: "22% Off",
    soldOut: false,
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=400&h=500"
  },
  {
    id: 4,
    title: "Elephant Stack Attack",
    category: "Kids",
    price: 361,
    originalPrice: 399,
    discount: "10% Off",
    soldOut: false,
    image: "https://images.unsplash.com/photo-1599623560574-39d485900c95?auto=format&fit=crop&q=80&w=400&h=500"
  },
  {
    id: 5,
    title: "Pressing Giraffe Toy",
    category: "Kids",
    price: 149,
    originalPrice: 169,
    discount: "12% Off",
    soldOut: false,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=400&h=500"
  },
  {
    id: 6,
    title: "Premium Silicone Pencil Pouch",
    category: "Kids",
    price: 242,
    originalPrice: 399,
    discount: "39% Off",
    soldOut: false,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400&h=500"
  },
  {
    id: 7,
    title: "Dual Tip Alcohol Based Marker Cum Sketch (48 Piece Box)",
    category: "Kids",
    price: 699,
    originalPrice: 999,
    discount: "30% Off",
    soldOut: true,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=400&h=500"
  },
  {
    id: 8,
    title: "Twistup Rolling Crayon",
    category: "Kids",
    price: 319,
    originalPrice: 399,
    discount: "20% Off",
    soldOut: false,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=400&h=500"
  },
  {
    id: 9,
    title: "Girls Short Sets (Upto 4 Years)",
    category: "Kids, Outfits",
    price: 349,
    originalPrice: 449,
    discount: "22% Off",
    soldOut: false,
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=400&h=500"
  },
  {
    id: 10,
    title: "Elephant Stack Attack",
    category: "Kids",
    price: 361,
    originalPrice: 399,
    discount: "10% Off",
    soldOut: false,
    image: "https://images.unsplash.com/photo-1599623560574-39d485900c95?auto=format&fit=crop&q=80&w=400&h=500"
  }
];

export default function BestSellingProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Duplicate products to create 4 identical sets for the infinite loop illusion
  const displayProducts = [...products, ...products, ...products, ...products].map((p, i) => ({ ...p, uniqueId: i }));

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Wait a brief moment for layout to complete
    setTimeout(() => {
      const setWidth = container.scrollWidth / 4;
      // Start at the beginning of the second set
      container.scrollLeft = setWidth;
    }, 100);

    const handleScroll = () => {
      const setWidth = container.scrollWidth / 4;
      // If scrolled deep into the first set, jump to the third set
      if (container.scrollLeft < setWidth / 2) {
        container.scrollLeft += setWidth * 2;
      }
      // If scrolled deep into the fourth set, jump to the second set
      else if (container.scrollLeft > setWidth * 2.5) {
        container.scrollLeft -= setWidth * 2;
      }
    };

    container.addEventListener('scroll', handleScroll);
    
    // Auto scroll timer
    const timer = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }, 15000);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">
          BEST SELLING PRODUCTS
        </h2>
        <div className="flex items-center gap-2">
          <button 
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600"
            aria-label="Previous products"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600"
            aria-label="Next products"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Product Carousel */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {displayProducts.map((product) => (
          <div key={product.uniqueId} className="min-w-[280px] md:min-w-[calc(16.666%-20px)] flex-1 snap-start group flex flex-col">
            {/* Image Box */}
            <div className="relative aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden mb-3">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover mix-blend-multiply"
              />
              <button className="absolute top-3 right-3 bg-white p-1.5 rounded shadow-sm text-gray-400 hover:text-red-500 transition-colors z-10">
                <Heart size={18} />
              </button>
            </div>
            
            {/* Details */}
            <div className="flex flex-col flex-1">
              <h3 className="font-bold text-sm text-gray-900 line-clamp-2 leading-snug min-h-[40px]">
                {product.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{product.category}</p>
              
              <div className="mt-1.5 flex items-baseline gap-2">
                <span className="text-lg font-extrabold text-gray-900">₹{product.price}</span>
                <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                <span className="text-sm font-bold text-red-500">({product.discount})</span>
              </div>
              
              <div className="mt-4 mt-auto">
                {product.soldOut ? (
                  <button className="bg-black text-white px-4 py-1.5 rounded text-xs font-bold cursor-not-allowed opacity-90">
                    Sold Out
                  </button>
                ) : (
                  <button className="bg-black text-white px-4 py-1.5 rounded text-xs font-bold hover:bg-gray-800 transition-colors">
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-end mt-4">
        <button className="px-6 py-2 border border-gray-300 rounded text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
          View All
        </button>
      </div>
    </section>
  );
}
