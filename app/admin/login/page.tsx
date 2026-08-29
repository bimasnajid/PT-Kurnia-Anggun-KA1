"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star, CreditCard, Clock, Truck, Heart, Gift } from "lucide-react";
import Link from "next/link";


export default function AdminLoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // admin account static (bisa dihubungkan ke database nanti)
  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "admin123";

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Login admin valid
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem(
        "admin",
        JSON.stringify({ username: ADMIN_USERNAME })
      );

      // redirect ke dashboard admin
      router.push("/admin/home");
      return;
    }

    alert("Username atau password admin salah!");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundImage: "url('/divisi/sorum.jpg')" }}
    >
      <div className="w-full max-w-5xl bg-white/70 border shadow-sm p-8 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-10 text-black">
        {/* ====================== LEFT: ADMIN SIGN IN ====================== */}
        <div className="border-r pr-6">
          <h1 className="text-3xl font-bold mb-6 text-black">Admin Sign In</h1>

          <h3 className="text-xl font-semibold mb-4 text-black">
            Login Administrator
          </h3>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-black">
                Username <span className="text-red-500">required</span>
              </label>
              <input
                type="text"
                className="border w-full p-3 rounded focus:outline-none focus:ring text-black focus:ring-gray-300"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-black">
                Password <span className="text-red-500">required</span>
              </label>
              <input
                type="password"
                className="border w-full p-3 rounded focus:outline-none focus:ring focus:ring-gray-300"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Link
              href="/"
              className="block mt-6 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Login Home
            </Link>
          </form>
        </div>

        {/* ====================== RIGHT: INFORMATION ====================== */}
        <div className="pl-6">
          <h2 className="text-2xl font-bold mb-6 text-black">
            Administrator Access
          </h2>

          <div className="flex flex-col gap-5 text-gray-700">
            <Feature
              icon={<CreditCard size={22} />}
              text="Manage all payments & invoices"
            />
            <Feature
              icon={<Star size={22} />}
              text="Monitor product performance"
            />
            <Feature icon={<Clock size={22} />} text="View customer activity" />
            <Feature
              icon={<Truck size={22} />}
              text="Control shipping & logistics"
            />
            <Feature
              icon={<Gift size={22} />}
              text="Add new promotions & vouchers"
            />
            <Feature
              icon={<Heart size={22} />}
              text="Manage product collections"
            />
          </div>

          <p className="mt-10 text-sm text-gray-600">
            Halaman ini hanya khusus untuk Admin. Jika Anda bukan Admin, silakan
            kembali ke halaman utama.
          </p>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-black">{icon}</div>
      <p>{text}</p>
    </div>
  );
}
