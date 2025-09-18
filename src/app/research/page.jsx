// "use client";

// import Image from "next/image";

// export default function Research() {
//   return (
//     <div className="min-h-screen pt-16">
//       {/* Header */}
//       <section className="bg-white border-b">
//         <div className="container mx-auto px-4 py-10">
//           <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Research @ RPCP</h1>
//           <p className="text-gray-700 mt-3 max-w-4xl">
//             Ramnbhai Patel College of Pharmacy (RPCP) aspires to focus on research areas that can extend the availability and usefulness of current as well as new/novel drug delivery options and its advancement to the society. Core focus of research and development activities at RPCP is in exploring the new therapeutic options with an aim to offer better options for treatment and management of Cancer, CNS disorders, Metabolic disorders, and Infectious diseases.
//           </p>
//         </div>
//       </section>

//       {/* Breadcrumb */}
//       <section className="bg-gray-50">
//         <div className="container mx-auto px-4 py-3 text-sm">
//           <span className="text-gray-500">Home</span>
//           <span className="mx-2 text-gray-400">/</span>
//           <span className="text-gray-800 font-medium">Research</span>
//         </div>
//       </section>

//       {/* Thrust Areas */}
//       <section className="bg-white">
//         <div className="container mx-auto px-4 py-10">
//           <h2 className="text-xl font-semibold text-gray-900 mb-3">Institutional thrust areas:</h2>
//           <ul className="list-disc list-inside text-gray-800 space-y-1">
//             <li>Cancer</li>
//             <li>CNS disorders</li>
//             <li>Metabolic disorders</li>
//             <li>Infectious diseases</li>
//           </ul>
//         </div>
//       </section>

//       {/* Department: Pharmacology */}
//       <section className="bg-gray-50 border-t">
//         <div className="container mx-auto px-4 py-10">
//           <h3 className="text-2xl font-semibold text-gray-900 mb-6">Department of Pharmacology</h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               "https://www.charusat.ac.in/rpcp/images/cology-1.webp",
//               "https://www.charusat.ac.in/rpcp/images/cology-2.webp",
//               "https://www.charusat.ac.in/rpcp/images/cology-3.webp",
//             ].map((src) => (
//               <div key={src} className="relative aspect-[4/3] rounded-md overflow-hidden border bg-white">
//                 <Image src={src} alt="Pharmacology lab" fill className="object-cover" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Department: Pharmaceutical chemistry & Analysis */}
//       <section className="bg-white border-t">
//         <div className="container mx-auto px-4 py-10">
//           <h3 className="text-2xl font-semibold text-gray-900 mb-6">Department of Pharmaceutical chemistry & Analysis</h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               "https://www.charusat.ac.in/rpcp/images/chemistry-1.webp",
//               "https://www.charusat.ac.in/rpcp/images/chemistry-2.webp",
//               "https://www.charusat.ac.in/rpcp/images/chemistry-3.webp",
//             ].map((src) => (
//               <div key={src} className="relative aspect-[4/3] rounded-md overflow-hidden border bg-white">
//                 <Image src={src} alt="Pharmaceutical chemistry lab" fill className="object-cover" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// "use client";

// import Image from "next/image";
// // Suggestion: Use an icon library like 'react-icons' for better icons.
// // For example: import { FaVial, FaBrain, FaDna, FaMicroscope } from "react-icons/fa";

// // Placeholder Icon Component
// const IconPlaceholder = ({ className = "w-8 h-8" }) => (
//   <svg
//     className={className}
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 01-1.022.547m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//     ></path>
//   </svg>
// );

// const thrustAreas = [
//     { name: "Cancer", icon: <IconPlaceholder /> },
//     { name: "CNS Disorders", icon: <IconPlaceholder /> },
//     { name: "Metabolic Disorders", icon: <IconPlaceholder /> },
//     { name: "Infectious Diseases", icon: <IconPlaceholder /> },
// ];

// const pharmacologyImages = [
//   "https://www.charusat.ac.in/rpcp/images/cology-1.webp",
//   "https://www.charusat.ac.in/rpcp/images/cology-2.webp",
//   "https://www.charusat.ac.in/rpcp/images/cology-3.webp",
// ];

