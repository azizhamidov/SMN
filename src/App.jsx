import React, { useState } from "react";
import { motion } from "framer-motion";
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

  // Function to generate random floating positions
  const randomPosition = () => ({
    x: Math.random() * 400 - 200,
    y: Math.random() * -300 - 50,
    rotate: Math.random() * 60 - 30,
  });

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 via-purple-200 to-white overflow-hidden">

      {/* Envelope container */}
      <div className="relative w-64 cursor-pointer" onClick={() => setOpen(true)}>
        {/* Envelope flap */}
        <motion.div
          className="absolute top-0 left-0 w-0 h-0 border-l-32 border-l-transparent border-r-32 border-r-transparent border-b-20 border-b-pink-400"
          animate={open ? { rotateX: -180 } : { rotateX: 0 }}
          transition={{ duration: 1 }}
          style={{ transformOrigin: "top center" }}
        />

        {/* Envelope body */}
        <div className="relative w-full h-40 bg-pink-300 rounded-b-xl shadow-xl border-2 border-pink-400 flex items-center justify-center">
          {!open && (
            <span className="absolute text-white font-bold text-lg md:text-xl">
              For My Samina
            </span>
          )}
        </div>
      </div>

      {/* Floating images animation */}
      {open && herImages.map((img, index) => {
        const { x, y, rotate } = randomPosition();
        return (
          <motion.img
            key={index}
            src={img}
            alt={`Her ${index + 1}`}
            className="w-32 h-32 md:w-48 md:h-48 rounded-2xl shadow-xl border-2 border-pink-300 object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              x,
              y,
              rotate,
              transition: {
                delay: 0.2 * index,
                duration: 1.5,
                type: "spring",
                stiffness: 100,
              },
            }}
            whileHover={{
              scale: 1.1,
              y: y - 10,
              rotate: rotate + 10,
              transition: { duration: 0.5 },
            }}
          />
        );
      })}
    </div>
  );
}
