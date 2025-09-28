"use client";

import Image from "next/image";
import { Leaf, Users, QrCode, Microscope } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "140+ Species",
    description: "Aromatic and medicinal plants",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "2000 sq.m",
    description: "Dedicated garden area",
  },
  {
    icon: <QrCode className="h-6 w-6" />,
    title: "Digital Access",
    description: "QR code plant information",
  },
  {
    icon: <Microscope className="h-6 w-6" />,
    title: "Research Hub",
    description: "Live laboratory sessions",
  },
];

export default function HerbalGarden() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#202A44] text-white pt-24 pb-16 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-500/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-green-400/5 rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
          >
            <span className="inline-block hover:text-green-400 transition-colors duration-300">
              Herbal
            </span>{" "}
            <span className="inline-block hover:text-emerald-400 transition-colors duration-300">
              Garden
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 max-w-3xl mx-auto text-lg text-gray-300 hover:text-white transition-colors duration-300"
          >
            A living library of medicinal plants preserving India's rich herbal
            heritage
          </motion.p>

          {/* Floating leaf decorations */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-16 left-1/4 opacity-20"
          >
            <Leaf className="h-8 w-8 text-green-400" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-12 right-1/3 opacity-20"
          >
            <Leaf className="h-6 w-6 text-emerald-400" />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group relative bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-200/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-700 delay-100"></div>
                  <div className="absolute -top-2 -right-6 w-6 h-6 bg-emerald-200/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-700 delay-300"></div>
                  <div className="absolute -bottom-3 -left-2 w-5 h-5 bg-green-300/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-700 delay-500"></div>
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="h-12 w-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 group-hover:text-green-700 group-hover:scale-110 transition-all duration-300"
                    whileHover={{
                      rotate: [0, -10, 10, -5, 5, 0],
                      transition: { duration: 0.6 },
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <motion.h3
                    className="font-bold text-[#202A44] mb-2 group-hover:text-green-700 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>

                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="absolute inset-[2px] rounded-xl bg-white"></div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <motion.h2
                    className="text-3xl font-bold text-[#202A44] mb-6 group-hover:text-green-700 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    The Importance of Medicinal and Aromatic Plants
                  </motion.h2>
                  <motion.div
                    className="w-24 h-1 bg-[#FBCB0A] mb-6 group-hover:w-32 group-hover:bg-green-500 transition-all duration-500"
                    whileHover={{ scaleX: 1.3 }}
                  ></motion.div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Herbs and plants play a significant role in healthcare
                      system worldwide. As per WHO, around 70-80% of world's
                      populations still rely on plants and plant based products
                      for their primary health care. Today in India, many
                      traditional systems of medicines like Ayurveda, Unani,
                      Siddha, Homeopathy; are still prevailing and practised
                      besides allopathic or western system of medicines.
                      According to an all India ethno-biological survey carried
                      out by the Ministry of Environment & Forests, Government
                      of India, there are over 8000 species of plants being used
                      by the people of India.
                    </p>
                    <p>
                      It is evident that the Indian people have tremendous
                      passion for medicinal plants and used them for wide range
                      of health related applications from a common cold to
                      memory improvement and treatment of poisonous snake bites.
                      In some therapeutic conditions like infertility, diabetes,
                      liver tonic, jaundice, hepatitis, immune-modulators,
                      cancer, plants and plant based medicine play a pivotal
                      role in patient's care. India has one of the richest plant
                      medical cultures in the world. It is a culture that is of
                      tremendous contemporary relevance because it can on one
                      hand ensure health security to millions of people and on
                      the other hand it can provide new and safe herbal drugs to
                      the entire world. There are estimated to be around 25000
                      effective plant based formulations used in folk medicine
                      and known to rural communities all over India and around
                      10000 designed formulations are available in the
                      indigenous medical texts.
                    </p>
                    <p>
                      To conserve and preserve these herbal wealth of India, it
                      is our prime duty and responsibility to cultivate and
                      nurture these plants whenever and wherever possible.
                      Keeping in mind the philosophy, CHARUSAT and Ramanbhai
                      Patel College of Pharmacy also share their sense of
                      responsibility towards environment sustainability and
                      developed a dedicated herbal garden.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <motion.h2
                    className="text-3xl font-bold text-[#202A44] mb-6 group-hover:text-green-700 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    Herbal Garden
                  </motion.h2>
                  <motion.div
                    className="w-24 h-1 bg-[#FBCB0A] mb-6 group-hover:w-32 group-hover:bg-green-500 transition-all duration-500"
                    whileHover={{ scaleX: 1.3 }}
                  ></motion.div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      The Herbal Garden of RPCP is the place where you can find
                      almost over 140 species of aromatic and medicinal plants.
                      The garden is spread over 2000 square meter area and
                      situated behind Pharmacy institute. The garden is
                      developed keeping in mind the syllabi of B. Pharmacy
                      programme in which students can easily learn different
                      aspects of medicinal and aromatic plants including
                      morphology, microscopy, taxonomy etc. Fresh plant
                      materials from garden are also utilized in practical
                      laboratory sessions to carry out different experiments
                      including anatomical studies, extraction of plant
                      materials and chemical analysis too.
                    </p>
                    <p>
                      Herbal garden of institute also has some endangered and
                      rare plants like ashoka, rudraksh, chandan, coffee,
                      arjuna. Apart from this, garden is also flourished with
                      varieties of traditional, ayurvedic, local and regional
                      plants having medicinal values. A separate area is also
                      assigned for development and maintenance of small and
                      delicate plants in garden where they are protected from
                      direct sunlight and animal attacks. The soil fertility is
                      checked periodically and manure is being changed time to
                      time.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <motion.h2
                    className="text-3xl font-bold text-[#202A44] mb-6 group-hover:text-green-700 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    Digitalization of Herbal Garden
                  </motion.h2>
                  <motion.div
                    className="w-24 h-1 bg-[#FBCB0A] mb-6 group-hover:w-32 group-hover:bg-green-500 transition-all duration-500"
                    whileHover={{ scaleX: 1.3 }}
                  ></motion.div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      In today's era of social media and networking, where every
                      information is being floated and forwarded without
                      sufficient knowledge and authenticity, as a health
                      promoter, it is our duty to provide all people with
                      scientifically true and authentic information on medicinal
                      plants. Each plant in the garden is provided with basic
                      information including common name, botanical source, and
                      common use. However, the herbal garden is also upgraded to
                      provide knowledge about correct and authentic scientific
                      information of medicinal and aromatic plants to its
                      visitors. The information on medicinal and aromatic plants
                      including identification parameters, details on parts
                      used, its chemicals present, traditional and medicinal
                      uses along with herbal and Ayurvedic formulations
                      available in the market is authenticated with the help of
                      pharmacopoeia and other reference materials.
                    </p>
                    <p>
                      Each plant is having QR code written on a label against
                      it. For each plant, the QR code shall be scanned by the
                      visitor of the garden and that will redirect the visitor
                      to the plant information where all information is
                      available. Visitor can get the correct information about
                      the plant. Along with written information, a short video
                      describing each plant is also placed on website if more
                      information is required by a visitor.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Gallery */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-[#202A44] mb-4">
                  Garden Gallery
                </h3>
                <div className="space-y-4">
                  {[
                    "/images/HG1.jpg",
                    "/images/HG2.jpg",
                    "/images/HG3.jpg",
                  ].map((src, index) => (
                    <motion.div
                      key={src}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true, amount: 0.3 }}
                      whileHover={{
                        scale: 1.02,
                        y: -5,
                        transition: { duration: 0.3 },
                      }}
                      className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      <Image
                        src={src}
                        alt={`Herbal garden ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Overlay with plant icon */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2 text-white">
                            <Leaf className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              Garden View {index + 1}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Animated border */}
                      <div className="absolute inset-0 border-2 border-green-400/0 group-hover:border-green-400/60 rounded-lg transition-all duration-300"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
