// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import ImageCarousel from "@/components/shared/ImageCarousel";
// import {
//   GraduationCap,
//   BookOpen,
//   Globe,
//   Users,
//   Award,
//   Building2,
//   Microscope,
//   Leaf,
//   TestTube,
//   Briefcase,
//   Phone,
//   Mail,
//   MapPin,
// } from "lucide-react";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function HomePage() {
//   // Rotating tagline under the hero heading
//   const rotatingTaglines = [
//     "Project Based Learning",
//     "Research Excellence",
//     "Industry Connect",
//     "Holistic Development",
//   ];
//   const [taglineIndex, setTaglineIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTaglineIndex((prev) => (prev + 1) % rotatingTaglines.length);
//     }, 2500);
//     return () => clearInterval(intervalId);
//   }, []);
//   // Carousel images
//   const carouselImages = [
//     "https://www.charusat.ac.in/rpcp/images/RPCP_Slider_1_c.webp",
//     "https://www.charusat.ac.in/rpcp/images/RPCP_Slider_2_c.webp",
//     "https://www.charusat.ac.in/rpcp/images/RPCP_Slider_3_c.webp"
//   ];

//   // Features section removed as per request

//   const achievements = [
//     { number: "08", label: "Patents" },
//     { number: "22", label: "Research Labs" },
//     { number: "97%", label: "Job Placements" },
//     { number: "28", label: "Entrepreneurs" },
//     { number: "07", label: "Industry MoUs" },
//     { number: "53", label: "Books/Chapters" },
//     { number: "451", label: "Publications" },
//     { number: "50", label: "Research Grants" },
//   ];

//   const programs = [
//     {
//       title: "B.Pharm",
//       duration: "4 Years",
//       intake: "100 Seats",
//       fees: "₹1,55,000/year",
//       description:
//         "Comprehensive pharmacy education with hands-on training and industry exposure",
//     },
//     {
//       title: "M.Pharm",
//       duration: "2 Years",
//       intake: "15 Seats each",
//       fees: "₹2,00,000/year",
//       description:
//         "Specialized programs in Pharmaceutical Technology, Pharmacology, Quality Assurance, and more",
//     },
//     {
//       title: "Ph.D.",
//       duration: "3-5 Years",
//       intake: "Research Based",
//       fees: "As per University norms",
//       description:
//         "Advanced research programs in pharmaceutical sciences and drug development",
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section id="hero" className="relative text-white overflow-hidden h-[70vh] min-h-[400px] sm:h-[80vh] sm:min-h-[500px] lg:h-screen lg:min-h-[600px]">
//         {/* Image Carousel Background */}
//         <div className="absolute inset-0 z-0">
//           <ImageCarousel 
//             images={carouselImages}
//             autoPlayInterval={3000}
//           />
//         </div>

//         <div className="relative z-20 container mx-auto px-4 py-8 sm:py-12 lg:py-16 xl:py-20 h-full flex items-center">
//           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//             <div className="text-center lg:text-left">
//               <motion.div
//                 initial={{ opacity: 0, y: -12 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.1 }}
//                 className="flex items-center justify-center lg:justify-start space-x-2 text-yellow-400 mb-2 sm:mb-3"
//               >
//                 <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
//                 <span className="text-xs sm:text-sm font-medium">Welcome to RPCP</span>
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, y: 14 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//                 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-3 sm:mb-4"
//               >
//                 <span className="block">A Right Course to Take</span>
//                 <motion.span
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.35 }}
//                   className="block text-yellow-400 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
//                 >
//                   Ramanbhai Patel College of Pharmacy
//                 </motion.span>
//               </motion.h1>

//               {/* Rotating, animated sub-tagline */}
//               <div className="h-6 sm:h-7 md:h-8 lg:h-9 mb-2 sm:mb-3">
//                 <AnimatePresence mode="wait">
//                   <motion.span
//                     key={taglineIndex}
//                     initial={{ opacity: 0, y: 6 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -6 }}
//                     transition={{ duration: 0.4 }}
//                     className="inline-block text-yellow-300/90 text-xs sm:text-sm md:text-base tracking-wide"
//                   >
//                     {rotatingTaglines[taglineIndex]}
//                   </motion.span>
//                 </AnimatePresence>
//               </div>

//               <motion.p
//                 initial={{ opacity: 0, y: 12 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//                 className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 mb-4 sm:mb-6 leading-relaxed px-2 lg:px-0"
//               >
//                 Prescription for Promising Future in Pharma Industry. Hands on
//                 Training Through State of Art Infrastructure.
//               </motion.p>

