import React, { Suspense } from 'react';
import ShopPage from '@/app/shop/page';

// Reuse ShopPage pre-filtered to Kids or redirect to /shop?category=Kids
import { redirect } from 'next/navigation';

export default function KidsPage() {
  redirect('/shop?category=Kids');
}
