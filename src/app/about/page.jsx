"use client";

import { motion, useInView, useAnimation, animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  GraduationCap,
  Target,
  Eye,
  Users,
  Award,
  Building2,
  CalendarCheck2,
  MapPin,
  Sparkles,
  BookUser,
  ChevronDown,
} from "lucide-react";

// --- Data (Remains the same for easy updating) ---
const visionMission = [
  {
    icon: <Eye className="h-8 w-8 text-indigo-500" />,
    title: "Our Vision",
    description:
      "To Become a Premier Pharma Institute by Creating World Class Pharmacists and Researchers.",
  },
  {
    icon: <Target className="h-8 w-8 text-indigo-500" />,
    title: "Our Mission",
    description:
      "To Strive for the Excellence in Pharmaceutical Sciences through Quality Education and Research.",
  },
];

const leadership = [
  {
    name: "Dr. Samir Patel",
    position: "Professor and I/C Dean",
    interests:
      "Peptide Synthesis, Stability-Indicating Method Development & Validation",
    image: "/images/faculty_photo/Samir Patel.jpg",
  },
  {
    name: "Dr. Manan Raval",
    position: "Professor and Principal",
    interests: "Phyto-Chemical Analysis, Phyto-Pharmacology",
    image: "/images/faculty_photo/principal.png",
  },
];

const achievements = [
  {
    number: 2004,
    label: "Year Established",
    icon: <CalendarCheck2 className="h-8 w-8" />,
  },
  {
    number: 20,
    label: "Years of Excellence",
    icon: <Sparkles className="h-8 w-8" />,
  },
  {
    number: 1000,
    label: "Students Enrolled",
    icon: <GraduationCap className="h-8 w-8" />,
  },
  {
    number: 50,
    label: "Faculty Members",
    icon: <BookUser className="h-8 w-8" />,
  },
];

// --- Reusable Components for Animation and Style ---

// Animated Counter for Achievements
// function AnimatedCounter({ value }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });
//   const controls = useAnimation();
//   const baseValue = Math.floor(value * 0); // Start from 0

//   useEffect(() => {
//     if (inView) {
//       controls.start({
//         y: 0,
//         opacity: 1,
//         transition: {
//           type: "spring",
//           stiffness: 100,
//           damping: 20,
//         },
//       });
//     }
//   }, [inView, controls]);

//   useEffect(() => {
//     if (inView) {
//       const node = ref.current;
//       const animation = motion.animate(baseValue, value, {
//         duration: 2,
//         ease: "easeOut",
//         onUpdate(latest) {
//           node.textContent = Math.round(latest).toLocaleString();
//         },
//       });
//       return () => animation.stop();
//     }
//   }, [inView, value, baseValue]);

//   return <motion.span ref={ref} initial={{ y: 20, opacity: 0 }} animate={controls} />;
// }

// Animated Counter for Achievements
function AnimatedCounter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const baseValue = 0; // Start from 0

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
      });
    }
  }, [inView, controls]);

  useEffect(() => {
    if (inView) {
      const node = ref.current;
      // CORRECTED: Called 'animate' directly
      const animation = animate(baseValue, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          if (node) {
            node.textContent = Math.round(latest).toLocaleString();
          }
        },
      });
      return () => animation.stop();
    }
  }, [inView, value, baseValue]);

  return (
    <motion.span ref={ref} initial={{ y: 20, opacity: 0 }} animate={controls} />
  );
}

// Standardized Section Header
const SectionHeader = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.3 }}
    className="text-center mb-16"
  >
    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
      {title}
    </h2>
    <p className="text-lg text-slate-600 max-w-3xl mx-auto">{subtitle}</p>
    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
  </motion.div>
);

// --- Main Page Component ---
export default function AboutPage() {
  // Function to scroll to footer
  const scrollToFooter = () => {
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Framer Motion variants for staggered animations
  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* --- Hero Section with Video Background --- */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/index/slider-01.jpg')" }}
        />
        <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-4"
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
          >
            About RPCP
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto"
          >
            A legacy of excellence in pharmaceutical education and research
            since 2004.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-10 z-20"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </section>

      {/* --- Vision & Mission (Overlapping Section) --- */}
      <section className="relative -mt-24 z-30 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {visionMission.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className="bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl shadow-slate-900/10 text-center p-8 border border-white/50"
              >
                <div className="mx-auto bg-indigo-100 rounded-full h-16 w-16 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- About Content & Quick Facts --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-3"
            >
              <span className="text-amber-600 font-semibold">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                A Legacy of Pharmaceutical Excellence
              </h2>
              <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                <p>
                  Ramanbhai Patel College of Pharmacy (RPCP), established in
                  2004, is a constituent Institute of CHARUSAT, dedicated to
                  preparing the next generation of pharmacy leaders and
                  innovators.
                </p>
                <p>
                  With the generous patronage of Zydus Cadila Health Care Ltd.,
                  we uphold a tradition of rigorous academics, hands-on
                  research, and a commitment to ethical practice, shaping a
                  future where pharmaceutical science serves society with
                  integrity and impact.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-2 bg-slate-50 rounded-xl p-8 border border-slate-200"
            >
              {[
                {
                  icon: <Building2 className="h-6 w-6 text-amber-600" />,
                  label: "Established",
                  value: "2004",
                },
                {
                  icon: <MapPin className="h-6 w-6 text-amber-600" />,
                  label: "Location",
                  value: "Changa, Gujarat",
                },
                {
                  icon: <Users className="h-6 w-6 text-amber-600" />,
                  label: "Affiliation",
                  value: "CHARUSAT",
                },
                {
                  icon: <Award className="h-6 w-6 text-amber-600" />,
                  label: "Recognition",
                  value: "PCI, NAAC",
                },
              ].map((fact) => (
                <motion.div
                  variants={listItemVariants}
                  key={fact.label}
                  className="flex items-start space-x-4 py-3"
                >
                  <div className="bg-amber-100 p-3 rounded-lg mt-1">
                    {fact.icon}
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">{fact.label}</div>
                    <div className="text-slate-600">{fact.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Achievements (match home style) --- */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Journey in Numbers</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Celebrating over two decades of milestones in education, research,
              and community impact.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
              >
                <div className="text-amber-400 mb-2">{item.icon}</div>
                <div className="text-4xl font-bold text-amber-400 mb-1">
                  <AnimatedCounter value={item.number} />+
                </div>
                <div className="text-slate-300 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Leadership --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Leadership Team"
            subtitle="Meet the experienced visionaries guiding RPCP towards excellence."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                className="bg-slate-50 rounded-xl p-8 flex flex-col sm:flex-row items-center gap-6 border border-slate-200 hover:border-amber-200 transition-colors"
              >
                <div className="relative h-28 w-28 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-amber-600 mb-3">
                    {member.position}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {member.interests}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact CTA --- */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Join Our Legacy?
          </h2>
          <p className="text-base md:text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
            Begin your journey in pharmaceutical sciences at one of India's
            premier institutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://admission.charusat.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow inline-block text-center"
            >
              Apply Now
            </motion.a>
            <motion.button
              onClick={scrollToFooter}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white border-2 border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
