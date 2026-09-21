import React from 'react';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: "All",
    image: "https://picsum.photos/seed/all/200/200",
    link: "/shop"
  },
  {
    id: 2,
    name: "Personalized Gifts",
    image: "https://picsum.photos/seed/gifts/200/200",
    link: "/category/personalized-gifts"
  },
  {
    id: 3,
    name: "Home & Personal Care",
    image: "https://picsum.photos/seed/homecare/200/200",
    link: "/category/home-personal-care"
  },
  {
    id: 4,
    name: "PSC Books",
    image: "https://picsum.photos/seed/books/200/200",
    link: "/category/psc-books"
  },
  {
    id: 5,
    name: "Kids Zone",
    image: "https://knoti-live.s3.ap-south-1.amazonaws.com/a3558e38-574a-42c4-a72c-c3a1b7f37625-thumbnail.webp",
    link: "/category/kids-zone"
  },
  {
    id: 6,
    name: "Electronics",
    image: "https://picsum.photos/seed/electronics/200/200",
    link: "/category/electronics"
  }
];

export default function ShopByCategory() {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center uppercase tracking-wide mb-8">
        <span className="text-gray-800">SHOP BY</span>{' '}
        <span className="text-black">CATEGORY</span>
      </h2>

      {/* Banner Container */}
      <div className="relative w-full rounded-lg bg-yellow-400 py-12 min-h-[250px] flex items-center shadow-sm overflow-hidden">
        {/* Decorative Background Elements (CSS based to match image) */}
        <div className="absolute top-4 left-10 text-white opacity-40 text-6xl pointer-events-none">🌙</div>
        <div className="absolute top-1/4 left-1/3 text-white opacity-40 text-4xl pointer-events-none">✨</div>
        <div className="absolute top-8 right-1/3 text-white opacity-40 text-6xl pointer-events-none">🌟</div>
        <div className="absolute bottom-6 right-20 text-white opacity-40 text-5xl pointer-events-none">🪐</div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>

        {/* Categories Flex */}
        <div className="relative z-10 w-full overflow-x-auto no-scrollbar pl-8 md:pl-16 pr-8">
          <div className="flex items-center justify-start gap-8 md:gap-16 pb-4 w-max min-w-full">
            {categories.map((cat) => (
              <Link href={cat.link} key={cat.id} className="flex flex-col items-center group w-28 md:w-36 flex-shrink-0">
                <div className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-[3px] border-[#ffdad0] outline outline-2 outline-white shadow-md group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="mt-4 text-xs md:text-sm font-bold text-gray-900 tracking-wider uppercase group-hover:text-black text-center leading-tight">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
