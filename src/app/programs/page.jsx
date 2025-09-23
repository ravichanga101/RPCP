// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { 
//   GraduationCap, 
//   BookOpen, 
//   Users, 
//   Clock, 
//   DollarSign,
//   CheckCircle,
//   ArrowRight,
//   FileText,
//   Download,
//   Phone,
//   Mail
// } from "lucide-react";

// export default function ProgramsPage() {
//   const BROCHURE_URL = "https://drive.google.com/drive/folders/10-XqFw6ISXnDeyajK8oB3YIIj6NfrIyO";

//   const programs = [
//     {
//       title: "Bachelor of Pharmacy",
//       subtitle: "B.Pharm",
//       duration: "04 Years",
//       intake: "100 Seats",
//       fees: "Rs 1,55,000/- per year",
//       description: "Comprehensive pharmacy education with hands-on training and industry exposure",
//       brochure: BROCHURE_URL,
//       features: [
//         "PCI Approved Program",
//         "Industry Internship",
//         "Practical Training",
//         "Research Projects",
//         "Industry Visits",
//         "Career Guidance"
//       ],
//       eligibility: "10+2 with Physics, Chemistry, and Biology/Mathematics",
//       career: [
//         "Community Pharmacist",
//         "Hospital Pharmacist",
//         "Clinical Research",
//         "Pharmaceutical Sales",
//         "Quality Control",
//         "Regulatory Affairs"
//       ]
//     },
//     {
//       title: "Master of Pharmacy (Pharmaceutical Technology)",
//       subtitle: "M.Pharm in Pharmaceutical Technology",
//       duration: "02 Years",
//       intake: "15 Seats",
//       fees: "Rs 2,00,000/- per year",
//       description: "Advanced study focused on formulation development and pharmaceutical technology.",
//       brochure: BROCHURE_URL,
//       features: [
//         "Specialized Curriculum",
//         "Research Projects",
//         "Industry Collaboration",
//         "Publication Opportunities",
//         "Conference Participation",
//         "Advanced Lab Training"
//       ],
//       eligibility: "B.Pharm with 55% marks",
//       career: [
//         "Formulation Scientist",
//         "R&D Scientist",
//         "Process Development Engineer",
//         "Academician"
//       ]
//     },
//     {
//       title: "Master of Pharmacy (Pharmacology)",
//       subtitle: "M.Pharm in Pharmacology",
//       duration: "02 Years",
//       intake: "15 Seats",
//       fees: "Rs 2,00,000/- per year",
//       description: "Specialization in drug action, safety, efficacy and preclinical/clinical research.",
//       brochure: BROCHURE_URL,
//       features: [
//         "Animal House Training",
//         "Clinical Research Exposure",
//         "Toxicology Studies",
//         "Publication Opportunities"
//       ],
//       eligibility: "B.Pharm with 55% marks",
//       career: [
//         "Clinical Research Associate",
//         "Pharmacovigilance Officer",
//         "Research Scientist",
//         "Academician"
//       ]
//     },
//     {
//       title: "Master of Pharmacy (Pharmaceutical Quality Assurance)",
//       subtitle: "M.Pharm in Pharmaceutical Quality Assurance",
//       duration: "02 Years",
//       intake: "15 Seats",
//       fees: "Rs 2,00,000/- per year",
//       description: "Focus on cGMP, QA systems, validation, audits and regulatory compliance.",
//       brochure: BROCHURE_URL,
//       features: [
//         "QA Systems Training",
//         "Validation & Qualification",
//         "Data Integrity Practices",
//         "Regulatory Compliance"
//       ],
//       eligibility: "B.Pharm with 55% marks",
//       career: [
//         "Quality Assurance Manager",
//         "Quality Control Specialist",
//         "Validation Engineer",
//         "Regulatory Affairs Associate"
//       ]
//     },
//     {
//       title: "Master of Pharmacy (Pharmacy Practice)",
//       subtitle: "M.Pharm in Pharmacy Practice",
//       duration: "02 Years",
//       intake: "15 Seats",
//       fees: "Rs 2,00,000/- per year",
//       description: "Clinical pharmacy practice, patient counseling, therapeutics and hospital exposure.",
//       brochure: BROCHURE_URL,
//       features: [
//         "Hospital Rotations",
//         "Therapeutic Drug Monitoring",
//         "Patient Counseling",
//         "Pharmacotherapy Rounds"
//       ],
//       eligibility: "B.Pharm with 55% marks",
//       career: [
//         "Clinical Pharmacist",
//         "Hospital Pharmacist",
//         "Pharmacy Practice Researcher",
//         "Academician"
//       ]
//     },
//     {
//       title: "Master of Pharmacy (Regulatory Affairs)",
//       subtitle: "M.Pharm in Regulatory Affairs",
//       duration: "02 Years",
//       intake: "15 Seats",
//       fees: "Rs 2,00,000/- per year",
//       description: "Drug regulations, dossier preparation, submissions and global regulatory guidelines.",
//       brochure: BROCHURE_URL,
//       features: [
//         "CTD/eCTD Dossier Training",
//         "Global Guidelines (US/EU/ICH)",
//         "Labeling & Submissions",
//         "Compliance Systems"
//       ],
//       eligibility: "B.Pharm with 55% marks",
//       career: [
//         "Regulatory Affairs Officer",
//         "Documentation Specialist",
//         "Compliance Associate",
//         "Academician"
//       ]
//     },
//     {
//       title: "Master of Pharmacy (Pharmaceutical Chemistry)",
//       subtitle: "M.Pharm in Pharmaceutical Chemistry",
//       duration: "02 Years",
//       intake: "15 Seats",
//       fees: "Rs 2,00,000/- per year",
//       description: "Medicinal chemistry, drug design, synthesis and analytical characterization.",
//       brochure: BROCHURE_URL,
//       features: [
//         "Drug Design Projects",
//         "Analytical Method Development",
//         "Spectral Characterization",
//         "Publication Opportunities"
//       ],
//       eligibility: "B.Pharm with 55% marks",
//       career: [
//         "Medicinal Chemist",
//         "Analytical Scientist",
//         "R&D Scientist",
//         "Academician"
//       ]
//     }
//   ];

