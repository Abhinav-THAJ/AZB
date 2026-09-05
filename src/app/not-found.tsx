import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className="container py-24 text-center flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-6xl font-bold text-gold mb-4">404</h2>
      <h3 className="text-2xl font-bold mb-4">Page Not Found</h3>
      <p className="text-muted mb-8 max-w-md mx-auto">
        We couldn't find the page you were looking for. It might have been moved, deleted, or perhaps the URL is incorrect.
      </p>
      <Link href="/">
        <button className="btn btn-primary">Return Home</button>
      </Link>
    </div>
  );
}