//               {/* Hero buttons removed as requested */}
//             </div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="relative"
//             >
//               {/* Quick Stats section removed as requested */}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Welcome To RPCP Section */}
//       <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             {/* Header with Icon */}
//             <div className="flex items-center justify-center space-x-3 text-blue-600 mb-6">
//               <GraduationCap className="h-8 w-8" />
//               <span className="text-sm font-medium uppercase tracking-wider">About Our College</span>
//             </div>
            
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//               Welcome To <span className="text-blue-600">RPCP</span>
//             </h2>
            
//             {/* Decorative Line */}
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-12 rounded-full"></div>
            
//             <div className="max-w-5xl mx-auto">
//               {/* Main Content Card */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 viewport={{ once: true }}
//                 className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-12 border border-gray-100"
//               >
//                 <div className="grid lg:grid-cols-3 gap-8 items-center">
//                   {/* Left Side - Key Info */}
//                   <div className="lg:col-span-1 space-y-6">
//                     <div className="text-center lg:text-left">
//                       <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto lg:mx-0 mb-4">
//                         <Building2 className="h-8 w-8 text-blue-600" />
//                       </div>
//                       <h3 className="text-xl font-bold text-gray-900 mb-2">Established 2004</h3>
//                       <p className="text-gray-600 text-sm">Constituent Institute of CHARUSAT</p>
//                     </div>
                    
//                     <div className="text-center lg:text-left">
//                       <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto lg:mx-0 mb-4">
//                         <Award className="h-8 w-8 text-green-600" />
//                       </div>
//                       <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Patronage</h3>
//                       <p className="text-gray-600 text-sm">Zydus Cadila Health Care Ltd</p>
//                     </div>
//                   </div>
                  
//                   {/* Center - Main Description */}
//                   <div className="lg:col-span-2">
//                     <p className="text-lg text-gray-700 leading-relaxed">
//                       Ramanbhai Patel College of Pharmacy (RPCP) is a constituent Institute of Charotar University of Science and Technology (CHARUSAT). RPCP was established in the year 2004 with a view to promote excellence in Pharmacy Education and to prepare young talent to meet the challenges of Industrial Pharmacy and Pharmacy Practice.
//                     </p>
                    
//                     <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
//                       <p className="text-gray-700 italic">
//                         "The Institute has the patronage of Zydus Cadila Health Care Ltd; patronized by Shri Pankaj Patel, CMD, Zydus Cadila Healthcare Ltd to commemorate his father, Late Shri Ramanbhai Patel. A Visionary Entrepreneur and a Philanthropist."
//                       </p>
//                     </div>
                    
//                     <p className="text-lg text-gray-700 leading-relaxed mt-6">
//                       M.Pharm Programs at RPCP are executed under the auspices of T. P. Patel Centre for PG studies in Pharmacy. The centre in patronized by Shri Jagdishbhai Patel and Shri H. T. Patel and their families to monumentalize their father, Late Shri T. P. Patel.
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
              
//               {/* Awards and Recognition Section */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//                 viewport={{ once: true }}
//                 className="text-center"
//               >
//                 <h3 className="text-2xl font-bold text-gray-900 mb-8">Recognition & Achievements</h3>
                
//                 <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
//                   <motion.div
//                     initial={{ opacity: 0, x: -30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6, delay: 0.6 }}
//                     viewport={{ once: true }}
//                     className="group"
//                   >
//                     <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
//                       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
//                       <img
//                         src="https://www.charusat.ac.in/rpcp/images/nirf.png"
//                         alt="NIRF Ranking - AIR 90"
//                         className="h-28 w-auto mx-auto object-contain group-hover:scale-105 transition-transform duration-300"
//                       />
//                       <p className="text-sm text-gray-600 mt-4 font-medium">NIRF Ranking</p>
//                     </div>
//                   </motion.div>
                  
//                   <motion.div
//                     initial={{ opacity: 0, x: 30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6, delay: 0.8 }}
//                     viewport={{ once: true }}
//                     className="group"
//                   >
//                     <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
//                       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-emerald-600"></div>
//                       <img
//                         src="https://www.charusat.ac.in/rpcp/images/gsirf.png"
//                         alt="GSIRF Rating - Government of Gujarat"
//                         className="h-28 w-auto mx-auto object-contain group-hover:scale-105 transition-transform duration-300"
//                       />
//                       <p className="text-sm text-gray-600 mt-4 font-medium">GSIRF Rating</p>
//                     </div>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Vision & Mission Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             {/* Section Header */}
//             <div className="flex items-center justify-center space-x-3 text-blue-600 mb-6">
//               <Award className="h-8 w-8" />
//               <span className="text-sm font-medium uppercase tracking-wider">Our Foundation</span>
//             </div>
            
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//               Vision & <span className="text-blue-600">Mission</span>
//             </h2>
            
