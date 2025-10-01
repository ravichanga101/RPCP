"use client";

import { useState } from "react";
import Image from "next/image";

// Data remains the same
const LABS = [
  {
    id: "aseptic",
    title: "Aseptic Laboratory",
    description:
      "RPCP has its own kind state of the art Aseptic laboratory. It is designed as per industrial requirements. It includes separate area for Sterility testing and microbiological work. Aseptic laboratory is designed to give best practical knowledge to student how to carry out work in aseptic laboratory. It is equipped with different instrumental facilities like AHU (Air Handling Unit) system for sterile air supply, Centralized auto clave system, Laminar Air Flow, BOD incubator, Hot Air Oven, Colony Counter and Zone Reader.",
    bullets: [],
    image: "https://www.charusat.ac.in/rpcp/images/labs/lab1.png",
  },
  {
    id: "machine",
    title: "Pharmaceutical Machine Laboratory",
    description:
      "Designed to provide industrial skills to students in pharmaceutical formulation area. Equipped with Pharmaceutical production machines like Rotary tablet machine, Manual capsule filling machine, Cap and bottle sealing machine, Tablet coating machine, High speed homogenizer, Ampoule filling machine, Ultra centrifuge and ball mill. It is also equipped with different evaluation machines like Stability chamber, Dissolution test apparatus, Disintegration test apparatus, Friability testing apparatus, Sieve shaker, Brookfield viscometer, Spray Dryer, Extruder Spheronizer and Probe Sonicator.",
    bullets: [],
    image: "https://www.charusat.ac.in/rpcp/images/labs/lab2.png",
  },
  {
    id: "sal",
    title: "Sophisticated Analytical Instrumental Laboratory (RPCP-SAL)",
    description:
      "Designed to carry out qualitative and quantitative analytical work for raw material and finished pharmaceutical dosage forms.",
    bullets: [
      "Designed to provide good practical analytical knowledge to students as a part of their academic curriculum.",
      "Equipped with analytical instruments like, UV spectrophotometer, HPLC-PDA detector, HPLC with ELSD detector, Spectrofluorometer, HPTLC System, Upright Microscope with Camera and Image Analysis Software, Digital analytical balance, Gel Electrophoresis, BIOPAC Data Acquisition System , Mili-Q water purifier system.",
    ],
    image: "https://www.charusat.ac.in/rpcp/images/labs/lab3.png",
  },
  {
    id: "departmental",
    title: "Departmental Laboratory",
    description:
      "Total 11 laboratories are spread over four major departments’ viz. Pharmaceutics, Pharmaceutical Chemistry and Analysis, Pharmacology and Pharmacognosy. All laboratories are spacious with good light and air ventilation availability.",
    bullets: [
      "All laboratories have dedicated storage and working space to accommodate 25 students at a time.",
      "Separate locker facility is also available for every student.",
      "All laboratories have basic facilities like gas and water supply, exhaust system, hot air oven, magnetic stirrer, microscopes, water bath etc.",
    ],
    image: "https://www.charusat.ac.in/rpcp/images/labs/lab4.png",
  },
  {
    id: "classrooms",
    title: "Class Rooms",
    description:
      "Class rooms are Air conditioned, well furnished and equipped with LCD projector and Computer facility which enables interactive and ICT based teaching-learning process with good and ambient learning environment.",
    bullets: [],
    image: "https://www.charusat.ac.in/rpcp/images/labs/lab5.png",
  },
  {
    id: "computer",
    title: "Computer Laboratory",
    description:
      "Designed specially to provide students’ basic theoretical and practical knowledge of communication/ language as a part of their academic curriculum.",
    bullets: [
      "Provided with separate computers with stereophonic headphones and mic to facilitate conversations between staff members and students.",
      "Provided with projector and LCD for seminar or presentation during lecture and practical session.",
      "Also serves as a seminar room and computer laboratory.",
    ],
    image: "https://www.charusat.ac.in/rpcp/images/labs/lab6.png",
  },
  {
    id: "animal",
    title: "Animal House",
    description:
      "Separate Animal house is built as per the norms of Committee for the Purpose of Control and Supervision of Experiments on Animals (CPCSEA) inside CHARUSAT campus behind RPCP building. It is housed with different animals viz. Rat, mice, Guinea Pig and rabbits. Animals are maintained as per the norms of CPCSEA and IAEC (Institutional Animal Ethics Committee).",
    bullets: [],
    image: "https://www.charusat.ac.in/rpcp/images/labs/lab7.png",
  },
  {
    id: "herbal",
    title: "Herbal Garden (Medicinal Plants Garden)",
    description:
      "Separate Herbal Garden (Medicinal plants Garden) is available behind RPCP building. It is designed to provide knowledge about importance of Herbs and Plants as a medicine in individual’s life. Herbal Garden of RPCP is spread over 2000 sq meter area of land and has collection of around 160 aromatic and medicinal plants. Fresh plant parts are utilized during practical session in Pharmacology Laboratory.",
    bullets: [],
    image: "https://www.charusat.ac.in/rpcp/images/labs/lab8.png",
  },
];