//   // Page sections simplified for a cleaner collegiate look

//   return (
//     <div className="min-h-screen pt-16">
//       {/* Hero Section - simple, clean */}
//       <section className="bg-white border-b">
//         <div className="container mx-auto px-4 py-12 lg:py-16">
//           <div className="flex items-start gap-4 mb-4">
//             <GraduationCap className="h-8 w-8 text-emerald-600" />
//             <div>
//               <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Programs Offered</h1>
//               <p className="text-gray-600 mt-2 max-w-3xl">Explore undergraduate and postgraduate programs designed to build strong foundations and advanced expertise in pharmaceutical sciences.</p>
//             </div>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-3">
//             <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
//               <FileText className="h-4 w-4 mr-2" />
//               Apply Now
//             </Button>
//             <a href={BROCHURE_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
//               <Button size="sm" variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
//                 <Download className="h-4 w-4 mr-2" />
//                 Download Brochure
//               </Button>
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Programs List */}

      

//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="space-y-8">
//             {programs.map((program, index) => (
//               <div key={index}>
//                 <Card className="border border-gray-200 shadow-sm">
//                   <CardContent className="p-6">
//                     <div className="grid lg:grid-cols-3 gap-6">
//                       <div className="lg:col-span-2">
//                         <h2 className="text-2xl font-semibold text-gray-900">{program.title}</h2>
//                         <p className="text-sm text-gray-500 mt-1">{program.subtitle}</p>
//                         <p className="text-gray-700 mt-4">{program.description}</p>
//                         {program.specializations && (
//                           <div className="mt-4">
//                             <h3 className="text-sm font-semibold text-gray-900 mb-2">Specializations</h3>
//                             <ul className="list-disc list-inside text-gray-700 space-y-1">
//                               {program.specializations.map((spec, idx) => (
//                                 <li key={idx}>{spec}</li>
//                               ))}
//                             </ul>
//                           </div>
//                         )}
//                       </div>
//                       <div className="flex flex-col justify-between">
//                         <div className="grid grid-cols-1 gap-3">
//                           <div className="flex items-center justify-between rounded-md bg-white border px-3 py-2">
//                             <span className="text-gray-600 flex items-center"><Clock className="h-4 w-4 mr-2 text-emerald-600" />Duration</span>
//                             <span className="font-semibold text-gray-900">{program.duration}</span>
//                           </div>
//                           <div className="flex items-center justify-between rounded-md bg-white border px-3 py-2">
//                             <span className="text-gray-600 flex items-center"><Users className="h-4 w-4 mr-2 text-emerald-600" />Intake</span>
//                             <span className="font-semibold text-gray-900">{program.intake}</span>
//                           </div>
//                           <div className="flex items-center justify-between rounded-md bg-white border px-3 py-2">
//                             <span className="text-gray-600 flex items-center"><DollarSign className="h-4 w-4 mr-2 text-emerald-600" />Fees</span>
//                             <span className="font-semibold text-gray-900">{program.fees}</span>
//                           </div>
//                         </div>
//                         <div className="mt-4 flex gap-2">
//                           <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
//                             <FileText className="h-4 w-4 mr-2" />
//                             Apply Now
//                           </Button>
//                           {program.brochure && (
//                             <a href={program.brochure} target="_blank" rel="noopener noreferrer" className="flex-1">
//                               <Button variant="outline" className="w-full border-emerald-600 text-emerald-700 hover:bg-emerald-50">
//                                 <Download className="h-4 w-4 mr-2" />
//                                 Brochure
//                               </Button>
//                             </a>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="mt-6 grid lg:grid-cols-2 gap-6">
//                       <div>
//                         <h3 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h3>
//                         <div className="grid sm:grid-cols-2 gap-2">
//                           {program.features.map((feature, idx) => (
//                             <div key={idx} className="flex items-start gap-2 rounded-md bg-white border px-3 py-2">
//                               <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
//                               <span className="text-gray-700">{feature}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                       <div>
//                         <h3 className="text-sm font-semibold text-gray-900 mb-3">Eligibility & Career</h3>
//                         <div className="rounded-md bg-white border p-3 mb-3">
//                           <p className="text-gray-700"><span className="font-medium">Eligibility:</span> {program.eligibility}</p>
//                         </div>
//                         <ul className="grid sm:grid-cols-2 gap-2">
//                           {program.career.map((career, idx) => (
//                             <li key={idx} className="flex items-center text-gray-700"><ArrowRight className="h-4 w-4 text-emerald-600 mr-2" />{career}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* Simple Contact Strip */}
//       <section className="bg-white border-t">
//         <div className="container mx-auto px-4 py-8">
//           <div className="grid sm:grid-cols-3 gap-4 text-sm">
//             <div className="flex items-center gap-2">
//               <Phone className="h-4 w-4 text-emerald-600" />
//               <span className="text-gray-700">+91 7052 101 786</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Mail className="h-4 w-4 text-emerald-600" />
//               <span className="text-gray-700">admissions@rpcp.charusat.ac.in</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <GraduationCap className="h-4 w-4 text-emerald-600" />
//               <span className="text-gray-700">Visit campus by appointment</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Ph.D. CTA */}
//       <section className="bg-gray-50 border-t">
//         <div className="container mx-auto px-4 py-8">
//           <p className="text-gray-800">
//             For Ph D program 0  <a href="/research" className="text-emerald-700 underline hover:text-emerald-800">Click here...</a>
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { 
//   GraduationCap, 
//   FlaskConical,
//   Users, 
//   Clock, 
//   IndianRupee,
//   CheckCircle,
//   ArrowRight,
//   FileText,
//   Download,
//   Phone,
//   Mail,
//   Building,
//   Sparkles,
//   ChevronRight
// } from "lucide-react";

// // --- DATA (remains the same) ---
// const BROCHURE_URL = "https://drive.google.com/drive/folders/10-XqFw6ISXnDeyajK8oB3YIIj6NfrIyO";
// const programs = [
//     {
//         title: "Bachelor of Pharmacy",
//         subtitle: "B.Pharm",
//         level: "Undergraduate",
//         duration: "4 Years",
//         intake: "100 Seats",
//         fees: "₹ 1,55,000",
//         description: "A comprehensive undergraduate program providing a strong foundation in pharmaceutical sciences, preparing students for a diverse range of careers in the pharmacy profession.",
//         features: ["PCI Approved Program", "Industry Internship", "Practical Training", "Research Projects", "Industry Visits", "Career Guidance"],
//         eligibility: "10+2 with Physics, Chemistry, and Biology/Mathematics.",
//         career: ["Community Pharmacist", "Hospital Pharmacist", "Clinical Research", "Pharmaceutical Sales", "Quality Control", "Regulatory Affairs"]
//     },
//     {
//         title: "M.Pharm (Pharmaceutical Technology)",
//         subtitle: "Master of Pharmacy",
//         level: "Postgraduate",
//         duration: "2 Years",
//         intake: "15 Seats",
//         fees: "₹ 2,00,000",
//         description: "An advanced program focused on the principles of drug formulation, development, and manufacturing, emphasizing modern technological approaches.",
//         features: ["Specialized Curriculum", "Research Projects", "Industry Collaboration", "Publication Opportunities", "Conference Participation", "Advanced Lab Training"],
//         eligibility: "B.Pharm with a minimum of 55% marks.",
//         career: ["Formulation Scientist", "R&D Scientist", "Process Development Engineer", "Academician"]
//     },
//     {
//         title: "M.Pharm (Pharmacology)",
//         subtitle: "Master of Pharmacy",
//         level: "Postgraduate",
//         duration: "2 Years",
//         intake: "15 Seats",
//         fees: "₹ 2,00,000",
//         description: "A specialization focused on the study of drug action, safety, and efficacy, with extensive training in preclinical and clinical research methodologies.",
//         features: ["Animal House Training", "Clinical Research Exposure", "Toxicology Studies", "Publication Opportunities"],
//         eligibility: "B.Pharm with a minimum of 55% marks.",
//         career: ["Clinical Research Associate", "Pharmacovigilance Officer", "Research Scientist", "Academician"]
//     },
//     {
//         title: "M.Pharm (Quality Assurance)",
//         subtitle: "Master of Pharmacy",
//         level: "Postgraduate",
//         duration: "2 Years",
//         intake: "15 Seats",
//         fees: "₹ 2,00,000",
//         description: "A focused curriculum on cGMP, quality management systems, validation, audits, and global regulatory compliance in the pharmaceutical industry.",
//         features: ["QA Systems Training", "Validation & Qualification", "Data Integrity Practices", "Regulatory Compliance"],
//         eligibility: "B.Pharm with a minimum of 55% marks.",
//         career: ["Quality Assurance Manager", "Quality Control Specialist", "Validation Engineer", "Regulatory Affairs Associate"]
//     },
// ];

// // --- MAIN PAGE COMPONENT ---
// export default function ProgramsPage() {
//   const [selectedProgram, setSelectedProgram] = useState(programs[0]);

//   const detailVariants = {
//     hidden: { opacity: 0, x: 20 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
//     exit: { opacity: 0, x: -20, transition: { duration: 0.2, ease: "easeIn" } }
//   };

//   const StatCard = ({ icon, label, value }) => (
//     <div className="bg-slate-50/80 p-4 rounded-lg border border-slate-200">
//       <div className="flex items-center gap-3">
//         <div className="bg-amber-100 p-2 rounded-full">
//           {icon}
//         </div>
//         <div>
//           <p className="text-sm text-slate-500">{label}</p>
//           <p className="font-bold text-slate-800">{value}</p>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="bg-slate-50">
//       {/* Hero Section */}
//       <section className="relative bg-slate-900 text-white pt-28 pb-16 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
//         <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_500px_at_50%_200px,#f59e0b20,transparent)]"></div>
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Academic Programs</h1>
//           <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
//             Explore our meticulously designed programs to launch and advance your career in pharmaceutical sciences.
//           </p>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          
//           {/* Left Pane: Program List */}
//           <aside className="lg:col-span-1 lg:sticky lg:top-28">
//             <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Select a Program</h2>
//             <div className="space-y-2">
//               {programs.map((program) => (
//                 <button
//                   key={program.title}
//                   onClick={() => setSelectedProgram(program)}
//                   className={`w-full text-left p-4 rounded-lg transition-all duration-200 border-l-4 ${
//                     selectedProgram.title === program.title
//                       ? 'bg-white shadow-sm border-amber-500'
//                       : 'bg-transparent hover:bg-white/60 border-transparent hover:border-slate-300'
//                   }`}
//                 >
//                   <p className={`font-semibold ${selectedProgram.title === program.title ? 'text-amber-600' : 'text-slate-800'}`}>{program.title}</p>
//                   <p className="text-sm text-slate-500">{program.level}</p>
//                 </button>
//               ))}
//             </div>
//           </aside>

//           {/* Right Pane: Program Details */}
//           <main className="lg:col-span-3">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={selectedProgram.title}
//                 variants={detailVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//               >
//                 <Card className="bg-white/80 backdrop-blur-sm border-slate-200/80 shadow-lg">
//                   <CardContent className="p-8">
//                     {/* Header */}
//                     <div className="border-b border-slate-200 pb-6 mb-6">
//                       <p className="font-semibold text-amber-600 mb-1">{selectedProgram.subtitle}</p>
//                       <h2 className="text-3xl font-bold text-slate-900">{selectedProgram.title}</h2>
//                       <p className="mt-3 text-slate-600 max-w-prose">{selectedProgram.description}</p>
//                     </div>

//                     {/* Stats */}
//                     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
//                       <StatCard icon={<Clock className="h-5 w-5 text-amber-600" />} label="Duration" value={selectedProgram.duration} />
//                       <StatCard icon={<Users className="h-5 w-5 text-amber-600" />} label="Annual Intake" value={selectedProgram.intake} />
//                       <StatCard icon={<IndianRupee className="h-5 w-5 text-amber-600" />} label="Fees (per year)" value={selectedProgram.fees} />
//                     </div>

//                     {/* Details Grids */}
//                     <div className="grid md:grid-cols-2 gap-8">
//                       <div>
//                         <h3 className="font-semibold text-slate-800 mb-4">Key Features</h3>
//                         <ul className="space-y-3">
//                           {selectedProgram.features.map(f => (
//                             <li key={f} className="flex items-start gap-3 text-slate-700">
//                               <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
//                               <span>{f}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                        <div>
//                         <h3 className="font-semibold text-slate-800 mb-4">Career Paths</h3>
//                         <ul className="space-y-3">
//                           {selectedProgram.career.map(c => (
//                             <li key={c} className="flex items-start gap-3 text-slate-700">
//                               <Sparkles className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
//                               <span>{c}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
                    
//                      {/* Eligibility & Actions */}
//                     <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-4 items-center">
//                         <div className="flex-grow">
//                              <p className="text-sm font-semibold text-slate-800">Eligibility Criteria</p>
//                              <p className="text-sm text-slate-600">{selectedProgram.eligibility}</p>
//                         </div>
//                         <div className="flex-shrink-0 flex gap-3 w-full sm:w-auto">
//                             <Button className="flex-1 bg-slate-800 hover:bg-slate-900 shadow-sm"><FileText className="h-4 w-4 mr-2" /> Apply Now</Button>
//                             <a href={BROCHURE_URL} target="_blank" rel="noopener noreferrer" className="flex-1">
//                                 <Button variant="outline" className="w-full bg-white"><Download className="h-4 w-4 mr-2" /> Brochure</Button>
//                             </a>
//                         </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </AnimatePresence>
//           </main>
//         </div>
//       </section>

//        {/* Next Steps / Contact Section */}
//       <section className="bg-white border-t border-slate-200">
//         <div className="container mx-auto px-4 py-16">
//           <div className="text-center mb-12">
//              <h2 className="text-3xl font-bold text-slate-900">Have Questions or Ready to Advance?</h2>
//              <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">Our team is ready to assist you with admissions and advanced research opportunities.</p>
//           </div>
//           <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
//             <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
//                 <h3 className="text-xl font-bold text-slate-800 mb-4">Admissions & Enquiries</h3>
//                 <div className="space-y-4 text-slate-700">
//                    <a href="tel:+917052101786" className="flex items-center gap-3 group">
//                      <Phone className="h-5 w-5 text-amber-500" />
//                      <span className="group-hover:text-amber-600 transition-colors">+91 7052 101 786</span>
//                    </a>
//                     <a href="mailto:admissions@rpcp.charusat.ac.in" className="flex items-center gap-3 group">
//                      <Mail className="h-5 w-5 text-amber-500" />
//                      <span className="group-hover:text-amber-600 transition-colors">admissions@rpcp.charusat.ac.in</span>
//                    </a>
//                 </div>
//             </div>
//              <div className="bg-slate-800 text-white p-8 rounded-lg">
//                 <h3 className="text-xl font-bold text-white mb-4">Doctoral (Ph.D.) Program</h3>
//                 <p className="text-slate-300 mb-6">Explore cutting-edge research and contribute to the future of pharmacy with our doctoral program.</p>
//                 <Link href="/research">
//                     <Button size="lg" variant="secondary" className="w-full bg-white text-slate-800 hover:bg-slate-200 shadow">
//                         Explore Ph.D. Research
//                         <ArrowRight className="h-4 w-4 ml-2" />
//                     </Button>
//                 </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }




// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { 
//   GraduationCap, 
//   Users, 
//   Clock, 
//   IndianRupee,
//   CheckCircle,
//   ArrowRight,
//   FileText,
//   Download,
//   Phone,
//   Mail,
//   Building,
//   Sparkles,
//   ChevronRight
// } from "lucide-react";

// // --- DATA (remains the same) ---
// const BROCHURE_URL = "https://drive.google.com/drive/folders/10-XqFw6ISXnDeyajK8oB3YIIj6NfrIyO";
// const programs = [
//     {
//         title: "Bachelor of Pharmacy",
//         subtitle: "B.Pharm",
//         level: "Undergraduate",
//         duration: "4 Years",
//         intake: "100 Seats",
//         fees: "₹ 1,55,000",
//         description: "A comprehensive undergraduate program providing a strong foundation in pharmaceutical sciences, preparing students for a diverse range of careers in the pharmacy profession.",
//         features: ["PCI Approved Program", "Industry Internship", "Practical Training", "Research Projects", "Industry Visits", "Career Guidance"],
//         eligibility: "10+2 with Physics, Chemistry, and Biology/Mathematics.",
//         career: ["Community Pharmacist", "Hospital Pharmacist", "Clinical Research", "Pharmaceutical Sales", "Quality Control", "Regulatory Affairs"]
//     },
//     {
//         title: "M.Pharm (Pharmaceutical Technology)",
//         subtitle: "Master of Pharmacy",
//         level: "Postgraduate",
//         duration: "2 Years",
//         intake: "15 Seats",
//         fees: "₹ 2,00,000",
//         description: "An advanced program focused on the principles of drug formulation, development, and manufacturing, emphasizing modern technological approaches.",
//         features: ["Specialized Curriculum", "Research Projects", "Industry Collaboration", "Publication Opportunities", "Conference Participation", "Advanced Lab Training"],
//         eligibility: "B.Pharm with a minimum of 55% marks.",
//         career: ["Formulation Scientist", "R&D Scientist", "Process Development Engineer", "Academician"]
//     },
//     {
//         title: "M.Pharm (Pharmacology)",
//         subtitle: "Master of Pharmacy",
//         level: "Postgraduate",
//         duration: "2 Years",
//         intake: "15 Seats",
//         fees: "₹ 2,00,000",
//         description: "A specialization focused on the study of drug action, safety, and efficacy, with extensive training in preclinical and clinical research methodologies.",
//         features: ["Animal House Training", "Clinical Research Exposure", "Toxicology Studies", "Publication Opportunities"],
//         eligibility: "B.Pharm with a minimum of 55% marks.",
//         career: ["Clinical Research Associate", "Pharmacovigilance Officer", "Research Scientist", "Academician"]
//     },
//     {
//         title: "M.Pharm (Quality Assurance)",
//         subtitle: "Master of Pharmacy",
//         level: "Postgraduate",
//         duration: "2 Years",
//         intake: "15 Seats",
//         fees: "₹ 2,00,000",
//         description: "A focused curriculum on cGMP, quality management systems, validation, audits, and global regulatory compliance in the pharmaceutical industry.",
//         features: ["QA Systems Training", "Validation & Qualification", "Data Integrity Practices", "Regulatory Compliance"],
//         eligibility: "B.Pharm with a minimum of 55% marks.",
//         career: ["Quality Assurance Manager", "Quality Control Specialist", "Validation Engineer", "Regulatory Affairs Associate"]
//     },
// ];

// export default function ProgramsPage() {
//   const [selectedProgram, setSelectedProgram] = useState(programs[0]);

//   return (
//     <div className="bg-slate-50">
//       {/* Immersive Hero Section */}
//       <section className="relative text-white pt-28 pb-16 overflow-hidden">
//         <div className="absolute inset-0 bg-slate-900">
//            <motion.div
//               animate={{
//                 backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//               }}
//               transition={{
//                 duration: 20,
//                 ease: "linear",
//                 repeat: Infinity,
//               }}
//               className="absolute inset-0 bg-[length:200%_200%] bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900"
//             />
//         </div>
//         <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-4xl md:text-5xl font-extrabold tracking-tight"
//           >
//             Academic Programs
//           </motion.h1>
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="mt-4 max-w-2xl mx-auto text-lg text-slate-300"
//           >
//             Explore our meticulously designed programs to launch and advance your career in pharmaceutical sciences.
//           </motion.p>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="container mx-auto px-4 py-16 lg:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          
//           {/* Left Pane: Interactive Program List */}
//           <aside className="lg:col-span-1 lg:sticky lg:top-28">
//             <h2 className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-4 px-2">Select Program</h2>
//             <LayoutGroup>
//               <div className="relative flex flex-col space-y-2">
//                 {programs.map((program) => (
//                   <button
//                     key={program.title}
//                     onClick={() => setSelectedProgram(program)}
//                     className="relative w-full text-left p-4 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
//                   >
//                     {selectedProgram.title === program.title && (
//                       <motion.div
//                         layoutId="selector"
//                         className="absolute inset-0 bg-white shadow-md border border-slate-200/80 rounded-lg"
//                         initial={false}
//                         transition={{ type: "spring", stiffness: 400, damping: 30 }}
//                       />
//                     )}
//                     <div className="relative z-10">
//                        <p className={`font-bold transition-colors ${selectedProgram.title === program.title ? 'text-amber-600' : 'text-slate-800 hover:text-slate-900'}`}>{program.title}</p>
//                        <p className="text-sm text-slate-500">{program.level}</p>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </LayoutGroup>
//           </aside>

//           {/* Right Pane: Program Details */}
//           <main className="lg:col-span-3">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={selectedProgram.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
//                 exit={{ opacity: 0, y: -30, transition: { duration: 0.3, ease: [0.6, 0, 0.74, 0] } }}
//               >
//                 <div className="bg-white rounded-xl shadow-xl border border-slate-200/80 overflow-hidden">
//                   <div className="p-8 bg-[url('/subtle-pattern.svg')] bg-opacity-50">
//                     {/* Header */}
//                     <div className="border-b-2 border-amber-200 pb-6 mb-8">
//                       <p className="font-semibold text-amber-600 mb-1">{selectedProgram.subtitle}</p>
//                       <h2 className="text-4xl font-bold text-slate-900 tracking-tight">{selectedProgram.title}</h2>
//                       <p className="mt-4 text-slate-600 max-w-prose">{selectedProgram.description}</p>
//                     </div>
                    
//                     {/* Key Info */}
//                     <div className="grid sm:grid-cols-3 gap-6 text-center mb-10">
//                         <div className="info-item">
//                             <Clock className="mx-auto h-7 w-7 text-slate-400 mb-2"/>
//                             <p className="font-semibold text-slate-800">{selectedProgram.duration}</p>
//                             <p className="text-xs text-slate-500">Duration</p>
//                         </div>
//                         <div className="info-item">
//                             <Users className="mx-auto h-7 w-7 text-slate-400 mb-2"/>
//                             <p className="font-semibold text-slate-800">{selectedProgram.intake}</p>
//                             <p className="text-xs text-slate-500">Annual Intake</p>
//                         </div>
//                         <div className="info-item">
//                             <IndianRupee className="mx-auto h-7 w-7 text-slate-400 mb-2"/>
//                             <p className="font-semibold text-slate-800">{selectedProgram.fees}</p>
//                             <p className="text-xs text-slate-500">Fees/Year</p>
//                         </div>
//                     </div>

//                     {/* Details Grids */}
//                     <div className="grid md:grid-cols-2 gap-10">
//                       <div>
//                         <h3 className="font-semibold text-slate-800 mb-4 text-lg border-l-4 border-amber-400 pl-3">Key Features</h3>
//                         <ul className="space-y-3">
//                           {selectedProgram.features.map(f => (
//                             <li key={f} className="flex items-start gap-3 text-slate-700">
//                               <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
//                               <span>{f}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                        <div>
//                         <h3 className="font-semibold text-slate-800 mb-4 text-lg border-l-4 border-amber-400 pl-3">Career Paths</h3>
//                         <ul className="space-y-3">
//                           {selectedProgram.career.map(c => (
//                             <li key={c} className="flex items-start gap-3 text-slate-700">
//                               <Sparkles className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
//                               <span>{c}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Footer Actions */}
//                   <div className="bg-slate-50/70 p-6 border-t border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center">
//                     <div>
//                       <p className="text-sm font-semibold text-slate-800">Eligibility Criteria</p>
//                       <p className="text-sm text-slate-600">{selectedProgram.eligibility}</p>
//                     </div>
//                     <div className="flex-shrink-0 flex gap-3 w-full sm:w-auto">
//                         <Button className="flex-1 bg-slate-800 hover:bg-slate-900 shadow-sm transition-transform hover:scale-105"><FileText className="h-4 w-4 mr-2" /> Apply Now</Button>
//                         <a href={BROCHURE_URL} target="_blank" rel="noopener noreferrer" className="flex-1">
//                             <Button variant="outline" className="w-full bg-white border-slate-300 hover:border-slate-400 transition-transform hover:scale-105"><Download className="h-4 w-4 mr-2" /> Brochure</Button>
//                         </a>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </main>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="bg-white border-t border-slate-200">
//         <div className="container mx-auto px-4 py-20">
//           <div className="text-center mb-12">
//              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Ready for the Next Step?</h2>
//              <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">Our team is ready to assist you with admissions and advanced research opportunities.</p>
//           </div>
//           <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
//             <div className="bg-slate-50/80 p-8 rounded-xl border border-slate-200 text-center">
//                 <div className="mx-auto bg-amber-100 text-amber-600 h-12 w-12 rounded-full flex items-center justify-center mb-4">
//                   <Phone className="h-6 w-6"/>
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-800 mb-2">Admissions & Enquiries</h3>
//                 <p className="text-slate-600 mb-4">Contact our team for any questions.</p>
//                 <Button asChild variant="ghost" className="text-amber-600 hover:text-amber-700 hover:bg-amber-100">
//                   <a href="mailto:admissions@rpcp.charusat.ac.in">Email Admissions <ArrowRight className="h-4 w-4 ml-2" /></a>
//                 </Button>
//             </div>
//              <div className="bg-slate-800 text-white p-8 rounded-xl text-center">
//                 <div className="mx-auto bg-slate-700 text-white h-12 w-12 rounded-full flex items-center justify-center mb-4">
//                   <GraduationCap className="h-6 w-6"/>
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">Doctoral (Ph.D.) Program</h3>
//                 <p className="text-slate-300 mb-4">Advance your research career with us.</p>
//                 <Button asChild variant="secondary" className="bg-white text-slate-800 hover:bg-slate-200 shadow">
//                    <Link href="/research">Explore Ph.D. Research <ArrowRight className="h-4 w-4 ml-2" /></Link>
//                 </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Users, 
  Clock, 
  IndianRupee,
  ArrowRight,
  FileText,
  Download,
  Phone,
  Mail
} from "lucide-react";

