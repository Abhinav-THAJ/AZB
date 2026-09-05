/**
 * WooCommerce REST API Integration
 * This module provides functions to fetch data from the WooCommerce backend.
 */

// Define basic types for WooCommerce data
export interface WooProduct {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  type: 'simple' | 'variable' | 'grouped' | 'external';
  status: 'draft' | 'pending' | 'private' | 'publish';
  featured: boolean;
  catalog_visibility: 'visible' | 'catalog' | 'search' | 'hidden';
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  purchasable: boolean;
  stock_status: 'instock' | 'outofstock' | 'onbackorder';
  images: Array<{
    id: number;
    src: string;
    name: string;
    alt: string;
  }>;
  categories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
}

export interface WooCategory {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  display: 'default' | 'products' | 'subcategories' | 'both';
  image: {
    id: number;
    src: string;
    name: string;
    alt: string;
  } | null;
  count: number;
}

const WC_STORE_URL = process.env.NEXT_PUBLIC_WC_STORE_URL || '';
const WC_CONSUMER_KEY = process.env.WC_CONSUMER_KEY || '';
const WC_CONSUMER_SECRET = process.env.WC_CONSUMER_SECRET || '';

/**
 * Base fetch function for WooCommerce REST API
 */
async function fetchWooCommerce<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  if (!WC_STORE_URL || !WC_CONSUMER_KEY || !WC_CONSUMER_SECRET) {
    console.warn('WooCommerce environment variables are missing. Using mock data or empty results.');
    // You could return mock data here during development if you want.
  }

  const url = new URL(`${WC_STORE_URL}/wp-json/wc/v3/${endpoint}`);
  
  // Basic Auth for WooCommerce REST API
  const authHeader = `Basic ${Buffer.from(`${WC_CONSUMER_KEY}:${WC_CONSUMER_SECRET}`).toString('base64')}`;

  const defaultOptions: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': authHeader,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url.toString(), defaultOptions);
    
    if (!response.ok) {
      throw new Error(`WooCommerce API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json() as T;
  } catch (error) {
    console.error('Error fetching from WooCommerce:', error);
    throw error;
  }
}

/**
 * Fetch a list of products
 */
export async function getProducts(query: Record<string, string | number> = {}): Promise<WooProduct[]> {
  const queryString = new URLSearchParams(query as Record<string, string>).toString();
  const endpoint = queryString ? `products?${queryString}` : 'products';
  
  try {
    return await fetchWooCommerce<WooProduct[]>(endpoint, { next: { revalidate: 60 } });
  } catch (error) {
    // Return empty array on failure so UI doesn't crash completely,
    // though in production you might want to handle this differently.
    return [];
  }
}

/**
 * Fetch a single product by slug
 */
export async function getProductBySlug(slug: string): Promise<WooProduct | null> {
  try {
    const products = await fetchWooCommerce<WooProduct[]>(`products?slug=${slug}`);
    return products.length > 0 ? products[0] : null;
  } catch (error) {
    return null;
  }
}

/**
 * Fetch a list of categories
 */
export async function getCategories(query: Record<string, string | number> = {}): Promise<WooCategory[]> {
  const queryString = new URLSearchParams(query as Record<string, string>).toString();
  const endpoint = queryString ? `products/categories?${queryString}` : 'products/categories';
  
  try {
    return await fetchWooCommerce<WooCategory[]>(endpoint, { next: { revalidate: 3600 } });
  } catch (error) {
    return [];
  }
}
