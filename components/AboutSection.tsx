"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-25 bg-gray-900 text-center min-h-screen"
    >
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header */}
        <h2 className="py-10 text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Tentang Kami
        </h2>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          PT Kurnia Anggun adalah perusahaan yang bergerak di bidang Furniture
          dan Rattan dengan fokus pada kualitas, inovasi, dan keberlanjutan.
        </p>

        {/* Visi & Misi */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative">
          {/* Garis Tengah hanya di desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-yellow-300" />

          {/* Visi */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:text-right text-center"
          >
            <div className="max-w-2xl lg:ml-auto mx-auto text-justify lg:text-right text- space-y-4">
              {/* Heading dengan Icon */}
              <div className="flex items-center justify-center lg:justify-end gap-2">
                {/* <Globe2 className="w-8 h-8 text-yellow-400 mb-4" /> */}
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-yellow-300">
                  VISI
                </h3>
              </div>

              {/* Deskripsi */}
              <p className="leading-relaxed text-lg text-gray-400">
                Menjadi perusahaan mebel kayu dan rotan terkemuka dari Indonesia
                yang diakui secara internasional, menghadirkan produk berkelas
                dunia yang{" "}
                <span className="font-semibold text-yellow-500">
                  berkualitas tinggi
                </span>
                ,{" "}
                <span className="font-semibold text-yellow-500">inovatif</span>,
                dan{" "}
                <span className="font-semibold text-yellow-500">
                  ramah lingkungan
                </span>
                .
              </p>
            </div>
          </motion.div>

          {/* Misi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:text-left text-center"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-yellow-300">
              MISI
            </h3>
            <ul className="text-gray-400 space-y-4 max-w-2xl lg:mr-auto mx-auto text-left">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <span className="leading-relaxed">
                  Menghasilkan furniture kayu dan rotan berkualitas ekspor
                  dengan desain moderen.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <span className="leading-relaxed">
                  Meningkatkan kapasitas produksi sesuai standar internasional.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <span className="leading-relaxed">
                  Memberdayakan SDM lokal melalui pelatihan dan pengembangan
                  keterampilan.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <span className="leading-relaxed">
                  Memperluas pasar global dengan strategi pemasaran profesional.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <span className="leading-relaxed">
                  Berkomitmen pada keberlanjutan dan ramah lingkungan.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <Link href="/about" scroll={true}>
            <motion.button
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-yellow-300  hover:text-gray-900 transition  hover:shadow-blue-700"
            >
              Show About
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