// const chemistryImages = [
//   "https://www.charusat.ac.in/rpcp/images/chemistry-1.webp",
//   "https://www.charusat.ac.in/rpcp/images/chemistry-2.webp",
//   "https://www.charusat.ac.in/rpcp/images/chemistry-3.webp",
// ];


// export default function Research() {
//   return (
//     <div className="bg-white text-gray-800">

//       {/* Hero Section */}
//       <section className="bg-[#202A44] text-white pt-24 pb-16">
//         <div className="container mx-auto px-6 text-center">
//           <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
//             Research & Innovation at RPCP
//           </h1>
//           <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
//             Pioneering pharmaceutical advancements to address global health challenges through dedicated research in critical therapeutic areas.
//           </p>
//         </div>
//       </section>

//       {/* Main Content Area */}
//       <div className="container mx-auto px-6 py-16 lg:py-20">

//         {/* Introduction Section */}
//         <section className="mb-16 lg:mb-20">
//            <div className="max-w-4xl mx-auto text-center">
//              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Research Focus</h2>
//              <div className="w-24 h-1 bg-[#FBCB0A] mx-auto mb-6"></div>
//              <p className="text-lg text-gray-700">
//               Ramnbhai Patel College of Pharmacy (RPCP) aspires to focus on research areas that can extend the availability and usefulness of current as well as new/novel drug delivery options and its advancement to the society. Our core focus is exploring new therapeutic options for Cancer, CNS disorders, Metabolic disorders, and Infectious diseases.
//             </p>
//            </div>
//         </section>

//         {/* Thrust Areas Section */}
//         <section className="mb-16 lg:mb-20">
//             <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Institutional Thrust Areas</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {thrustAreas.map((area) => (
//                     <div key={area.name} className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
//                         <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#FBCB0A]/20 text-[#FBCB0A]">
//                            {/* Replace IconPlaceholder with real icons for a better look */}
//                            {area.icon}
//                         </div>
//                         <h3 className="mt-5 text-lg font-semibold text-gray-900">{area.name}</h3>
//                     </div>
//                 ))}
//             </div>
//         </section>
        
//         {/* Department Sections */}
//         <div className="space-y-16 lg:space-y-20">

//             {/* Department: Pharmacology */}
//             <section>
//                 <div>
//                     <h3 className="text-3xl font-bold text-gray-900">Department of Pharmacology</h3>
//                     <div className="w-20 h-1 bg-[#FBCB0A] mt-2 mb-4"></div>
//                     <p className="text-gray-700 mb-8 max-w-4xl">
//                         Our pharmacology department is equipped with state-of-the-art facilities to conduct pre-clinical studies. Research focuses on discovering novel drug targets and understanding the mechanisms of drug action to combat various diseases effectively.
//                     </p>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {pharmacologyImages.map((src) => (
//                         <div key={src} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
//                             <Image src={src} alt="Pharmacology lab" layout="fill" className="object-cover" />
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Department: Pharmaceutical Chemistry & Analysis */}
//             <section>
//                 <div>
//                     <h3 className="text-3xl font-bold text-gray-900">Department of Pharmaceutical Chemistry & Analysis</h3>
//                     <div className="w-20 h-1 bg-[#FBCB0A] mt-2 mb-4"></div>
//                     <p className="text-gray-700 mb-8 max-w-4xl">
//                        This department focuses on drug design, synthesis, and the development of analytical methods for new chemical entities. Our researchers work on creating more effective and safer medicines through innovative chemical approaches and rigorous analysis.
//                     </p>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {chemistryImages.map((src) => (
//                         <div key={src} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
//                             <Image src={src} alt="Pharmaceutical chemistry lab" layout="fill" className="object-cover" />
//                         </div>
//                     ))}
//                 </div>
//             </section>

//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import { useState } from "react";
// Suggestion: Use an icon library like 'react-icons' for a better look.
// For example: import { FaVial, FaBrain, FaDna, FaMicroscope, FaTimes } from "react-icons/fa";

