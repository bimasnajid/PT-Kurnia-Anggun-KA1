"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Contoh data produk (bisa diganti dari API / DB)
const products = [
  { name: "Keane Collection", slug: "keane" },
  { name: "Basque Collection", slug: "basque" },
  { name: "Milano Collection", slug: "milano" },
  { name: "Dawson Collection", slug: "dawson" },
  { name: "Blake Collection", slug: "blake" },
  { name: "Mahogany Vanity Colection", slug: "mahogany-vanity" },
];

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
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
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/divisi/sorume.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-5xl w-full px-4 sm:px-6 text-white font-bold text-center">
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Button Swip Up */}
          <Link
            href="#home"
            className="fixed bottom-6 right-6 z-50 bg-yellow-300 text-black p-3 rounded-full shadow-lg hover:bg-yellow-400 transition"
          >
            Swip Up
          </Link>

          {/* Title */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-4xl font-bold leading-tight text-white py-15"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ x: [0, -8, 8, 0] }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeOut" },
              y: { duration: 1.2, ease: "easeOut" },
              x: { duration: 6, ease: "easeInOut", repeat: Infinity },
            }}
          >
            THE MANUFACTURER / EXPORTER OF RATTAN
            <br />
            METAL & WOODEN FURNITURE
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-sm sm:text-base lg:text-xl max-w-2xl mx-auto mb-6 "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ x: [0, 5, -5, 0] }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{
              opacity: { duration: 1.4, ease: "easeOut", delay: 0.4 },
              y: { duration: 1.4, ease: "easeOut", delay: 0.4 },
              x: { duration: 7, ease: "easeInOut", repeat: Infinity },
            }}
          >
            Created using durable materials from{" "}
            <span className="font-semibold text-white">
              sustainable resources
            </span>
            .
          </motion.p>

          {/* Search box */}
          <motion.div
            className="relative flex flex-col items-center w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Input Search */}
            <motion.input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Your Products..."
              className={`bg-amber-50 rounded-full px-9 py-2 sm:py-3 pr-10 w-full text-sm sm:text-base md:text-lg transition-all duration-300
      ${isFocused ? "shadow-lg shadow-blue-400/50" : "shadow-md"}
      text-black focus:outline-none`}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              whileFocus={{ scale: 1.02 }}
            />

            {/* Icon Search */}
            <motion.div
              className="absolute right-3 top-2.5 text-blue-600 cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onMouseDown={() => {
                const matched = filteredProducts.find(
                  (p) =>
                    p.name.toLowerCase() === query.toLowerCase() ||
                    p.name.toLowerCase().includes(query.toLowerCase())
                );

                if (matched) {
                  handleSearch(matched.slug);
                }
              }}
            >
              {/* Perbesar ukuran icon */}
              <Search className="w-6 h-6 sm:w-7 sm:h-7" />
            </motion.div>

            {/* Dropdown hasil pencarian */}
            {isFocused && query && filteredProducts.length > 0 && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-12 w-full bg-white rounded-lg shadow-lg overflow-hidden z-20 text-sm sm:text-base"
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
              <div className="absolute top-12 w-full bg-white rounded-lg shadow-md p-3 text-gray-500 text-sm sm:text-base z-20">
                Produk tidak ditemukan
              </div>
            )}
          </motion.div>

          {/* Contact Button */}
          <div className="mt-12 flex justify-center">
            <Link href="#contact" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-yellow-300 hover:text-gray-900 transition"
              >
                View Contact
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
