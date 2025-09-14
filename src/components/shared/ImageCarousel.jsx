"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ImageCarousel = ({ images, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval, images.length]);


  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Main Image Container */}
      <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 1.02
            }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="absolute inset-0 w-full h-full"
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url("${image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </motion.div>
        ))}
      </div>

      {/* Subtle Progress Indicator */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-1.5 sm:space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "bg-yellow-400 scale-125"
                : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
