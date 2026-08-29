"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

type Product = {
  name: string;
  price: string;
  image: string;
  description: string;
  rating: number; // 0-5
  orderPercentage: number; // 0-100
  href: string; // link ke halaman detail produk
};

const products: Product[] = [
  {
    name: "Keane Collection",
    price: "Rp 1.000.000",
    image: "/projectImages/Keane/KeaneNS.png",
    description: `Keane adalah lini furniture ekspor berbahan kayu solid dan rotan berkualitas. 
  Desain modern, ergonomis, dengan finishing standar internasional sehingga tahan lama dan elegan.`,
    rating: 4.5,
    orderPercentage: 75,
    href: "keane", // cukup pakai slug
  },

  {
    name: "Basque Collection",
    price: "Rp 1.500.000",
    image: "/projectImages/Basque/sidechair.png",
    description:
      "Lini Basque menonjolkan karakter alami kayu dengan desain sederhana namun berkelas. Sangat cocok bagi buyer yang mengutamakan keaslian material dan daya tahan.",
    rating: 4.9,
    orderPercentage: 80,
    href: "basque",
  },
  {
    name: "Milano Collection",
    price: "Rp 2.000.000",
    image: "/projectImages/Milano/milanoKing.png",
    description:
      "Milano Terinspirasi gaya Eropa kontemporer, Milano menghadirkan desain mewah dan detail halus. Cocok untuk pasar premium dengan kebutuhan estetika tinggi.",
    rating: 4.8,
    orderPercentage: 85,
    href: "milano",
  },
  {
    name: "Blake Collection",
    price: "Rp 1.200.000",
    image: "/projectImages/Blake/blake68.png",
    description:
      "Blake Mengusung gaya minimalis modern dengan material kayu pilihan. Produk Blake menonjolkan kesederhanaan yang elegan, cocok untuk hunian maupun proyek interior",
    rating: 4.8,
    orderPercentage: 70,
    href: "blake",
  },
  {
    name: "Dawson Collection",
    price: "Rp 1.800.000",
    image: "/projectImages/Dawson/Dawson6D.png",
    description:
      "Dawson Lini furniture yang menekankan kekokohan dan fungsi. Dawson dirancang kuat, praktis, serta tetap estetis sehingga sesuai untuk penggunaan jangka panjang.",
    rating: 3.0,
    orderPercentage: 78,
    href: "dawson",
  },
  {
    name: "Mahogany Vanity Collection",
    price: "Rp 2.500.000",
    image: "/projectImages/sh/vanity-60.png",
    description:
      "Produk Mahogany Vanity memadukan unsur klasik dan modern dengan nuansa natural. Menawarkan kenyamanan serta kesan hangat pada ruang interior.",
    rating: 3.9,
    orderPercentage: 90,
    href: "sh",
  },
];

// Animasi framer motion
const productVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

function renderStars(rating: number) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <>
      {Array.from({ length: full }).map((_, i) => (
        <svg
          key={`f-${i}`}
          className="w-5 h-5 text-yellow-400 inline-block"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 
      1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 
      0 1.371 1.24.588 1.81l-3.39 2.462a1 1 
      0 00-.364 1.118l1.287 3.974c.3.922-.755 
      1.688-1.54 1.118l-3.39-2.462a1 1 
      0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-
      1.54-1.118l1.287-3.974a1 1 0 
      00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-
      1.81h4.18a1 1 0 00.95-.69l1.286-3.974z"
          />
        </svg>
      ))}
      {half && (
        <svg
          className="w-5 h-5 text-yellow-400 inline-block"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 
      1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 
      0 1.371 1.24.588 1.81l-3.39 2.462a1 1 
      0 00-.364 1.118l1.287 3.974c.3.922-.755 
      1.688-1.54 1.118l-3.39-2.462a1 1 
      0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-
      1.54-1.118l1.287-3.974a1 1 0 
      00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-
      1.81h4.18a1 1 0 00.95-.69l1.286-3.974z"
          />
        </svg>
      )}
    </>
  );
}


export default function ProdukSection() {
  const { locale } = useParams(); // ambil locale aktif, misalnya "id" atau "en"

  return (
    <section
      id="products"
      className="py-25 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Products Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
          {products.map((product, i) => (
            <motion.div
              key={i}
              className="bg-gray-400 rounded-lg shadow-lg p-4 flex flex-col justify-between hover:shadow-amber-200 transition"
              variants={productVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03 }}
            >
              {/* Gambar produk */}
              <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden rounded-md bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain rounded-md transition-transform duration-300 hover:scale-105"
                />
              </div>

              <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
              <p className="text-black text-sm mb-2">{product.description}</p>

              <div className="flex items-center mb-2">
                {renderStars(product.rating)}
                <span className="ml-2 text-black font-medium">
                  {product.rating.toFixed(1)}
                </span>
              </div>

              <p className="text-yellow-300 font-semibold mb-4">
                {product.orderPercentage}% orders
              </p>

              {/* 🔗 tombol menuju halaman detail produk sesuai locale */}
              <Link
                href={`/${locale}/products/${product.href}`}
                className="mt-auto"
              >
                <motion.span
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-700 transition"
                >
                  Detailing Products
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
