"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ImageCarousel from "@/components/shared/ImageCarousel";
import {
  GraduationCap,
  BookOpen,
  Globe,
  Users,
  Award,
  Building2,
  Microscope,
  Phone,
  Mail,
  MapPin,
  Target, // Using Target for Mission
  Eye, // Using Eye for Vision
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// NOTE: For the new font (Inter) to work, you'll need to add it to your `layout.js` file.
// See the instructions at the bottom of this response.

export default function HomePage() {
  const rotatingTaglines = [
    "Project Based Learning",
    "Research Excellence",
    "Industry Connect",
    "Holistic Development",
  ];
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % rotatingTaglines.length);
    }, 2500);
    return () => clearInterval(intervalId);
  }, []);

  const carouselImages = [
    "https://www.charusat.ac.in/rpcp/images/RPCP_Slider_1_c.webp",
    "https://www.charusat.ac.in/rpcp/images/RPCP_Slider_2_c.webp",
    "https://www.charusat.ac.in/rpcp/images/RPCP_Slider_3_c.webp",
  ];

  const achievements = [
    { number: "08", label: "Patents Filed" },
    { number: "22", label: "Research Labs" },
    { number: "97%", label: "Placement Rate" },
    { number: "28+", label: "Entrepreneurs" },
    { number: "07", label: "Industry MoUs" },
    { number: "53", label: "Books/Chapters" },
    { number: "451", label: "Publications" },
    { number: "50+", label: "Research Grants" },
  ];

  const programs = [
    {
      title: "B.Pharm",
      duration: "4 Years",
      intake: "100 Seats",
      fees: "₹1,55,000/year",
      description:
        "Comprehensive pharmacy education with hands-on training and industry exposure.",
      icon: <GraduationCap />,
    },
    {
      title: "M.Pharm",
      duration: "2 Years",
      intake: "15 Seats each",
      fees: "₹2,00,000/year",
      description:
        "Specialized programs in Pharmaceutical Technology, Pharmacology, and Quality Assurance.",
      icon: <Microscope />,
    },
    {
      title: "M.Pharm (Pharmaceutical Chemistry)",
      duration: "2 Years",
      intake: "15 Seats",
      fees: "₹2,00,000/year",
      description:
        "Master's program specializing in Pharmaceutical Chemistry with advanced lab work and research.",
      icon: <Microscope />,
    },
    {
      title: "Ph.D.",
      duration: "3-5 Years",
      intake: "Research Based",
      fees: "As per University norms",
      description:
        "Advanced research programs in pharmaceutical sciences and drug development.",
      icon: <BookOpen />,
    },
  ];

  return (
    <div className="bg-white text-slate-800">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative text-white h-[80vh] min-h-[500px] lg:h-screen lg:min-h-[700px] flex items-center"
      >
        {/* Light Overlay for better text readability while keeping images bright */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/20 to-transparent z-10" />
        <div className="absolute inset-0 z-0">
          <ImageCarousel images={carouselImages} autoPlayInterval={4000} />
        </div>

        <div className="relative z-20 container mx-auto px-4 w-full">
          <div className="max-w-3xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start space-x-2 text-amber-300 mb-4"
            >
              <GraduationCap className="h-5 w-5" />
              <span className="text-sm font-semibold tracking-wider uppercase">
                Welcome to RPCP
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}
            >
              Ramanbhai Patel College of Pharmacy
            </motion.h1>

            <div className="h-8 md:h-9 text-lg md:text-xl lg:text-2xl font-light text-slate-200 mb-6">
              <AnimatePresence mode="wait">
                <motion.span
                  key={taglineIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  {rotatingTaglines[taglineIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0"
            >
              A prescription for a promising future in the Pharma Industry
              through hands-on training and state-of-the-art infrastructure.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Welcome To RPCP Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <h2 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2">
              About Our College
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Welcome To <span className="text-slate-700">RPCP</span>
            </h3>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-12 rounded-full"></div>

            <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-3 text-left">
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Ramanbhai Patel College of Pharmacy (RPCP), a constituent
                  Institute of CHARUSAT, was established in 2004 to promote
                  excellence in pharmacy education and prepare young talent to
                  meet the challenges of the modern pharmaceutical industry and
                  clinical practice.
                </p>
                <div className="mt-6 p-6 bg-white rounded-lg border-l-4 border-amber-500 shadow-sm">
                  <p className="text-slate-700 italic">
                    "The Institute has the patronage of Zydus Lifesciences Ltd.
                    to commemorate its founder, the visionary entrepreneur and
                    philanthropist, Late Shri Ramanbhai Patel."
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-200 text-slate-700 rounded-lg p-3 flex-shrink-0">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">
                      Established 2004
                    </h4>
                    <p className="text-slate-600 text-sm">
                      A constituent Institute of CHARUSAT.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-200 text-slate-700 rounded-lg p-3 flex-shrink-0">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">
                      Industry Patronage
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Supported by Zydus Lifesciences Ltd.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recognition badges right after Welcome to RPCP */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
            >
              <motion.img
                src="https://www.charusat.ac.in/rpcp/images/nirf.png"
                alt="NIRF Ranking - AIR 90"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-24 md:h-28 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
              />
              <motion.img
                src="https://www.charusat.ac.in/rpcp/images/gsirf.png"
                alt="GSIRF Rating - Government of Gujarat"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="h-24 md:h-28 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="bg-slate-800 text-white rounded-2xl p-8 lg:p-12 h-full flex flex-col items-start">
                <div className="bg-amber-500 text-slate-900 rounded-lg p-3 mb-6">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  To become a premier pharma institute by creating world-class
                  pharmacists and researchers.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 lg:p-12 h-full flex flex-col items-start">
                <div className="bg-slate-200 text-slate-700 rounded-lg p-3 mb-6">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To strive for excellence in pharmaceutical sciences through
                  quality education and research.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-20"
          >
            <h2 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">
              Our Core Strengths
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Pillars of <span className="text-amber-600">Excellence</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence is built on three fundamental pillars
              that ensure comprehensive pharmaceutical education and holistic
              student development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <GraduationCap className="h-12 w-12" />,
                title: "Project Based Learning",
                color: "from-blue-500 to-blue-600",
                borderColor: "border-blue-200",
                hoverColor: "hover:border-blue-400",
              },
              {
                icon: <Microscope className="h-12 w-12" />,
                title: "State-of-the-Art Facilities",
                color: "from-green-500 to-green-600",
                borderColor: "border-green-200",
                hoverColor: "hover:border-green-400",
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Holistic Student Development",
                color: "from-purple-500 to-purple-600",
                borderColor: "border-purple-200",
                hoverColor: "hover:border-purple-400",
              },
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="group"
              >
                <div
                  className={`relative bg-white p-8 lg:p-10 rounded-2xl border-2 ${pillar.borderColor} ${pillar.hoverColor} hover:shadow-2xl transition-all duration-500 h-full overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${pillar.color} rounded-full transform translate-x-16 -translate-y-16`}
                    ></div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`relative z-10 w-24 h-24 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mx-auto mb-8 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  >
                    {pillar.icon}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2">
              Our Offerings
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Academic Programs
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive programs designed to prepare students for successful
              careers in the pharmaceutical industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.slice(0, 2).map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex"
              >
                <Card className="h-full w-full flex flex-col bg-slate-50 border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8 flex flex-col flex-grow">
                    <div className="bg-slate-800 text-amber-400 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                      <div className="h-7 w-7">{program.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {program.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                      {program.description}
                    </p>
                    <div className="space-y-3 pt-6 border-t border-slate-200">
                      <div className="flex justify-between text-sm text-slate-600">
                        <span className="font-medium text-slate-700">
                          Duration:
                        </span>
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm text-slate-600">
                        <span className="font-medium text-slate-700">
                          Intake:
                        </span>
                        <span>{program.intake}</span>
                      </div>
                      <div className="flex justify-between text-sm text-slate-600">
                        <span className="font-medium text-slate-700">
                          Fees:
                        </span>
                        <span>{program.fees}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/programs"
              className="text-amber-600 hover:text-amber-700 font-semibold underline underline-offset-4"
            >
              Click to view all programs
            </Link>
          </div>
        </div>
      </section>

      {/* RPCP SCALARS Section */}
      <section className="py-16 text-white relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/cspit_images/scalars.png')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold mb-4 text-white"
            >
              RPCP SCALARS
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "80px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="h-0.5 bg-white mx-auto rounded-full"
            ></motion.div>
          </motion.div>

          {/* Statistics Grid - More Compact Layout */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-4 gap-4 mb-8">
              {achievements.slice(0, 4).map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className="text-center group"
                >
                  <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-black/30 hover:border-white/20 transition-all duration-300">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 12,
                        delay: index * 0.1 + 0.2,
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="text-3xl lg:text-4xl font-bold text-amber-400 mb-1 font-mono">
                        {achievement.number}
                      </div>
                      <div className="text-white text-xs lg:text-sm font-medium uppercase tracking-wide">
                        {achievement.label}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-4">
              {achievements.slice(4, 8).map((achievement, index) => (
                <motion.div
                  key={index + 4}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: (index + 4) * 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className="text-center group"
                >
                  <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-black/30 hover:border-white/20 transition-all duration-300">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 12,
                        delay: (index + 4) * 0.1 + 0.2,
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="text-3xl lg:text-4xl font-bold text-amber-400 mb-1 font-mono">
                        {achievement.number}
                      </div>
                      <div className="text-white text-xs lg:text-sm font-medium uppercase tracking-wide">
                        {achievement.label}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
