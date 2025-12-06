"use client";

// Suggestion: Use an icon library like 'react-icons' for a better look.
// For example: import { FaVial, FaBrain, FaDna, FaMicroscope } from "react-icons/fa";

// Placeholder Icon Component
const IconPlaceholder = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 01-1.022.547m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
  </svg>
);


const thrustAreas = [
    { name: "Cancer", icon: <IconPlaceholder /> }, { name: "CNS Disorders", icon: <IconPlaceholder /> }, { name: "Metabolic Disorders", icon: <IconPlaceholder /> }, { name: "Infectious Diseases", icon: <IconPlaceholder /> },
];


export default function Research() {


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
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Institutional Thrust Areas</h2>
                    <div className="w-20 h-1 bg-[#FBCB0A] mx-auto mb-12"></div>
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

        {/* Research Matrices Section */}
        <section className="mb-16 lg:mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Research Matrices (Till 2025)</h2>
          <div className="w-20 h-1 bg-[#FBCB0A] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Journal Publication */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Journal Publication</h3>
              <p className="text-4xl font-bold text-blue-600">633+</p>
            </div>

            {/* Book / Book Chapter */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Book / Book Chapter</h3>
              <p className="text-4xl font-bold text-purple-600">83+</p>
            </div>

            {/* Patent */}
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Patent</h3>
              <p className="text-4xl font-bold text-green-600">18</p>
            </div>

            {/* Consultancy Projects */}
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-500">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Consultancy Projects</h3>
              <p className="text-4xl font-bold text-orange-600">&gt;50 lacs</p>
            </div>

            {/* Sanctioned Research Projects */}
            <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Sanctioned Research Projects</h3>
              <p className="text-4xl font-bold text-red-600">30+</p>
            </div>

            {/* Student Innovation Projects */}
            <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-teal-500">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Student Innovation Projects</h3>
              <p className="text-4xl font-bold text-teal-600">14+</p>
            </div>

            {/* Research Projects and Funding */}
            <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-indigo-500">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Research Projects and Funding</h3>
              <p className="text-4xl font-bold text-indigo-600">69</p>
              <p className="text-sm text-gray-600 mt-1">₹ 1,49,64,857</p>
            </div>

            {/* H-Index (Scopus) */}
            <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-pink-500">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">H-Index (Scopus)</h3>
              <p className="text-4xl font-bold text-pink-600">34+</p>
            </div>

            {/* Total Citation (Scopus) */}
            <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-500">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Citation (Scopus)</h3>
              <p className="text-4xl font-bold text-yellow-600">5779+</p>
            </div>
          </div>
        </section>

        {/* Departmental Research Section */}
        <section className="mb-16 lg:mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Departmental Research</h2>
          <div className="w-20 h-1 bg-[#FBCB0A] mx-auto mb-12"></div>
        
        {/* Department Sections */}
        <div className="space-y-16 lg:space-y-20">

            {/* Department: Pharmaceutics and Pharmaceutical Technology */}
            <section>
                <div>
                    <h3 className="text-3xl font-bold text-gray-900">Pharmaceutics and Pharmaceutical Technology Department</h3>
                    <div className="w-20 h-1 bg-[#FBCB0A] mt-2 mb-4"></div>
                    <p className="text-gray-700 mb-8 max-w-4xl">
                        Specialization in Novel Drug Delivery Systems (NDDS), including the design and evaluation of advanced carriers like Nanoparticles, Liposomes, Microemulsions, and Solid Lipid Nanoparticles. Key efforts include Targeted Drug Delivery (e.g., to the brain for neurological disorders, to the lungs for cancer) and Bioavailability Enhancement for poorly soluble drugs.
                    </p>
                    <a
                        href="/new_data/Research%20Tab%20RPCP/Pharmaceutics%20and%20Pharmaceutical%20Technology%20Department.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#FBCB0A] hover:bg-[#e5b800] text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                    >
                        View More
                    </a>
                </div>
            </section>

            {/* Department: Pharmacology */}
            <section>
                <div>
                    <h3 className="text-3xl font-bold text-gray-900">Pharmacology Department</h3>
                    <div className="w-20 h-1 bg-[#FBCB0A] mt-2 mb-4"></div>
                    <p className="text-gray-700 mb-8 max-w-4xl">
                        Research focuses on the Pharmacological Evaluation and therapeutic potential of drugs in various disease models (e.g., Cardiovascular, Diabetes, Inflammatory Bowel Disease, CNS disorders, Cancer). This also extends to Clinical Pharmacy and Pharmacoepidemiology, including studies on drug utilization, prescribing patterns, adverse drug reactions, and pharmacogenomics in patient populations.
                    </p>
                    <a
                        href="/new_data/Research%20Tab%20RPCP/Pharmacology%20Department.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#FBCB0A] hover:bg-[#e5b800] text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                    >
                        View More
                    </a>
                </div>
            </section>

            {/* Department: Pharmaceutical Chemistry & Analysis */}
            <section>
                <div>
                    <h3 className="text-3xl font-bold text-gray-900">Pharmaceutical Chemistry and Analysis Department</h3>
                    <div className="w-20 h-1 bg-[#FBCB0A] mt-2 mb-4"></div>
                    <p className="text-gray-700 mb-8 max-w-4xl">
                       Expertise in Drug Design and Synthesis of novel chemical entities, often utilizing in-silico methods like molecular docking. A strong focus is placed on Advanced Analytical Method Development and Quality Control (QC/QA), including the establishment and validation of robust, stability-indicating chromatographic techniques (RP-HPLC, HPTLC) and impurity profiling.
                    </p>
                    <a
                        href="/new_data/Research%20Tab%20RPCP/Pharmaceutical%20Chemistry%20and%20Analysis%20Department.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#FBCB0A] hover:bg-[#e5b800] text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                    >
                        View More
                    </a>
                </div>
            </section>

            {/* Department: Pharmacognosy */}
            <section>
                <div>
                    <h3 className="text-3xl font-bold text-gray-900">Pharmacognosy Department</h3>
                    <div className="w-20 h-1 bg-[#FBCB0A] mt-2 mb-4"></div>
                    <p className="text-gray-700 mb-8 max-w-4xl">
                        Focus on Phytoconstituent Evaluation, involving the isolation, characterization, and screening of bioactive compounds from plant extracts for therapeutic applications (e.g., anti-inflammatory, management of male infertility). Expertise also covers Herbal Standardization and research into Traditional Medicine Systems like Ayurveda.
                    </p>
                    <a
                        href="/new_data/Research%20Tab%20RPCP/Pharmacognosy%20Department.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#FBCB0A] hover:bg-[#e5b800] text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                    >
                        View More
                    </a>
                </div>
            </section>
        </div>
        </section>
            </div>
    </div>
  );
}


