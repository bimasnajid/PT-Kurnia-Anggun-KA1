"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingCart, User } from "react-feather";
import { Star, CreditCard, Clock, Truck, Heart, Gift } from "lucide-react";
import { ReactNode } from "react";

// ====================== MENU ======================
type MenuItem = {
  label: string;
  href: string;
  subMenu?: { label: string; href: string }[];
};

const menuItems: MenuItem[] = [
  { label: "Home", href: "#home" },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Products",
    href: "#products",
    subMenu: [
      { label: "Keane", href: "/products/keane" },
      { label: "Basque", href: "/products/basque" },
      { label: "Milano", href: "/products/milano" },
      { label: "Blake", href: "/products/blake" },
      { label: "Dawson", href: "/products/dawson" },
      { label: "Mahogany Vanity", href: "/products/sh" },
    ],
  },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Feature = ({ icon, text }: { icon: ReactNode; text: string }) => (
  <div className="flex items-center gap-3 text-black">
    <span className="text-xl">{icon}</span>
    <span>{text}</span>
  </div>
);

interface User {
  id: string;
  name: string;
  email: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      try {
        setUser(JSON.parse(data));
      } catch (e) {
        console.error("Invalid user JSON");
      }
    }
  }, []);

  type CartItem = {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    shipFee: number;
    tax: number;
  };

  // FIX BAGIAN RUSAK DI SINI
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: "1",
      name: "New Ns Keane Nightstand Wr Wp",
      price: 2.7,
      image: "/dresser.jpg",
      quantity: 1,
      shipFee: 279,
      tax: 216.92,
    },

    {
      id: "2",
      name: "Milano Bed Queen L/R",
      price: 2799,
      image: "/ReactCoffee54.jpg",
      quantity: 1,
      shipFee: 279,
      tax: 216.92,
    },
  ]);

  // Update Qty
  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  // Remove item
  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  // Totals
  const merchandiseTotal = cart.reduce(
    (acc, i) => acc + i.price * i.quantity,
    0,
  );

  const shipTotal = cart.reduce((acc, i) => acc + i.shipFee, 0);
  const taxTotal = cart.reduce((acc, i) => acc + i.tax, 0);

  const orderTotal = merchandiseTotal + shipTotal + taxTotal;

  const currentLocale = pathname.split("/")[1] || "en";

  const getHref = (href: string) => {
    if (href.startsWith("#")) return href;
    return `/${currentLocale}${href}`;
  };

  return (
    <>
      {/* ====================== NAVBAR ====================== */}
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          {/* LOGO */}
          <div className="flex items-center">
            <div className="relative h-10 w-24">
              <Image
                src="/Image/KA.png"
                alt="Kurnia Anggun"
                fill
                sizes="96px"
                className="object-contain"
                priority
              />
            </div>
            <Link href="/" className="text-2xl font-bold text-black">
              PT.KURNIA ANGGUN
            </Link>
          </div>

          {/* MENU DESKTOP */}
          <ul className="hidden md:flex gap-6 text-black font-medium ml-auto">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className="relative group"
                onMouseEnter={() =>
                  item.subMenu ? setOpenMenu(item.label) : setOpenMenu(null)
                }
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={getHref(item.href)}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>

                {/* SUBMENU */}
                {item.subMenu && (
                  <AnimatePresence>
                    {openMenu === item.label && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md py-2 w-56"
                      >
                        {item.subMenu.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              href={getHref(sub.href)}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* ====================== ICONS DESKTOP ====================== */}
          <div className="ml-auto hidden md:flex items-center gap-4 bold">
            {/* CART BUTTON */}
            <button
              onClick={() => setShowCart(true)}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-300 transition"
            >
              <ShoppingCart size={25} className="text-black" />
            </button>

            {/* PROFILE BUTTON */}
            {!user ? (
              <button
                onClick={() => setShowLogin(true)}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-300 transition"
              >
                <User size={25} className="text-black" />
              </button>
            ) : (
              <button onClick={() => router.push("/profile")}>
                <motion.div
                  className="relative w-10 h-10 rounded-full overflow-hidden border-4 border-white shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src="/Client/profil.jpg"
                    alt="avatar"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </button>
            )}
          </div>

          {/* Hamburger button (mobile) */}
          <button
            className="relative z-50 flex flex-col justify-between w-8 h-6 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-1 bg-black rounded origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-8 h-1 bg-black rounded"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-1 bg-black rounded origin-center"
            />
          </button>
          {/* Mobile Menu */}
          <div
            className={`absolute top-full left-0 w-full bg-gray-200 shadow-md mobile-menu ${
              isOpen ? "open" : ""
            } md:hidden`}
          >
            <ul className="flex flex-col items-center py-4 space-y-4 text-black font-semibold text-xl">
              {menuItems.map((item) => (
                <li key={item.label} className="w-full text-center">
                  {!item.subMenu ? (
                    <Link
                      href={getHref(item.href)}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      {/* Parent */}
                      <button
                        onClick={() =>
                          setOpenMenu(
                            openMenu === item.label ? null : item.label,
                          )
                        }
                        className="w-full py-2 hover:text-blue-600"
                      >
                        {item.label}
                      </button>

                      {/* Submenu */}
                      <AnimatePresence>
                        {openMenu === item.label && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-center bg-gray-100 rounded-md"
                          >
                            {item.subMenu.map((sub) => (
                              <li key={sub.label}>
                                <Link
                                  href={getHref(sub.href)}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-4 py-2 hover:text-blue-600"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* ====================== POPUP CART ====================== */}
      <AnimatePresence>
        {showCart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999] flex items-center justify-center"
            onClick={() => setShowCart(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="
          bg-white shadow-xl rounded-xl 
          w-full max-w-3xl 
          max-h-[85vh] 
          overflow-y-auto 
          p-6 relative
        "
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowCart(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-5 text-center text-black">
                Keranjang Saya
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* LEFT - Cart List */}
                <div className="space-y-5">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-4 border-b pb-4 text-gray-900"
                    >
                      <Image
                        src="/projectImages/Milano/milanoQueen.png"
                        width={100}
                        height={100}
                        alt={item.name}
                        className="rounded-lg border w-[100px] h-[100px] object-cover"
                      />

                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="text-lg font-semibold">{item.name}</h3>
                          <p className="text-black text-sm">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>

                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQty(item.id, -1)}
                              className="w-7 h-7 border rounded flex items-center justify-center"
                            >
                              -
                            </button>

                            <span className="text-lg">{item.quantity}</span>

                            <button
                              onClick={() => updateQty(item.id, 1)}
                              className="w-7 h-7 border rounded flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 text-sm hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* RIGHT - Order Summary */}
                <div className="bg-gray-50 rounded-xl p-5 shadow-sm h-fit">
                  <h2 className="text-xl font-semibold mb-4 text-gray-900">
                    Order Summary
                  </h2>

                  <div className="space-y-3 text-gray-900">
                    <div className="flex justify-between">
                      <span>Merchandise</span>
                      <span>${merchandiseTotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>${shipTotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${taxTotal.toFixed(2)}</span>
                    </div>

                    <hr />

                    <div className="flex justify-between font-semibold text-lg">
                      <span>Order Total</span>
                      <span>${orderTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  {cart.length > 0 && (
                    <Link
                      href="/checkout"
                      className="block mt-6 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                      CHECKOUT NOW
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ====================== POPUP LOGIN (PREMIUM) ====================== */}
      <AnimatePresence>
        {showLogin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl w-[900px] max-w-full p-10 relative grid grid-cols-1 md:grid-cols-2 gap-10 shadow-2xl"
            >
              {/* CLOSE */}
              <button
                onClick={() => setShowLogin(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
              >
                ✕
              </button>

              {/* LEFT SIDE - SIGN IN */}
              <div>
                <h1 className="text-3xl font-bold mb-6 text-black">
                  Account Sign In
                </h1>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-black">Sign In</h3>
                  <span className="underline text-sm cursor-pointer text-black">
                    Reset password
                  </span>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = new FormData(e.currentTarget);

                    const email = form.get("email") as string;
                    const password = form.get("password") as string;

                    if (!email || !password) {
                      alert("Email & password wajib diisi");
                      return;
                    }

                    const userData = { email, name: "User" };
                    localStorage.setItem("user", JSON.stringify(userData));

                    setShowLogin(false);
                    window.location.reload();
                  }}
                  className="flex flex-col gap-4"
                >
                  <div>
                    <label className="text-sm text-black">
                      Email <span className="text-red-500">required</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="border w-full p-3 rounded text-black focus:outline-none focus:ring-1 focus:ring-gray-400"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-black">
                      Password <span className="text-red-500">required</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="border w-full p-3 rounded text-black focus:outline-none focus:ring-1 focus:ring-gray-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 inline-block px-8 rounded bg-blue-700 text-white font-semibold shadow-md 
                    hover:bg-yellow-300 hover:text-gray-900 transition hover:shadow-blue-700"
                  >
                    SIGN IN
                  </button>

                  <p className="text-xs text-black mt-2">
                    By signing in, you agree to our{" "}
                    <span className="underline">Terms of Use</span> and{" "}
                    <span className="underline">Privacy Policy</span>.
                  </p>
                </form>
              </div>

              {/* RIGHT SIDE - CREATE ACCOUNT */}
              <div className="pl-6">
                <h2 className="text-2xl font-bold mb-6 text-black">
                  Create An Account
                </h2>

                <div className="flex flex-col gap-5 text-gray-700">
                  <Feature
                    icon={<CreditCard size={22} />}
                    text="Save payment to view in-store purchases"
                  />
                  <Feature icon={<Star size={22} />} text="Redeem Rewards" />
                  <Feature icon={<Clock size={22} />} text="Speedy checkout" />
                  <Feature
                    icon={<Truck size={22} />}
                    text="Easily track orders and view order history"
                  />
                  <Feature icon={<Gift size={22} />} text="Create a Registry" />
                  <Feature
                    icon={<Heart size={22} />}
                    text="Manage Favorites Lists"
                  />
                </div>

                <button
                  onClick={() => router.push("/auth/register")}
                  className="mt-10 bg-black text-white w-full py-3 rounded font-semibold tracking-wider hover:bg-gray-600"
                >
                  CREATE ACCOUNT
                </button>

                <p className="mt-4 text-sm text-black">
                  Don’t have an account?{" "}
                  <a className="underline cursor-pointer">
                    Track/Schedule Order
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
