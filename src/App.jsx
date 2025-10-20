import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaStar } from "react-icons/fa";
import her1 from "./assets/sm.jpg";
import her2 from "./assets/sm2.jpg";
import her3 from "./assets/sm3.jpg";
import her4 from "./assets/sm4.jpg";
import her5 from "./assets/sm5.jpg";
import her6 from "./assets/sm6.jpg";
import her7 from "./assets/sm7.jpg";
import her8 from "./assets/sm8.jpg";

const herImages = [her1, her2, her3, her4, her5, her6, her7, her8];

export default function App() {
  const [open, setOpen] = useState(false);

  // Generate random float keyframes
  const randomFloat = () => ({
    x: [
      Math.random() * 300 - 150,
      Math.random() * 300 - 150,
      Math.random() * 300 - 150,
    ],
    y: [
      Math.random() * -200 - 50,
      Math.random() * -300 - 50,
      Math.random() * -250 - 50,
    ],
    rotate: [0, Math.random() * 60 - 30, Math.random() * 40 - 20],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 6 + Math.random() * 4,
      ease: "easeInOut",
    },
  });

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 via-purple-200 to-white overflow-hidden">

      {/* Floating hearts */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-pink-400 text-2xl md:text-3xl"
          style={{
            top: Math.random() * window.innerHeight,
            left: Math.random() * window.innerWidth,
          }}
          animate={{ y: [0, -20, 0], rotate: [0, 360, 0] }}
          transition={{ repeat: Infinity, duration: 4 + i, ease: "easeInOut" }}
        >
          <FaHeart />
        </motion.div>
      ))}

      {/* Floating stars */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute text-yellow-300 text-xl md:text-2xl"
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

      {/* Envelope */}
      <div className="relative w-64 cursor-pointer" onClick={() => setOpen(true)}>
        {/* Flap */}
        <motion.div
          className="absolute top-0 left-0 w-0 h-0 border-l-32 border-l-transparent border-r-32 border-r-transparent border-b-20 border-b-pink-400"
          animate={open ? { rotateX: -180 } : { rotateX: 0 }}
          transition={{ duration: 1 }}
          style={{ transformOrigin: "top center" }}
        />

        {/* Body */}
        <div className="relative w-full h-40 bg-pink-300 rounded-b-xl shadow-xl border-2 border-pink-400 flex items-center justify-center">
          {!open && (
            <span className="absolute text-white font-bold text-lg md:text-xl">
              For My Samina
            </span>
          )}
        </div>
      </div>

      {/* Images flying out and floating continuously */}
      {open &&
        herImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Her ${index + 1}`}
            className="w-32 h-32 md:w-48 md:h-48 rounded-2xl shadow-xl border-2 border-pink-300 object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              ...randomFloat(),
            }}
            transition={{ delay: 0.2 * index }}
            whileHover={{
              scale: 1.1,
              rotate: [0, 10, -10, 0],
              transition: { duration: 0.5 },
            }}
          />
        ))}
    </div>
  );
}
