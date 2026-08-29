"use client";

import { motion } from "framer-motion";

type MotionButtonProps = {
  text: string;
  onClick?: () => void;
};

export default function MotionButton({ text, onClick }: MotionButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl focus:outline-none"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {text}
    </motion.button>
  );
}
