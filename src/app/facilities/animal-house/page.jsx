"use client";

import Image from "next/image";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export default function AnimalHouse() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#202A44] text-white pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Facilities", href: "/facilities/labs" },
              { label: "Animal House" },
            ]}
            className="mb-6"
          />
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Animal House
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-300">
            CPCSEA-approved facility for pharmaceutical research and education
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <Image
              src="https://www.charusat.ac.in/rpcp/images/labs/lab7.png"
              alt="Animal House"
              fill
              className="object-contain"
            />
          </div>
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-[#202A44]">Animal House</h2>
            <div className="w-24 h-1 bg-[#FBCB0A] mt-3 mb-6"></div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Separate Animal house is built as per the norms of Committee for
              the Purpose of Control and Supervision of Experiments on Animals
              (CPCSEA) inside CHARUSAT campus behind RPCP building. It is housed
              with different animals viz. Rat, mice, Guinea Pig and rabbits.
              Animals are maintained as per the norms of CPCSEA and IAEC
              (Institutional Animal Ethics Committee).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
