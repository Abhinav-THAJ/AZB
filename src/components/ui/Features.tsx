import React from 'react';
import { ShoppingBag, PackageOpen, BadgePercent, Headset } from 'lucide-react';

const features = [
  {
    icon: <ShoppingBag size={32} strokeWidth={1.5} />,
    title: "Wide Assortment",
    description: "Find the perfect fit with our wide range of sizes, colors, and styles."
  },
  {
    icon: <PackageOpen size={32} strokeWidth={1.5} />,
    title: "Return Policy For Damaged",
    description: "Defective or damaged items will be replaced, subject to availability.Unedited unboxing video is must for damage claims."
  },
  {
    icon: <BadgePercent size={32} strokeWidth={1.5} />,
    title: "Best Prices & Offers",
    description: "Save big with exclusive deals and discounts on your favourite products every day"
  },
  {
    icon: <Headset size={32} strokeWidth={1.5} />,
    title: "Support 24/7",
    description: "Get help anytime via chat, call, or email from our friendly support team"
  }
];

export default function Features() {
  return (
    <section className="container mx-auto px-4 py-12 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-sm p-6 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="text-yellow-500 flex-shrink-0 mt-1">
              {feature.icon}
            </div>
            <div>
              <h3 className="font-bold text-yellow-500 text-base mb-2 leading-tight">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
