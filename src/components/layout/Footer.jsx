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
import Image from "next/image"; // Added for the logo
import { 
  Facebook, 
  Instagram, 
  Linkedin,
  Phone,
  Mail,
  MapPin,
  ArrowUp
} from "lucide-react";

// Social Links Array for easier mapping
const socialLinks = [
  { href: "https://www.facebook.com/RamanbhaiPatelCollegeOfPharmacy/", icon: Facebook, label: "Facebook" },
  { href: "https://www.linkedin.com/in/rpcp-charusat-changa-5a71941ab/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/rpcp_charusat/", icon: Instagram, label: "Instagram" },
];

// Quick Links Array
const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/admissions", label: "Admissions" },
];

const studentLinks = [
    { href: "/placement", label: "Placement" },
    { href: "/research", label: "Research" },
    { href: "/faculty", label: "Faculty" },
    { href: "/facilities", label: "Facilities" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#202A44] text-gray-300">
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: About & Socials */}
          <div className="md:col-span-2 lg:col-span-1">
             <p className="text-gray-400 leading-relaxed mb-6">
                A premier institute for pharmaceutical education, established in 2004 under CHARUSAT, committed to shaping the future of the pharma industry.
             </p>
             <div className="flex space-x-3">
                {socialLinks.map((link) => (
                    <a 
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="w-10 h-10 bg-white/10 hover:bg-[#FBCB0A] hover:text-[#202A44] text-white rounded-full flex items-center justify-center transition-all duration-300"
                    >
                        <link.icon className="h-5 w-5" />
                    </a>
                ))}
             </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[#FBCB0A] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Student Corner */}
           <div>
            <h3 className="text-lg font-semibold text-white mb-6">Student Corner</h3>
            <ul className="space-y-3">
               {studentLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[#FBCB0A] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#FBCB0A] mt-1 flex-shrink-0" />
                <a href="https://maps.app.goo.gl/P2Kq4pSgVbV4qGqf8" target="_blank" rel="noopener noreferrer" className="hover:text-[#FBCB0A] transition-colors duration-200">
                  Off. Nadiad-Petlad Highway, Changa-388421, Anand, Gujarat, India
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#FBCB0A] mt-1 flex-shrink-0" />
                <a href="mailto:principal.rpcp@charusat.ac.in" className="hover:text-[#FBCB0A] transition-colors duration-200">
                  principal.rpcp@charusat.ac.in
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#FBCB0A] mt-1 flex-shrink-0" />
                <div>
                    <a href="tel:+912697265151" className="hover:text-[#FBCB0A] transition-colors duration-200 block">
                        +91 2697 265151 (Office)
                    </a>
                    <a href="tel:+917567523103" className="hover:text-[#FBCB0A] transition-colors duration-200 block mt-1">
                        +91 7567523103 (Admissions)
                    </a>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} RPCP-
            <Link href="https://www.charusat.ac.in/" target="_blank" rel="noopener noreferrer" className="text-[#FBCB0A] hover:underline">
              CHARUSAT
            </Link> | All rights reserved
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-[#FBCB0A] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/sitemap" className="hover:text-[#FBCB0A] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#FBCB0A] hover:bg-yellow-400 text-[#202A44] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </footer>
  );
}