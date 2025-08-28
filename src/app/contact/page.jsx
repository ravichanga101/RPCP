"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageSquare
} from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-white" />,
      title: "Phone",
      details: [
        "+1 (444) 000-8888",
        "+91 7052 101 786"
      ],
      color: "bg-orange-500"
    },
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      title: "Email",
      details: [
        "info@rpcp.charusat.ac.in",
        "help@rpcp.charusat.ac.in"
      ],
      color: "bg-blue-500"
    },
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      title: "Address",
      details: [
        "CHARUSAT Campus, Changa",
        "Anand, Gujarat 388421, India"
      ],
      color: "bg-green-500"
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM"
      ],
      color: "bg-purple-500"
    }
  ];

  const departments = [
    {
      name: "Admissions Office",
      phone: "+91 7052 101 786",
      email: "admissions@rpcp.charusat.ac.in"
    },
    {
      name: "Academic Affairs",
      phone: "+91 7052 101 787",
      email: "academic@rpcp.charusat.ac.in"
    },
    {
      name: "Research & Development",
      phone: "+91 7052 101 788",
      email: "research@rpcp.charusat.ac.in"
    },
    {
      name: "Placement Cell",
      phone: "+91 7052 101 789",
      email: "placement@rpcp.charusat.ac.in"
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
              <MessageSquare className="h-6 w-6" />
              <span className="text-sm font-medium">Contact Us</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Ready to start your journey in pharmaceutical sciences? Contact us for more information 
              about our programs and admission process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className={`${info.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="+91 1234567890"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                      <option value="">Select a subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="programs">Program Information</option>
                      <option value="research">Research Collaboration</option>
                      <option value="placement">Placement Opportunities</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
            
            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">CHARUSAT Campus, Changa, Anand, Gujarat</p>
                </div>
              </div>

              {/* Department Contacts */}
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Department Contacts</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="border-b border-blue-200 pb-3 last:border-b-0">
                      <h4 className="font-medium text-gray-900 mb-1">{dept.name}</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>📞 {dept.phone}</p>
                        <p>✉️ {dept.email}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about admissions, programs, and campus life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    What are the admission requirements for B.Pharm?
                  </h3>
                  <p className="text-gray-600">
                    Candidates must have completed 10+2 with Physics, Chemistry, and Biology/Mathematics 
                    with minimum 50% marks from a recognized board.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    How can I schedule a campus visit?
                  </h3>
                  <p className="text-gray-600">
                    You can schedule a campus visit by contacting our admissions office at 
                    +91 7052 101 786 or emailing admissions@rpcp.charusat.ac.in
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    What is the placement record of RPCP?
                  </h3>
                  <p className="text-gray-600">
                    RPCP has an excellent placement record with 97% job placement rate. 
                    Our students are placed in leading pharmaceutical companies and research institutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Are there hostel facilities available?
                  </h3>
                  <p className="text-gray-600">
                    Yes, CHARUSAT provides comfortable hostel facilities for both male and female students 
                    with modern amenities and 24/7 security.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Don't wait! Contact us today to learn more about our programs and take the first step 
              towards your career in pharmaceutical sciences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
