"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  shipFee: number;
  tax: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: "1",
      name: 'Linea 66" Natural Teak Wood 6-Drawer Dresser',
      price: 2799,
      image: "/dresser.jpg",
      quantity: 1,
      shipFee: 279,
      tax: 216.92,
    },
  ]);

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const merchandiseTotal = cart.reduce(
    (acc, i) => acc + i.price * i.quantity,
    0
  );

  const shipTotal = cart.reduce((acc, i) => acc + i.shipFee, 0);
  const taxTotal = cart.reduce((acc, i) => acc + i.tax, 0);

  const orderTotal = merchandiseTotal + shipTotal + taxTotal;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* LEFT SECTION = LIST PRODUCT */}
        <div className="md:col-span-2 space-y-6">

          {cart.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow p-6"
            >
              <div className="flex gap-4">

                <Image
                  src={item.image}
                  width={240}
                  height={200}
                  alt={item.name}
                  className="rounded-lg border"
                />

                <div className="flex flex-col justify-between w-full">
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600 mt-1">
                      SKU: 324446 • Natural Teak Wood
                    </p>

                    {/* shipping option */}
                    <div className="mt-4 space-y-1">
                      <p className="text-gray-700 font-medium">Ship</p>
                      <p className="text-sm text-gray-600">
                        Purchase now and well ship when available.
                      </p>
                      <p className="text-sm underline text-blue-600">
                        Local In-Home Delivery
                      </p>
                      <p className="text-sm">ZIP Code: 60540</p>
                    </div>
                  </div>

                  {/* Quantity & Remove */}
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="px-3 py-1 border rounded"
                      >
                        -
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="px-3 py-1 border rounded"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT SECTION = CART SUMMARY */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white shadow rounded-xl p-6 h-fit"
        >
          <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Merchandise:</span>
              <span>${merchandiseTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Est. Shipping:</span>
              <span>${shipTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Est. Tax:</span>
              <span>${taxTotal.toFixed(2)}</span>
            </div>

            <hr />

            <div className="flex justify-between font-semibold text-lg">
              <span>Est. Order Total:</span>
              <span>${orderTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Promo Code */}
          <div className="border p-3 rounded mt-4 flex justify-between items-center">
            <span className="text-gray-600">Promo Code</span>
            <button className="text-xl">+</button>
          </div>

          {/* Checkout Button */}
          <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            CHECKOUT NOW
          </button>

          {/* Payment Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <button className="border rounded py-2 font-semibold">PayPal</button>
            <button className="border rounded py-2 font-semibold">Venmo</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