//             {/* Decorative Line */}
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-12 rounded-full"></div>
//           </motion.div>

//           <div className="max-w-6xl mx-auto">
//             <div className="grid lg:grid-cols-2 gap-12">
//               {/* Vision Card */}
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 viewport={{ once: true }}
//                 className="group"
//               >
//                 <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-10 h-full border border-blue-100 hover:border-blue-200 transition-all duration-300 relative overflow-hidden">
//                   {/* Decorative Background Element */}
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full -translate-y-16 translate-x-16"></div>
//                   <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-200/20 rounded-full translate-y-12 -translate-x-12"></div>
                  
//                   <div className="relative z-10">
//                     {/* Vision Icon */}
//                     <div className="bg-blue-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                       <Globe className="h-8 w-8 text-white" />
//                     </div>
                    
//                     {/* Vision Title */}
//                     <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
//                       Our <span className="text-blue-600">Vision</span>
//                     </h3>
                    
//                     {/* Vision Statement */}
//                     <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50">
//                       <p className="text-lg text-gray-700 leading-relaxed font-medium">
//                         To Become a Premier Pharma Institute by Creating World Class Pharmacists and Researchers.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Mission Card */}
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 viewport={{ once: true }}
//                 className="group"
//               >
//                 <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 lg:p-10 h-full border border-green-100 hover:border-green-200 transition-all duration-300 relative overflow-hidden">
//                   {/* Decorative Background Element */}
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/20 rounded-full -translate-y-16 translate-x-16"></div>
//                   <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-200/20 rounded-full translate-y-12 -translate-x-12"></div>
                  
//                   <div className="relative z-10">
//                     {/* Mission Icon */}
//                     <div className="bg-green-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                       <BookOpen className="h-8 w-8 text-white" />
//                     </div>
                    
//                     {/* Mission Title */}
//                     <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
//                       Our <span className="text-green-600">Mission</span>
//                     </h3>
                    
//                     {/* Mission Statement */}
//                     <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50">
//                       <p className="text-lg text-gray-700 leading-relaxed font-medium">
//                         To Strive for the Excellence in Pharmaceutical Sciences through Quality Education and Research.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Bottom CTA Section removed as requested */}
//           </div>
//         </div>
//       </section>

//       {/* Pillars Section under CTA */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Project Based Learning */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <div className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//                 <div className="absolute -top-10 left-1/2 -translate-x-1/2">
//                   <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-amber-400 ring-8 ring-amber-100 flex items-center justify-center shadow-xl">
//                     <GraduationCap aria-hidden="true" className="h-10 w-10 text-gray-900" />
//                   </div>
//                 </div>
//                 <div className="pt-20 pb-10 px-8 text-center">
//                   <div className="mx-auto mb-5 h-1 w-14 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
//                   <h3 className="text-lg md:text-xl font-semibold text-gray-900">
//                     Project Based Learning
//                   </h3>
//                 </div>
//               </div>
//             </motion.div>

//             {/* State of the Art Research Facilities */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               viewport={{ once: true }}
//             >
//               <div className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//                 <div className="absolute -top-10 left-1/2 -translate-x-1/2">
//                   <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-amber-400 ring-8 ring-amber-100 flex items-center justify-center shadow-xl">
//                     <Microscope aria-hidden="true" className="h-10 w-10 text-gray-900" />
//                   </div>
//                 </div>
//                 <div className="pt-20 pb-10 px-8 text-center">
//                   <div className="mx-auto mb-5 h-1 w-14 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
//                   <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-snug">
//                     State of the Art Research
//                     <span className="block">Facilities</span>
//                   </h3>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Holistic Development */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <div className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//                 <div className="absolute -top-10 left-1/2 -translate-x-1/2">
//                   <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-amber-400 ring-8 ring-amber-100 flex items-center justify-center shadow-xl">
//                     <Users aria-hidden="true" className="h-10 w-10 text-gray-900" />
//                   </div>
//                 </div>
//                 <div className="pt-20 pb-10 px-8 text-center">
//                   <div className="mx-auto mb-5 h-1 w-14 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
//                   <h3 className="text-lg md:text-xl font-semibold text-gray-900">
//                     Holistic Development
//                   </h3>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section removed as requested */}

