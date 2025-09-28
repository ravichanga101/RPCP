// "use client";

// import Image from "next/image";
// import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

// // Data Extracted from your HTML - Easy to Manage and Update
// const facultyData = [
//   // Leadership
//   {
//     category: "Leadership",
//     rank: "Dean",
//     name: "Dr. Samir Patel",
//     title: "Professor and I/C Dean",
//     qualification: "Ph. D.",
//     expertise: "Peptide Synthesis, Stability Indicating Method Development and Validation, Impurity Profiling",
//     imageUrl: "/images/faculty_photo/Samir Patel.jpg", // Assumes images are in the /public folder
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/162173",
//     email: "samirpatel.ph@charusat.ac.in",
//     phone: "+91 2697 265161",
//   },
//   {
//     category: "Leadership",
//     rank: "Principal",
//     name: "Dr. Manan Raval",
//     title: "Professor and Principal",
//     qualification: "Ph. D.",
//     expertise: "Phyto-Chemical Analysis, Phyto-Pharmacology",
//     imageUrl: "/images/faculty_photo/principal.png",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/162361",
//     email: "mananraval.ph@charusat.ac.in",
//     phone: "+91 2697 265141",
//   },
//   // Professors
//   {
//     category: "Academic Staff",
//     rank: "Professor",
//     name: "Dr. Gayatri Patel",
//     title: "Professor",
//     qualification: "Ph. D.",
//     expertise: "Enhancement of Bioavailability of Complex Therapeutics",
//     imageUrl: "/images/faculty_photo/Dr. Gayatri Patel.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/161745",
//     email: "gayatripatel.ph@charusat.ac.in",
//     phone: "+91 2697 265162",
//   },
//   {
//     category: "Academic Staff",
//     rank: "Professor",
//     name: "Dr. Mrunali Patel",
//     title: "Professor",
//     qualification: "Ph. D.",
//     expertise: "Nanocarrier Based Drug Delivery, Novel Formulation Development, Pharmaceutical Quality Assurance",
//     imageUrl: "/images/faculty_photo/Dr. Mrunali Patel.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/161545",
//     email: "mrunalipatel.ph@charusat.ac.in",
//     phone: "+91 2697 265146",
//   },
//   {
//     category: "Academic Staff",
//     rank: "Professor",
//     name: "Dr. Rashmin Patel",
//     title: "Professor",
//     qualification: "Ph. D.",
//     expertise: "Pharmaceutical Quality Assurance, Analytical Method Development/Validation, Nanocarrier Based Drug Delivery",
//     imageUrl: "/images/faculty_photo/Dr. Rashmin Patel.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/161527",
//     email: "rashminpatel.ph@charusat.ac.in",
//     phone: "+91 2697 265167",
//   },
//   // Associate Professors
//   {
//     category: "Academic Staff",
//     rank: "Associate Professor",
//     name: "Dr. Amit Patel",
//     title: "Associate Professor",
//     qualification: "Ph. D.",
//     expertise: "Novel Drug Delivery Systems, Dissolution Enhancement",
//     imageUrl: "/images/faculty_photo/Dr. Amit Patel.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/161377",
//     email: "amitpatel.ph@charusat.ac.in",
//     phone: "+91 2697 265153",
//   },
//   {
//     category: "Academic Staff",
//     rank: "Associate Professor",
//     name: "Dr. Jalpa Suthar",
//     title: "Associate Professor",
//     qualification: "Ph. D.",
//     expertise: "Clinical Research, Pharmacoepidemiology, Pharmacy Practice, Pharmacovigilance, Rational Drug Therapy",
//     imageUrl: "/images/faculty_photo/Dr. Jalpa Suthar.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/161381",
//     email: "jalpasuthar.ph@charusat.ac.in",
//     phone: "+91 2697 265155",
//   },
//   {
//     category: "Academic Staff",
//     rank: "Associate Professor",
//     name: "Dr. Ravish Patel",
//     title: "Associate Professor",
//     qualification: "Ph. D.",
//     expertise: "Nano Carriers Based Drug Delivery Systems, Dissolution and Bioavailability Enhancement",
//     imageUrl: "/images/faculty_photo/Dr. Ravish Patel.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/163489",
//     email: "ravishpatel.ph@charusat.ac.in",
//     phone: "+91 2697 265153",
//   },
//    {
//     category: "Academic Staff",
//     rank: "Associate Professor",
//     name: "Dr. Nilay Solanki",
//     title: "Associate Professor",
//     qualification: "Ph. D.",
//     expertise: "Biological Screening, Drug Discovery, Cancer Research and CNS Disorders",
//     imageUrl: "/images/faculty_photo/Dr. Nilay Solanki.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/163485",
//     email: "nilaysolanki.ph@charusat.ac.in",
//     phone: "+91 2697 265148",
//   },
//   {
//     category: "Academic Staff",
//     rank: "Associate Professor",
//     name: "Dr. Kanan Gamit",
//     title: "Associate Professor",
//     qualification: "Ph. D.",
//     expertise: "Isolation of Phytoconstituents And Its Biological Evaluation",
//     imageUrl: "/images/faculty_photo/Dr. Kanan Gamit.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/162269",
//     email: "kanangamit.ph@charusat.ac.in",
//     phone: "+91 2697 265156",
//   },
//   {
//     category: "Academic Staff",
//     rank: "Associate Professor",
//     name: "Dr. Mehul Patel",
//     title: "Associate Professor",
//     qualification: "Ph. D.",
//     expertise: "Analytical Method Development, Small Molecules Synthesis and Computation Drug Design",
//     imageUrl: "/images/faculty_photo/Dr. Mehul Patel.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/162196",
//     email: "mehulpatel.ph@charusat.ac.in",
//     phone: "+91 2697 265148",
//   },
//    {
//     category: "Academic Staff",
//     rank: "Associate Professor",
//     name: "Dr. Umang Shah",
//     title: "Associate Professor",
//     qualification: "Ph. D.",
//     expertise: "Drug Design and Synthesis, Cytotoxicity Assay, Computational Study",
//     imageUrl: "/images/faculty_photo/Dr. Umang Shah.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/162057",
//     email: "umangshah.ph@charusat.ac.in",
//     phone: "+91 2697 265148",
//   },
//   // Assistant Professors
//   {
//     category: "Academic Staff",
//     rank: "Assistant Professor",
//     name: "Dr. Rajendra Kotadiya",
//     title: "Assistant Professor",
//     qualification: "Ph. D.",
//     expertise: "Analytical Method Development of Pharmaceuticals",
//     imageUrl: "/images/faculty_photo/Dr. Rajendra Kotadiya.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/161379",
//     email: "rajendrakotadiya.ph@charusat.ac.in",
//     phone: "+91 2697 265146",
//   },
//   {
//     category: "Academic Staff",
//     rank: "Assistant Professor",
//     name: "Dr. Swayamprakash Patel",
//     title: "Assistant Professor",
//     qualification: "Ph. D.",
//     expertise: "NDDS, Nano-Pharmaceuticals, Artificial Intelligence, Intellectual Property Rights",
//     imageUrl: "/images/faculty_photo/Dr. Swayamprakash Patel.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/162142",
//     email: "swayamprakashpatel.ph@charusat.ac.in",
//     phone: "+91 2697 265148",
//   },
//   {
//     category: "Academic Staff",
//     rank: "Assistant Professor",
//     name: "Dr. Jagruti Desai",
//     title: "Assistant Professor",
//     qualification: "Ph. D.",
//     expertise: "Novel Drug Delivery, Lymphatic Targeting, Oral Formulation, Lyophilization",
//     imageUrl: "/images/faculty_photo/Dr. Jagruti Desai.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/163502",
//     email: "jagrutidesai.ph@charusat.ac.in",
//     phone: "+91 2697 265147",
//   },
//   {
//     category: "Academic Staff",
//     rank: "Assistant Professor",
//     name: "Dr. Adil Patel",
//     title: "Assistant Professor",
//     qualification: "Ph. D.",
//     expertise: "Novel Formulation Development and Evaluation Using QBD Approach",
//     imageUrl: "/images/faculty_photo/Adil_Patel_1.jpg",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/162167",
//     email: "adilpatel.ph@charusat.ac.in",
//     phone: "+91 2697 265148",
//   },
//   {
//     category: "Academic Staff",
//     rank: "Assistant Professor",
//     name: "Mr. Hardik Koria",
//     title: "Assistant Professor",
//     qualification: "M. Pharm.",
//     expertise: "Cardiovascular Research, Preclinical Studies",
//     imageUrl: "/images/faculty_photo/Mr. Hardik Koria.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/163409",
//     email: "hardikkoria.ph@charusat.ac.in",
//     phone: "+91 2697 265155",
//   },
//    {
//     category: "Academic Staff",
//     rank: "Assistant Professor",
//     name: "Dr. Payal Chauhan",
//     title: "Assistant Professor",
//     qualification: "Ph. D.",
//     expertise: "Drug Analysis, Stability Study",
//     imageUrl: "/images/faculty_photo/Ms. Payal Chauhan.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in//profile/162327",
//     email: "payalchauhan.ph@charusat.ac.in",
//     phone: "+91 2697 265147",
//   },
//    {
//     category: "Academic Staff",
//     rank: "Assistant Professor",
//     name: "Mr. Alkesh Patel",
//     title: "Assistant Professor",
//     qualification: "M. Pharm.",
//     expertise: "Molecular Biology, Preclinical Study, Oncology, Cancer Stem Cells Research, Immunotherapy",
//     imageUrl: "/images/faculty_photo/Mr. Alkesh Patel.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/163503",
//     email: "alkeshpatel.ph@charusat.ac.in",
//     phone: "+91 2697 265148",
//   },
//   {
//     category: "Academic Staff",
//     rank: "Assistant Professor",
//     name: "Mr. Nikunj Parekh",
//     title: "Assistant Professor",
//     qualification: "M. Pharm.",
//     expertise: "Computer-aided drug design, Process Chemistry, Impurity profiling and Chromatogrpahic techniques.",
//     imageUrl: "/images/faculty_photo/Nikunj_Parekh.jpg",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/162185",
//     email: "nikunjparekh.ph@charusat.ac.in", // Email added
//     phone: "+91 2697 265148", // Phone added
//   },
//    {
//     category: "Academic Staff",
//     rank: "Assistant Professor",
//     name: "Dr. Milap Patel",
//     title: "Assistant Professor",
//     qualification: "Ph.D.",
//     expertise: "Preclinical Research, Toxicity Study, Ocular Pharmacology and Respiratory Pharmacology",
//     imageUrl: "/images/faculty_photo/Mr_Milap_Patel.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/163404",
//     email: "milappatel.ph@charusat.ac.in",
//     phone: "+91 2697 265138",
//   },
//   {
//     category: "Academic Staff",
//     rank: "Assistant Professor",
//     name: "Ms. Richa Dave",
//     title: "Assistant Professor",
//     qualification: "M. Pharm.",
//     expertise: "Novel Nanocarrier-Based Drug Delivery, Targeted Delivery, Cancer Research",
//     imageUrl: "/images/faculty_photo/richa_dave.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/161698",
//     email: "richadave.ph@charusat.ac.in",
//     phone: "+91 2697 265153",
//   },
//   {
//     category: "Academic Staff",
//     rank: "Assistant Professor",
//     name: "Dr. Viral Patel",
//     title: "Assistant Professor",
//     qualification: "Ph. D.",
//     expertise: "Novel Drug Delivery Systems, Parenteral Drug Delivery Systems",
//     imageUrl: "/images/faculty_photo/Dr. Viral Patel.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/253908",
//     email: "viralpatel.ph@charusat.ac.in",
//     phone: "+91-2697-265148",
//   },
//    {
//     category: "Academic Staff",
//     rank: "Assistant Professor",
//     name: "Dr. Archita Patel",
//     title: "Assistant Professor",
//     qualification: "Ph. D.",
//     expertise: "Development and Validation of Analytical Methods Using DOE",
//     imageUrl: "/images/faculty_photo/ap.png",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/240032",
//     email: "architapatel.ph@charusat.ac.in",
//     phone: "+91-2697-265149",
//   },
//   {
//     category: "Academic Staff",
//     rank: "Assistant Professor",
//     name: "Ms. Bhagyabhumi Shah",
//     title: "Assistant Professor",
//     qualification: "M. Pharm.",
//     expertise: "Preclinical Studies and Gastrointestinal Studies",
//     imageUrl: "/images/faculty_photo/Bhagyabhumi Shah.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/239739",
//     email: "bhagyabhumishah.ph@charusat.ac.in",
//     phone: "+91-2697-265148",
//   },
//   {
//     category: "Academic Staff",
//     rank: "Assistant Professor",
//     name: "Dr. Nitin Amarshibhai Lunagariya",
//     title: "Assistant Professor",
//     qualification: "Ph. D.",
//     expertise: "Synthesis and Chemical Modification of Organic and Natural Products Inspired Scaffolds",
//     imageUrl: "/images/faculty_photo/Dr. Nitin Lunagariya.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/253926",
//     email: "nitinlunagariya.ph@charusat.ac.in",
//     phone: "+91-2697-265148",
//   },
//   {
//     category: "Academic Staff",
//     rank: "Assistant Professor",
//     name: "Mr. Keval Y. Raval",
//     title: "Assistant Professor",
//     qualification: "M. Pharm.",
//     expertise: "Molecular Docking, Pharmacogenomics, Cancer Research, and Diabetes Research",
//     imageUrl: "/images/faculty_photo/KevalRaval.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/412604",
//     email: "kevalraval.ph@charusat.ac.in",
//     phone: "+91-2697-265153",
//   },
//   {
//     category: "Academic Staff",
//     rank: "Assistant Professor",
//     name: "Dr. Purvi A. Shah",
//     title: "Assistant Professor",
//     qualification: "Ph.D.",
//     expertise: "Natural Products Chemistry",
//     imageUrl: "/images/faculty_photo/Purvi Shah.JPG",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/274304",
//     email: "purvishah.ph@charusat.ac.in",
//     phone: "+91-2697-265138",
//   },
//   {
//     category: "Academic Staff",
//     rank: "Assistant Professor",
//     name: "Ms. Shachi Sanni Patel",
//     title: "Assistant Professor",
//     qualification: "M. Pharm.",
//     expertise: "Regulatory Affairs of Pharmaceuticals and PhytoPharmaceuticals, Formulation and Development, Alternate Medicine, IPR",
//     imageUrl: "/images/faculty_photo/Shachi Patel.jpg",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/463910",
//     email: "shachikapatel.ph@charusat.ac.in",
//     phone: "+91-2697-265138",
//   },
//   {
//     category: "Academic Staff",
//     rank: "Assistant Professor",
//     name: "Dr. Swati Sharma",
//     title: "Assistant Professor",
//     qualification: "Ph.D.",
//     expertise: "Tissue Engineering and Regenerative Medicine",
//     imageUrl: "/images/faculty_photo/Swati Sharma.jpg",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/401959",
//     email: "swatisharma.ph@charusat.ac.in",
//     phone: "+91-2697-265138",
//   },
//    {
//     category: "Academic Staff",
//     rank: "Assistant Professor",
//     name: "Dr. Arun K. Soni",
//     title: "Assistant Professor",
//     qualification: "Ph.D.",
//     expertise: "Preclinical studies like Cardio-metabolic syndrome, Male-female endocrine diseases, cancer research, Toxicological studies as per OECD",
//     imageUrl: "/images/faculty_photo/Dr. Arun Soni.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/210822",
//     email: "arunsoni.ph@charusat.ac.in",
//     phone: "+91-2697-265146",
//   },
//   {
//     category: "Academic Staff",
//     rank: "Assistant Professor",
//     name: "Dr. Nancy Tripathi",
//     title: "Assistant Professor",
//     qualification: "Ph.D.",
//     expertise: "Computer-aided Drug Design & Development, Cheminformatics",
//     imageUrl: "/images/faculty_photo/Nancy_Tripathi.webp",
//     profileUrl: "https://vidwan.inflibnet.ac.in/profile/513250",
//     email: "nancytripathi.ph@charusat.ac.in",
//     phone: "+91-2697-265138",
//   },
//   // Supporting Staff
//   {
//     category: "Supporting Staff",
//     rank: "Laboratory Technician",
//     name: "Mr. Jalpesh Patel",
//     imageUrl: "/images/supporting_staff/Mr. Jalpesh Patel.webp",
//   },
//   {
//     category: "Supporting Staff",
//     rank: "Laboratory Technician",
//     name: "Mr. Minal Patel",
//     imageUrl: "/images/supporting_staff/Mr. Minal Patel.webp",
//   },
//   {
//     category: "Supporting Staff",
//     rank: "Laboratory Technician",
//     name: "Mr. Jignesh Patel",
//     imageUrl: "/images/supporting_staff/Mr. Jignesh Patel.webp",
//   },
//   {
//     category: "Supporting Staff",
//     rank: "Laboratory Technician",
//     name: "Mr. Kamal Patel",
//     imageUrl: "/images/supporting_staff/Mr. Kamal Patel.webp",
//   },
//   {
//     category: "Supporting Staff",
//     rank: "Laboratory Technician",
//     name: "Mr. Chintan Patel",
//     imageUrl: "/images/supporting_staff/Mr. Chintan Patel.webp",
//   },
//   {
//     category: "Supporting Staff",
//     rank: "Laboratory Technician",
//     name: "Ms. Hiral Patel",
//     imageUrl: "/images/supporting_staff/Ms. Hiral Patel.webp",
//   },
//   {
//     category: "Supporting Staff",
//     rank: "Assistant Librarian",
//     name: "Dr. Meghna Mehta",
//     imageUrl: "/images/supporting_staff/Dr. Meghna Mehta.webp",
//   },
//   {
//     category: "Supporting Staff",
//     rank: "Office Executive",
//     name: "Mr. Jaydeep Parmar",
//     imageUrl: "/images/supporting_staff/Mr. Jaydeep Parmar.webp",
//   },
//   {
//     category: "Supporting Staff",
//     rank: "Peon",
//     name: "Mr. Rajendra Patel",
//     imageUrl: "/images/supporting_staff/Rajendra_Patel.jpg",
//   },
// ];

