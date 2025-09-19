// "use client";

// import { useState } from "react";
// import Image from "next/image";

// // All page content is now stored in this easy-to-manage object
// const placementData = {
//   industrialVisit: {
//     title: "Industrial Visit",
//     type: "list",
//     content: [
//       "ZydusCadila Healthcare Ltd., Ahmedabad",
//       "Synchron Research Services, Ahmedabad",
//       "Sotac Pharma, Sanand, Ahmedabad",
//       "Ayur Lab, Halol, Vadodara",
//       "Sanjar Pharma, Himatnagar",
//       "Piramal Discovery Solution",
//       "Synzeal Research Laboratory",
//       "Gujarat Forensic Sciences University",
//       "JB Chemical, Ankleshwar",
//       "Pure Chem, Ankleshwar",
//       "Bharat Parenteral, Baroda",
//       "Envee Drugs",
//       "Glowel Cosmatic",
//       "Shruti Cosmoceuticlas",
//       "Pharmanza Herbal Limited",
//       "Dimple polymers",
//       "Zydus Hospital, Anand",
//       "Food and Drug Laboratory, Baroda",
//       "West-Coast Pharemecuticals, Ahmedabad",
//       "Montage Pharmaza, Himmatngar",
//       "Vimsons Aerosols, Gamdi",
//     ],
//   },
//   industrialTours: {
//     title: "Industrial Tours",
//     type: "image",
//     content: "/images/Industrial_Tour.jpg", // Assumes images are in /public folder
//   },
//   placementDrive: {
//     title: "On/Off Campus Placement Drive",
//     type: "image",
//     content: "/images/On-Off_Campus_Drive.jpg",
//   },
//   glimpse: {
//     title: "Glimpse of Placement",
//     type: "image",
//     content: "/images/Placement_Data.jpg",
//   },
//   companies: {
//     title: "List of Companies for Training, Project & Placement",
//     type: "list",
//     content: [
//       "Cadila Healthcare Ltd., Ahmedabad",
//       "Torrent Research Center, Bhat",
//       "Intas Pharmaceutical Ltd. Ahmedabad",
//       "Alembic Ltd. Baroda",
//       "Sanofi India, Ankleshwar",
//       "Sun Pharmaceutical Ltd. Baroda",
//       "Amneal Ltd, Ahmedabad",
//       "Glasko smithkline (GSK)",
//       "Tata Consultancy Services (TCS)",
//       "Pharmanza Herbal Pvt Ltd, Khambhat",
//       "Vasu Research Center (A division of Vasu Healthcare Ltd), Baroda",
//       "Veeda Clinical Research, Ahmedabad",
//       "Cadila Pharmaceuticals, Dholka",
//       "Alkem Laboratory Ltd, Daman",
//       "Gowrie Healthcare Pvt Ltd (B&S Group of Company), Baroda",
//       "Step-Up Pharmatech.",
//       "Umedica Laboratories Pvt. Ltd, Ankleshwar",
//       "Relax biotech Pvt.Ltd. Ankleshwar",
//       "Baroque Pharmaceutical, Khambhat",
//       "Glowel Cosmetic, Ahmedabad",
//       "Amanta Healthcare Ltd, Kheda",
//       "Astral SteriTech Ltd., Baroda",
//       "West Coast Pharmaceuticals",
//       "CBCC Global, Ahmedabad",
//       "Vovantis Laboratory, Baroda",
//       "Lambda Therapeutics, Ahmedabad",
//     ],
//   },
//   hospitals: {
//     title: "List of Hospitals for Training, Project & Placement",
//     type: "list",
//     content: [
//       "Dr. Jivraj Mehta Smarak and Health Foundation, Ahmedabad",
//       "Mahagujarat Hospital, Nadiad",
//       "CHRF Hospital,. Changa",
//       "Kailash Cancer Hospital, Baroda",
//       "Muljibhai kidney hospital, Nadiad",
//       "Shri Krishna Hospital, Karamsad",
//       "Shalby Hopsital, Ahmedabad",
//       "Apollo Hospital, Ahmedabad",
//     ],
//   },
//   recruiters: {
//     title: "Major Recruiters",
//     type: "image",
//     content: "/images/recruiters.jpg",
//   },
// };

