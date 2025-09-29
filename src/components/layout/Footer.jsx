// "use client";

// import Link from "next/link";
// import {
//   GraduationCap,
//   Facebook,
//   Instagram,
//   Twitter,
//   Linkedin,
//   Phone,
//   Mail,
//   MapPin,
//   ArrowUp
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <footer className="bg-gray-900 text-white">

//       {/* Main Footer Content */}
//       <div className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Info */}
//             <div>
//               <h4 className="text-2xl font-bold mb-6 text-orange-400">Contact Info</h4>
//               <p className="text-gray-300 mb-8 leading-relaxed text-lg">
//                 Welcome to our Website. We are glad to have you around.
//               </p>

//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
//                     <Phone className="h-5 w-5 text-white" />
//                   </div>
//                   <div>
//                     <h5 className="text-white font-semibold mb-2">Phone</h5>
//                     <a
//                       href="tel:+912697265151"
//                       className="text-gray-300 text-sm hover:text-orange-400 transition-colors duration-200 block"
//                     >
//                       +91 2697 265151
//                     </a>
//                     <p className="text-gray-300 text-sm mt-1">
//                       <span className="text-orange-400 font-medium">Contact For Admission:</span><br />
//                       <a
//                         href="tel:+917567523103"
//                         className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
//                       >
//                         +91 7567523103
//                       </a>
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
//                     <Mail className="h-5 w-5 text-white" />
//                   </div>
//                   <div>
//                     <h5 className="text-white font-semibold mb-2">Email</h5>
//                     <a
//                       href="mailto:principal.rpcp@charusat.ac.in"
//                       className="text-gray-300 text-sm hover:text-orange-400 transition-colors duration-200"
//                     >
//                       principal.rpcp@charusat.ac.in
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
//                     <MapPin className="h-5 w-5 text-white" />
//                   </div>
//                   <div>
//                     <h5 className="text-white font-semibold mb-2">Location</h5>
//                     <a
//                       href="https://maps.app.goo.gl/MTCQBcVoz5zzwUmz8"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-gray-300 text-sm hover:text-orange-400 transition-colors duration-200 block"
//                     >
//                       Off. Nadiad-Petlad Highway, Changa-388421, Anand, Gujarat, India
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Social Media Links */}
//             <div>
//               <h4 className="text-2xl font-bold mb-6 text-orange-400">Follow Us</h4>
//               <p className="text-gray-300 mb-8 leading-relaxed text-lg">
//                 Stay connected with us on social media for the latest updates and news.
//               </p>

//               <div className="flex space-x-4">
//                 <Link
//                   href="https://www.facebook.com/RamanbhaiPatelCollegeOfPharmacy/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gray-700 hover:bg-blue-600 p-4 rounded-xl transition-all duration-300 hover:scale-110 group"
//                 >
//                   <Facebook className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
//                 </Link>
//                 <Link
//                   href="https://www.linkedin.com/in/rpcp-charusat-changa-5a71941ab/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gray-700 hover:bg-blue-700 p-4 rounded-xl transition-all duration-300 hover:scale-110 group"
//                 >
//                   <Linkedin className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
//                 </Link>
//                 <Link
//                   href="https://www.instagram.com/rpcp_charusat/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gray-700 hover:bg-pink-600 p-4 rounded-xl transition-all duration-300 hover:scale-110 group"
//                 >
//                   <Instagram className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
//                 </Link>
//               </div>

//               <div className="mt-8 p-6 bg-gray-800/50 rounded-xl border border-gray-700">
//                 <div className="flex items-center space-x-3 mb-4">
//                   <div className="bg-orange-500 p-2 rounded-lg">
//                     <GraduationCap className="h-6 w-6 text-white" />
//                   </div>
//                   <div>
//                     <span className="text-xl font-bold text-orange-400">RPCP</span>
//                     <div className="text-xs text-gray-400">College of Pharmacy</div>
//                   </div>
//                 </div>
//                 <p className="text-gray-300 text-sm leading-relaxed">
//                   Ramanbhai Patel College of Pharmacy (RPCP) is a premier institute for pharmaceutical education,
//                   established in 2004 under CHARUSAT.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Footer */}
//       <div className="border-t border-gray-800 py-6">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//             <p className="text-gray-400 text-sm text-center md:text-left">
//               © Copyright RPCP-<Link href="https://www.charusat.ac.in/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors duration-200">CHARUSAT</Link> | All rights reserved
//             </p>
//             <div className="flex items-center space-x-6 text-sm text-gray-400">
//               <Link href="/privacy" className="hover:text-orange-400 transition-colors">
//                 Privacy Policy
//               </Link>
//               <Link href="/terms" className="hover:text-orange-400 transition-colors">
//                 Terms of Service
//               </Link>
//               <Link href="/sitemap" className="hover:text-orange-400 transition-colors">
//                 Sitemap
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll to Top Button */}
//       <button
//         onClick={scrollToTop}
//         className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
//         aria-label="Scroll to top"
//       >
//         <ArrowUp className="h-6 w-6" />
//       </button>
//     </footer>
//   );
// }

"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  GraduationCap,
  Lightbulb,
  Award,
  FileText,
  BookCheck,
  Download,
} from "lucide-react";

const socialLinks = [
  {
    href: "https://www.facebook.com/RamanbhaiPatelCollegeOfPharmacy/",
    icon: Facebook,
    label: "Facebook",
    color: "hover:bg-blue-600",
  },
  {
    href: "https://www.linkedin.com/in/rpcp-charusat-changa-5a71941ab/",
    icon: Linkedin,
    label: "LinkedIn",
    color: "hover:bg-blue-700",
  },
  {
    href: "https://www.instagram.com/rpcp_charusat/",
    icon: Instagram,
    label: "Instagram",
    color: "hover:bg-pink-600",
  },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/contact", label: "Contact" },
];

