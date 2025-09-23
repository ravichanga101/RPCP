"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function MajorRecruiters() {
  const scrollContainerRef = useRef(null);

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let isScrolling = true;
    let scrollPosition = 0;
    const scrollSpeed = 2.5; // pixels per frame for smooth movement
    const scrollInterval = 16; // ~60fps for smooth animation

    const scroll = () => {
      if (!isScrolling) return;
      
      scrollPosition += scrollSpeed;
      const maxScroll = scrollContainer.scrollWidth / 2;
      
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, scrollInterval);

    // Pause on hover
    const handleMouseEnter = () => {
      isScrolling = false;
    };
    
    const handleMouseLeave = () => {
      isScrolling = true;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(intervalId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const recruiters = [
    { name: "IPCA", image: "/images/major_recruiters/ipca-1-185x119.jpg" },
    { name: "Zydus", image: "/images/major_recruiters/zydus.png" },
    { name: "Intas", image: "/images/major_recruiters/intas.png" },
    { name: "Gowrie", image: "/images/major_recruiters/gowrie.png" },
    { name: "Eva", image: "/images/major_recruiters/eva.png" },
    { name: "Alembic", image: "/images/major_recruiters/alembic.png" },
    { name: "Alkem", image: "/images/major_recruiters/alkem.png" },
    { name: "Cipla", image: "/images/major_recruiters/cipla.png" },
    { name: "Cadila", image: "/images/major_recruiters/cadila.png" },
    { name: "Sun Pharma", image: "/images/major_recruiters/sun.png" },
    { name: "Torrent", image: "/images/major_recruiters/torrent_p.png" },
    { name: "Unique", image: "/images/major_recruiters/unique.png" },
    { name: "Veeda", image: "/images/major_recruiters/veeda.png" },
    { name: "Novartis", image: "/images/major_recruiters/Novartis.png" },
    { name: "Sanofi", image: "/images/major_recruiters/Sanofi.png" },
    { name: "Abbott", image: "/images/major_recruiters/Abbotte.jpeg" },
    { name: "Glenmark", image: "/images/major_recruiters/Glenmark.png" },
    { name: "Apollo", image: "/images/major_recruiters/Apollo.png" },
    { name: "JB Chemical", image: "/images/major_recruiters/JB Chemical.png" },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedRecruiters = [...recruiters, ...recruiters];

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Major Recruiters
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
          
          <div
            ref={scrollContainerRef}
            className="flex space-x-8 overflow-x-hidden scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedRecruiters.map((recruiter, index) => (
              <motion.div
                key={`${recruiter.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex-shrink-0 group"
              >
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-amber-300 transition-all duration-300 group-hover:scale-105">
                  <div className="w-32 h-20 flex items-center justify-center">
                    <img
                      src={recruiter.image}
                      alt={recruiter.name}
                      className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div 
                      className="hidden w-full h-full items-center justify-center bg-slate-100 rounded text-slate-500 text-sm font-medium"
                    >
                      {recruiter.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-slate-600 text-sm">
            Proud to be associated with leading pharmaceutical companies
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