// const TABS = [
//   "industrialVisit",
//   "industrialTours",
//   "placementDrive",
//   "glimpse",
//   "companies",
//   "hospitals",
//   "recruiters",
// ];

// export default function PlacementsPage() {
//   const [activeTab, setActiveTab] = useState(TABS[0]);
//   const activeContent = placementData[activeTab];

//   return (
//     <div className="bg-slate-50 min-h-screen">
//       {/* Header Section */}
//       <section className="bg-white border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//           <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
//             Training & Placements
//           </h1>
//           <p className="text-gray-600 mt-2">
//             Providing a platform for students to launch their professional careers.
//           </p>
//         </div>
//       </section>

//       {/* Main Content Section */}
//       <section className="py-16 sm:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-12 lg:gap-12">
            
//             {/* Sidebar Navigation */}
//             <aside className="lg:col-span-4 mb-12 lg:mb-0">
//               <nav className="space-y-2">
//                 {TABS.map((tabId) => (
//                   <button
//                     key={tabId}
//                     onClick={() => setActiveTab(tabId)}
//                     className={`w-full text-left font-medium p-4 rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
//                       activeTab === tabId
//                         ? "bg-blue-600 text-white shadow-lg -translate-x-2"
//                         : "bg-white hover:bg-slate-100 hover:shadow-md text-slate-700"
//                     }`}
//                   >
//                     {placementData[tabId].title}
//                   </button>
//                 ))}
//               </nav>
//             </aside>

//             {/* Content Display Area */}
//             <div className="lg:col-span-8">
//               <div
//                 key={activeTab} // This key triggers the animation on tab change
//                 className="bg-white p-8 rounded-xl shadow-xl animate-fade-in"
//               >
//                 <h2 className="text-3xl font-bold text-slate-900 mb-6">
//                   {activeContent.title}
//                 </h2>
                
//                 {activeContent.type === 'list' && (
//                   <ul className="space-y-3">
//                     {activeContent.content.map((item, index) => (
//                       <li key={index} className="flex items-start">
//                         <span className="flex-shrink-0 pt-1">
//                           <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                           </svg>
//                         </span>
//                         <span className="ml-3 text-slate-700">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 )}

//                 {activeContent.type === 'image' && (
//                   <div className="relative aspect-video mt-6 rounded-lg overflow-hidden border border-slate-200">
//                     <Image
//                       src={activeContent.content}
//                       alt={activeContent.title}
//                       fill
//                       className="object-contain bg-slate-100" // Use object-contain to ensure the whole image is visible
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";