// // Reusable Faculty Card Component
// // function FacultyCard({ member }) {
// //   return (
// //     <div className="group relative flex flex-col items-center text-center bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-slate-200">
// //       <div className="w-32 h-32 relative mb-4">
// //         <Image
// //           src={member.imageUrl}
// //           alt={`Photo of ${member.name}`}
// //           fill
// //           className="rounded-full object-cover border-4 border-white group-hover:border-blue-200 transition-colors duration-300 shadow-md"
// //         />
// //       </div>
// //       <h3 className="text-lg font-bold text-slate-800">{member.name}</h3>
// //       {member.title && <p className="text-blue-600 font-semibold text-sm">{member.title}</p>}
// //       {member.qualification && <p className="text-slate-500 text-xs mt-1">{member.qualification}</p>}

// //       {member.expertise && (
// //         <p className="text-slate-600 text-sm mt-3 h-20 overflow-hidden">
// //           {member.expertise}
// //         </p>
// //       )}

// //       {/* Social Links */}
// //       {(member.profileUrl || member.email || member.phone) && (
// //         <div className="flex space-x-4 mt-4 pt-4 border-t border-slate-200 w-full justify-center">
// //           {member.profileUrl && (
// //             <a href={member.profileUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors" title="View Profile">
// //               <FaUser size={20} />
// //             </a>
// //           )}
// //           {member.email && (
// //             <a href={`mailto:${member.email}`} className="text-slate-500 hover:text-blue-600 transition-colors" title={member.email}>
// //               <FaEnvelope size={20} />
// //             </a>
// //           )}
// //           {member.phone && (
// //             <a href={`tel:${member.phone}`} className="text-slate-500 hover:text-blue-600 transition-colors" title={member.phone}>
// //               <FaPhone size={20} />
// //             </a>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // Reusable Faculty Card Component
// function FacultyCard({ member }) {
//   return (
//     <div className="group relative flex flex-col items-center text-center bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-slate-200">
//       {/* This is the container we are changing */}
//       <div className="w-32 h-32 relative mb-4 overflow-hidden rounded-md bg-gray-100">
//         <Image
//           src={member.imageUrl}
//           alt={`Photo of ${member.name}`}
//           fill
//           className="object-cover transition-transform duration-300 group-hover:scale-105"
//         />
//       </div>
//       <h3 className="text-lg font-bold text-slate-800">{member.name}</h3>
//       {member.title && <p className="text-blue-600 font-semibold text-sm">{member.title}</p>}
//       {member.qualification && <p className="text-slate-500 text-xs mt-1">{member.qualification}</p>}