// Custom Icon for Bullet Points
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

export default function FacilitiesLabs() {
  const [activeId, setActiveId] = useState(LABS[0].id);
  const [mobileExpandedId, setMobileExpandedId] = useState(LABS[0].id);
  const activeLab = LABS.find((lab) => lab.id === activeId) ?? LABS[0];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#202A44] text-white pt-24 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            State-of-the-Art Facilities
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            Explore the world-class laboratories, learning spaces, and
            infrastructure at RPCP, designed to foster innovation and
            excellence.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-4">
            <nav className="space-y-2">
              {LABS.map((lab) => (
                <button
                  key={lab.id}
                  onClick={() => setActiveId(lab.id)}
                  className={`w-full text-left font-semibold p-4 rounded-lg transition-all duration-300 ease-in-out flex items-center group
                    ${
                      activeId === lab.id
                        ? "bg-yellow-50 text-[#202A44]"
                        : "text-gray-600 hover:bg-yellow-50/60 hover:text-[#202A44]"
                    }`}
                >
                  <span
                    className={`w-1.5 h-8 rounded-full mr-4 transition-colors duration-300 ${
                      activeId === lab.id
                        ? "bg-[#FBCB0A]"
                        : "bg-transparent group-hover:bg-[#FBCB0A]/50"
                    }`}
                  ></span>
                  {lab.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content Display */}
          <div className="lg:col-span-8">
            <div
              key={activeLab.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={activeLab.image}
                  alt={activeLab.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#202A44]">
                  {activeLab.title}
                </h2>
                <div className="w-24 h-1 bg-[#FBCB0A] mt-3 mb-6"></div>

                <p className="text-gray-700 mt-4 leading-relaxed">
                  {activeLab.description}
                </p>

                {activeLab.bullets.length > 0 && (
                  <ul className="space-y-4 mt-8">
                    {activeLab.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start">
                        <CheckIcon className="h-6 w-6 text-[#FBCB0A] flex-shrink-0 mt-0.5" />
                        <span className="ml-3 text-gray-800">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Stacked Cards */}
        <div className="lg:hidden space-y-4">
          {LABS.map((lab) => {
            const isActive = mobileExpandedId === lab.id;
            return (
              <div
                key={lab.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileExpandedId(isActive ? null : lab.id)}
                  className={`w-full text-left font-semibold p-4 transition-all duration-300 ease-in-out flex items-center justify-between
                    ${
                      isActive
                        ? "bg-yellow-50 text-[#202A44]"
                        : "text-gray-600 hover:bg-yellow-50/60 hover:text-[#202A44]"
                    }`}
                >
                  <div className="flex items-center">
                    <span
                      className={`w-1.5 h-8 rounded-full mr-4 transition-colors duration-300 ${
                        isActive ? "bg-[#FBCB0A]" : "bg-gray-300"
                      }`}
                    ></span>
                    {lab.title}
                  </div>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isActive ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Mobile Content */}
                {isActive && (
                  <div className="border-t border-gray-100 animate-fade-in">
                    <div className="relative h-64 w-full">
                      <Image
                        src={lab.image}
                        alt={lab.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <div className="w-24 h-1 bg-[#FBCB0A] mb-6"></div>

                      <p className="text-gray-700 leading-relaxed">
                        {lab.description}
                      </p>

                      {lab.bullets.length > 0 && (
                        <ul className="space-y-4 mt-6">
                          {lab.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start">
                              <CheckIcon className="h-6 w-6 text-[#FBCB0A] flex-shrink-0 mt-0.5" />
                              <span className="ml-3 text-gray-800">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// --- Optional: Add this to your globals.css file for the animation ---
/*
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}
*/
