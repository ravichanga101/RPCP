"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Clock, 
  DollarSign,
  Target,
  Award,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function ProgramsPage() {
  const programs = [
    {
      title: "B.Pharm",
      subtitle: "Bachelor of Pharmacy",
      duration: "4 Years",
      intake: "100 Seats",
      fees: "₹1,55,000/year",
      description: "Comprehensive pharmacy education with hands-on training and industry exposure",
      features: [
        "PCI Approved Program",
        "Industry Internship",
        "Practical Training",
        "Research Projects",
        "Industry Visits",
        "Career Guidance"
      ],
      eligibility: "10+2 with Physics, Chemistry, and Biology/Mathematics",
      career: [
        "Community Pharmacist",
        "Hospital Pharmacist",
        "Clinical Research",
        "Pharmaceutical Sales",
        "Quality Control",
        "Regulatory Affairs"
      ]
    },
    {
      title: "M.Pharm",
      subtitle: "Master of Pharmacy",
      duration: "2 Years",
      intake: "15 Seats each",
      fees: "₹2,00,000/year",
      description: "Specialized programs in various pharmaceutical disciplines with advanced research focus",
      specializations: [
        "Pharmaceutical Technology",
        "Pharmacology",
        "Pharmaceutical Quality Assurance",
        "Pharmacy Practice",
        "Regulatory Affairs",
        "Pharmaceutical Chemistry"
      ],
      features: [
        "Specialized Curriculum",
        "Research Projects",
        "Industry Collaboration",
        "Publication Opportunities",
        "Conference Participation",
        "Advanced Lab Training"
      ],
      eligibility: "B.Pharm with 55% marks",
      career: [
        "Research Scientist",
        "Formulation Scientist",
        "Clinical Pharmacist",
        "Quality Assurance Manager",
        "Regulatory Affairs Officer",
        "Academician"
      ]
    },
    {
      title: "Ph.D.",
      subtitle: "Doctor of Philosophy",
      duration: "3-5 Years",
      intake: "Research Based",
      fees: "As per University norms",
      description: "Advanced research programs in pharmaceutical sciences and drug development",
      features: [
        "Original Research",
        "Publication in Journals",
        "Conference Presentations",
        "International Collaboration",
        "Patent Filing",
        "Industry Projects"
      ],
      eligibility: "M.Pharm with 60% marks",
      career: [
        "Research Director",
        "Professor",
        "R&D Manager",
        "Patent Attorney",
        "Consultant",
        "Entrepreneur"
      ]
    }
  ];

  const highlights = [
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Expert Faculty",
      description: "Learn from experienced professors and industry experts"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      title: "Modern Curriculum",
      description: "Updated curriculum aligned with industry standards"
    },
    {
      icon: <Target className="h-8 w-8 text-green-500" />,
      title: "Industry Connect",
      description: "Strong partnerships with pharmaceutical companies"
    },
    {
      icon: <Award className="h-8 w-8 text-purple-500" />,
      title: "Research Focus",
      description: "Emphasis on research and innovation"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 text-orange-400 mb-4">
              <GraduationCap className="h-6 w-6" />
              <span className="text-sm font-medium">Our Programs</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Academic Programs
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive pharmacy education programs designed to prepare students for successful careers 
              in the pharmaceutical industry, research, and healthcare
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {highlight.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    {/* Program Header */}
                    <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            {program.title}
                          </h2>
                          <p className="text-xl text-blue-200 mb-6">{program.subtitle}</p>
                          <p className="text-lg text-blue-100 leading-relaxed">
                            {program.description}
                          </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <div className="flex items-center justify-center mb-2">
                                <Clock className="h-5 w-5 text-orange-400 mr-2" />
                              </div>
                              <div className="text-2xl font-bold text-orange-400">{program.duration}</div>
                              <div className="text-sm text-blue-200">Duration</div>
                            </div>
                            <div className="text-center">
                              <div className="flex items-center justify-center mb-2">
                                <Users className="h-5 w-5 text-orange-400 mr-2" />
                              </div>
                              <div className="text-2xl font-bold text-orange-400">{program.intake}</div>
                              <div className="text-sm text-blue-200">Intake</div>
                            </div>
                            <div className="text-center col-span-2">
                              <div className="flex items-center justify-center mb-2">
                                <DollarSign className="h-5 w-5 text-orange-400 mr-2" />
                              </div>
                              <div className="text-lg font-bold text-orange-400">{program.fees}</div>
                              <div className="text-sm text-blue-200">Annual Fees</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Program Details */}
                    <div className="p-8">
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              Key Features
                            </h3>
                            <ul className="space-y-2">
                              {program.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {program.specializations && (
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-4">Specializations</h3>
                              <div className="grid grid-cols-2 gap-2">
                                {program.specializations.map((spec, idx) => (
                                  <div key={idx} className="bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-700">
                                    {spec}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Eligibility</h3>
                            <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">
                              {program.eligibility}
                            </p>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Career Opportunities</h3>
                            <div className="grid grid-cols-1 gap-2">
                              {program.career.map((career, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <ArrowRight className="h-4 w-4 text-orange-500" />
                                  <span className="text-gray-700">{career}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4">
                            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                              Apply Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose RPCP */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose RPCP?</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Join one of the premier pharmaceutical institutes in India with state-of-the-art facilities 
              and industry connections
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-bold text-orange-400 mb-2">97%</div>
                <div className="text-blue-200">Job Placement Rate</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-bold text-orange-400 mb-2">22</div>
                <div className="text-blue-200">Research Laboratories</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-bold text-orange-400 mb-2">07</div>
                <div className="text-blue-200">Industry MoUs</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join RPCP and become part of a community dedicated to excellence in pharmaceutical sciences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                Download Brochure
              </Button>
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg">
                Contact Admissions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
