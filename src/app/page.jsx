"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ImageCarousel from "@/components/shared/ImageCarousel";
import {
  GraduationCap,
  BookOpen,
  Globe,
  Users,
  Award,
  Building2,
  Microscope,
  Leaf,
  TestTube,
  Briefcase,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  // Carousel images
  const carouselImages = [
    "https://www.charusat.ac.in/rpcp/images/RPCP_Slider_1_c.webp",
    "https://www.charusat.ac.in/rpcp/images/RPCP_Slider_2_c.webp",
    "https://www.charusat.ac.in/rpcp/images/RPCP_Slider_3_c.webp"
  ];

  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-white" />,
      title: "Quality Education",
      description:
        "Excellence in Pharmaceutical Sciences through innovative teaching and research",
      color: "bg-blue-600",
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: "Industry Connect",
      description:
        "Strong partnerships with leading pharmaceutical companies and research institutions",
      color: "bg-yellow-500",
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Expert Faculty",
      description:
        "Experienced professors and researchers dedicated to student success",
      color: "bg-blue-600",
    },
  ];

  const achievements = [
    { number: "08", label: "Patents" },
    { number: "22", label: "Research Labs" },
    { number: "97%", label: "Job Placements" },
    { number: "28", label: "Entrepreneurs" },
    { number: "07", label: "Industry MoUs" },
    { number: "53", label: "Books/Chapters" },
    { number: "451", label: "Publications" },
    { number: "50", label: "Research Grants" },
  ];

  const programs = [
    {
      title: "B.Pharm",
      duration: "4 Years",
      intake: "100 Seats",
      fees: "₹1,55,000/year",
      description:
        "Comprehensive pharmacy education with hands-on training and industry exposure",
    },
    {
      title: "M.Pharm",
      duration: "2 Years",
      intake: "15 Seats each",
      fees: "₹2,00,000/year",
      description:
        "Specialized programs in Pharmaceutical Technology, Pharmacology, Quality Assurance, and more",
    },
    {
      title: "Ph.D.",
      duration: "3-5 Years",
      intake: "Research Based",
      fees: "As per University norms",
      description:
        "Advanced research programs in pharmaceutical sciences and drug development",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden h-screen min-h-[600px]">
        {/* Image Carousel Background */}
        <div className="absolute inset-0 z-0">
          <ImageCarousel 
            images={carouselImages}
            autoPlayInterval={3000}
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 py-20 lg:py-32 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 text-yellow-400 mb-4">
                <GraduationCap className="h-6 w-6" />
                <span className="text-sm font-medium">Welcome to RPCP</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                A Right Course to Take
                <span className="block text-yellow-400">
                  Ramanbhai Patel College of Pharmacy
                </span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Prescription for Promising Future in Pharma Industry. Hands on
                Training Through State of Art Infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 text-lg font-semibold"
                >
                  Apply Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 px-8 py-4 text-lg font-semibold"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Quick Stats section removed as requested */}
            </motion.div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 text-blue-600 mb-4">
                <GraduationCap className="h-6 w-6" />
                <span className="text-sm font-medium">About Our College</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                A Few Words About the University
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ramanbhai Patel College of Pharmacy (RPCP) is a constituent
                Institute of Charotar University of Science and Technology
                (CHARUSAT). RPCP was established in 2004 to promote excellence
                in Pharmacy Education and to prepare young talent for Industrial
                Pharmacy and Pharmacy Practice.
              </p>
              <div className="bg-blue-600 text-white p-6 rounded-lg inline-block">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gray-200 rounded-lg h-48"></div>
                  <div className="bg-gray-200 rounded-lg h-32"></div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gray-200 rounded-lg h-32"></div>
                  <div className="bg-gray-200 rounded-lg h-48"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
              <GraduationCap className="h-6 w-6" />
              <span className="text-sm font-medium">Our Programs</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Academic Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive pharmacy education programs designed to prepare
              students for successful careers in the pharmaceutical industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {program.title}
                    </h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{program.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Intake:</span>
                        <span className="font-medium">{program.intake}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Fees:</span>
                        <span className="font-medium">{program.fees}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Learn More →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">RPCP SCALARS</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Our achievements reflect our commitment to excellence in
              pharmaceutical education and research
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
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-blue-200">{achievement.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ready to start your journey in pharmaceutical sciences? Contact
                us for more information about our programs and admission
                process.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <div className="text-gray-600">+91 7052 101 786</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">
                      info@rpcp.charusat.ac.in
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Address</div>
                    <div className="text-gray-600">
                      CHARUSAT Campus, Changa, Anand, Gujarat
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Make An Contact
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  ></textarea>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    Send Message
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
