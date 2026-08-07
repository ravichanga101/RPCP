"use client";

import Image from "next/image";
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

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Explore the library through the images below.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm">
              <div className="relative h-72 w-full bg-white sm:h-80 md:h-96">
                <Image
                  src="/images/library1.webp"
                  alt="Library view 1"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm">
              <div className="relative h-72 w-full bg-white sm:h-80 md:h-96">
                <Image
                  src="/images/library2.webp"
                  alt="Library view 2"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm">
              <div className="relative h-72 w-full bg-white sm:h-80 md:h-96">
                <Image
                  src="/images/library3.webp"
                  alt="Library view 3"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm">
              <div className="relative h-72 w-full bg-white sm:h-80 md:h-96">
                <Image
                  src="/images/library4.webp"
                  alt="Library view 4"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm">
              <div className="relative h-72 w-full bg-white sm:h-80 md:h-96">
                <Image
                  src="/images/library5.webp"
                  alt="Library view 5"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm">
              <div className="relative h-72 w-full bg-white sm:h-80 md:h-96">
                <Image
                  src="/images/library6.webp"
                  alt="Library view 6"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm">
              <div className="relative h-72 w-full bg-white sm:h-80 md:h-96">
                <Image
                  src="/images/library7.webp"
                  alt="Library view 7"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm">
              <div className="relative h-72 w-full bg-white sm:h-80 md:h-96">
                <Image
                  src="/images/library8.webp"
                  alt="Library view 8"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
