"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Globe } from "lucide-react";
import Link from "next/link";

const MotionLink = motion(Link);

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-900 to-gray-800 py-25 px-6 md:px-16"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
      >
        Contack Kami
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-gray-300 max-w-2xl mx-auto mb-10"
      >
        Hubungi kami untuk pemesanan, kerja sama bisnis, atau pertanyaan lebih
        lanjut. Tim kami siap membantu Anda!
      </motion.p>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-gray-700 p-8 rounded-2xl shadow-lg"
          
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Contack Info
          </h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-yellow-400" />
              <span>www.kurniaanggunfurniture.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-yellow-400" />
              <span>info@kurniaanggun.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-yellow-400" />
              <span>+62 31 1234567</span>
            </li>
          </ul>

          {/* Alamat */}
          <div className="mt-6 text-gray-400 space-y-2">
            <p>
              <strong>Alamat Pabrik I:</strong> Desa Ngrame, Mojosari, Mojokerto
            </p>
            <p>
              <strong>Alamat Pabrik II:</strong> Desa Mojorejo, Pungging,
              Mojokerto
            </p>
            <p>
              <strong>Alamat Showroom:</strong> Jl. Raya Trawas, Wringinanom,
              Mojorejo, Kec. Pungging, Kabupaten Mojokerto, Jawa Timur 61384
            </p>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-6 w-full h-64 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.5762117815276!2d112.53114317475524!3d-7.533610774518104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780d9f4b3e8f29%3A0x5027a76e356d930!2sCHH4%2B57V%2C%20Jl.%20Raya%20Trawas%2C%20Wringinanom%2C%20Mojorejo%2C%20Kec.%20Pungging%2C%20Kabupaten%20Mojokerto%2C%20Jawa%20Timur%2061384!5e0!3m2!1sen!2sid!4v1728139600000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="bg-gray-700 p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Kirim Pesan
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nama Anda"
              className="w-full p-3 rounded-lg bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email Anda"
              className="w-full p-3 rounded-lg bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Tulis pesan Anda..."
              rows={4}
              className="w-full p-3 rounded-lg bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              type="submit"
              className="w-full py-3 bg-yellow-400 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg shadow-md"
            >
              Kirim Pesan
            </motion.button>
          </div>
        </motion.div>
      </div>
        

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-center mt-10"
      >
        <p className="text-gray-300 text-lg mb-4">
          Ingin produk furniture berkualitas? Hubungi kami sekarang dan dapatkan
          penawaran terbaik!
        </p>
        <div className="mt-8 flex justify-center">
          <MotionLink
            href="/about"
            scroll={true}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md 
                    hover:bg-yellow-300 hover:text-gray-900 transition hover:shadow-blue-700"
          >
            Contact To Me
          </MotionLink>
        </div>
      </motion.div>
    </section>
  );
}