//       {member.expertise && (
//         <p className="text-slate-600 text-sm mt-3 h-20 overflow-hidden">
//           {member.expertise}
//         </p>
//       )}

//       {/* Social Links */}
//       {(member.profileUrl || member.email || member.phone) && (
//         <div className="flex space-x-4 mt-4 pt-4 border-t border-slate-200 w-full justify-center">
//           {member.profileUrl && (
//             <a href={member.profileUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors" title="View Profile">
//               <FaUser size={20} />
//             </a>
//           )}
//           {member.email && (
//             <a href={`mailto:${member.email}`} className="text-slate-500 hover:text-blue-600 transition-colors" title={member.email}>
//               <FaEnvelope size={20} />
//             </a>
//           )}
//           {member.phone && (
//             <a href={`tel:${member.phone}`} className="text-slate-500 hover:text-blue-600 transition-colors" title={member.phone}>
//               <FaPhone size={20} />
//             </a>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// // Main Page Component
// export default function FacultyPage() {
//   const leadership = facultyData.filter(m => m.category === "Leadership");
//   const academicStaff = facultyData.filter(m => m.category === "Academic Staff");
//   const supportingStaff = facultyData.filter(m => m.category === "Supporting Staff");

//   const ranks = [...new Set(academicStaff.map(m => m.rank))];
//   const staffRanks = [...new Set(supportingStaff.map(m => m.rank))];

