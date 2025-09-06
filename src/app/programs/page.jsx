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
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Shield,
  Microscope,
  Briefcase,
  Phone,
  Mail,
  Calendar,
  FileText,
  Download
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
      icon: <Users className="h-8 w-8 text-emerald-500" />,
      title: "Expert Faculty",
      description: "Learn from experienced professors and industry experts"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-teal-500" />,
      title: "Modern Curriculum",
      description: "Updated curriculum aligned with industry standards"
    },
    {
      icon: <Target className="h-8 w-8 text-violet-500" />,
      title: "Industry Connect",
      description: "Strong partnerships with pharmaceutical companies"
    },
    {
      icon: <Award className="h-8 w-8 text-rose-500" />,
      title: "Research Focus",
      description: "Emphasis on research and innovation"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 border border-white/20 rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 text-emerald-400 mb-6">
                <GraduationCap className="h-8 w-8" />
                <span className="text-lg font-semibold">Academic Excellence</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Transform Your Future with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  {" "}Pharmacy Education
                </span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                Join India's premier pharmaceutical institute with state-of-the-art facilities, 
                expert faculty, and industry-leading placement records. Shape your career in 
                pharmaceutical sciences with our comprehensive programs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <FileText className="h-5 w-5 mr-2" />
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold">
                  <Download className="h-5 w-5 mr-2" />
                  Download Brochure
                </Button>
              </div>
            </motion.div>

            {/* Statistics Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-emerald-500/20 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-emerald-400" />
                  </div>
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-emerald-400 mb-1">97%</div>
                <div className="text-gray-200 text-sm">Placement Rate</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-teal-500/20 rounded-lg">
                    <Microscope className="h-6 w-6 text-teal-400" />
                  </div>
                  <Award className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-teal-400 mb-1">22</div>
                <div className="text-gray-200 text-sm">Research Labs</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-violet-500/20 rounded-lg">
                    <Users className="h-6 w-6 text-violet-400" />
                  </div>
                  <Shield className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-violet-400 mb-1">15+</div>
                <div className="text-gray-200 text-sm">Years Experience</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-rose-500/20 rounded-lg">
                    <Globe className="h-6 w-6 text-rose-400" />
                  </div>
                  <Briefcase className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-rose-400 mb-1">07</div>
                <div className="text-gray-200 text-sm">Industry MoUs</div>
              </div>
            </motion.div>
          </div>
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

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 text-emerald-600 mb-4">
              <Calendar className="h-6 w-6" />
              <span className="text-sm font-medium">Admission Process</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple & Transparent Admission Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our streamlined admission process to secure your seat in India's premier pharmacy institute
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Application",
                description: "Submit your application online with required documents",
                icon: <FileText className="h-8 w-8 text-emerald-500" />,
                color: "bg-emerald-500"
              },
              {
                step: "02", 
                title: "Document Verification",
                description: "Our team verifies your academic credentials and documents",
                icon: <Shield className="h-8 w-8 text-teal-500" />,
                color: "bg-teal-500"
              },
              {
                step: "03",
                title: "Entrance Test",
                description: "Appear for our comprehensive entrance examination",
                icon: <BookOpen className="h-8 w-8 text-violet-500" />,
                color: "bg-violet-500"
              },
              {
                step: "04",
                title: "Admission Confirmation",
                description: "Complete fee payment and secure your admission",
                icon: <CheckCircle className="h-8 w-8 text-rose-500" />,
                color: "bg-rose-500"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 bg-gray-900 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-emerald-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Dates</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-500 mb-2">March 15</div>
                  <div className="text-gray-700">Application Deadline</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-500 mb-2">April 20</div>
                  <div className="text-gray-700">Entrance Exam</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-500 mb-2">May 15</div>
                  <div className="text-gray-700">Result Declaration</div>
                </div>
              </div>
            </div>
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
                <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-0">
                  <CardContent className="p-0">
                    {/* Program Header */}
                    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white p-8 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
                      <div className="absolute top-4 right-4 opacity-10">
                        <GraduationCap className="h-24 w-24" />
                      </div>
                      <div className="relative z-10">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                          <div>
                            <div className="flex items-center space-x-2 mb-4">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                              <span className="text-emerald-400 text-sm font-medium">Program</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                              {program.title}
                            </h2>
                            <p className="text-xl text-gray-200 mb-6">{program.subtitle}</p>
                            <p className="text-lg text-gray-100 leading-relaxed">
                              {program.description}
                            </p>
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="text-center">
                                <div className="flex items-center justify-center mb-2">
                                  <Clock className="h-6 w-6 text-emerald-400 mr-2" />
                                </div>
                                <div className="text-2xl font-bold text-emerald-400">{program.duration}</div>
                                <div className="text-sm text-gray-200">Duration</div>
                              </div>
                              <div className="text-center">
                                <div className="flex items-center justify-center mb-2">
                                  <Users className="h-6 w-6 text-emerald-400 mr-2" />
                                </div>
                                <div className="text-2xl font-bold text-emerald-400">{program.intake}</div>
                                <div className="text-sm text-gray-200">Intake</div>
                              </div>
                              <div className="text-center col-span-2">
                                <div className="flex items-center justify-center mb-2">
                                  <DollarSign className="h-6 w-6 text-emerald-400 mr-2" />
                                </div>
                                <div className="text-lg font-bold text-emerald-400">{program.fees}</div>
                                <div className="text-sm text-gray-200">Annual Fees</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Program Details */}
                    <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-8">
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                                  <CheckCircle className="h-5 w-5 text-white" />
                                </div>
                                Key Features
                              </h3>
                              <div className="grid grid-cols-1 gap-3">
                                {program.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors duration-300">
                                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                          {program.specializations && (
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                                  <BookOpen className="h-5 w-5 text-white" />
                                </div>
                                Specializations
                              </h3>
                              <div className="grid grid-cols-1 gap-3">
                                {program.specializations.map((spec, idx) => (
                                  <div key={idx} className="bg-teal-50 px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-teal-100 transition-colors duration-300">
                                    {spec}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                              <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center mr-3">
                                <Target className="h-5 w-5 text-white" />
                              </div>
                              Eligibility
                            </h3>
                            <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                              <p className="text-gray-700 font-medium leading-relaxed">
                                {program.eligibility}
                              </p>
                            </div>
                          </div>

                          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                              <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center mr-3">
                                <Briefcase className="h-5 w-5 text-white" />
                              </div>
                              Career Opportunities
                            </h3>
                            <div className="grid grid-cols-1 gap-3">
                              {program.career.map((career, idx) => (
                                <div key={idx} className="flex items-center space-x-3 p-3 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors duration-300">
                                  <ArrowRight className="h-5 w-5 text-rose-500 flex-shrink-0" />
                                  <span className="text-gray-700 font-medium">{career}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4">
                            <Button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                              <FileText className="h-5 w-5 mr-2" />
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 text-emerald-400 mb-6">
              <Star className="h-8 w-8" />
              <span className="text-lg font-semibold">Why Choose RPCP?</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">Excellence in Pharmaceutical Education</h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Join India's premier pharmaceutical institute with state-of-the-art facilities, 
              expert faculty, and industry-leading placement records
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                number: "97%",
                label: "Job Placement Rate",
                description: "Our graduates are highly sought after by leading pharmaceutical companies",
                icon: <TrendingUp className="h-12 w-12 text-emerald-400" />,
                color: "from-emerald-500 to-emerald-600"
              },
              {
                number: "22",
                label: "Research Laboratories",
                description: "State-of-the-art facilities for cutting-edge pharmaceutical research",
                icon: <Microscope className="h-12 w-12 text-teal-400" />,
                color: "from-teal-500 to-teal-600"
              },
              {
                number: "07",
                label: "Industry MoUs",
                description: "Strong partnerships with leading pharmaceutical companies",
                icon: <Briefcase className="h-12 w-12 text-violet-400" />,
                color: "from-violet-500 to-violet-600"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-6">
                    {stat.icon}
                  </div>
                  <div className={`text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}>
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-white mb-3">{stat.label}</div>
                  <div className="text-gray-200 text-sm leading-relaxed">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users className="h-8 w-8 text-emerald-400" />, title: "Expert Faculty", desc: "Experienced professors" },
              { icon: <BookOpen className="h-8 w-8 text-teal-400" />, title: "Modern Curriculum", desc: "Industry-aligned courses" },
              { icon: <Target className="h-8 w-8 text-violet-400" />, title: "Industry Connect", desc: "Strong partnerships" },
              { icon: <Award className="h-8 w-8 text-rose-400" />, title: "Research Focus", desc: "Innovation & discovery" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-200 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-teal-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 text-emerald-500 mb-6">
              <GraduationCap className="h-8 w-8" />
              <span className="text-lg font-semibold">Start Your Journey</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join RPCP and become part of a community dedicated to excellence in pharmaceutical sciences. 
              Take the first step towards a rewarding career in pharmacy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <FileText className="h-6 w-6 mr-3" />
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-10 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                <Download className="h-6 w-6 mr-3" />
                Download Brochure
              </Button>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Need Help? Contact Our Admissions Team</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Call Us</div>
                    <div className="text-gray-600">+91 7052 101 786</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <div className="text-gray-600">admissions@rpcp.charusat.ac.in</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Visit Campus</div>
                    <div className="text-gray-600">Schedule a tour</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
