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

  // Random motion for floating images
  const randomMotion = () => ({
    x: [
      Math.random() * window.innerWidth - window.innerWidth / 2,
      Math.random() * window.innerWidth - window.innerWidth / 2,
      Math.random() * window.innerWidth - window.innerWidth / 2,
    ],
    y: [
      Math.random() * window.innerHeight - window.innerHeight / 2,
      Math.random() * window.innerHeight - window.innerHeight / 2,
      Math.random() * window.innerHeight - window.innerHeight / 2,
    ],
    rotate: [0, Math.random() * 60 - 30, Math.random() * 40 - 20],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 8 + Math.random() * 4,
      ease: "easeInOut",
    },
  });

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 via-purple-200 to-white overflow-hidden perspective-1000">

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

      {/* Envelope container */}
      <div
        className="relative w-64 h-40 cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={() => setOpen(true)}
      >
        {/* Envelope flap using SVG triangle */}
        <motion.svg
          viewBox="0 0 200 80"
          className="absolute top-0 left-0 w-full h-20 z-20"
          style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
          animate={open ? { rotateX: -180 } : { rotateX: 0 }}
          transition={{ duration: 1 }}
        >
          <defs>
            <linearGradient id="flapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#f9a8d4", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#ec4899", stopOpacity: 1 }} />
            </linearGradient>
            <filter id="flapShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
              <feOffset dx="2" dy="2" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.5" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <polygon
            points="0,0 200,0 100,40"
            fill="url(#flapGradient)"
            stroke="#db2777"
            strokeWidth="2"
            filter="url(#flapShadow)"
            style={{ transform: open ? "translateZ(-10px)" : "translateZ(10px)" }}
          />
        </motion.svg>

        {/* Envelope body */}
        <div className="absolute top-0 left-0 w-full h-full bg-pink-300 rounded-b-xl shadow-xl border-2 border-pink-400 flex items-center justify-center z-10">
          {!open && (
            <span className="absolute text-white font-bold text-lg md:text-xl">
              For My Samina
            </span>
          )}
        </div>
      </div>

      {/* Images flying out */}
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
              ...randomMotion(),
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