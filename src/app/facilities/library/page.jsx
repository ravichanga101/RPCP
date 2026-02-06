"use client";

import { Breadcrumb } from "@/components/shared/Breadcrumb";

export default function Library() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#202A44] text-white pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Facilities", href: "/facilities/labs" },
              { label: "Library" },
            ]}
            className="mb-6"
          />
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Library
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-300">
            Your gateway to pharmaceutical knowledge and research
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-[#202A44]">Library</h2>
          <div className="w-24 h-1 bg-[#FBCB0A] mt-3 mb-6"></div>

          <p className="text-gray-700 text-lg leading-relaxed">
            Information about the library will be available soon.
          </p>
        </div>
      </div>
    </div>
  );
}
