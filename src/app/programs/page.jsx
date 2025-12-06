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
  Mail,
} from "lucide-react";

// --- DATA ---
const programs = [
  {
    title: "Bachelor of Pharmacy",
    subtitle: "B.Pharm",
    level: "Undergraduate",
    duration: "4 Years",
    intake: "100 Seats",
    fees: "₹ 1,55,000",
    brochureUrl: "/new_data/Program%20Brochures/B.Pharm%20Program.pdf",
  },
  {
    title: "M.Pharm (Pharmaceutical Technology)",
    subtitle: "Master of Pharmacy",
    level: "Postgraduate",
    duration: "2 Years",
    intake: "15 Seats",
    fees: "₹ 2,00,000",
    brochureUrl: "/new_data/Program%20Brochures/M.PHARM%20PT.pdf",
  },
  {
    title: "M.Pharm (Pharmacology)",
    subtitle: "Master of Pharmacy",
    level: "Postgraduate",
    duration: "2 Years",
    intake: "15 Seats",
    fees: "₹ 2,00,000",
    brochureUrl: "/new_data/Program%20Brochures/M.PHARM%20PCOL.pdf",
  },
  {
    title: "M.Pharm (Pharmaceutical Quality Assurance)",
    subtitle: "Master of Pharmacy",
    level: "Postgraduate",
    duration: "2 Years",
    intake: "15 Seats",
    fees: "₹ 2,00,000",
    brochureUrl: "/new_data/Program%20Brochures/M.PHARM%20QA.pdf",
  },
  {
    title: "M.Pharm (Regulatory Affairs)",
    subtitle: "Master of Pharmacy",
    level: "Postgraduate",
    duration: "2 Years",
    intake: "15 Seats",
    fees: "₹ 2,00,000",
    brochureUrl: "/new_data/Program%20Brochures/M.PHARM%20RA.pdf",
  },
  {
    title: "M.Pharm (Pharmaceutical Chemistry)",
    subtitle: "Master of Pharmacy",
    level: "Postgraduate",
    duration: "2 Years",
    intake: "15 Seats",
    fees: "₹ 2,00,000",
    brochureUrl: "/new_data/Program%20Brochures/M.PHARM%20PC.pdf",
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
      <div className="p-6 border-b-4 border-amber-400 flex-grow">
        <p className="text-sm font-semibold text-amber-600 mb-1">
          {program.level}
        </p>
        <h3 className="text-xl font-bold text-slate-900">{program.title}</h3>
      </div>

      {/* Stats Section */}
      <div className="px-6 pt-6 pb-6 grid grid-cols-3 gap-4 text-center">
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
        <a
          href={program.brochureUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button
            variant="outline"
            className="w-full bg-white border-slate-300 hover:border-slate-400 h-12 transition-transform hover:scale-105"
          >
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
            Explore our meticulously designed programs to launch and advance
            your career in pharmaceutical sciences.
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Ready for the Next Step?
            </h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
              Our team is ready to assist you with admissions and advanced
              research opportunities.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50/80 p-8 rounded-xl border border-slate-200 text-center">
              <div className="mx-auto bg-amber-100 text-amber-600 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Admissions & Enquiries
              </h3>
              <p className="text-slate-600 mb-4">
                Contact our team for any questions.
              </p>
              <Button
                asChild
                variant="ghost"
                className="text-amber-600 hover:text-amber-700 hover:bg-amber-100"
              >
                <a href="https://admission.charusat.ac.in/">
                  Click for Admissions <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
            <div className="bg-slate-800 text-white p-8 rounded-xl text-center">
              <div className="mx-auto bg-slate-700 text-white h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Doctoral (Ph.D.) Program
              </h3>
              <p className="text-slate-300 mb-4">
                Advance your research career with us.
              </p>
              <Button
                asChild
                variant="secondary"
                className="bg-white text-slate-800 hover:bg-slate-200 shadow"
              >
                <Link href="/research">
                  Explore Ph.D. Research <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