// --- DATA (remains the same) ---
const BROCHURE_URL = "https://drive.google.com/drive/folders/10-XqFw6ISXnDeyajK8oB3YIIj6NfrIyO";
  const programs = [
    {
        title: "Bachelor of Pharmacy",
        subtitle: "B.Pharm",
        level: "Undergraduate",
      duration: "4 Years",
      intake: "100 Seats",
        fees: "₹ 1,55,000",
        description: "A comprehensive undergraduate program providing a strong foundation in pharmaceutical sciences, preparing students for various careers.",
    },
    {
        title: "M.Pharm (Pharmaceutical Technology)",
      subtitle: "Master of Pharmacy",
        level: "Postgraduate",
      duration: "2 Years",
        intake: "15 Seats",
        fees: "₹ 2,00,000",
        description: "An advanced program focused on the principles of drug formulation, development, and manufacturing.",
    },
    {
        title: "M.Pharm (Pharmacology)",
        subtitle: "Master of Pharmacy",
        level: "Postgraduate",
        duration: "2 Years",
        intake: "15 Seats",
        fees: "₹ 2,00,000",
        description: "A specialization focused on the study of drug action, safety, and efficacy, with extensive research training.",
    },
    {
        title: "M.Pharm (Pharmaceutical Chemistry)",
        subtitle: "Master of Pharmacy",
        level: "Postgraduate",
        duration: "2 Years",
        intake: "15 Seats",
        fees: "₹ 2,00,000",
        description: "Medicinal chemistry focused program covering drug design, organic synthesis, and analytical characterization.",
    },
    {
        title: "M.Pharm (Quality Assurance)",
        subtitle: "Master of Pharmacy",
        level: "Postgraduate",
        duration: "2 Years",
        intake: "15 Seats",
        fees: "₹ 2,00,000",
        description: "A focused curriculum on cGMP, quality management systems, validation, audits, and global regulatory compliance.",
    },
     {
        title: "M.Pharm (Pharmacy Practice)",
        subtitle: "Master of Pharmacy",
        level: "Postgraduate",
        duration: "2 Years",
        intake: "15 Seats",
        fees: "₹ 2,00,000",
        description: "Develops expertise in clinical pharmacy services, patient counseling, and evidence-based therapeutic practices.",
    },
    {
        title: "M.Pharm (Regulatory Affairs)",
        subtitle: "Master of Pharmacy",
        level: "Postgraduate",
        duration: "2 Years",
        intake: "15 Seats",
        fees: "₹ 2,00,000",
        description: "Provides in-depth knowledge of drug regulations, dossier preparation, and global regulatory guidelines.",
    },
];

