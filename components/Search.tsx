"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Contoh data produk (bisa kamu ambil dari file / API)
const products = [
  {
    name: "Keane Collection",
    slug: "keane",
  },
  {
    name: "Basque Collection",
    slug: "basque",
  },
  {
    name: "Milano Collection",
    slug: "milano",
  },
  {
    name: "Dawson Collection",
    slug: "dawson",
  },
  {
    name: "Blake Collection",
    slug: "blake",
  },
  {
    name: "Mahogany Vanity Collection",
    slug: "mahogany-vanity",
  },
];

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Filter hasil sesuai input
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (slug: string) => {
    router.push(`/products/${slug}`);
    setQuery("");
    setIsFocused(false);
  };

  return (
    <motion.div
      className="relative flex flex-col items-center w-72"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Input Search */}
      <motion.input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Products..."
        className={`rounded-full px-4 py-2 pr-10 w-full transition-all duration-300
          ${isFocused ? "shadow-lg shadow-blue-400/50" : "shadow-md"}
          text-black focus:outline-none`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)} // biar nggak hilang langsung
        whileFocus={{ scale: 1.02 }}
      />

      {/* Icon Search */}
      <motion.div
        className="absolute right-3 top-2.5 text-blue-600 cursor-pointer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Search className="w-5 h-5" />
      </motion.div>

      {/* Dropdown Hasil Pencarian */}
      {isFocused && query && filteredProducts.length > 0 && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-12 w-full bg-white rounded-lg shadow-lg overflow-hidden z-20"
        >
          {filteredProducts.map((p) => (
            <li
              key={p.slug}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-800"
              onMouseDown={() => handleSearch(p.slug)}
            >
              {p.name}
            </li>
          ))}
        </motion.ul>
      )}

      {/* Jika tidak ada hasil */}
      {isFocused && query && filteredProducts.length === 0 && (
        <div className="absolute top-12 w-full bg-white rounded-lg shadow-md p-3 text-gray-500 text-sm z-20">
          Produk tidak ditemukan
        </div>
      )}
    </motion.div>
  );
}
