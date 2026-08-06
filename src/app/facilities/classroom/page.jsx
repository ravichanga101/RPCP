"use client";

import { motion } from "framer-motion";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import ImageCarousel from "@/components/shared/ImageCarousel";

const carouselImages = [
  "/images/classroom1.webp",
  "/images/classroom2.webp",
  "/images/classroom3.webp",
  "/images/classroom4.webp",
  "/images/classroom5.webp",
  "/images/classroom6.webp",
];

export default function Classroom() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#202A44] text-white pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Facilities", href: "/facilities/labs" },
              { label: "Classrooms" },
            ]}
            className="mb-6"
          />
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Classrooms
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-300">
            Modern, air-conditioned learning spaces equipped with the latest
            technology
          </p>
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
            <h2 className="text-3xl font-bold text-[#202A44]">Class Rooms</h2>
            <div className="w-24 h-1 bg-[#FBCB0A] mt-3 mb-6"></div>

            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              Class rooms are Air conditioned, well furnished and equipped with
              LCD projector and Computer facility which enables interactive and
              ICT based teaching-learning process with good and ambient learning
              environment.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