//       {/* About Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex items-center space-x-2 text-blue-600 mb-4">
//                 <GraduationCap className="h-6 w-6" />
//                 <span className="text-sm font-medium">About Our College</span>
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">
//                 A Few Words About the University
//               </h2>
//               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                 Ramanbhai Patel College of Pharmacy (RPCP) is a constituent
//                 Institute of Charotar University of Science and Technology
//                 (CHARUSAT). RPCP was established in 2004 to promote excellence
//                 in Pharmacy Education and to prepare young talent for Industrial
//                 Pharmacy and Pharmacy Practice.
//               </p>
//               <div className="bg-blue-600 text-white p-6 rounded-lg inline-block">
//                 <div className="text-3xl font-bold">25+</div>
//                 <div className="text-sm">Years of Experience</div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-4">
//                   <div className="bg-gray-200 rounded-lg h-48"></div>
//                   <div className="bg-gray-200 rounded-lg h-32"></div>
//                 </div>
//                 <div className="space-y-4 pt-8">
//                   <div className="bg-gray-200 rounded-lg h-32"></div>
//                   <div className="bg-gray-200 rounded-lg h-48"></div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Programs Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
//               <GraduationCap className="h-6 w-6" />
//               <span className="text-sm font-medium">Our Programs</span>
//             </div>
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               Academic Programs
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Comprehensive pharmacy education programs designed to prepare
//               students for successful careers in the pharmaceutical industry
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {programs.map((program, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="h-full hover:shadow-lg transition-shadow duration-300">
//                   <CardContent className="p-8">
//                     <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
//                       <GraduationCap className="h-6 w-6 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                       {program.title}
//                     </h3>
//                     <div className="space-y-3 mb-6">
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-600">Duration:</span>
//                         <span className="font-medium">{program.duration}</span>
//                       </div>
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-600">Intake:</span>
//                         <span className="font-medium">{program.intake}</span>
//                       </div>
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-600">Fees:</span>
//                         <span className="font-medium">{program.fees}</span>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 mb-6 leading-relaxed">
//                       {program.description}
//                     </p>
//                     <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
//                       Learn More →
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Achievements Section */}
//       <section className="py-20 bg-blue-900 text-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold mb-6">RPCP SCALARS</h2>
//             <p className="text-xl text-blue-200 max-w-3xl mx-auto">
//               Our achievements reflect our commitment to excellence in
//               pharmaceutical education and research
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {achievements.map((achievement, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="text-center"
//               >
//                 <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
//                   <div className="text-4xl font-bold text-yellow-400 mb-2">
//                     {achievement.number}
//                   </div>
//                   <div className="text-blue-200">{achievement.label}</div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-16">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">
//                 Get In Touch
//               </h2>
//               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                 Ready to start your journey in pharmaceutical sciences? Contact
//                 us for more information about our programs and admission
//                 process.
//               </p>

//               <div className="space-y-6">
//                 <div className="flex items-center space-x-4">
//                   <div className="bg-blue-600 p-3 rounded-lg">
//                     <Phone className="h-6 w-6 text-white" />
//                   </div>
//                   <div>
//                     <div className="font-medium text-gray-900">Phone</div>
//                     <div className="text-gray-600">+91 7052 101 786</div>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <div className="bg-blue-600 p-3 rounded-lg">
//                     <Mail className="h-6 w-6 text-white" />
//                   </div>
//                   <div>
//                     <div className="font-medium text-gray-900">Email</div>
//                     <div className="text-gray-600">
//                       info@rpcp.charusat.ac.in
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <div className="bg-blue-600 p-3 rounded-lg">
//                     <MapPin className="h-6 w-6 text-white" />
//                   </div>
//                   <div>
//                     <div className="font-medium text-gray-900">Address</div>
//                     <div className="text-gray-600">
//                       CHARUSAT Campus, Changa, Anand, Gujarat
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <div className="bg-gray-50 rounded-2xl p-8">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                   Make An Contact
//                 </h3>
//                 <div className="space-y-4">
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Your Email"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   />
//                   <textarea
//                     placeholder="Your Message"
//                     rows="4"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   ></textarea>
//                   <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
//                     Send Message
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


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
  Download, // For brochure download
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
      description: "Comprehensive pharmacy education with hands-on training and industry exposure.",
      icon: <GraduationCap />,
    },
    {
      title: "M.Pharm",
      duration: "2 Years",
      intake: "15 Seats each",
      fees: "₹2,00,000/year",
      description: "Specialized programs in Pharmaceutical Technology, Pharmacology, and Quality Assurance.",
      icon: <Microscope />,
    },
    {
      title: "M.Pharm (Pharmaceutical Chemistry)",
      duration: "2 Years",
      intake: "15 Seats",
      fees: "₹2,00,000/year",
      description: "Master's program specializing in Pharmaceutical Chemistry with advanced lab work and research.",
      icon: <Microscope />,
    },
    {
      title: "Ph.D.",
      duration: "3-5 Years",
      intake: "Research Based",
      fees: "As per University norms",
      description: "Advanced research programs in pharmaceutical sciences and drug development.",
      icon: <BookOpen />,
    },
  ];

  return (
    <div className="bg-white text-slate-800">
      {/* Hero Section */}
      <section id="hero" className="relative text-white h-[80vh] min-h-[500px] lg:h-screen lg:min-h-[700px] flex items-center">
        {/* Darkening Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-transparent z-10" />
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
              <span className="text-sm font-semibold tracking-wider uppercase">Welcome to RPCP</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}
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
              A prescription for a promising future in the Pharma Industry through hands-on training and state-of-the-art infrastructure.
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
                  Ramanbhai Patel College of Pharmacy (RPCP) is a constituent Institute of Charotar University of Science and Technology (CHARUSAT). RPCP was established in the year 2004 with a view to promote excellence in Pharmacy Education and to prepare young talent to meet the challenges of Industrial Pharmacy and Pharmacy Practice.
                </p>
                <div className="mt-6 p-6 bg-white rounded-lg border-l-4 border-amber-500 shadow-sm">
                  <p className="text-slate-700 italic">
                    "The Institute has the patronage of Zydus Cadila Health Care Ltd; patronized by Shri Pankaj Patel, CMD, Zydus Cadila Healthcare Ltd to commemorate his father, Late Shri Ramanbhai Patel. A Visionary Entrepreneur and a Philanthropist."
                  </p>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed mt-6">
                  M.Pharm Programs at RPCP are executed under the auspices of T. P. Patel Centre for PG studies in Pharmacy. The centre in patronized by Shri Jagdishbhai Patel and Shri H. T. Patel and their families to monumentalize their father, Late Shri T. P. Patel.
                </p>
              </div>
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-200 text-slate-700 rounded-lg p-3 flex-shrink-0">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Established 2004</h4>
                    <p className="text-slate-600 text-sm">A constituent Institute of CHARUSAT.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-200 text-slate-700 rounded-lg p-3 flex-shrink-0">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Industry Patronage</h4>
                    <p className="text-slate-600 text-sm">Supported by Zydus Lifesciences Ltd.</p>
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

            {/* Get Brochure Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 flex justify-center"
            >
              <motion.a
                href="https://drive.google.com/file/d/1a5SzzBQhlj833cGEmdJrmr-JlthL4t8E/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Button content */}
                <div className="relative flex items-center space-x-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Download className="h-5 w-5" />
                  </motion.div>
                  <span className="text-lg">Get Brochure</span>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 -top-2 -left-2 w-0 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:w-full transition-all duration-700 transform -skew-x-12"></div>
              </motion.a>
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
                  To become a premier pharma institute by creating world-class pharmacists and researchers.
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
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To strive for excellence in pharmaceutical sciences through quality education and research.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2">
              Our Core Strengths
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Pillars of Excellence
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <GraduationCap className="h-8 w-8 text-slate-700" />, title: "Project Based Learning" },
              { icon: <Microscope className="h-8 w-8 text-slate-700" />, title: "State-of-the-Art Facilities" },
              { icon: <Users className="h-8 w-8 text-slate-700" />, title: "Holistic Student Development" },
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 h-full text-center">
                  <div className="bg-slate-100 group-hover:bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    {pillar.title}
                  </h3>
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
              Comprehensive programs designed to prepare students for successful careers in the pharmaceutical industry.
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
                      <div className="flex justify-between text-sm text-slate-600"><span className="font-medium text-slate-700">Duration:</span><span>{program.duration}</span></div>
                      <div className="flex justify-between text-sm text-slate-600"><span className="font-medium text-slate-700">Intake:</span><span>{program.intake}</span></div>
                      <div className="flex justify-between text-sm text-slate-600"><span className="font-medium text-slate-700">Fees:</span><span>{program.fees}</span></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/programs" className="text-amber-600 hover:text-amber-700 font-semibold underline underline-offset-4">
              Click to view all programs
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
             RPCP SCALARS
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Our achievements reflect our unwavering commitment to excellence in pharmaceutical education and research.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-center bg-slate-800/50 p-6 rounded-lg border border-slate-700"
              >
                <div className="text-4xl lg:text-5xl font-bold text-amber-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-slate-300">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}