// Data remains the same, making updates easy
const placementData = {
  industrialVisit: {
    title: "Industrial Visit",
    type: "list",
    content: [
      "ZydusCadila Healthcare Ltd., Ahmedabad",
      "Synchron Research Services, Ahmedabad",
      "Sotac Pharma, Sanand, Ahmedabad",
      "Ayur Lab, Halol, Vadodara",
      "Sanjar Pharma, Himatnagar",
      "Piramal Discovery Solution",
      "Synzeal Research Laboratory",
      "Gujarat Forensic Sciences University",
      "JB Chemical, Ankleshwar",
      "Pure Chem, Ankleshwar",
      "Bharat Parenteral, Baroda",
      "Envee Drugs",
      "Glowel Cosmatic",
      "Shruti Cosmoceuticlas",
      "Pharmanza Herbal Limited",
      "Dimple polymers",
      "Zydus Hospital, Anand",
      "Food and Drug Laboratory, Baroda",
      "West-Coast Pharemecuticals, Ahmedabad",
      "Montage Pharmaza, Himmatngar",
      "Vimsons Aerosols, Gamdi",
    ],
  },
  industrialTours: {
    title: "Industrial Tours",
    type: "image",
    content: "/images/Industrial_Tour.jpg",
  },
  placementDrive: {
    title: "On/Off Campus Placement Drive",
    type: "image",
    content: "/images/On-Off_Campus_Drive.jpg",
  },
  glimpse: {
    title: "Glimpse of Placement",
    type: "image",
    content: "/images/Placement_Data.jpg",
  },
  companies: {
    title: "List of Companies for Training, Project & Placement",
    type: "list",
    content: [
      "Cadila Healthcare Ltd., Ahmedabad",
      "Torrent Research Center, Bhat",
      "Intas Pharmaceutical Ltd. Ahmedabad",
      "Alembic Ltd. Baroda",
      "Sanofi India, Ankleshwar",
      "Sun Pharmaceutical Ltd. Baroda",
      "Amneal Ltd, Ahmedabad",
      "Glasko smithkline (GSK)",
      "Tata Consultancy Services (TCS)",
      "Pharmanza Herbal Pvt Ltd, Khambhat",
      "Vasu Research Center (A division of Vasu Healthcare Ltd), Baroda",
      "Veeda Clinical Research, Ahmedabad",
      "Cadila Pharmaceuticals, Dholka",
      "Alkem Laboratory Ltd, Daman",
      "Gowrie Healthcare Pvt Ltd (B&S Group of Company), Baroda",
      "Step-Up Pharmatech.",
      "Umedica Laboratories Pvt. Ltd, Ankleshwar",
      "Relax biotech Pvt.Ltd. Ankleshwar",
      "Baroque Pharmaceutical, Khambhat",
      "Glowel Cosmetic, Ahmedabad",
      "Amanta Healthcare Ltd, Kheda",
      "Astral SteriTech Ltd., Baroda",
      "West Coast Pharmaceuticals",
      "CBCC Global, Ahmedabad",
      "Vovantis Laboratory, Baroda",
      "Lambda Therapeutics, Ahmedabad",
    ],
  },
  hospitals: {
    title: "List of Hospitals for Training, Project & Placement",
    type: "list",
    content: [
      "Dr. Jivraj Mehta Smarak and Health Foundation, Ahmedabad",
      "Mahagujarat Hospital, Nadiad",
      "CHRF Hospital,. Changa",
      "Kailash Cancer Hospital, Baroda",
      "Muljibhai kidney hospital, Nadiad",
      "Shri Krishna Hospital, Karamsad",
      "Shalby Hopsital, Ahmedabad",
      "Apollo Hospital, Ahmedabad",
    ],
  },
  recruiters: {
    title: "Major Recruiters",
    type: "image",
    content: "/images/recruiters.jpg",
  },
};

const TABS = Object.keys(placementData);

// Custom Icon for Bullet Points
const CheckIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export default function PlacementsPage() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const activeContent = placementData[activeTab];

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-[#202A44] text-white pt-24 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Training & Placements
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            Providing a robust platform for students to launch their professional careers through industry connections and dedicated support.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-12 lg:gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-4">
            <nav className="space-y-2">
              {TABS.map((tabId) => (
                <button
                  key={tabId}
                  onClick={() => setActiveTab(tabId)}
                  className={`w-full text-left font-semibold p-4 rounded-lg transition-all duration-300 ease-in-out flex items-center group
                    ${
                      activeTab === tabId
                        ? "bg-yellow-50 text-[#202A44]"
                        : "text-gray-600 hover:bg-yellow-50/60 hover:text-[#202A44]"
                    }`}
                >
                  <span className={`w-1.5 h-8 rounded-full mr-4 transition-colors duration-300 ${activeTab === tabId ? 'bg-[#FBCB0A]' : 'bg-transparent group-hover:bg-[#FBCB0A]/50'}`}></span>
                  {placementData[tabId].title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content Display */}
          <div className="lg:col-span-8 mt-12 lg:mt-0">
            <div
              key={activeTab} // Re-triggers animation on change
              className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in"
            >
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#202A44]">
                  {activeContent.title}
                </h2>
                <div className="w-24 h-1 bg-[#FBCB0A] mt-3 mb-6"></div>
                
                {activeContent.type === 'list' && (
                  <ul className="space-y-4">
                    {activeContent.content.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="h-6 w-6 text-[#FBCB0A] flex-shrink-0 mt-0.5" />
                        <span className="ml-3 text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeContent.type === 'image' && (
                  <div className="relative aspect-video mt-4 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={activeContent.content}
                      alt={activeContent.title}
                      fill
                      className="object-contain bg-gray-100"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}