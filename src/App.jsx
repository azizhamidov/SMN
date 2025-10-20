import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaStar } from "react-icons/fa";

// Import her 8 images
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
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-100 via-purple-200 to-white overflow-hidden">

      {/* Floating hearts */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-pink-400 text-2xl md:text-3xl"
          style={{
            top: Math.random() * window.innerHeight,
            left: Math.random() * window.innerWidth,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + Math.random() * 3,
            ease: "easeInOut",
          }}
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
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6 + i,
            ease: "easeInOut",
          }}
        >
          <FaStar />
        </motion.div>
      ))}

      {/* Heading */}
      <motion.h1
        className="text-center mt-20 md:mt-32 text-5xl md:text-7xl font-extrabold text-pink-600 drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        Hey Beautiful ❤️
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-center mt-6 text-lg md:text-2xl text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        I made this little magical page just for you ✨
      </motion.p>

      {/* Main picture */}
      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
      >
        <motion.img
          src={her1}
          alt="Her"
          className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-pink-300 hover:scale-105 transition-transform duration-500"
          whileHover={{ rotate: 5, scale: 1.1 }}
        />
      </motion.div>

      {/* Floating hearts around main image */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`heart-around-${i}`}
          className="absolute text-pink-400 text-2xl"
          style={{
            top: 300 + Math.random() * 100,
            left: window.innerWidth / 2 + (Math.random() * 200 - 100),
          }}
          animate={{ y: [0, -20, 0], x: [0, 15, 0], rotate: [0, 180, 0] }}
          transition={{ repeat: Infinity, duration: 4 + i, ease: "easeInOut" }}
        >
          <FaHeart />
        </motion.div>
      ))}

      {/* Sliding personal letter */}
      <motion.div
        className="max-w-3xl mx-auto mt-20 p-6 bg-white rounded-3xl shadow-2xl border-2 border-pink-200"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 1.5, type: "spring", stiffness: 80 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-4 text-center">
          A Little Letter For You
        </h2>
        <p className="text-gray-700 text-lg md:text-xl text-center leading-relaxed">
          I wanted to create something special just for you. Every heart, every star, 
          and every animation is a little reminder of how amazing you are ✨❤️.
        </p>
      </motion.div>

      {/* Image gallery of 8 images */}
      <motion.div
        className="max-w-6xl mx-auto mt-16 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {herImages.map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-2xl shadow-xl border-4 border-pink-200"
            whileHover={{ scale: 1.05, rotate: 1 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={img}
              alt={`Her ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="text-center mt-16 text-gray-500 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        Made with ❤️ for you
      </motion.footer>

    </div>
  );
}
