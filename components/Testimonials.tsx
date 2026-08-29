"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "John Smith",
    company: "Wooden Living UK",
    text: "PT Kurnia Anggun consistently delivers high-quality wooden furniture. Their craftsmanship and attention to detail are exceptional.",
    image: "/image/client1.jpg",
  },
  {
    name: "Maria Gonzalez",
    company: "Casa Deco Spain",
    text: "We are very satisfied with the durability and design of the rattan furniture. Perfect balance of tradition and modern style.",
    image: "/image/client2.jpg",
  },
  {
    name: "David Lee",
    company: "HomeStyle USA",
    text: "Professional service, timely delivery, and top-notch quality. A trusted partner for our long-term projects.",
    image: "/image/client3.jpg",
  },
];

const clientLogos = [
  { src: "/Client/ARHS_BIG.png", alt: "ARHS", width: 120, height: 60 },
  { src: "/Client/Create&Barrel.png", alt: "cb", width: 140, height: 60 },
  { src: "/Client/ballard.png", alt: "ballard", width: 140, height: 60 },
  { src: "/Client/williams.png", alt: "Williams", width: 120, height: 60 },
  { src: "/Client/Sh.png", alt: "sh", width: 120, height: 60 },
  { src: "/Client/gabby.png", alt: "gabby", width: 120, height: 60 },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto slide setiap 10 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-16 md:px-12 lg:px-20"
      style={{ backgroundImage: "url('/Image/pos.jpg')" }}
    >
      {/* Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Client Partner
        </h2>
        <p className="text-white font-semibold border-text mx-4 sm:mx-0 shadow-2xl">
          Trusted by international buyers in the furniture industry.
        </p>
        {/* Overlay
        <div className="absolute inset-0 bg-black/40"></div> */}
      </motion.div>


      {/* Testimonial Slider */}
      <div className="relative flex justify-center items-center px-2 sm:px-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-2xl text-center"
          >
            <div className="w-20 h-20 relative mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="/Client/buyyer.png"
                alt="buyyer"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-white italic mb-4 text-sm sm:text-base leading-relaxed">
              “{testimonials[index].text}”
            </p>
            <h4 className="font-semibold text-base sm:text-lg text-yellow-300">
              {testimonials[index].name}
            </h4>
            <span className="text-xs sm:text-sm text-yellow-300">
              {testimonials[index].company}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Client Logos */}
      {/* Client Logos dengan animasi masuk/keluar */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center mt-12"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15, // logo masuk satu per satu
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {clientLogos.map((logo, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              exit: { opacity: 0, y: -40, transition: { duration: 0.4 } },
            }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain max-h-12 sm:max-h-16"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
