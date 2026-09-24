import React from 'react';
import { redirect } from 'next/navigation';

export default function OutfitsPage() {
  redirect('/shop?category=Outfits');
}