const ProgramCard = ({ program, index }) => {
  return (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
      className="flex flex-col bg-white rounded-xl shadow-lg border border-slate-200/80 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
    >
      {/* Card Header */}
      <div className="p-6 border-b-4 border-amber-400">
        <p className="text-sm font-semibold text-amber-600 mb-1">{program.level}</p>
        <h3 className="text-xl font-bold text-slate-900">{program.title}</h3>
                    </div>
      
      {/* Card Body */}
      <div className="p-6 flex-grow">
        <p className="text-slate-600">{program.description}</p>
            </div>

      {/* Stats Section */}
      <div className="px-6 pb-6 grid grid-cols-3 gap-4 text-center">
        <div>
          <Clock className="mx-auto h-6 w-6 text-slate-400 mb-1" />
          <p className="font-bold text-slate-800">{program.duration}</p>
          <p className="text-xs text-slate-500">Duration</p>
                      </div>
        <div>
          <Users className="mx-auto h-6 w-6 text-slate-400 mb-1" />
          <p className="font-bold text-slate-800">{program.intake}</p>
          <p className="text-xs text-slate-500">Intake</p>
                      </div>
                          <div>
          <IndianRupee className="mx-auto h-6 w-6 text-slate-400 mb-1" />
          <p className="font-bold text-slate-800">{program.fees}</p>
          <p className="text-xs text-slate-500">Fees/Year</p>
                      </div>
                    </div>

      {/* Footer Action */}
      <div className="bg-slate-50 p-4">
        <a href={BROCHURE_URL} target="_blank" rel="noopener noreferrer" className="block">
          <Button variant="outline" className="w-full bg-white border-slate-300 hover:border-slate-400 h-12 transition-transform hover:scale-105">
            <Download className="h-4 w-4 mr-2" /> Brochure
          </Button>
        </a>
      </div>
              </motion.div>
  );
};


