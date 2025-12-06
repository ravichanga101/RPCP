"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FlaskConical, Microscope, Shield, Users } from "lucide-react";

export default function CellCultureLabPage() {
  const features = [
    {
      icon: <FlaskConical className="h-8 w-8" />,
      title: "Advanced Equipment",
      description:
        "State-of-the-art cell culture equipment including CO2 incubators, biosafety cabinets, and automated cell counters.",
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Research Capabilities",
      description:
        "Facilities for cell line maintenance, cell-based assays, and advanced research in cellular biology.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Sterile Environment",
      description:
        "Maintained under strict sterile conditions with laminar flow hoods and proper biosafety protocols.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Training & Support",
      description:
        "Comprehensive training for students and researchers in cell culture techniques and protocols.",
    },
  ];

  

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#202A44] text-white pt-24 pb-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            Cell Culture Laboratory
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-3xl mx-auto text-lg text-gray-300"
          >
            Advanced cell culture research facility equipped with cutting-edge
            technology for pharmaceutical and biomedical research.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Overview Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-64 md:h-full min-h-[300px]">
                <Image
                  src="/new_data/RPCP LAB FACILITY/Cell_culture_lab.jpg"
                  alt="Cell Culture Laboratory"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-[#202A44] mb-4">
                  Cell Culture Laboratory


                </h2>
                <div className="w-24 h-1 bg-[#FBCB0A] mb-6"></div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The RPCP Cell Culture Laboratory Facility is a dedicated, state-of-the-art research environment designed to support high-quality in-vitro experimentation across pharmaceutical, biomedical, and toxicological sciences. The facility offers a controlled, contamination-free workspace optimized for mammalian cell culture, enabling precise, reproducible cellular studies essential for modern drug discovery and mechanistic research.



                </p>
                <p className="text-gray-700 leading-relaxed">
                  The Cell culture lab is equipped with CO₂ incubators, Biosafety cabinet, Inverted microscope, ELISA plate reader, Automated cell counter, Cooling centrifuge, Deep fridge (-80 ̊ C). As a specialized hub for in-vitro research, the RPCP Cell Culture Laboratory strengthens the institute’s mission to foster ethical, cutting-edge, and high-impact research that advances pharmaceutical and biomedical sciences.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        

       

        {/* Applications Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#202A44] to-[#2d3a5c] rounded-xl shadow-lg p-8 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Research Applications</h2>
            <div className="w-24 h-1 bg-[#FBCB0A] mb-8"></div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#FBCB0A]">
                  Drug Development
                </h3>
                <p className="text-gray-300">
                  Screening and evaluation of new pharmaceutical compounds using
                  various cell-based assays.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#FBCB0A]">
                  Toxicology Studies
                </h3>
                <p className="text-gray-300">
                  Assessment of drug safety and cytotoxicity using established
                  cell lines.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#FBCB0A]">
                  Academic Research
                </h3>
                <p className="text-gray-300">
                  Supporting student projects and faculty research in cellular
                  and molecular biology.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
