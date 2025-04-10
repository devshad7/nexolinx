"use client"

import { motion } from "framer-motion"

export default function HeroSlider() {
  return (
    <div className="relative w-full overflow-hidden bg-background py-16">
      {/* Gradient fade effect on the edges */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />

      {/* First row - scrolling left */}
      <motion.div
        className="flex whitespace-nowrap mb-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 20 }}
      >
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-center mx-4">
            <span
              className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4"
              style={{
                WebkitTextStroke: "1px rgb(0, 120, 255)", // Nexolinx blue
              }}
            >
              NEXOLINX
            </span>
            <span
              className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4"
              style={{
                WebkitTextStroke: "1px rgb(0, 120, 255)", // Nexolinx blue
              }}
            >
              TECHNOLOGY
            </span>
          </div>
        ))}
      </motion.div>

      {/* Second row - scrolling right */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 25 }}
      >
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-center mx-4">
            <span
              className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4"
              style={{
                WebkitTextStroke: "1px rgb(0, 120, 255)", // Nexolinx blue
              }}
            >
              INNOVATION
            </span>
            <span
              className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4"
              style={{
                WebkitTextStroke: "1px rgb(0, 120, 255)", // Nexolinx blue
              }}
            >
              SOLUTIONS
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

