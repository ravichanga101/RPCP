"use client";

import { motion } from "framer-motion";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import ImageCarousel from "@/components/shared/ImageCarousel";

const carouselImages = [
  "/images/sophisticated%20Instrument%20Lab_1.webp",
  "/images/sophisticated%20Instrument%20Lab_2.webp",
  "/images/sophisticated%20Instrument%20Lab_3.webp",
  "/images/sophisticated%20Instrument%20Lab_4.webp",
];

export default function SophisticatedInstrumentLabPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-[#202A44] text-white pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Facilities", href: "/facilities/labs" },
              { label: "Sophisticated Instrument Lab" },
            ]}
            className="mb-6"
          />
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            Sophisticated Instrument Laboratory
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-3xl text-lg text-gray-300"
          >
            State-of-the-art analytical support for advanced pharmaceutical
            research, characterization, and quality-focused learning.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <section className="mx-auto mb-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl bg-black"
          >
            <div className="relative h-[340px] sm:h-[420px] lg:h-[540px]">
              <ImageCarousel
                images={carouselImages}
                autoPlayInterval={3000}
                imageFit="contain"
                imageBackground="#0f172a"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#202A44]/55 via-transparent to-transparent" />
          </motion.div>
        </section>

        <section className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-8 lg:p-10"
          >
            <h2 className="text-3xl font-bold text-[#202A44]">
              Sophisticated Instrument Laboratory
            </h2>
            <div className="w-24 h-1 bg-[#FBCB0A] mt-3 mb-6"></div>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              The Sophisticated Instrument Laboratory at Ramanbhai Patel College
              of Pharmacy (RPCP) provides state-of-the-art analytical facilities
              to support advanced research, innovation, and quality education.
              Equipped with modern instruments, the laboratory enables
              pharmaceutical analysis, drug characterization, and
              interdisciplinary research. It serves undergraduate, postgraduate,
              doctoral scholars, and industry collaborators with hands-on
              training and analytical services. The facility promotes skill
              development in advanced analytical techniques while fostering
              research excellence and scientific innovation. Committed to
              precision, quality, and academic advancement, the laboratory plays
              a vital role in strengthening pharmaceutical research and
              development.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
