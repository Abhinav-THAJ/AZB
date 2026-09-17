import React from 'react';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: "Kids",
    image: "https://knoti-live.s3.ap-south-1.amazonaws.com/a3558e38-574a-42c4-a72c-c3a1b7f37625-thumbnail.webp", // Using thumbnail from Knoti
    link: "/kids"
  },
  {
    id: 2,
    name: "Outfits",
    image: "https://knoti-live.s3.ap-south-1.amazonaws.com/58ca3754-7647-418a-b1eb-221ae69371ea-thumbnail.webp", // Using thumbnail from Knoti
    link: "/outfits"
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
      <div className="relative w-full rounded-lg bg-yellow-400 overflow-hidden py-12 px-8 min-h-[250px] flex items-center shadow-sm">
        {/* Decorative Background Elements (CSS based to match image) */}
        <div className="absolute top-4 left-10 text-white opacity-40 text-6xl">🌙</div>
        <div className="absolute top-1/4 left-1/3 text-white opacity-40 text-4xl">✨</div>
        <div className="absolute top-8 right-1/3 text-white opacity-40 text-6xl">🌟</div>
        <div className="absolute bottom-6 right-20 text-white opacity-40 text-5xl">🪐</div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>

        {/* Categories Flex */}
        <div className="relative z-10 flex items-center justify-start gap-12 md:gap-24 pl-8 md:pl-16">
          {categories.map((cat) => (
            <Link href={cat.link} key={cat.id} className="flex flex-col items-center group">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-[3px] border-[#ffdad0] outline outline-2 outline-white shadow-md group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="mt-4 text-sm font-bold text-gray-900 tracking-wider uppercase group-hover:text-black">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
