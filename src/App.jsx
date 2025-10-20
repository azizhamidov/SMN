import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaStar } from "react-icons/fa";
import HerImage from "./assets/sm.jpg"; // Put her picture in src/assets/her.jpg

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-white overflow-hidden">
      {/* Floating hearts */}
      <motion.div
        className="absolute top-20 left-10 text-pink-400 text-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <FaHeart />
      </motion.div>
      <motion.div
        className="absolute top-32 right-20 text-pink-400 text-4xl"
        animate={{ y: [0, -50, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <FaHeart />
      </motion.div>

      {/* Floating stars */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-400 text-2xl"
          style={{
            top: Math.random() * window.innerHeight,
            left: Math.random() * window.innerWidth,
          }}
          animate={{ y: [0, -20, 0], rotate: [0, 360, 0] }}
          transition={{ repeat: Infinity, duration: 6 + i, ease: "easeInOut" }}
        >
          <FaStar />
        </motion.div>
      ))}

      {/* Main heading */}
      <motion.h1
        className="text-center mt-32 text-5xl md:text-7xl font-bold text-pink-600"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        Hey Beautiful ❤️
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-center mt-6 text-xl md:text-2xl text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        I made this little webpage just for you ✨
      </motion.p>

      {/* Her picture */}
      <div className="flex justify-center mt-10">
        <motion.img
          src={HerImage}
          alt="Her"
          className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-pink-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </div>

      {/* Optional: small footer */}
      <motion.footer
        className="text-center mt-12 text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Made with ❤️ just for you
      </motion.footer>
    </div>
  );
}