//   return (
//     <div className="bg-slate-50 py-16 sm:py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Page Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//             Meet Our Esteemed Faculty
//           </h1>
//           <p className="mt-4 text-xl text-slate-600">
//             Dedicated professionals shaping the future of pharmacy.
//           </p>
//         </div>

//         {/* Leadership Section */}
//         <div className="mb-16">
//             <h2 className="text-3xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-8">
//                 Leadership
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
//                  {leadership.map((member) => (
//                     <FacultyCard key={member.name} member={member} />
//                 ))}
//             </div>
//         </div>

//         {/* Academic Staff Section */}
//         <div className="mb-16">
//             <h2 className="text-3xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-8">
//                 Academic Staff
//             </h2>
//             {ranks.map(rank => (
//                 <div key={rank} className="mb-12">
//                      <h3 className="text-2xl font-semibold text-slate-700 mb-6">{rank}s</h3>
//                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {academicStaff.filter(m => m.rank === rank).map(member => (
//                              <FacultyCard key={member.name} member={member} />
//                         ))}
//                      </div>
//                 </div>
//             ))}
//         </div>

//         {/* Supporting Staff Section */}
//         <div>
//             <h2 className="text-3xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-8">
//                 Supporting Staff
//             </h2>
//              {staffRanks.map(rank => (
//                 <div key={rank} className="mb-12">
//                      <h3 className="text-2xl font-semibold text-slate-700 mb-6">{rank}s</h3>
//                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {supportingStaff.filter(m => m.rank === rank).map(member => (
//                              <FacultyCard key={member.name} member={member} />
//                         ))}
//                      </div>
//                 </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaFlask,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Data can remain the same
const facultyData = [
  // ... (Your existing facultyData array goes here)
  {
    category: "Leadership",
    rank: "Dean",
    name: "Dr. Samir Patel",
    title: "Professor and I/C Dean",
    qualification: "Ph. D.",
    expertise:
      "Peptide Synthesis, Stability Indicating Method Development and Validation, Impurity Profiling",
    imageUrl: "/images/faculty_photo/Samir Patel.jpg", // Assumes images are in the /public folder
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/162173",
    email: "samirpatel.ph@charusat.ac.in",
    phone: "+91 2697 265161",
  },
  {
    category: "Leadership",
    rank: "Principal",
    name: "Dr. Manan Raval",
    title: "Professor and Principal",
    qualification: "Ph. D.",
    expertise: "Phyto-Chemical Analysis, Phyto-Pharmacology",
    imageUrl: "/images/faculty_photo/principal.png",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/162361",
    email: "mananraval.ph@charusat.ac.in",
    phone: "+91 2697 265141",
  },
  // Professors
  {
    category: "Academic Staff",
    rank: "Professor",
    name: "Dr. Gayatri Patel",
    title: "Professor",
    qualification: "Ph. D.",
    expertise: "Enhancement of Bioavailability of Complex Therapeutics",
    imageUrl: "/images/faculty_photo/Dr. Gayatri Patel.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/161745",
    email: "gayatripatel.ph@charusat.ac.in",
    phone: "+91 2697 265162",
  },
  {
    category: "Academic Staff",
    rank: "Professor",
    name: "Dr. Mrunali Patel",
    title: "Professor",
    qualification: "Ph. D.",
    expertise:
      "Nanocarrier Based Drug Delivery, Novel Formulation Development, Pharmaceutical Quality Assurance",
    imageUrl: "/images/faculty_photo/Dr. Mrunali Patel.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/161545",
    email: "mrunalipatel.ph@charusat.ac.in",
    phone: "+91 2697 265146",
  },
  {
    category: "Academic Staff",
    rank: "Professor",
    name: "Dr. Rashmin Patel",
    title: "Professor",
    qualification: "Ph. D.",
    expertise:
      "Pharmaceutical Quality Assurance, Analytical Method Development/Validation, Nanocarrier Based Drug Delivery",
    imageUrl: "/images/faculty_photo/Dr. Rashmin Patel.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/161527",
    email: "rashminpatel.ph@charusat.ac.in",
    phone: "+91 2697 265167",
  },
  // Associate Professors
  {
    category: "Academic Staff",
    rank: "Associate Professor",
    name: "Dr. Amit Patel",
    title: "Associate Professor",
    qualification: "Ph. D.",
    expertise: "Novel Drug Delivery Systems, Dissolution Enhancement",
    imageUrl: "/images/faculty_photo/Dr. Amit Patel.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/161377",
    email: "amitpatel.ph@charusat.ac.in",
    phone: "+91 2697 265153",
  },
  {
    category: "Academic Staff",
    rank: "Associate Professor",
    name: "Dr. Jalpa Suthar",
    title: "Associate Professor",
    qualification: "Ph. D.",
    expertise:
      "Clinical Research, Pharmacoepidemiology, Pharmacy Practice, Pharmacovigilance, Rational Drug Therapy",
    imageUrl: "/images/faculty_photo/Dr. Jalpa Suthar.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/161381",
    email: "jalpasuthar.ph@charusat.ac.in",
    phone: "+91 2697 265155",
  },
  {
    category: "Academic Staff",
    rank: "Associate Professor",
    name: "Dr. Ravish Patel",
    title: "Associate Professor",
    qualification: "Ph. D.",
    expertise:
      "Nano Carriers Based Drug Delivery Systems, Dissolution and Bioavailability Enhancement",
    imageUrl: "/images/faculty_photo/Dr. Ravish Patel.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/163489",
    email: "ravishpatel.ph@charusat.ac.in",
    phone: "+91 2697 265153",
  },
  {
    category: "Academic Staff",
    rank: "Associate Professor",
    name: "Dr. Nilay Solanki",
    title: "Associate Professor",
    qualification: "Ph. D.",
    expertise:
      "Biological Screening, Drug Discovery, Cancer Research and CNS Disorders",
    imageUrl: "/images/faculty_photo/Dr. Nilay Solanki.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/163485",
    email: "nilaysolanki.ph@charusat.ac.in",
    phone: "+91 2697 265148",
  },
  {
    category: "Academic Staff",
    rank: "Associate Professor",
    name: "Dr. Kanan Gamit",
    title: "Associate Professor",
    qualification: "Ph. D.",
    expertise: "Isolation of Phytoconstituents And Its Biological Evaluation",
    imageUrl: "/images/faculty_photo/Dr. Kanan Gamit.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/162269",
    email: "kanangamit.ph@charusat.ac.in",
    phone: "+91 2697 265156",
  },
  {
    category: "Academic Staff",
    rank: "Associate Professor",
    name: "Dr. Mehul Patel",
    title: "Associate Professor",
    qualification: "Ph. D.",
    expertise:
      "Analytical Method Development, Small Molecules Synthesis and Computation Drug Design",
    imageUrl: "/images/faculty_photo/Dr. Mehul Patel.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/162196",
    email: "mehulpatel.ph@charusat.ac.in",
    phone: "+91 2697 265148",
  },
  {
    category: "Academic Staff",
    rank: "Associate Professor",
    name: "Dr. Umang Shah",
    title: "Associate Professor",
    qualification: "Ph. D.",
    expertise:
      "Drug Design and Synthesis, Cytotoxicity Assay, Computational Study",
    imageUrl: "/images/faculty_photo/Dr. Umang Shah.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/162057",
    email: "umangshah.ph@charusat.ac.in",
    phone: "+91 2697 265148",
  },
  // Assistant Professors
  {
    category: "Academic Staff",
    rank: "Assistant Professor",
    name: "Dr. Rajendra Kotadiya",
    title: "Assistant Professor",
    qualification: "Ph. D.",
    expertise: "Analytical Method Development of Pharmaceuticals",
    imageUrl: "/images/faculty_photo/Dr. Rajendra Kotadiya.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/161379",
    email: "rajendrakotadiya.ph@charusat.ac.in",
    phone: "+91 2697 265146",
  },
  {
    category: "Academic Staff",
    rank: "Assistant Professor",
    name: "Dr. Swayamprakash Patel",
    title: "Assistant Professor",
    qualification: "Ph. D.",
    expertise:
      "NDDS, Nano-Pharmaceuticals, Artificial Intelligence, Intellectual Property Rights",
    imageUrl: "/images/faculty_photo/Dr. Swayamprakash Patel.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/162142",
    email: "swayamprakashpatel.ph@charusat.ac.in",
    phone: "+91 2697 265148",
  },
  {
    category: "Academic Staff",
    rank: "Assistant Professor",
    name: "Dr. Jagruti Desai",
    title: "Assistant Professor",
    qualification: "Ph. D.",
    expertise:
      "Novel Drug Delivery, Lymphatic Targeting, Oral Formulation, Lyophilization",
    imageUrl: "/images/faculty_photo/Dr. Jagruti Desai.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/163502",
    email: "jagrutidesai.ph@charusat.ac.in",
    phone: "+91 2697 265147",
  },
  {
    category: "Academic Staff",
    rank: "Assistant Professor",
    name: "Dr. Adil Patel",
    title: "Assistant Professor",
    qualification: "Ph. D.",
    expertise:
      "Novel Formulation Development and Evaluation Using QBD Approach",
    imageUrl: "/images/faculty_photo/Adil_Patel_1.jpg",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/162167",
    email: "adilpatel.ph@charusat.ac.in",
    phone: "+91 2697 265148",
  },
  {
    category: "Academic Staff",
    rank: "Assistant Professor",
    name: "Mr. Hardik Koria",
    title: "Assistant Professor",
    qualification: "M. Pharm.",
    expertise: "Cardiovascular Research, Preclinical Studies",
    imageUrl: "/images/faculty_photo/Mr. Hardik Koria.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/163409",
    email: "hardikkoria.ph@charusat.ac.in",
    phone: "+91 2697 265155",
  },
  {
    category: "Academic Staff",
    rank: "Assistant Professor",
    name: "Dr. Payal Chauhan",
    title: "Assistant Professor",
    qualification: "Ph. D.",
    expertise: "Drug Analysis, Stability Study",
    imageUrl: "/images/faculty_photo/Ms. Payal Chauhan.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in//profile/162327",
    email: "payalchauhan.ph@charusat.ac.in",
    phone: "+91 2697 265147",
  },
  {
    category: "Academic Staff",
    rank: "Assistant Professor",
    name: "Mr. Alkesh Patel",
    title: "Assistant Professor",
    qualification: "M. Pharm.",
    expertise:
      "Molecular Biology, Preclinical Study, Oncology, Cancer Stem Cells Research, Immunotherapy",
    imageUrl: "/images/faculty_photo/Mr. Alkesh Patel.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/163503",
    email: "alkeshpatel.ph@charusat.ac.in",
    phone: "+91 2697 265148",
  },
  {
    category: "Academic Staff",
    rank: "Assistant Professor",
    name: "Mr. Nikunj Parekh",
    title: "Assistant Professor",
    qualification: "M. Pharm.",
    expertise:
      "Computer-aided drug design, Process Chemistry, Impurity profiling and Chromatogrpahic techniques.",
    imageUrl: "/images/faculty_photo/Nikunj_Parekh.jpg",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/162185",
    email: "nikunjparekh.ph@charusat.ac.in", // Email added
    phone: "+91 2697 265148", // Phone added
  },
  {
    category: "Academic Staff",
    rank: "Assistant Professor",
    name: "Dr. Milap Patel",
    title: "Assistant Professor",
    qualification: "Ph.D.",
    expertise:
      "Preclinical Research, Toxicity Study, Ocular Pharmacology and Respiratory Pharmacology",
    imageUrl: "/images/faculty_photo/Mr_Milap_Patel.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/163404",
    email: "milappatel.ph@charusat.ac.in",
    phone: "+91 2697 265138",
  },
  {
    category: "Academic Staff",
    rank: "Assistant Professor",
    name: "Ms. Richa Dave",
    title: "Assistant Professor",
    qualification: "M. Pharm.",
    expertise:
      "Novel Nanocarrier-Based Drug Delivery, Targeted Delivery, Cancer Research",
    imageUrl: "/images/faculty_photo/richa_dave.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/161698",
    email: "richadave.ph@charusat.ac.in",
    phone: "+91 2697 265153",
  },
  {
    category: "Academic Staff",
    rank: "Assistant Professor",
    name: "Dr. Viral Patel",
    title: "Assistant Professor",
    qualification: "Ph. D.",
    expertise: "Novel Drug Delivery Systems, Parenteral Drug Delivery Systems",
    imageUrl: "/images/faculty_photo/Dr. Viral Patel.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/253908",
    email: "viralpatel.ph@charusat.ac.in",
    phone: "+91-2697-265148",
  },
  {
    category: "Academic Staff",
    rank: "Assistant Professor",
    name: "Dr. Archita Patel",
    title: "Assistant Professor",
    qualification: "Ph. D.",
    expertise: "Development and Validation of Analytical Methods Using DOE",
    imageUrl: "/images/faculty_photo/ap.png",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/240032",
    email: "architapatel.ph@charusat.ac.in",
    phone: "+91-2697-265149",
  },
  {
    category: "Academic Staff",
    rank: "Assistant Professor",
    name: "Ms. Bhagyabhumi Shah",
    title: "Assistant Professor",
    qualification: "M. Pharm.",
    expertise: "Preclinical Studies and Gastrointestinal Studies",
    imageUrl: "/images/faculty_photo/Bhagyabhumi Shah.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/239739",
    email: "bhagyabhumishah.ph@charusat.ac.in",
    phone: "+91-2697-265148",
  },
  {
    category: "Academic Staff",
    rank: "Assistant Professor",
    name: "Dr. Nitin Amarshibhai Lunagariya",
    title: "Assistant Professor",
    qualification: "Ph. D.",
    expertise:
      "Synthesis and Chemical Modification of Organic and Natural Products Inspired Scaffolds",
    imageUrl: "/images/faculty_photo/Dr. Nitin Lunagariya.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/253926",
    email: "nitinlunagariya.ph@charusat.ac.in",
    phone: "+91-2697-265148",
  },
  {
    category: "Academic Staff",
    rank: "Assistant Professor",
    name: "Mr. Keval Y. Raval",
    title: "Assistant Professor",
    qualification: "M. Pharm.",
    expertise:
      "Molecular Docking, Pharmacogenomics, Cancer Research, and Diabetes Research",
    imageUrl: "/images/faculty_photo/KevalRaval.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/412604",
    email: "kevalraval.ph@charusat.ac.in",
    phone: "+91-2697-265153",
  },
  {
    category: "Academic Staff",
    rank: "Assistant Professor",
    name: "Dr. Purvi A. Shah",
    title: "Assistant Professor",
    qualification: "Ph.D.",
    expertise: "Natural Products Chemistry",
    imageUrl: "/images/faculty_photo/Purvi Shah.JPG",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/274304",
    email: "purvishah.ph@charusat.ac.in",
    phone: "+91-2697-265138",
  },
  {
    category: "Academic Staff",
    rank: "Assistant Professor",
    name: "Ms. Shachi Sanni Patel",
    title: "Assistant Professor",
    qualification: "M. Pharm.",
    expertise:
      "Regulatory Affairs of Pharmaceuticals and PhytoPharmaceuticals, Formulation and Development, Alternate Medicine, IPR",
    imageUrl: "/images/faculty_photo/Shachi Patel.jpg",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/463910",
    email: "shachikapatel.ph@charusat.ac.in",
    phone: "+91-2697-265138",
  },
  {
    category: "Academic Staff",
    rank: "Assistant Professor",
    name: "Dr. Swati Sharma",
    title: "Assistant Professor",
    qualification: "Ph.D.",
    expertise: "Tissue Engineering and Regenerative Medicine",
    imageUrl: "/images/faculty_photo/Swati Sharma.jpg",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/401959",
    email: "swatisharma.ph@charusat.ac.in",
    phone: "+91-2697-265138",
  },
  {
    category: "Academic Staff",
    rank: "Assistant Professor",
    name: "Dr. Arun K. Soni",
    title: "Assistant Professor",
    qualification: "Ph.D.",
    expertise:
      "Preclinical studies like Cardio-metabolic syndrome, Male-female endocrine diseases, cancer research, Toxicological studies as per OECD",
    imageUrl: "/images/faculty_photo/Dr. Arun Soni.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/210822",
    email: "arunsoni.ph@charusat.ac.in",
    phone: "+91-2697-265146",
  },
  {
    category: "Academic Staff",
    rank: "Assistant Professor",
    name: "Dr. Nancy Tripathi",
    title: "Assistant Professor",
    qualification: "Ph.D.",
    expertise: "Computer-aided Drug Design & Development, Cheminformatics",
    imageUrl: "/images/faculty_photo/Nancy_Tripathi.webp",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/513250",
    email: "nancytripathi.ph@charusat.ac.in",
    phone: "+91-2697-265138",
  },
  // Supporting Staff
  {
    category: "Supporting Staff",
    rank: "Laboratory Technician",
    name: "Mr. Jalpesh Patel",
    imageUrl: "/images/supporting_staff/Mr. Jalpesh Patel.webp",
  },
  {
    category: "Supporting Staff",
    rank: "Laboratory Technician",
    name: "Mr. Minal Patel",
    imageUrl: "/images/supporting_staff/Mr. Minal Patel.webp",
  },
  {
    category: "Supporting Staff",
    rank: "Laboratory Technician",
    name: "Mr. Jignesh Patel",
    imageUrl: "/images/supporting_staff/Mr. Jignesh Patel.webp",
  },
  {
    category: "Supporting Staff",
    rank: "Laboratory Technician",
    name: "Mr. Kamal Patel",
    imageUrl: "/images/supporting_staff/Mr. Kamal Patel.webp",
  },
  {
    category: "Supporting Staff",
    rank: "Laboratory Technician",
    name: "Mr. Chintan Patel",
    imageUrl: "/images/supporting_staff/Mr. Chintan Patel.webp",
  },
  {
    category: "Supporting Staff",
    rank: "Laboratory Technician",
    name: "Ms. Hiral Patel",
    imageUrl: "/images/supporting_staff/Ms. Hiral Patel.webp",
  },
  {
    category: "Supporting Staff",
    rank: "Assistant Librarian",
    name: "Dr. Meghna Mehta",
    imageUrl: "/images/supporting_staff/Dr. Meghna Mehta.webp",
  },
  {
    category: "Supporting Staff",
    rank: "Office Executive",
    name: "Mr. Jaydeep Parmar",
    imageUrl: "/images/supporting_staff/Mr. Jaydeep Parmar.webp",
  },
  {
    category: "Supporting Staff",
    rank: "Peon",
    name: "Mr. Rajendra Patel",
    imageUrl: "/images/supporting_staff/Rajendra_Patel.jpg",
  },
];

