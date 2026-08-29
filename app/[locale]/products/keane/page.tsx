"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";


export default function Keane() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section
      id="keane"
      className="relative py-20 min-h-screen bg-gradient-to-b from-gray-500 to-gray-800 text-white"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 opacity-20 bg-[url('/patterns/grid.svg')] bg-cover" />

      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl font-extrabold inline-block relative"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Keane Collection Group
          <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-500 rounded-full animate-pulse"></span>
        </motion.h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Keane Lini furniture ekspor berbahan kayu solid dan rotan berkualitas.
          Desain modern, ergonomis, dengan finishing standar internasional
          sehingga tahan lama dan elegan.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {/* Produksi */}
        {/* Distribusi */}
        <motion.div
          className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition hover:shadow-amber-300"
          whileHover={{ y: -8 }}
        >
          {/* Image Container */}
          <div
            className="overflow-hidden rounded-md mb-4 relative w-full h-56 cursor-zoom-in"
            onClick={() => setIsZoomed((prev) => !prev)} // toggle zoom
          >
            <motion.div
              animate={{ scale: isZoomed ? 1.6 : 1 }} // zoom ketika diklik
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag={isZoomed} // aktifkan drag hanya saat zoom
              dragConstraints={{
                left: -150,
                right: 150,
                top: -150,
                bottom: 150,
              }}
              className="w-full h-full flex items-center justify-center bg-white rounded-md"
            >
              <Image
                src="/projectImages/Keane/KeaneNS.png"
                alt="Divisi Distribusi"
                fill
                className="object-contain select-none"
              />
            </motion.div>
          </div>

          {/* Content */}
          <h3 className="font-bold text-2xl mb-3">Keane Natural Nightstand</h3>
          <p className="text-gray-400">
            Menjangkau konsumen lokal & internasional dengan jaringan distribusi
            yang terpercaya.
          </p>

          <div className="mt-12 flex justify-center">
            <Link href="/checkout" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-red-600 hover:text-white transition"
              >
                Order Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition hover:shadow-amber-300"
          whileHover={{ y: -8 }}
        >
          {/* Image Container */}
          <div
            className="overflow-hidden rounded-md mb-4 relative w-full h-56 cursor-zoom-in"
            onClick={() => setIsZoomed((prev) => !prev)} // toggle zoom
          >
            <motion.div
              animate={{ scale: isZoomed ? 1.6 : 1 }} // zoom ketika diklik
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag={isZoomed} // aktifkan drag hanya saat zoom
              dragConstraints={{
                left: -150,
                right: 150,
                top: -150,
                bottom: 150,
              }}
              className="w-full h-full flex items-center justify-center bg-white rounded-md"
            >
              <Image
                src="/projectImages/Keane/EndTable.jpg"
                alt="Divisi Distribusi"
                fill
                className="object-contain select-none"
              />
            </motion.div>
          </div>

          {/* Content */}
          <h3 className="font-bold text-2xl mb-3">Keane Natural End Table</h3>
          <p className="text-gray-400">
            Menjangkau konsumen lokal & internasional dengan jaringan distribusi
            yang terpercaya.
          </p>
          <div className="mt-12 flex justify-center">
            <Link href="/checkout" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-red-600 hover:text-white transition"
              >
                Order Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition hover:shadow-amber-300"
          whileHover={{ y: -8 }}
        >
          {/* Image Container */}
          <div
            className="overflow-hidden rounded-md mb-4 relative w-full h-56 cursor-zoom-in"
            onClick={() => setIsZoomed((prev) => !prev)} // toggle zoom
          >
            <motion.div
              animate={{ scale: isZoomed ? 1.6 : 1 }} // zoom ketika diklik
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag={isZoomed} // aktifkan drag hanya saat zoom
              dragConstraints={{
                left: -150,
                right: 150,
                top: -150,
                bottom: 150,
              }}
              className="w-full h-full flex items-center justify-center bg-white rounded-md"
            >
              <Image
                src="/projectImages/Keane/Narrow.jpg"
                alt="Divisi Distribusi"
                fill
                className="object-contain select-none"
              />
            </motion.div>
          </div>

          {/* Content */}
          <h3 className="font-bold text-2xl mb-3">Keane Natural Narrow</h3>
          <p className="text-gray-400">
            Menjangkau konsumen lokal & internasional dengan jaringan distribusi
            yang terpercaya.
          </p>

          <div className="mt-12 flex justify-center">
            <Link href="/checkout" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-red-600 hover:text-white transition"
              >
                Order Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition hover:shadow-amber-300"
          whileHover={{ y: -8 }}
        >
          {/* Image Container */}
          <div
            className="overflow-hidden rounded-md mb-4 relative w-full h-56 cursor-zoom-in"
            onClick={() => setIsZoomed((prev) => !prev)} // toggle zoom
          >
            <motion.div
              animate={{ scale: isZoomed ? 1.6 : 1 }} // zoom ketika diklik
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag={isZoomed} // aktifkan drag hanya saat zoom
              dragConstraints={{
                left: -150,
                right: 150,
                top: -150,
                bottom: 150,
              }}
              className="w-full h-full flex items-center justify-center bg-white rounded-md"
            >
              <Image
                src="/projectImages/Keane/ReactCoffee54.jpg"
                alt="Divisi Distribusi"
                fill
                className="object-contain select-none"
              />
            </motion.div>
          </div>

          {/* Content */}
          <h3 className="font-bold text-2xl mb-3">Keane Rect Coffe Table</h3>
          <p className="text-gray-400">
            Menjangkau konsumen lokal & internasional dengan jaringan distribusi
            yang terpercaya.
          </p>

          <div className="mt-12 flex justify-center">
            <Link href="/checkout" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-red-600 hover:text-white transition"
              >
                Order Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition hover:shadow-amber-300"
          whileHover={{ y: -8 }}
        >
          {/* Image Container */}
          <div
            className="overflow-hidden rounded-md mb-4 relative w-full h-56 cursor-zoom-in"
            onClick={() => setIsZoomed((prev) => !prev)} // toggle zoom
          >
            <motion.div
              animate={{ scale: isZoomed ? 1.6 : 1 }} // zoom ketika diklik
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag={isZoomed} // aktifkan drag hanya saat zoom
              dragConstraints={{
                left: -150,
                right: 150,
                top: -150,
                bottom: 150,
              }}
              className="w-full h-full flex items-center justify-center bg-white rounded-md"
            >
              <Image
                src="/projectImages/Keane/Large65.jpg"
                alt="Divisi Distribusi"
                fill
                className="object-contain select-none"
              />
            </motion.div>
          </div>

          {/* Content */}
          <h3 className="font-bold text-2xl mb-3">Keane Natural Large 65</h3>
          <p className="text-gray-400">
            Menjangkau konsumen lokal & internasional dengan jaringan distribusi
            yang terpercaya.
          </p>

          <div className="mt-12 flex justify-center">
            <Link href="/checkout" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-red-600 hover:text-white transition"
              >
                Order Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition hover:shadow-amber-300"
          whileHover={{ y: -8 }}
        >
          {/* Image Container */}
          <div
            className="overflow-hidden rounded-md mb-4 relative w-full h-56 cursor-zoom-in"
            onClick={() => setIsZoomed((prev) => !prev)} // toggle zoom
          >
            <motion.div
              animate={{ scale: isZoomed ? 1.6 : 1 }} // zoom ketika diklik
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag={isZoomed} // aktifkan drag hanya saat zoom
              dragConstraints={{
                left: -150,
                right: 150,
                top: -150,
                bottom: 150,
              }}
              className="w-full h-full flex items-center justify-center bg-white rounded-md"
            >
              <Image
                src="/projectImages/Keane/UPH70Bench.jpg"
                alt="Divisi Distribusi"
                fill
                className="object-contain select-none"
              />
            </motion.div>
          </div>

          {/* Content */}
          <h3 className="font-bold text-2xl mb-3">
            Keane Natural Uph Bench 70
          </h3>
          <p className="text-gray-400">
            Menjangkau konsumen lokal & internasional dengan jaringan distribusi
            yang terpercaya.
          </p>

          <div className="mt-12 flex justify-center">
            <Link href="/checkout" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-red-600 hover:text-white transition"
              >
                Order Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition hover:shadow-amber-300"
          whileHover={{ y: -8 }}
        >
          {/* Image Container */}
          <div
            className="overflow-hidden rounded-md mb-4 relative w-full h-56 cursor-zoom-in"
            onClick={() => setIsZoomed((prev) => !prev)} // toggle zoom
          >
            <motion.div
              animate={{ scale: isZoomed ? 1.6 : 1 }} // zoom ketika diklik
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag={isZoomed} // aktifkan drag hanya saat zoom
              dragConstraints={{
                left: -150,
                right: 150,
                top: -150,
                bottom: 150,
              }}
              className="w-full h-full flex items-center justify-center bg-white rounded-md"
            >
              <Image
                src="/projectImages/Keane/72MediaConsoleStorage.jpg"
                alt="Divisi Distribusi"
                fill
                className="object-contain select-none"
              />
            </motion.div>
          </div>

          {/* Content */}
          <h3 className="font-bold text-2xl mb-3">Keane Media 72 Storage</h3>
          <p className="text-gray-400">
            Menjangkau konsumen lokal & internasional dengan jaringan distribusi
            yang terpercaya.
          </p>

          <div className="mt-12 flex justify-center">
            <Link href="/checkout" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-red-600 hover:text-white transition"
              >
                Order Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition hover:shadow-amber-300"
          whileHover={{ y: -8 }}
        >
          {/* Image Container */}
          <div
            className="overflow-hidden rounded-md mb-4 relative w-full h-56 cursor-zoom-in"
            onClick={() => setIsZoomed((prev) => !prev)} // toggle zoom
          >
            <motion.div
              animate={{ scale: isZoomed ? 1.6 : 1 }} // zoom ketika diklik
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag={isZoomed} // aktifkan drag hanya saat zoom
              dragConstraints={{
                left: -150,
                right: 150,
                top: -150,
                bottom: 150,
              }}
              className="w-full h-full flex items-center justify-center bg-white rounded-md"
            >
              <Image
                src="/projectImages/Keane/86MediaConsoleTbl.jpg"
                alt="Divisi Distribusi"
                fill
                className="object-contain select-none"
              />
            </motion.div>
          </div>

          {/* Content */}
          <h3 className="font-bold text-2xl mb-3">Keane Media 86 Console</h3>
          <p className="text-gray-400">
            Menjangkau konsumen lokal & internasional dengan jaringan distribusi
            yang terpercaya.
          </p>

          <div className="mt-12 flex justify-center">
            <Link href="/checkout" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-red-600 hover:text-white transition"
              >
                Order Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition hover:shadow-amber-300"
          whileHover={{ y: -8 }}
        >
          {/* Image Container */}
          <div
            className="overflow-hidden rounded-md mb-4 relative w-full h-56 cursor-zoom-in"
            onClick={() => setIsZoomed((prev) => !prev)} // toggle zoom
          >
            <motion.div
              animate={{ scale: isZoomed ? 1.6 : 1 }} // zoom ketika diklik
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag={isZoomed} // aktifkan drag hanya saat zoom
              dragConstraints={{
                left: -150,
                right: 150,
                top: -150,
                bottom: 150,
              }}
              className="w-full h-full flex items-center justify-center bg-white rounded-md"
            >
              <Image
                src="/projectImages/Keane/FloorMirror.jpg"
                alt="Divisi Distribusi"
                fill
                className="object-contain select-none"
              />
            </motion.div>
          </div>

          {/* Content */}
          <h3 className="font-bold text-2xl mb-3">Keane Round Mirror</h3>
          <p className="text-gray-400">
            Menjangkau konsumen lokal & internasional dengan jaringan distribusi
            yang terpercaya.
          </p>

          <div className="mt-12 flex justify-center">
            <Link href="/checkout" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-red-600 hover:text-white transition"
              >
                Order Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition hover:shadow-amber-300"
          whileHover={{ y: -8 }}
        >
          {/* Image Container */}
          <div
            className="overflow-hidden rounded-md mb-4 relative w-full h-56 cursor-zoom-in"
            onClick={() => setIsZoomed((prev) => !prev)} // toggle zoom
          >
            <motion.div
              animate={{ scale: isZoomed ? 1.6 : 1 }} // zoom ketika diklik
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag={isZoomed} // aktifkan drag hanya saat zoom
              dragConstraints={{
                left: -150,
                right: 150,
                top: -150,
                bottom: 150,
              }}
              className="w-full h-full flex items-center justify-center bg-white rounded-md"
            >
              <Image
                src="/projectImages/Keane/CERMIN.jpg"
                alt="Divisi Distribusi"
                fill
                className="object-contain select-none"
              />
            </motion.div>
          </div>

          {/* Content */}
          <h3 className="font-bold text-2xl mb-3">Keane Floor Mirror</h3>
          <p className="text-gray-400">
            Menjangkau konsumen lokal & internasional dengan jaringan distribusi
            yang terpercaya.
          </p>

          <div className="mt-12 flex justify-center">
            <Link href="/checkout" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-red-600 hover:text-white transition"
              >
                Order Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition hover:shadow-amber-300"
          whileHover={{ y: -8 }}
        >
          {/* Image Container */}
          <div
            className="overflow-hidden rounded-md mb-4 relative w-full h-56 cursor-zoom-in"
            onClick={() => setIsZoomed((prev) => !prev)} // toggle zoom
          >
            <motion.div
              animate={{ scale: isZoomed ? 1.6 : 1 }} // zoom ketika diklik
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag={isZoomed} // aktifkan drag hanya saat zoom
              dragConstraints={{
                left: -150,
                right: 150,
                top: -150,
                bottom: 150,
              }}
              className="w-full h-full flex items-center justify-center bg-white rounded-md"
            >
              <Image
                src="/projectImages/Keane/UPHkingbed.jpg"
                alt="Divisi Distribusi"
                fill
                className="object-contain select-none"
              />
            </motion.div>
          </div>

          {/* Content */}
          <h3 className="font-bold text-2xl mb-3">Keane UPH Bed king</h3>
          <p className="text-gray-400">
            Menjangkau konsumen lokal & internasional dengan jaringan distribusi
            yang terpercaya.
          </p>

          <div className="mt-12 flex justify-center">
            <Link href="/checkout" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-red-600 hover:text-white transition"
              >
                Order Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition hover:shadow-amber-300"
          whileHover={{ y: -8 }}
        >
          {/* Image Container */}
          <div
            className="overflow-hidden rounded-md mb-4 relative w-full h-56 cursor-zoom-in"
            onClick={() => setIsZoomed((prev) => !prev)} // toggle zoom
          >
            <motion.div
              animate={{ scale: isZoomed ? 1.6 : 1 }} // zoom ketika diklik
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag={isZoomed} // aktifkan drag hanya saat zoom
              dragConstraints={{
                left: -150,
                right: 150,
                top: -150,
                bottom: 150,
              }}
              className="w-full h-full flex items-center justify-center bg-white rounded-md"
            >
              <Image
                src="/projectImages/Keane/UPHqueenbed.jpg"
                alt="Divisi Distribusi"
                fill
                className="object-contain select-none"
              />
            </motion.div>
          </div>

          {/* Content */}
          <h3 className="font-bold text-2xl mb-3">Keane UPH Bed Queen</h3>
          <p className="text-gray-400">
            Menjangkau konsumen lokal & internasional dengan jaringan distribusi
            yang terpercaya.
          </p>

          <div className="mt-12 flex justify-center">
            <Link href="/checkout" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-red-600 hover:text-white transition"
              >
                Order Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition hover:shadow-amber-300"
          whileHover={{ y: -8 }}
        >
          {/* Image Container */}
          <div
            className="overflow-hidden rounded-md mb-4 relative w-full h-56 cursor-zoom-in"
            onClick={() => setIsZoomed((prev) => !prev)} // toggle zoom
          >
            <motion.div
              animate={{ scale: isZoomed ? 1.6 : 1 }} // zoom ketika diklik
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag={isZoomed} // aktifkan drag hanya saat zoom
              dragConstraints={{
                left: -150,
                right: 150,
                top: -150,
                bottom: 150,
              }}
              className="w-full h-full flex items-center justify-center bg-white rounded-md"
            >
              <Image
                src="/projectImages/Keane/NaturalbedKing.jpg"
                alt="Divisi Distribusi"
                fill
                className="object-contain select-none"
              />
            </motion.div>
          </div>

          {/* Content */}
          <h3 className="font-bold text-2xl mb-3">
            Keane Natural UPH Bed King
          </h3>
          <p className="text-gray-400">
            Menjangkau konsumen lokal & internasional dengan jaringan distribusi
            yang terpercaya.
          </p>

          <div className="mt-12 flex justify-center">
            <Link href="/checkout" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-red-600 hover:text-white transition"
              >
                Order Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition hover:shadow-amber-300"
          whileHover={{ y: -8 }}
        >
          {/* Image Container */}
          <div
            className="overflow-hidden rounded-md mb-4 relative w-full h-56 cursor-zoom-in"
            onClick={() => setIsZoomed((prev) => !prev)} // toggle zoom
          >
            <motion.div
              animate={{ scale: isZoomed ? 1.6 : 1 }} // zoom ketika diklik
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag={isZoomed} // aktifkan drag hanya saat zoom
              dragConstraints={{
                left: -150,
                right: 150,
                top: -150,
                bottom: 150,
              }}
              className="w-full h-full flex items-center justify-center bg-white rounded-md"
            >
              <Image
                src="/projectImages/Keane/NaturalbedQueen.jpg"
                alt="Divisi Distribusi"
                fill
                className="object-contain select-none"
              />
            </motion.div>
          </div>

          {/* Content */}
          <h3 className="font-bold text-2xl mb-3">
            Keane Natural UPH Bed Queen
          </h3>
          <p className="text-gray-400">
            Menjangkau konsumen lokal & internasional dengan jaringan distribusi
            yang terpercaya.
          </p>

          <div className="mt-12 flex justify-center">
            <Link href="/checkout" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-red-600 hover:text-white transition"
              >
                Order Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition hover:shadow-amber-300"
          whileHover={{ y: -8 }}
        >
          {/* Image Container */}
          <div
            className="overflow-hidden rounded-md mb-4 relative w-full h-56 cursor-zoom-in"
            onClick={() => setIsZoomed((prev) => !prev)} // toggle zoom
          >
            <motion.div
              animate={{ scale: isZoomed ? 1.6 : 1 }} // zoom ketika diklik
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag={isZoomed} // aktifkan drag hanya saat zoom
              dragConstraints={{
                left: -150,
                right: 150,
                top: -150,
                bottom: 150,
              }}
              className="w-full h-full flex items-center justify-center bg-white rounded-md"
            >
              <Image
                src="/projectImages/Keane/NaturalLtherKing.jpg"
                alt="Divisi Distribusi"
                fill
                className="object-contain select-none"
              />
            </motion.div>
          </div>

          {/* Content */}
          <h3 className="font-bold text-2xl mb-3">
            Keane Natural UPH Lether Bed King
          </h3>
          <p className="text-gray-400">
            Menjangkau konsumen lokal & internasional dengan jaringan distribusi
            yang terpercaya.
          </p>

          <div className="mt-12 flex justify-center">
            <Link href="/checkout" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-red-600 hover:text-white transition"
              >
                Order Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition hover:shadow-amber-300"
          whileHover={{ y: -8 }}
        >
          {/* Image Container */}
          <div
            className="overflow-hidden rounded-md mb-4 relative w-full h-56 cursor-zoom-in"
            onClick={() => setIsZoomed((prev) => !prev)} // toggle zoom
          >
            <motion.div
              animate={{ scale: isZoomed ? 1.6 : 1 }} // zoom ketika diklik
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag={isZoomed} // aktifkan drag hanya saat zoom
              dragConstraints={{
                left: -150,
                right: 150,
                top: -150,
                bottom: 150,
              }}
              className="w-full h-full flex items-center justify-center bg-white rounded-md"
            >
              <Image
                src="/projectImages/Keane/NaturalLtherQueen.jpg"
                alt="Divisi Distribusi"
                fill
                className="object-contain select-none"
              />
            </motion.div>
          </div>

          {/* Content */}
          <h3 className="font-bold text-2xl mb-3">
            Keane Natural UPH Lether Bed Queen{" "}
          </h3>
          <p className="text-gray-400">
            Menjangkau konsumen lokal & internasional dengan jaringan distribusi
            yang terpercaya.
          </p>

          <div className="mt-12 flex justify-center">
            <Link href="/checkout" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-red-600 hover:text-white transition"
              >
                Order Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition hover:shadow-amber-300"
          whileHover={{ y: -8 }}
        >
          {/* Image Container */}
          <div
            className="overflow-hidden rounded-md mb-4 relative w-full h-56 cursor-zoom-in"
            onClick={() => setIsZoomed((prev) => !prev)} // toggle zoom
          >
            <motion.div
              animate={{ scale: isZoomed ? 1.6 : 1 }} // zoom ketika diklik
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag={isZoomed} // aktifkan drag hanya saat zoom
              dragConstraints={{
                left: -150,
                right: 150,
                top: -150,
                bottom: 150,
              }}
              className="w-full h-full flex items-center justify-center bg-white rounded-md"
            >
              <Image
                src="/projectImages/Keane/CanopyKing.jpg"
                alt="Divisi Distribusi"
                fill
                className="object-contain select-none"
              />
            </motion.div>
          </div>

          {/* Content */}
          <h3 className="font-bold text-2xl mb-3">Keane Canopy Bed King</h3>
          <p className="text-gray-400">
            Menjangkau konsumen lokal & internasional dengan jaringan distribusi
            yang terpercaya.
          </p>

          <div className="mt-12 flex justify-center">
            <Link href="/checkout" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-red-600 hover:text-white transition"
              >
                Order Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition hover:shadow-amber-300"
          whileHover={{ y: -8 }}
        >
          {/* Image Container */}
          <div
            className="overflow-hidden rounded-md mb-4 relative w-full h-56 cursor-zoom-in"
            onClick={() => setIsZoomed((prev) => !prev)} // toggle zoom
          >
            <motion.div
              animate={{ scale: isZoomed ? 1.6 : 1 }} // zoom ketika diklik
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag={isZoomed} // aktifkan drag hanya saat zoom
              dragConstraints={{
                left: -150,
                right: 150,
                top: -150,
                bottom: 150,
              }}
              className="w-full h-full flex items-center justify-center bg-white rounded-md"
            >
              <Image
                src="/projectImages/Keane/CanopyQueen.jpg"
                alt="Divisi Distribusi"
                fill
                className="object-contain select-none"
              />
            </motion.div>
          </div>

          {/* Content */}
          <h3 className="font-bold text-2xl mb-3">Keane Canopy Bed Queen</h3>
          <p className="text-gray-400">
            Menjangkau konsumen lokal & internasional dengan jaringan distribusi
            yang terpercaya.
          </p>

          <div className="mt-12 flex justify-center">
            <Link href="/checkout" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-red-600 hover:text-white transition"
              >
                Order Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
      {/* CTA */}
      <div className="text-center mt-15">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Percayakan Furnitur Impian Anda pada Kami
        </h2>
        <p className="text-lg mb-8 text-gray-400 max-w-3xl mx-auto">
          Dari Mojokerto untuk dunia, PT Kurnia Anggun siap menjadi mitra
          terpercaya Anda dalam menciptakan furnitur berkualitas tinggi yang
          elegan, fungsional, dan bernilai investasi.
        </p>
        {/* Button */}
        <div className="mt-12 flex justify-center">
          <Link href="/#products" scroll={true}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-white text-gray-800 font-semibold shadow-md hover:bg-yellow-300 transition"
            >
              View All Products
            </motion.button>
          </Link>
        </div>

        {/* ini adalah contoh untuk membut button  */}
      </div>
    </section>
  );
}
