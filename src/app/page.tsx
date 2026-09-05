import React from 'react';
import Link from 'next/link';
import StoreImage from '@/components/ui/StoreImage';
import ProductCard from '@/components/ui/ProductCard';

export default function Home() {
  const categories = [
    { name: 'Electronics', fallback: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=600&auto=format&fit=crop' },
    { name: 'Home & Kitchen', fallback: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600&auto=format&fit=crop' },
    { name: 'Fashion', fallback: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=600&auto=format&fit=crop' },
    { name: 'Beauty', fallback: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop' },
    { name: 'Bags', fallback: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop' },
    { name: 'Books', fallback: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop' },
    { name: 'Kids', fallback: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=600&auto=format&fit=crop' },
    { name: 'Fitness', fallback: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop' },
  ];

  const deals = [
    { name: 'Premium Noise Cancelling Headphones', price: '₹4,999', originalPrice: '₹9,999', fallback: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop' },
    { name: 'Smart Fitness Watch Series 7', price: '₹2,499', originalPrice: '₹5,999', fallback: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop' },
    { name: 'Professional Camera Lens', price: '₹12,999', originalPrice: '₹15,999', fallback: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop' },
    { name: 'Minimalist Leather Wallet', price: '₹999', originalPrice: '₹1,999', fallback: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600&auto=format&fit=crop' },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)', overflow: 'hidden' }}>
        <div className="container flex md:flex-col items-center justify-between py-8 md:py-0">
          <div style={{ flex: '1', padding: 'var(--spacing-12) 0', paddingRight: 'var(--spacing-8)' }} className="md:px-4">
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: 'var(--spacing-6)' }}>
              Discover <br />
              <span className="text-gold">Premium</span> <br />
              Quality.
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', marginBottom: 'var(--spacing-8)', maxWidth: '400px' }}>
              Experience the best of modern Indian e-commerce. Curated products for a lifestyle of elegance.
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary" style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-black)' }}>Shop Now</button>
              <button className="btn btn-outline" style={{ borderColor: 'var(--color-white)', color: 'var(--color-white)' }}>View Deals</button>
            </div>
          </div>
          <div style={{ flex: '1', width: '100%' }}>
            <StoreImage 
              src="/images/hero/hero-shopping-collection.jpg"
              fallback="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1000&auto=format&fit=crop"
              alt="Premium lifestyle product composition" 
              aspectRatio="4/3" 
              priority={true}
            />
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section id="categories" className="section bg-warm-neutral">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8">
            {categories.map((cat, idx) => (
              <Link href={`/shop?category=${cat.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} key={idx} style={{ display: 'block' }} className="group">
                <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: 'var(--spacing-3)' }}>
                  <StoreImage 
                    src={null} 
                    fallback={cat.fallback}
                    alt={cat.name} 
                    aspectRatio="1/1" 
                    containerClassName="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="text-center font-medium" style={{ fontSize: '1.125rem' }}>{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO BANNER 1 */}
      <section id="shop" className="container py-8">
        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative' }}>
           <StoreImage 
            src={null} 
            fallback="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2000&auto=format&fit=crop"
            alt="Shop More Save More Banner" 
            aspectRatio="16/7" 
          />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'var(--spacing-12)', background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))', color: 'white' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 'var(--spacing-2)' }}>Shop More. <span className="text-gold">Save More.</span></h2>
            <p style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-6)' }}>Up to 50% off on selected premium collections.</p>
            <div>
              <button className="btn btn-primary" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-black)' }}>Explore Offers</button>
            </div>
          </div>
        </div>
      </section>

      {/* TODAY'S DEALS */}
      <section id="deals" className="section">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title" style={{ margin: 0, transform: 'none', left: '0' }}>Today's Deals</h2>
            <a href="#" className="font-medium hover:text-gold" style={{ borderBottom: '1px solid currentColor' }}>View All</a>
          </div>
          
          <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {deals.map((deal, idx) => (
              <ProductCard
                key={idx}
                id={idx}
                name={deal.name}
                price={deal.price}
                originalPrice={deal.originalPrice}
                imageFallback={deal.fallback}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section bg-warm-neutral">
        <div className="container flex md:flex-col items-center gap-16">
          <div style={{ flex: '1', width: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <StoreImage 
              src="/images/about/about-lifestyle.jpg"
              fallback="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=800&auto=format&fit=crop"
              alt="About AZB Store" 
              aspectRatio="4/3" 
            />
          </div>
          <div style={{ flex: '1' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 'var(--spacing-6)' }}>About AZB <span className="text-gold">Store</span></h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.125rem', marginBottom: 'var(--spacing-4)' }}>
              We believe that online shopping should be a premium experience. From the curation of our products to the unboxing experience, every detail is meticulously planned.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.125rem', marginBottom: 'var(--spacing-8)' }}>
              Our mission is to bring high-quality, aesthetically pleasing products to modern consumers who appreciate design and durability.
            </p>
            <button className="btn btn-outline">Learn Our Story</button>
          </div>
        </div>
      </section>

    </div>
  );
}
