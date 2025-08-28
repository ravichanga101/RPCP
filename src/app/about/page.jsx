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
      icon: <Eye className="h-12 w-12 text-orange-500" />,
      title: "Vision",
      description: "To Become a Premier Pharma Institute by Creating World Class Pharmacists and Researchers.",
      color: "border-orange-500"
    },
    {
      icon: <Target className="h-12 w-12 text-blue-500" />,
      title: "Mission",
      description: "To Strive for the Excellence in Pharmaceutical Sciences through Quality Education and Research.",
      color: "border-blue-500"
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
              <span className="text-sm font-medium">About RPCP</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              About Ramanbhai Patel
              <span className="block text-orange-400">College of Pharmacy</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A premier institute for pharmaceutical education, established in 2004 under CHARUSAT, 
              dedicated to excellence in pharmacy education and research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {visionMission.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-t-4 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                A Legacy of Excellence in Pharmaceutical Education
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
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
                  Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, 
                  we are making learning more relevant and transformational.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-500 p-3 rounded-lg">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Established</div>
                      <div className="text-gray-600">2004</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-500 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Location</div>
                      <div className="text-gray-600">CHARUSAT Campus, Changa, Anand, Gujarat</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-500 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Affiliation</div>
                      <div className="text-gray-600">CHARUSAT University</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-500 p-3 rounded-lg">
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
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Achievements</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="bg-gray-200 rounded-lg w-24 h-24 flex-shrink-0"></div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-lg text-orange-500 font-medium mb-2">{member.position}</p>
                        <p className="text-gray-600 mb-4">Qualification: {member.qualification}</p>
                        <p className="text-gray-600 leading-relaxed">
                          <strong>Research Interests:</strong> {member.interests}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Join RPCP?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
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
