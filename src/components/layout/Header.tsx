'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, User, Heart, ShoppingCart, MapPin, Menu, X, Navigation } from 'lucide-react';

export default function Header() {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [location, setLocation] = useState('Select location');
  const [pinCode, setPinCode] = useState('');
  const [isDetecting, setIsDetecting] = useState(false);

  const handleLocationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinCode.trim()) {
      setLocation(`Delivering to ${pinCode}`);
      setIsLocationModalOpen(false);
    }
  };

  const handleAutoDetect = () => {
    setIsDetecting(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
            const data = await res.json();
            const postalCode = data.address?.postcode;
            const city = data.address?.city || data.address?.town || data.address?.state;
            
            if (postalCode) {
              setLocation(`Delivering to ${postalCode}`);
            } else if (city) {
              setLocation(`Delivering to ${city}`);
            } else {
              setLocation('Location Detected');
            }
            setIsLocationModalOpen(false);
          } catch (error) {
            console.error('Error detecting location:', error);
            setLocation('Delivering to 110001'); // Fallback
            setIsLocationModalOpen(false);
          } finally {
            setIsDetecting(false);
          }
        },
        (error) => {
          console.error('Geolocation error:', error);
          alert('Could not detect location. Please check your browser permissions or enter your pincode manually.');
          setIsDetecting(false);
        },
        { timeout: 10000 }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
      setIsDetecting(false);
    }
  };
  return (
    <header className="w-full">
      {/* Top Row: Logo, Search, User actions */}
      <div className="bg-black">
        <div className="container mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img 
              src="/images/logo.png" 
              alt="AZB Store Logo" 
              className="h-16 w-auto drop-shadow-md"
            />
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-auto">
            <div className="w-full bg-white rounded-full flex items-center p-1 shadow-sm">
              <input 
                type="text" 
                placeholder="Search for products..." 
                className="w-full bg-transparent border-none py-2 px-5 text-gray-700 focus:outline-none text-sm placeholder-gray-400"
              />
              <button className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors flex items-center gap-1.5 text-sm">
                Search
                <Search size={16} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-2 md:gap-5">
            <Link href="/login" className="hidden md:flex items-center gap-1.5 text-white hover:text-white/80 transition-colors font-medium text-sm">
              <User size={18} fill="currentColor" />
              <span>Login</span>
            </Link>
            
            <div className="hidden md:block h-5 w-px bg-white/40"></div>
            
            <Link href="/wishlist" className="hidden md:flex items-center gap-1.5 text-white hover:text-white/80 transition-colors font-medium text-sm">
              <Heart size={18} fill="currentColor" />
              <span>Wishlist</span>
            </Link>

            <div className="hidden md:block h-5 w-px bg-white/40"></div>

            <Link href="/cart" className="flex items-center gap-1.5 text-white hover:text-white/80 transition-colors font-medium text-sm relative pr-2">
              <ShoppingCart size={18} fill="currentColor" />
              <span className="hidden md:inline">Cart</span>
              <span className="absolute -top-2 -right-1 bg-yellow-500 text-black font-bold text-[10px] rounded-full w-4 h-4 flex items-center justify-center shadow-sm">0</span>
            </Link>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white pl-2">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row: Navigation and Location */}
      <div className="bg-[#f3f4f6] border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 py-2.5 flex items-center justify-between">
          
          {/* Main Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-8">
              <li>
                <Link href="/" className="text-gray-700 hover:text-yellow-500 transition-colors font-semibold text-sm">Home</Link>
              </li>
              <li>
                <Link href="/kids" className="text-gray-700 hover:text-yellow-500 transition-colors font-semibold text-sm">Kids</Link>
              </li>
              <li>
                <Link href="/outfits" className="text-gray-700 hover:text-yellow-500 transition-colors font-semibold text-sm">Outfits</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-yellow-500 transition-colors font-semibold text-sm">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Location Selector */}
          <button 
            onClick={() => setIsLocationModalOpen(true)}
            className="bg-white rounded-full px-4 py-1.5 flex items-center gap-2 text-sm text-gray-500 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors ml-auto md:ml-0"
          >
            <MapPin size={16} className="text-black" fill="currentColor" />
            <span className="truncate max-w-[120px]">{location}</span>
          </button>
          
        </div>
      </div>

      {/* Location Modal */}
      {isLocationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="bg-black text-white px-6 py-4 flex items-center justify-between">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <MapPin size={20} className="text-yellow-500" />
                Choose your location
              </h3>
              <button 
                onClick={() => setIsLocationModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm mb-6">
                Select a delivery location to see product availability and delivery options.
              </p>
              
              <button 
                onClick={handleAutoDetect}
                disabled={isDetecting}
                className="w-full flex items-center justify-center gap-2 bg-yellow-50 text-yellow-700 hover:bg-yellow-100 font-medium py-3 rounded-xl mb-6 transition-colors border border-yellow-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Navigation size={18} className={isDetecting ? "animate-pulse" : ""} />
                {isDetecting ? "Detecting location..." : "Auto-detect my location"}
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-xs text-gray-400 font-medium uppercase">or enter pincode</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              
              <form onSubmit={handleLocationSubmit} className="flex gap-3">
                <input 
                  type="text" 
                  placeholder="Enter 6-digit Pincode" 
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  maxLength={6}
                  className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                  required
                />
                <button 
                  type="submit"
                  className="bg-black text-white hover:bg-gray-800 font-medium px-6 py-3 rounded-xl transition-colors text-sm"
                >
                  Apply
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
