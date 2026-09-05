import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
});

import Header from "@/components/ui/Header";

export const metadata: Metadata = {
  title: "AZB Store | Premium E-Commerce Experience",
  description: "Discover premium electronics, fashion, and lifestyle products at AZB Store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        <main style={{ flexGrow: 1 }}>
          {children}
        </main>
        <footer style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)', padding: 'var(--spacing-12) 0' }}>
          <div className="container grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8">
            <div>
              <div style={{ marginBottom: 'var(--spacing-4)' }}>
                <img src="/logo.png" alt="AZB Store Logo" style={{ height: '80px', width: 'auto' }} />
              </div>
              <p className="text-muted" style={{ fontSize: '0.875rem' }}>Premium products for a modern lifestyle. Designed in India.</p>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: 'var(--spacing-4)' }}>Shop</h4>
              <div className="flex flex-col gap-2" style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                <a href="#">New Arrivals</a>
                <a href="#">Best Sellers</a>
                <a href="#">Trending</a>
                <a href="#">Sale</a>
              </div>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: 'var(--spacing-4)' }}>Support</h4>
              <div className="flex flex-col gap-2" style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                <a href="#">FAQ</a>
                <a href="#">Shipping & Returns</a>
                <a href="#">Contact Us</a>
                <a href="#">Track Order</a>
              </div>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: 'var(--spacing-4)' }}>Connect</h4>
              <div className="flex flex-col gap-2" style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
                <a href="#">Facebook</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