export default function ProgramsPage() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Our Academic Programs
          </motion.h1>
          <motion.p
                initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-lg text-slate-300"
          >
            Explore our meticulously designed programs to launch and advance your career in pharmaceutical sciences.
          </motion.p>
                  </div>
      </section>

      {/* Programs Grid */}
      <section className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} program={program} index={index} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Ready for the Next Step?</h2>
             <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">Our team is ready to assist you with admissions and advanced research opportunities.</p>
            </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50/80 p-8 rounded-xl border border-slate-200 text-center">
                <div className="mx-auto bg-amber-100 text-amber-600 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6"/>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Admissions & Enquiries</h3>
                <p className="text-slate-600 mb-4">Contact our team for any questions.</p>
                <Button asChild variant="ghost" className="text-amber-600 hover:text-amber-700 hover:bg-amber-100">
                  <a href="mailto:admissions@rpcp.charusat.ac.in">Email Admissions <ArrowRight className="h-4 w-4 ml-2" /></a>
              </Button>
            </div>
             <div className="bg-slate-800 text-white p-8 rounded-xl text-center">
                <div className="mx-auto bg-slate-700 text-white h-12 w-12 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6"/>
                  </div>
                <h3 className="text-xl font-bold mb-2">Doctoral (Ph.D.) Program</h3>
                <p className="text-slate-300 mb-4">Advance your research career with us.</p>
                <Button asChild variant="secondary" className="bg-white text-slate-800 hover:bg-slate-200 shadow">
                   <Link href="/research">Explore Ph.D. Research <ArrowRight className="h-4 w-4 ml-2" /></Link>
                </Button>
                  </div>
                </div>
        </div>
      </section>
    </div>
  );
}
