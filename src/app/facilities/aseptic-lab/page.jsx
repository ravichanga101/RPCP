"use client";

import Image from "next/image";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export default function AsepticLab() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#202A44] text-white pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Facilities", href: "/facilities/labs" },
              { label: "Aseptic Laboratory" },
            ]}
            className="mb-6"
          />
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Aseptic Laboratory
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-300">
            State-of-the-art sterile processing and microbiological facility
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <Image
              src="https://www.charusat.ac.in/rpcp/images/labs/lab1.png"
              alt="Aseptic Laboratory"
              fill
              className="object-contain"
            />
          </div>
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-[#202A44]">
              Aseptic Laboratory
            </h2>
            <div className="w-24 h-1 bg-[#FBCB0A] mt-3 mb-6"></div>

            <p className="text-gray-700 text-lg leading-relaxed">
              RPCP has its own kind state of the art Aseptic laboratory. It is
              designed as per industrial requirements. It includes separate area
              for Sterility testing and microbiological work. Aseptic laboratory
              is designed to give best practical knowledge to student how to
              carry out work in aseptic laboratory. It is equipped with
              different instrumental facilities like AHU (Air Handling Unit)
              system for sterile air supply, Centralized auto clave system,
              Laminar Air Flow, BOD incubator, Hot Air Oven, Colony Counter and
              Zone Reader.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
