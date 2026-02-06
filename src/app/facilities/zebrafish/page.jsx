"use client";

import Image from "next/image";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export default function Zebrafish() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#202A44] text-white pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Facilities", href: "/facilities/labs" },
              { label: "Zebrafish Toxicity Studies" },
            ]}
            className="mb-6"
          />
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Center for Zebrafish Toxicity Studies
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-300">
            Advanced alternative models for toxicity research
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <Image
              src="/new_data/RPCP LAB FACILITY/Center_Zebrafish_Toxicity_Studies.jpg"
              alt="Center for Zebrafish Toxicity Studies"
              fill
              className="object-contain"
            />
          </div>
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-[#202A44]">
              Center for Zebrafish Toxicity Studies
            </h2>
            <div className="w-24 h-1 bg-[#FBCB0A] mt-3 mb-6"></div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Zebrafish have emerged as a robust and scientifically validated
              alternative to traditional rodent models in toxicity research.
              Their high sensitivity to chemical, environmental (including
              pesticide), and nanoparticle-induced toxicities enables early and
              reliable detection of adverse effects, thereby substantially
              reducing study timelines. With approximately 75% genetic homology
              to humans, zebrafish provide strong translational relevance for
              predicting human toxicity outcomes. Their rapid embryonic
              development, external fertilization, and transparent embryos
              further allow real-time visualization of organogenesis and precise
              identification of developmental or physiological abnormalities.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mt-6">
              At Ramanbhai Patel College of Pharmacy, extensive expertise has
              been established in conducting diverse toxicity assessments using
              zebrafish models. Key proficiencies include neurotoxicity,
              genotoxicity, developmental toxicity, cardiotoxicity, as well as
              molecular mechanism-focused studies involving apoptosis, oxidative
              stress, and related pathways. These capabilities position the
              institute as a leading centre for comprehensive, mechanism-driven
              toxicity evaluation leveraging advanced zebrafish research
              platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
