"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Clock, Globe, CheckCircle, ExternalLink } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const objectives = [
  {
    title: "Rational Drug Use",
    description:
      "To promote the concept of rational drug use to enhance better patient outcome.",
  },
  {
    title: "Evidence-Based Information",
    description:
      "Provision of specific comprehensive, evidence based drug information & diseases information upon request from faculty, patient, healthcare providers, and consumers from the general public.",
  },
  {
    title: "Quality Education",
    description:
      "To provide quality education to pharmacy students and professionals.",
  },
];

const queryItems = [
  "Drug or its Product Information/Identification/Brand names",
  "Indications/Contraindications/Safety",
  "Adverse Drug Reactions/Drug Interactions",
  "Treatment/Choice of drug",
  "Special precaution during Pregnancy/Lactation",
  "Pediatrics/ Geriatrics",
  "Drug Profile/Dosage",
  "Toxicology",
];

const contactMethods = [
  {
    label: "Email",
    value: "dic@charusat.ac.in",
    href: "mailto:dic@charusat.ac.in",
  },
  {
    label: "Online Form",
    value: "Google Form",
    href: "https://goo.gl/forms/2CZdHcv19fqixz4G3",
  },
];

export default function DrugInformationCenter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-blue-600/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-6 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-amber-100 text-amber-800 hover:bg-amber-200">
              Healthcare Excellence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Drug Information Center
              <span className="text-amber-600"> (DIC)</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Providing accurate, current and unbiased drug information in the
              promotion of rational drug therapy
            </p>

            {/* Operating Hours Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border border-amber-100"
            >
              <Clock className="h-5 w-5 text-amber-600" />
              <span className="text-gray-700 font-medium">
                Monday to Friday: 10:00 AM - 4:00 PM
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About Our Drug Information Center
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ramanbhai Patel College of Pharmacy established a dedicated
                  Drug Information center (DIC) with the aim to provide
                  accurate, current and unbiased drug information in the
                  promotion of rational drug therapy.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The purpose of the Drug Information Center (DIC) is to serve
                  health care professionals and society by answering critical
                  questions on drug use and its possible side effects. The DIC
                  routinely responds to inquiries regarding appropriate therapy
                  for specific patients; adverse reactions to drugs; efficacy of
                  drugs; drug interactions; biopharmaceuticals and
                  pharmacokinetic parameters of drugs; dosing in renal failure;
                  appropriate therapy for a disease state and information on new
                  drugs.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Objectives
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Committed to excellence in pharmaceutical information services
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {objectives.map((objective, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-amber-50 rounded-full w-fit group-hover:bg-amber-100 transition-colors">
                      {objective.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      {objective.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {objective.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Query Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DIC welcomes the queries on:
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive pharmaceutical and clinical information services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent>
                <ul className="space-y-4">
                  {queryItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-lg leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Send your drug related queries or questions via email or through
              our online form
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-8 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="space-y-8">
                <div className="grid gap-6">
                  {contactMethods.map((method, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="w-full h-auto p-6 hover:bg-amber-50 hover:border-amber-200 transition-all duration-300 group"
                      >
                        <a
                          href={method.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-4">
                            <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-amber-100 transition-colors">
                              {method.icon}
                            </div>
                            <div className="text-left">
                              <div className="font-semibold text-gray-900">
                                {method.label}
                              </div>
                              <div className="text-gray-600">
                                {method.value}
                              </div>
                            </div>
                          </div>
                          <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-amber-600 transition-colors" />
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center pt-6 border-t border-gray-100">
                  <p className="text-gray-600 mb-4">
                    <strong>Operating Hours:</strong> Monday to Friday, 10:00 AM
                    to 4:00 PM
                  </p>
                  <p className="text-sm text-gray-500">
                    Our dedicated team of pharmacists is here to assist
                    healthcare professionals and the general public with
                    reliable drug information.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