// Reusable Faculty Card Component
function FacultyCard({ member }) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md border border-gray-200/80 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative w-full" style={{ paddingTop: "100%" }}>
        <Image
          src={member.imageUrl}
          alt={`Photo of ${member.name}`}
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="flex flex-col flex-grow p-5">
        <div className="text-center">
          <h3 className="text-xl font-bold text-[#202A44]">{member.name}</h3>
          {member.title && (
            <p className="text-[#FBCB0A] font-semibold text-sm mt-1">
              {member.title}
            </p>
          )}
          {member.qualification && (
            <p className="text-gray-500 text-xs mt-1">{member.qualification}</p>
          )}
        </div>

        {member.expertise && (
          <div className="mt-4 pt-4 border-t border-gray-200 text-left flex-grow">
            <p className="font-semibold text-gray-800 text-sm mb-1">
              Area of Expertise
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {member.expertise}
            </p>
          </div>
        )}

        {/* Contact Info - ALWAYS VISIBLE */}
        {(member.profileUrl || member.email || member.phone) && (
          <div className="mt-auto pt-4 border-t border-gray-200">
            <div className="flex justify-center space-x-4 mt-2">
              {member.profileUrl && (
                <a
                  href={member.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#FBCB0A] transition-colors"
                  title="View Profile"
                >
                  <FaUser size={20} />
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="text-gray-500 hover:text-[#FBCB0A] transition-colors"
                  title={member.email}
                >
                  <FaEnvelope size={20} />
                </a>
              )}
              {member.phone && (
                <a
                  href={`tel:${member.phone}`}
                  className="text-gray-500 hover:text-[#FBCB0A] transition-colors"
                  title={member.phone}
                >
                  <FaPhone size={20} />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Simplified Card for Supporting Staff
function StaffCard({ member }) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md border border-gray-200/80 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image Container - Same as Faculty */}
      <div className="relative w-full" style={{ paddingTop: "100%" }}>
        <Image
          src={member.imageUrl}
          alt={`Photo of ${member.name}`}
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="flex flex-col flex-grow p-5 text-center">
        <h3 className="text-lg font-bold text-[#202A44]">{member.name}</h3>
        {member.rank && (
          <p className="text-[#FBCB0A] font-semibold text-sm mt-1">{member.rank}</p>
        )}
      </div>
    </div>
  );
}

// Section Header Component
function SectionHeader({ title, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex items-center text-left mb-12"
    >
      <div className="p-4 bg-yellow-100 text-[#FBCB0A] rounded-full mr-5">
        {icon}
      </div>
      <div>
        <h2 className="text-3xl font-bold text-[#202A44]">{title}</h2>
        <div className="w-24 h-1.5 bg-[#FBCB0A] mt-2 rounded-full"></div>
      </div>
    </motion.div>
  );
}

// Main Page Component
export default function FacultyPage() {
  const leadership = facultyData.filter((m) => m.category === "Leadership");
  const academicStaff = facultyData.filter(
    (m) => m.category === "Academic Staff"
  );
  const supportingStaff = facultyData.filter(
    (m) => m.category === "Supporting Staff"
  );

  const ranks = ["Professor", "Associate Professor", "Assistant Professor"]; // Enforce order
  const staffRanks = [...new Set(supportingStaff.map((m) => m.rank))];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#202A44] text-white pt-24 pb-16 text-center">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            Meet Our Esteemed Faculty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-3xl mx-auto text-lg text-gray-300"
          >
            Dedicated professionals and renowned experts shaping the future of
            pharmacy through education, research, and innovation.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Leadership Section */}
        <section className="mb-20">
          <SectionHeader title="Leadership" icon={<FaUserTie size={28} />} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {leadership.map((member) => (
              <FacultyCard key={member.name} member={member} />
            ))}
          </div>
        </section>

        {/* Academic Staff Section */}
        <section className="mb-20">
          <SectionHeader title="Academic Staff" icon={<FaFlask size={28} />} />
          {ranks.map((rank) => {
            const members = academicStaff.filter((m) => m.rank === rank);
            if (members.length === 0) return null;
            return (
              <div key={rank} className="mb-16">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 pl-4 border-l-4 border-[#FBCB0A]">
                  {rank}s
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {members.map((member) => (
                    <FacultyCard key={member.name} member={member} />
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Supporting Staff Section */}
        <section>
          <SectionHeader
            title="Supporting Staff"
            icon={<FaUsers size={28} />}
          />
          {staffRanks.map((rank) => {
            const members = supportingStaff.filter((m) => m.rank === rank);
            if (members.length === 0) return null;
            return (
              <div key={rank} className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 pl-4 border-l-4 border-[#FBCB0A]">
                  {rank}s
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                  {members.map((member) => (
                    <StaffCard key={member.name} member={member} />
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
