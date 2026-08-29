"use client";

import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "Keane",
    slug: "keane",
    image: "/projectImages/Keane/CanopyKing.jpg",
    desc: "Landing page modern dan responsif.",
  },
  {
    name: "Basque",
    slug: "basque",
    image: "/projectImages/Keane/EndTable.jpg",
    desc: "Company profile profesional.",
  },
  {
    name: "Milano",
    slug: "milano",
    image: "/projectImages/Keane/CanopyKing.jpg",
    desc: "E-commerce lengkap dengan fitur pembayaran.",
  },
  {
    name: "Blake",
    slug: "blake",
    image: "/projectImages/Keane/CanopyKing.jpg",
    desc: "Website portfolio kreatif.",
  },
  {
    name: "Dawson",
    slug: "dawson",
    image: "/projectImages/Keane/CanopyKing.jpg",
    desc: "Website event dan promosi.",
  },
  {
    name: "SH",
    slug: "sh",
    image: "/projectImages/Keane/CanopyKing.jpg",
    desc: "Sistem manajemen website lengkap.",
  },
];

export default function ProductsPage() {
  return (
    <section className="py-20 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Semua Produk
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.slug}
              className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition"
            >
              <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden rounded-md">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
              <p className="text-gray-600 mb-4">{p.desc}</p>
              <Link
                href={`/products/${p.slug}`}
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Lihat Detail
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
