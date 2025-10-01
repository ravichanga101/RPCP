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

// Custom Number Component for List Items
const NumberIcon = ({ number, className }) => (
  <div
    className={`rounded-full bg-[#FBCB0A] text-white font-semibold flex items-center justify-center ${className}`}
  >
    {number}
  </div>
);

export default function PlacementsPage() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [mobileExpandedTab, setMobileExpandedTab] = useState(TABS[0]);
  const activeContent = placementData[activeTab] || placementData[TABS[0]];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#202A44] text-white pt-24 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Training & Placements
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            Providing a robust platform for students to launch their
            professional careers through industry connections and dedicated
            support.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12">
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
                  <span
                    className={`w-1.5 h-8 rounded-full mr-4 transition-colors duration-300 ${
                      activeTab === tabId
                        ? "bg-[#FBCB0A]"
                        : "bg-transparent group-hover:bg-[#FBCB0A]/50"
                    }`}
                  ></span>
                  {placementData[tabId].title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content Display */}
          <div className="lg:col-span-8">
            <div
              key={activeTab}
              className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in"
            >
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#202A44]">
                  {activeContent.title}
                </h2>
                <div className="w-24 h-1 bg-[#FBCB0A] mt-3 mb-6"></div>

                {activeContent.type === "list" && (
                  <ul className="space-y-4">
                    {activeContent.content.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <NumberIcon
                          number={index + 1}
                          className="h-6 w-6 flex-shrink-0 mt-0.5 text-sm min-w-[24px]"
                        />
                        <span className="ml-3 text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeContent.type === "image" && (
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

        {/* Mobile Layout - Stacked Cards */}
        <div className="lg:hidden space-y-4">
          {TABS.map((tabId) => {
            const content = placementData[tabId];
            const isActive = mobileExpandedTab === tabId;
            return (
              <div
                key={tabId}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileExpandedTab(isActive ? null : tabId)}
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
                    {content.title}
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
                  <div className="p-6 border-t border-gray-100 animate-fade-in">
                    <div className="w-24 h-1 bg-[#FBCB0A] mb-6"></div>

                    {content.type === "list" && (
                      <ul className="space-y-4">
                        {content.content.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <NumberIcon
                              number={index + 1}
                              className="h-6 w-6 flex-shrink-0 mt-0.5 text-sm min-w-[24px]"
                            />
                            <span className="ml-3 text-gray-800">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {content.type === "image" && (
                      <div className="relative aspect-video mt-4 rounded-lg overflow-hidden border border-gray-200">
                        <Image
                          src={content.content}
                          alt={content.title}
                          fill
                          className="object-contain bg-gray-100"
                        />
                      </div>
                    )}
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
