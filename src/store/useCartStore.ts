import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string | number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string | number) => void;
  updateQuantity: (id: string | number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      setIsOpen: (isOpen) => set({ isOpen }),
      
      addItem: (item) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
              isOpen: true, // Auto open cart on add
            };
          }
          return { 
            items: [...state.items, { ...item, quantity: 1 }],
            isOpen: true,
          };
        });
      },
      
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }));
      },
      
      updateQuantity: (id, quantity) => {
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i
          ),
        }));
      },
      
      clearCart: () => set({ items: [] }),
      
      getCartTotal: () => {
        const { items } = get();
        return items.reduce((total, item) => {
          // Very basic string to number conversion for price (e.g., "₹4,999" -> 4999)
          const priceValue = parseFloat(item.price.replace(/[^\d.-]/g, ''));
          return total + (isNaN(priceValue) ? 0 : priceValue * item.quantity);
        }, 0);
      },
    }),
    {
      name: 'azb-cart-storage',
    }
  )
);