// Placeholder Icon Component
const IconPlaceholder = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 01-1.022.547m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
  </svg>
);

// Placeholder for Close Icon (X)
const CloseIconPlaceholder = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
);


const thrustAreas = [
    { name: "Cancer", icon: <IconPlaceholder /> }, { name: "CNS Disorders", icon: <IconPlaceholder /> }, { name: "Metabolic Disorders", icon: <IconPlaceholder /> }, { name: "Infectious Diseases", icon: <IconPlaceholder /> },
];

const pharmacologyImages = [
  "https://www.charusat.ac.in/rpcp/images/cology-1.webp", "https://www.charusat.ac.in/rpcp/images/cology-2.webp", "https://www.charusat.ac.in/rpcp/images/cology-3.webp",
];

const chemistryImages = [
  "https://www.charusat.ac.in/rpcp/images/chemistry-1.webp", "https://www.charusat.ac.in/rpcp/images/chemistry-2.webp", "https://www.charusat.ac.in/rpcp/images/chemistry-3.webp",
];


export default function Research() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openLightbox = (src) => {
    setCurrentImage(src);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage("");
    document.body.style.overflow = '';
  };


  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-[#202A44] text-white pt-24 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Research & Innovation at RPCP</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">Pioneering pharmaceutical advancements to address global health challenges through dedicated research in critical therapeutic areas.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 lg:py-20">
      <section className="mb-16 lg:mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Institutional Thrust Areas</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {thrustAreas.map((area) => (
                            <div key={area.name} className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
                                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#FBCB0A]/20 text-[#FBCB0A]">
                                    {area.icon}
                                </div>
                                <h3 className="mt-5 text-lg font-semibold text-gray-900">{area.name}</h3>
                            </div>
                        ))}
                    </div>
                </section>
        
        
        {/* Department Sections */}
        <div className="space-y-16 lg:space-y-20">

            {/* Department: Pharmacology */}
            <section>
                        <div>
                    <h3 className="text-3xl font-bold text-gray-900">Department of Pharmacology</h3>
                    <div className="w-20 h-1 bg-[#FBCB0A] mt-2 mb-4"></div>
                    <p className="text-gray-700 mb-8 max-w-4xl">
                        Our pharmacology department is equipped with state-of-the-art facilities to conduct pre-clinical studies. Research focuses on discovering novel drug targets and understanding the mechanisms of drug action to combat various diseases effectively.
                          </p>
                        </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pharmacologyImages.map((src, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg cursor-pointer"
                            onClick={() => openLightbox(src)}
                        >
                            <Image src={src} alt={`Pharmacology lab ${index + 1}`} layout="fill" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                                    Click to view full image
                          </p>
                        </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Department: Pharmaceutical Chemistry & Analysis */}
            <section>
                        <div>
                    <h3 className="text-3xl font-bold text-gray-900">Department of Pharmaceutical Chemistry & Analysis</h3>
                    <div className="w-20 h-1 bg-[#FBCB0A] mt-2 mb-4"></div>
                    <p className="text-gray-700 mb-8 max-w-4xl">
                       This department focuses on drug design, synthesis, and the development of analytical methods for new chemical entities. Our researchers work on creating more effective and safer medicines through innovative chemical approaches and rigorous analysis.
                          </p>
                        </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {chemistryImages.map((src, index) => (
                         <div
                            key={index}
                            className="group relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg cursor-pointer"
                            onClick={() => openLightbox(src)}
                        >
                            <Image src={src} alt={`Pharmaceutical chemistry lab ${index + 1}`} layout="fill" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                                    Click to view full image
                          </p>
                        </div>
                      </div>
              ))}
            </div>
            </section>
                    </div>
            </div>

      {/* Lightbox/Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10"
              aria-label="Close image"
            >
              <CloseIconPlaceholder className="w-10 h-10"/>
          </button>
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} 
          >
            <Image
              src={currentImage}
              alt="Full size image"
              width={1600}
              height={1200}
              className="rounded-lg shadow-2xl max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain"
            />
      </div>
        </div>
      )}
    </div>
  );
}

// Optional: Add this to your globals.css file for the fade-in animation
/*
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
*/


