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
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* College Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/images/rpcplogo.png"
                alt="RPCP Logo"
                className="h-12 w-auto mr-3"
              />
              <div>
                <h3 className="text-xl font-bold text-white">RPCP</h3>
                <p className="text-sm text-gray-300">College of Pharmacy</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ramanbhai Patel College of Pharmacy (RPCP) is a constituent
              Institute of CHARUSAT, established in 2004 to promote excellence
              in pharmaceutical education and research.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/RamanbhaiPatelCollegeOfPharmacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-blue-600 p-3 rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rpcp-charusat-changa-5a71941ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-blue-700 p-3 rounded-lg transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/rpcp_charusat/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-pink-600 p-3 rounded-lg transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/faculty"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Faculty
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/placement"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Placement
                </Link>
              </li>
              <li>
                <a
                  href="/new_data/SIF/Standard%20Inspection%20Form_compressed.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Standard Inspection Form
                </a>
              </li>
              <li>
                <a
                  href="/files/RPCP_NIRF_2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  NIRF 2025
                </a>
              </li>
            </ul>
          </div>

          {/* IQAC */}
          <div>
            <h4 className="text-lg font-semibold mb-4">IQAC</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/files/innovative_idea_box.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  IIB
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+912697265151"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +91 2697 265151
                  </a>
                  <br />
                  <a
                    href="tel:+917567523103"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +91 7567523103 (Admission inquiry)
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:principal.rpcp@charusat.ac.in"
                    className="text-gray-300 hover:text-white transition-colors block"
                  >
                    principal.rpcp@charusat.ac.in
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>CHARUSAT Campus</p>
                  <p>Changa, Anand</p>
                  <p>Gujarat 388421, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} RPCP -
              <Link
                href="https://www.charusat.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors"
              >
                CHARUSAT
              </Link>
              . All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="https://charusat.edu.in:912/Uniexamresult/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Results
              </a>
              <a
                href="https://admission.charusat.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Admissions
              </a>
              <a
                href="https://charusat.edu.in:912/OthPaymentApp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Transcript
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
