"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
          {/* Background circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-orange-100/60 to-red-100/60 rounded-full blur-2xl"></div>
          </div>

          {/* 404 Text with characters */}
          <div className="relative z-10 flex items-center justify-center space-x-4">
            {/* Character sitting on 4 */}
            <div className="relative">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-8xl md:text-9xl font-bold text-indigo-600 relative"
              >
                4{/* Small character sitting on top */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full relative">
                    {/* Character arms */}
                    <div className="absolute -left-1 top-1 w-2 h-1 bg-blue-500 rounded-full transform -rotate-45"></div>
                    <div className="absolute -right-1 top-1 w-2 h-1 bg-blue-500 rounded-full transform rotate-45"></div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* 0 with character */}
            <div className="relative">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-8xl md:text-9xl font-bold text-orange-500 relative"
              >
                0{/* Character climbing */}
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 right-2"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full relative">
                    {/* Character legs */}
                    <div className="absolute -bottom-1 -left-1 w-1 h-2 bg-orange-500 rounded-full"></div>
                    <div className="absolute -bottom-1 -right-1 w-1 h-2 bg-orange-500 rounded-full"></div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* 4 with character on top */}
            <div className="relative">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-8xl md:text-9xl font-bold text-blue-600 relative"
              >
                4{/* Character with flag */}
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 right-1"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full relative">
                    {/* Flag */}
                    <div className="absolute -top-2 left-1/2 w-3 h-2 bg-orange-400 rounded-sm transform -translate-x-1/2"></div>
                    <div className="absolute -top-3 left-1/2 w-px h-3 bg-gray-600 transform -translate-x-1/2"></div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Floating elements */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                i % 3 === 0
                  ? "bg-orange-400"
                  : i % 3 === 1
                  ? "bg-blue-400"
                  : "bg-purple-400"
              }`}
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
            OPPS! PAGE NOT FOUND
          </h1>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md mx-auto">
            Sorry, the page you are looking for doesn't exist or has been moved.
            Let's get you back to where you need to be!
          </p>
        </motion.div>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base"
            >
              BACK TO HOME
            </motion.button>
          </Link>
        </motion.div>

        {/* Additional floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`extra-${i}`}
              className="absolute"
              style={{
                left: `${10 + i * 20}%`,
                top: `${20 + (i % 2) * 60}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div
                className={`w-1 h-1 rounded-full ${
                  i % 2 === 0 ? "bg-orange-300" : "bg-blue-300"
                } opacity-60`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
