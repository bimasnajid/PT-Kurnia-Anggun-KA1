"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
// import Image from "next/image";

export default function Footer() {
  const container = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale as string;

  // Smooth scroll
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6 md:px-12 border-t border-gray-800">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        {/* Company Info */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold text-white mb-4">
            PT Kurnia Anggun
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Perusahaan furnitur kayu asal Jepara, Jawa Timur. Fokus pada
            kualitas, inovasi, dan keberlanjutan untuk menghadirkan produk kelas
            dunia bagi konsumen lokal maupun internasional.
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold text-white mb-4">Kontak Kami</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-red-500 mt-0.5" />
              <span>
                Dusun Bangun Pungging, Mojosari, Mojokerto, Jawa Timur
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-500" />
              <span>+62 812 3456 7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500" />
              <span>info@ptkurniaanggun.com</span>
            </li>
          </ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold text-white mb-4">
            Tautan Cepat
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition">
                Beranda
              </Link>
            </li>
            <li>
              {pathname === "/" ? (
                <a
                  href="#about"
                  onClick={(e) => handleScroll(e, "about")}
                  className="hover:text-white transition cursor-pointer"
                >
                  Tentang Kami
                </a>
              ) : (
                <Link href="/#about" className="hover:text-white transition">
                  Tentang Kami
                </Link>
              )}
            </li>
            <li>
              {pathname === "/" ? (
                <a
                  href="#products"
                  onClick={(e) => handleScroll(e, "products")}
                  className="hover:text-white transition cursor-pointer"
                >
                  Produk
                </a>
              ) : (
                <Link href="/#products" className="hover:text-white transition">
                  Produk
                </Link>
              )}
            </li>
            <li>
              {pathname === "/" ? (
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "contact")}
                  className="hover:text-white transition cursor-pointer"
                >
                  Kontak
                </a>
              ) : (
                <Link href="/#contact" className="hover:text-white transition">
                  Kontak
                </Link>
              )}
            </li>
          </ul>
        </motion.div>

        {/* Products & Image */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-1 flex flex-col gap-4"
        >
          <h3 className="text-lg font-semibold text-white mb-2">
            Koleksi Produk
          </h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-400">
            <li>
              <Link
                href={`/${locale}/products/keane`}
                className="hover:text-white transition"
              >
                Keane
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/products/basque`}
                className="hover:text-white transition"
              >
                Basque
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/products/milano`}
                className="hover:text-white transition"
              >
                Milano
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/products/blake`}
                className="hover:text-white transition"
              >
                Blake
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/products/dawson`}
                className="hover:text-white transition"
              >
                Dawson
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/products/sh`}
                className="hover:text-white transition"
              >
                Mahogany Vanity
              </Link>
            </li>
          </ul>

          {/* Image */}
          {/* <div className="mt-4 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/Image/KA1.jpg"
              alt="Pendiri PT Kurnia Anggun"
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div> */}
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        © {new Date().getFullYear()} PT Kurnia Anggun. Semua Hak Dilindungi.
      </motion.div>
    </footer>
  );
}
