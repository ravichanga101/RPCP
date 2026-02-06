"use client";

import Image from "next/image";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

const CheckIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

export default function DepartmentalLab() {
  const features = [
    "All laboratories have dedicated storage and working space to accommodate 25 students at a time.",
    "Separate locker facility is also available for every student.",
    "All laboratories have basic facilities like gas and water supply, exhaust system, hot air oven, magnetic stirrer, microscopes, water bath etc.",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#202A44] text-white pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Facilities", href: "/facilities/labs" },
              { label: "Departmental Laboratory" },
            ]}
            className="mb-6"
          />
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Departmental Laboratory
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-300">
            Comprehensive laboratory facilities across all pharmaceutical
            departments
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <Image
              src="https://www.charusat.ac.in/rpcp/images/labs/lab4.png"
              alt="Departmental Laboratory"
              fill
              className="object-contain"
            />
          </div>
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-[#202A44]">
              Departmental Laboratory
            </h2>
            <div className="w-24 h-1 bg-[#FBCB0A] mt-3 mb-6"></div>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Total 11 laboratories are spread over four major departments' viz.
              Pharmaceutics, Pharmaceutical Chemistry and Analysis, Pharmacology
              and Pharmacognosy. All laboratories are spacious with good light
              and air ventilation availability.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-[#FBCB0A] flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-gray-800">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
