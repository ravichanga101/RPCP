"use client";

import Image from "next/image";

export default function HerbalGarden() {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Herbal Garden</h1>
          <p className="text-gray-600 mt-2 max-w-4xl">
            The Importance of Medicinal and Aromatic Plants
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-md border p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">The Importance of Medicinal and Aromatic Plants</h2>
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    <p>
                      Herbs and plants play a significant role in healthcare system worldwide. As per WHO, around 70-80% of world’s populations still rely on plants and plant based products for their primary health care. Today in India, many traditional systems of medicines like Ayurveda, Unani, Siddha, Homeopathy; are still prevailing and practised besides allopathic or western system of medicines. According to an all India ethno-biological survey carried out by the Ministry of Environment & Forests, Government of India, there are over 8000 species of plants being used by the people of India.
                    </p>
                    <p>
                      It is evident that the Indian people have tremendous passion for medicinal plants and used them for wide range of health related applications from a common cold to memory improvement and treatment of poisonous snake bites. In some therapeutic conditions like infertility, diabetes, liver tonic, jaundice, hepatitis, immune-modulators, cancer, plants and plant based medicine play a pivotal role in patient’s care. India has one of the richest plant medical cultures in the world. It is a culture that is of tremendous contemporary relevance because it can on one hand ensure health security to millions of people and on the other hand it can provide new and safe herbal drugs to the entire world. There are estimated to be around 25000 effective plant based formulations used in folk medicine and known to rural communities all over India and around 10000 designed formulations are available in the indigenous medical texts.
                    </p>
                    <p>
                      To conserve and preserve these herbal wealth of India, it is our prime duty and responsibility to cultivate and nurture these plants whenever and wherever possible. Keeping in mind the philosophy, CHARUSAT and Ramanbhai Patel College of Pharmacy also share their sense of responsibility towards environment sustainability and developed a dedicated herbal garden.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Herbal Garden</h2>
                  <p className="text-gray-700 leading-relaxed">
                    The Herbal Garden of RPCP is the place where you can find almost over 140 species of aromatic and medicinal plants. The garden is spread over 2000 square meter area and situated behind Pharmacy institute. The garden is developed keeping in mind the syllabi of B. Pharmacy programme in which students can easily learn different aspects of medicinal and aromatic plants including morphology, microscopy, taxonomy etc. Fresh plant materials from garden are also utilized in practical laboratory sessions to carry out different experiments including anatomical studies, extraction of plant materials and chemical analysis too.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    Herbal garden of institute also has some endangered and rare plants like ashoka, rudraksh, chandan, coffee, arjuna. Apart from this, garden is also flourished with varieties of traditional, ayurvedic, local and regional plants having medicinal values. A separate area is also assigned for development and maintenance of small and delicate plants in garden where they are protected from direct sunlight and animal attacks. The soil fertility is checked periodically and manure is being changed time to time.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Digitalization of Herbal Garden</h2>
                  <p className="text-gray-700 leading-relaxed">
                    In today’s era of social media and networking, where every information is being floated and forwarded without sufficient knowledge and authenticity, as a health promoter, it is our duty to provide all people with scientifically true and authentic information on medicinal plants. Each plant in the garden is provided with basic information including common name, botanical source, and common use. However, the herbal garden is also upgraded to provide knowledge about correct and authentic scientific information of medicinal and aromatic plants to its visitors. The information on medicinal and aromatic plants including identification parameters, details on parts used, its chemicals present, traditional and medicinal uses along with herbal and Ayurvedic formulations available in the market is authenticated with the help of pharmacopoeia and other reference materials.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    Each plant is having QR code written on a label against it. For each plant, the QR code shall be scanned by the visitor of the garden and that will redirect the visitor to the plant information where all information is available. Visitor can get the correct information about the plant. Along with written information, a short video describing each plant is also placed on website if more information is required by a visitor.
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="lg:col-span-1">
              <div className="grid gap-4">
                {[
                  "/images/HG1.jpg",
                  "/images/HG2.jpg",
                  "/images/HG3.jpg",
                ].map((src) => (
                  <div key={src} className="relative aspect-[4/3] rounded-md overflow-hidden border bg-white">
                    <Image src={src} alt="Herbal garden" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