const academicLinks = [
  { href: "/placement", label: "Placement" },
  { href: "/research", label: "Research" },
  { href: "/faculty", label: "Faculty" },
  { href: "/facilities/labs", label: "Facilities" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern - Enhanced */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-400/5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>
        {/* Decorative geometric patterns */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 pt-20 pb-10 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Us - Left Side */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h4 className="text-2xl font-bold text-white mb-8 relative flex items-center">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center mr-3">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <span className="relative">
                Contact Us
                <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 rounded-full"></div>
              </span>
            </h4>
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/30 transition-all duration-300">
                    <Phone className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-amber-500 font-medium text-sm mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+912697265151"
                      className="text-white hover:text-amber-500 transition-colors duration-200 text-lg font-semibold"
                    >
                      +91 2697 265151
                    </a>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/30 transition-all duration-300">
                    <Mail className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-amber-500 font-medium text-sm mb-1">
                      Email
                    </p>
                    <div className="space-y-1">
                      <a
                        href="mailto:info@charusat.ac.in"
                        className="text-white hover:text-amber-500 transition-colors duration-200 block"
                      >
                        info@charusat.ac.in
                      </a>
                      <a
                        href="mailto:rpcpgen@charusat.ac.in"
                        className="text-white hover:text-amber-500 transition-colors duration-200 block"
                      >
                        rpcpgen@charusat.ac.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500/30 transition-all duration-300">
                    <MapPin className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-amber-500 font-medium text-sm mb-2">
                      Address
                    </p>
                    <div className="text-gray-300 leading-relaxed">
                      <p className="font-semibold text-white mb-1">
                        Charotar University of Science and Technology
                      </p>
                      <p>CHARUSAT Campus</p>
                      <p>Off. Nadiad-Petlad Highway, Changa 388421</p>
                      <p>Anand, Gujarat, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RPCP Map - Center */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h4 className="text-2xl font-bold text-white mb-8 relative flex items-center justify-center">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center mr-3">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <span className="relative">
                RPCP Map
                <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 rounded-full"></div>
              </span>
            </h4>
            <div className="relative group">
              <div className="bg-amber-500/20 p-1 rounded-2xl">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 group-hover:border-amber-500/30 transition-all duration-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2943156469!2d72.81743411447087!3d22.59935377949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c431b32fb7%3A0xf6dba80080c7b8ef!2sRamanbhai%20Patel%20College%20of%20Pharmacy!5e0!3m2!1sen!2sin!4v1695898234567!5m2!1sen!2sin"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl shadow-lg"
                  ></iframe>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a
                  href="https://www.google.com/maps/place/Ramanbhai+Patel+College+of+Pharmacy/@22.599355,72.819786,12z/data=!4m6!3m5!1s0x395e50c431b32fb7:0xf6dba80080c7b8ef!8m2!3d22.5993553!4d72.8197859!16s%2Fg%2F1hm50pzdj?hl=en&entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <MapPin className="h-4 w-4" />
                  <span className="font-medium">View Larger Map</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links - Right Side */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h4 className="text-2xl font-bold text-white mb-8 relative flex items-center justify-end">
              <span className="relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 rounded-full"></div>
              </span>
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center ml-3">
                <Lightbulb className="h-5 w-5 text-white" />
              </div>
            </h4>
            <div className="space-y-4">
              <a
                href="https://charusat.edu.in:912/Uniexamresult/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                    <Award className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-white group-hover:text-amber-500 transition-colors duration-200 font-medium">
                    University Results
                  </span>
                </div>
              </a>

              <a
                href="https://charusat.edu.in:912/OthPaymentApp/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center group-hover:from-green-500/30 group-hover:to-green-600/30 transition-all duration-300">
                    <FileText className="h-5 w-5 text-green-400" />
                  </div>
                  <span className="text-white group-hover:text-amber-500 transition-colors duration-200 font-medium">
                    Online Transcript
                  </span>
                </div>
              </a>

              <a
                href="https://admission.charusat.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                    <BookCheck className="h-5 w-5 text-purple-400" />
                  </div>
                  <span className="text-white group-hover:text-amber-500 transition-colors duration-200 font-medium">
                    Admissions
                  </span>
                </div>
              </a>

              <a
                href="https://drive.google.com/drive/folders/10-XqFw6ISXnDeyajK8oB3YIIj6NfrIyO"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all duration-300">
                    <Download className="h-5 w-5 text-orange-400" />
                  </div>
                  <span className="text-white group-hover:text-amber-500 transition-colors duration-200 font-medium">
                    Downloads
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gradient-to-r from-transparent via-white/20 to-transparent pt-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <img
                  src="/images/rpcplogo.png"
                  alt="RPCP Logo"
                  className="h-10 w-auto"
                />
                <div className="text-center md:text-left">
                  <p className="text-gray-300 text-sm">
                    © {new Date().getFullYear()} RPCP -
                    <Link
                      href="https://www.charusat.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-500 hover:text-amber-600 font-semibold ml-1 transition-colors duration-200"
                    >
                      CHARUSAT
                    </Link>
                    . All rights reserved.
                  </p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center space-x-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`w-12 h-12 bg-white/10 ${link.color} text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/20 hover:border-white/30`}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-amber-500/25 z-50 group border border-amber-500/20"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </footer>
  );
}
