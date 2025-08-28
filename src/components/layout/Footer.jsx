"use client";

import Link from "next/link";
import { 
  GraduationCap, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Phone,
  Mail,
  MapPin,
  ArrowUp
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-blue-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2 flex items-center justify-center lg:justify-start">
                <Mail className="h-6 w-6 mr-2" />
                Subscribe for Newsletter
              </h3>
              <p className="text-blue-200">Stay updated with our latest news and events</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Email Address..."
                className="px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-orange-500 min-w-[300px]"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Us */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-orange-500">RPCP</span>
                  <div className="text-xs text-gray-400">College of Pharmacy</div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Ramanbhai Patel College of Pharmacy (RPCP) is a premier institute for pharmaceutical education, 
                established in 2004 under CHARUSAT. We strive for excellence in pharmaceutical sciences through 
                quality education and research.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="bg-gray-700 hover:bg-orange-500 p-2 rounded-lg transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-gray-700 hover:bg-orange-500 p-2 rounded-lg transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-gray-700 hover:bg-orange-500 p-2 rounded-lg transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-gray-700 hover:bg-orange-500 p-2 rounded-lg transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Our Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="text-gray-300 hover:text-orange-400 transition-colors">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="/facilities" className="text-gray-300 hover:text-orange-400 transition-colors">
                    Facilities
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="text-gray-300 hover:text-orange-400 transition-colors">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="/placement" className="text-gray-300 hover:text-orange-400 transition-colors">
                    Placement
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Latest News */}
            <div>
              <h4 className="text-lg font-bold mb-6">Latest News</h4>
              <div className="space-y-4">
                <div className="flex space-x-3">
                  <div className="bg-gray-700 rounded-lg w-16 h-16 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      New Research Lab Inauguration with State-of-the-art Equipment
                    </p>
                    <p className="text-orange-400 text-xs mt-1">7 March, 2024</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="bg-gray-700 rounded-lg w-16 h-16 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      International Conference on Pharmaceutical Sciences 2024
                    </p>
                    <p className="text-orange-400 text-xs mt-1">15 March, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-500 p-2 rounded-lg">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">+1 (444) 000-8888</p>
                    <p className="text-gray-300 text-sm">+91 7052 101 786</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-500 p-2 rounded-lg">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">info@rpcp.charusat.ac.in</p>
                    <p className="text-gray-300 text-sm">help@rpcp.charusat.ac.in</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-500 p-2 rounded-lg mt-1">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-300 text-sm">
                    CHARUSAT Campus, Changa, Anand, Gujarat 388421, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Ramanbhai Patel College of Pharmacy. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-orange-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-orange-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-orange-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </footer>
  );
}
