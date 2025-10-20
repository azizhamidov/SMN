import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaStar } from "react-icons/fa";

// Import 8 images
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
      <motion.div
        className="relative w-64 h-40 cursor-pointer flex items-center justify-center bg-pink-200 rounded-lg shadow-2xl border-2 border-pink-400"
        onClick={() => setOpen(true)}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        {!open && (
          <motion.div
            className="absolute text-white font-bold text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            For Samina
          </motion.div>
        )}

        {/* Envelope flap */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-pink-300 rounded-lg"
          animate={open ? { rotateX: -180 } : { rotateX: 0 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Images popping out from envelope */}
      {open && (
        <div className="absolute top-1/2 -translate-y-1/2 flex flex-wrap justify-center gap-4">
          {herImages.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Her ${index + 1}`}
              className="w-32 h-32 md:w-48 md:h-48 rounded-2xl shadow-xl border-2 border-pink-300 object-cover"
              initial={{ y: 0, opacity: 0, scale: 0 }}
              animate={{
                y: [-50, 0, -20],
                opacity: 1,
                scale: 1,
                rotate: [0, 15, -15, 0],
              }}
              transition={{ delay: 0.2 * index, duration: 1.2, type: "spring", stiffness: 100 }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
