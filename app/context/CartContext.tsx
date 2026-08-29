"use client";

import { createContext, useContext, useState } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  shipFee: number;
  tax: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQty: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);

      if (exists) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p
        );
      }

      return [...prev, item];
    });
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, p.quantity + delta) } : p
      )
    );
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQty,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
