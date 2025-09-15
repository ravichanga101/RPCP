"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Target, 
  Eye, 
  Users, 
  Award,
  Building2,
  Calendar,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

export default function AboutPage() {
  const visionMission = [
    {
      icon: <Eye className="h-7 w-7 text-blue-600" />,
      title: "Vision",
      description: "To Become a Premier Pharma Institute by Creating World Class Pharmacists and Researchers.",
      color: "from-blue-50 to-indigo-50"
    },
    {
      icon: <Target className="h-7 w-7 text-emerald-600" />,
      title: "Mission",
      description: "To Strive for the Excellence in Pharmaceutical Sciences through Quality Education and Research.",
      color: "from-emerald-50 to-teal-50"
    }
  ];

  const leadership = [
    {
      name: "Dr. Samir Patel",
      position: "Professor and I/C Dean",
      qualification: "Ph.D.",
      interests: "Peptide Synthesis; Stability-Indicating Method Development & Validation; Impurity Profiling",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Dr. Manan Raval",
      position: "Professor and Principal",
      qualification: "Ph.D.",
      interests: "Phyto-Chemical Analysis; Phyto-Pharmacology",
      image: "/api/placeholder/150/150"
    }
  ];

  const achievements = [
    { number: "2004", label: "Year Established" },
    { number: "25+", label: "Years of Excellence" },
    { number: "1000+", label: "Students Enrolled" },
    { number: "50+", label: "Faculty Members" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 text-blue-600 mb-3">
              <GraduationCap className="h-5 w-5" />
              <span className="text-sm font-medium">About RPCP</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">Ramanbhai Patel College of Pharmacy</h1>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              A constituent institute of CHARUSAT, advancing pharmaceutical education and research since 2004.
            </p>
            <div className="w-24 h-[3px] bg-blue-600/90 mx-auto mt-8 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {visionMission.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className={`bg-gradient-to-br ${item.color} rounded-t-2xl p-5 flex items-center justify-center`}>
                    <div className="bg-white/90 rounded-full h-12 w-12 flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Legacy of Excellence in Pharmaceutical Education
              </h2>
              <div className="space-y-5 text-base md:text-lg text-gray-600 leading-relaxed">
                <p>
                  Ramanbhai Patel College of Pharmacy (RPCP) is a constituent Institute of Charotar University of Science and Technology (CHARUSAT). 
                  RPCP was established in 2004 to promote excellence in Pharmacy Education and to prepare young talent for Industrial Pharmacy and Pharmacy Practice.
                </p>
                <p>
                  The Institute has the patronage of Zydus Cadila Health Care Ltd.; patronized by Shri Pankaj Patel, CMD, Zydus Cadila Healthcare Ltd to commemorate his father, 
                  Late Shri Ramanbhai Patel. M.Pharm Programs at RPCP are executed under the auspices of T. P. Patel Centre for PG Studies in Pharmacy, 
                  patronized by Shri Jagdishbhai Patel and Shri H. T. Patel and their families to monumentalize their father, Late Shri T. P. Patel.
                </p>
                <p>
                  RPCP integrates rigorous academics with practical training in state-of-the-art laboratories, fostering a culture of inquiry, ethics, and societal impact.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Established</div>
                      <div className="text-gray-600">2004</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Location</div>
                      <div className="text-gray-600">CHARUSAT Campus, Changa, Anand, Gujarat</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Affiliation</div>
                      <div className="text-gray-600">CHARUSAT University</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Recognition</div>
                      <div className="text-gray-600">PCI Approved, NAAC Accredited</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-base md:text-lg text-blue-200 max-w-3xl mx-auto">
              Over two decades of excellence in pharmaceutical education and research
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-4xl font-bold text-orange-400 mb-2">{achievement.number}</div>
                  <div className="text-blue-200">{achievement.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Meet our experienced leaders who guide RPCP towards excellence in pharmaceutical education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="h-24 w-24 rounded-full bg-gray-200 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                        <p className="text-sm font-medium text-blue-600 mb-2">{member.position}</p>
                        <p className="text-sm text-gray-600 mb-3">Qualification: {member.qualification}</p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          <span className="font-semibold">Research Interests:</span> {member.interests}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Join RPCP?</h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Start your journey in pharmaceutical sciences with one of the premier institutes in India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
                Apply Now
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
