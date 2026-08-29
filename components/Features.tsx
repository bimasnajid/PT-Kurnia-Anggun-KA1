"use client";

import { motion } from "framer-motion";
import {
  Hammer,
  Smartphone,
  Search,
  ShieldCheck,
  Globe,
  Award,
} from "lucide-react";

const features = [
  {
    title: "Kualitas Ekspor",
    desc: "Produk furniture kayu & rotan dibuat dengan standar internasional.",
    icon: <Hammer className="w-10 h-10 text-yellow-600" />,
  },
  {
    title: "Mobile Friendly",
    desc: "Website responsif & nyaman diakses dari HP, tablet, hingga desktop.",
    icon: <Smartphone className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "SEO Ready",
    desc: "Optimasi SEO agar mudah ditemukan di Google oleh buyer internasional.",
    icon: <Search className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Keamanan Data",
    desc: "Mengutamakan privasi & keamanan transaksi bisnis Anda.",
    icon: <ShieldCheck className="w-10 h-10 text-red-600" />,
  },
  {
    title: "Jangkauan Global",
    desc: "Melayani pembeli dari berbagai negara dengan pengalaman ekspor.",
    icon: <Globe className="w-10 h-10 text-purple-600" />,
  },
  {
    title: "Penghargaan & Kepercayaan",
    desc: "Diakui oleh buyer internasional sebagai mitra terpercaya.",
    icon: <Award className="w-10 h-10 text-orange-600" />,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 shadow-5xl"
      style={{ backgroundImage: "url('/divisi/sorum.jpg')" }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white hover:shadow-lg "
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Informasi Kami
        </motion.h2>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="p-8 bg-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center text-center hover:shadow-gray-800"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
