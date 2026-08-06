"use client";

import { motion } from "framer-motion";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import ImageCarousel from "@/components/shared/ImageCarousel";

const carouselImages = [
  "/images/Computer_Lab_1.webp",
  "/images/Computer_Lab_2.webp",
  "/images/Computer_Lab_3.webp",
  "/images/Computer_Lab_4.webp",
  "/images/Computer_Lab_5.webp",
];

export default function ComputerLab() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#202A44] text-white pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Facilities", href: "/facilities/labs" },
              { label: "Computer Laboratory" },
            ]}
            className="mb-6"
          />
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Computer Laboratory
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-300">
            Advanced computational facilities for modern pharmaceutical
            education
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
            <h2 className="text-3xl font-bold text-[#202A44]">
              Computer Laboratory
            </h2>
            <div className="w-24 h-1 bg-[#FBCB0A] mt-3 mb-6"></div>

            <p className="text-gray-700 text-lg leading-relaxed text-justify mb-8">
              Designed specially to provide students' basic theoretical and
              practical knowledge of communication/ language as a part of their
              academic curriculum.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#FBCB0A] flex-shrink-0 mt-1">•</span>
                <span className="ml-3 text-gray-800">
                  Provided with separate computers with stereophonic headphones
                  and mic to facilitate conversations between staff members and
                  students.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FBCB0A] flex-shrink-0 mt-1">•</span>
                <span className="ml-3 text-gray-800">
                  Provided with projector and LCD for seminar or presentation
                  during lecture and practical session.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FBCB0A] flex-shrink-0 mt-1">•</span>
                <span className="ml-3 text-gray-800">
                  Also serves as a seminar room and computer laboratory.
                </span>
              </li>
            </ul>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
