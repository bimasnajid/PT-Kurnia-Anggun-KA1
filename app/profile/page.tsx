"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type User = {
  email: string;
  username?: string;
  followers?: number;
  following?: number;
  vipSaving?: number;
};

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // popup pesanan
  const [activeOrderPopup, setActiveOrderPopup] = useState<
    "belum" | "dikemas" | "dikirim" | "nilai" | null
  >(null);

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (!u) router.push("http://localhost:3000/#home");
    else setUser(JSON.parse(u));
  }, [router]);

  const logout = () => {
    localStorage.removeItem("user");
    router.push("http://localhost:3000/#home");
  };

  if (!user) return null;

  const username = user.username || user.email.split("@")[0];
  const followers = user.followers ?? 0;
  const following = user.following ?? 0;
  const vipSaving = user.vipSaving ?? '$100000';

  return (
    <motion.div
      className="min-h-screen bg-gray-50 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* HEADER */}
      <motion.div
        className="bg-gradient-to-r from-gray-900 to-gray-500 text-white p-6 pb-20 rounded-b-3xl shadow-xl"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        <motion.button
          onClick={() => router.push("http://localhost:3000/#home")}
          className="absolute top-10 right-9 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 shadow-md hover:bg-white/30"
          whileTap={{ scale: 0.85 }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-white text-lg">Back Home</span>
        </motion.button>
        <div className="flex items-center gap-5">
          <motion.div
            className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/Client/profil.jpg"
              alt="avatar"
              fill
              className="object-cover"
            />
          </motion.div>

          <div>
            <h2 className="text-2xl font-bold drop-shadow-md">{username}</h2>
            <p className="text-sm opacity-90">
              {followers} Pengikut • {following} Mengikuti
            </p>
          </div>
        </div>
      </motion.div>

      {/* VIP CARD */}
      <motion.div
        className="-mt-10 mx-5 bg-white shadow-lg rounded-2xl p-4 flex gap-4 items-center border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="bg-yellow-400 px-4 py-1 rounded-lg font-bold text-gray-900">
          VIP
        </div>
        <p className="text-gray-700 font-medium">
          Kamu telah hemat {vipSaving.toLocaleString()} 🎉
        </p>
      </motion.div>

      {/* PESANAN SAYA */}
      <motion.div
        className="bg-white mx-4 mt-6 rounded-2xl shadow p-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-lg font-bold text-gray-800">Pesanan Saya</h3>
          <button className="text-blue-600 text-sm hover:underline">
            Riwayat Pesanan →
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 text-center">
          <OrderIcon
            icon="💳"
            title="Belum Bayar"
            onClick={() => setActiveOrderPopup("belum")}
          />
          <OrderIcon
            icon="📦"
            title="Dikemas"
            onClick={() => setActiveOrderPopup("dikemas")}
          />
          <OrderIcon
            icon="🚚"
            title="Dikirim"
            onClick={() => setActiveOrderPopup("dikirim")}
          />
          <OrderIcon
            icon="⭐"
            title="Beri Nilai"
            onClick={() => setActiveOrderPopup("nilai")}
          />
        </div>
      </motion.div>

      {/* MENU */}
      <motion.div
        className="bg-white mx-4 mt-6 rounded-2xl overflow-hidden shadow"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <MenuItem title="Peraturan Komunitas" />
        <MenuItem title="Kebijakan" />
        <MenuItem title="Suka Aplikasi Ini? Nilai Kami!" />
        <MenuItem title="Informasi" />
        <MenuItem
          title="Ajukan Penghapusan Akun"
          danger
          onClick={() => setShowDeleteModal(true)}
        />
      </motion.div>

      {/* LOGOUT */}
      <motion.div
        className="p-4 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <button
          onClick={logout}
          className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold shadow hover:bg-red-600 active:scale-95 transition"
        >
          Keluar Akun
        </button>
      </motion.div>

      {/* =======================================
          POPUP DETAIL PESANAN (4 jenis)
      ========================================== */}

      <AnimatePresence>
        {activeOrderPopup && (
          <OrderPopup
            type={activeOrderPopup}
            onClose={() => setActiveOrderPopup(null)}
          />
        )}
      </AnimatePresence>

      {/* DELETE ACCOUNT MODAL */}
      <AnimatePresence>
        {showDeleteModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full text-black"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
            >
              <h3 className="text-xl font-bold mb-2">Konfirmasi Penghapusan</h3>
              <p className="text-gray-600 mb-4">
                Apakah kamu yakin ingin menghapus akun ini secara permanen?
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                >
                  Batal
                </button>
                <button
                  onClick={() => {
                    localStorage.removeItem("user");
                    setShowDeleteModal(false);
                    router.push("http://localhost:3000/#home");
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg"
                >
                  Hapus
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ================= ICON COMPONENT ================= */

function OrderIcon({
  icon,
  title,
  onClick,
}: {
  icon: string;
  title: string;
  onClick?: () => void;
}) {
  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer"
      whileHover={{ scale: 1.15 }}
      onClick={onClick}
    >
      <div className="text-3xl">{icon}</div>
      <span className="mt-1 text-sm text-gray-700">{title}</span>
    </motion.div>
  );
}

/* ================= MENU ITEM ================= */

function MenuItem({
  title,
  danger,
  onClick,
}: {
  title: string;
  danger?: boolean;
  onClick?: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`w-full text-left px-5 py-4 text-[15px] border-b last:border-none flex justify-between ${
        danger ? "text-red-600" : "text-gray-700"
      }`}
      whileTap={{ scale: 0.97 }}
      whileHover={{ backgroundColor: "#f9f9f9" }}
    >
      {title}
      <span className="text-gray-400">›</span>
    </motion.button>
  );
}

/* ================= POPUP PESANAN ================= */

function OrderPopup({
  type,
  onClose,
}: {
  type: "belum" | "dikemas" | "dikirim" | "nilai";
  onClose: () => void;
}) {
  const titleMap = {
    belum: "Belum Bayar",
    dikemas: "Pesanan Sedang Dikemas",
    dikirim: "Pesanan Dalam Pengiriman",
    nilai: "Beri Penilaian",
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full text-black"
        initial={{ scale: 0.8, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-3">{titleMap[type]}</h2>

        {/* DATA DUMMY  */}

        <p className="text-gray-600">
          Tidak ada data nyata. Kamu bisa menghubungkan ke database nanti.
        </p>

        <button
          onClick={onClose}
          className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700"
        >
          Tutup
        </button>
      </motion.div>
    </motion.div>
  );
}
