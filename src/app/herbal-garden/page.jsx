"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import herbalPlants from "@/data/herbal-plants.json";
import { Search } from "lucide-react";

export default function HerbalGarden() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPlants = herbalPlants.plants.filter((plant) => {
    const matchesSearch =
      plant.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || plant.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "all",
    ...new Set(herbalPlants.plants.map((p) => p.category)),
  ];

  return (
    <div className="container mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Herbal Garden</h1>
        <p className="text-lg text-muted-foreground">
          Explore our collection of medicinal plants and learn about their
          properties and uses in modern pharmacy.
        </p>
      </motion.div>

      {/* Search and Filter Section */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search plants..."
            className="w-full pl-10 pr-4 py-2 rounded-md border bg-background"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="p-2 rounded-md border bg-background"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Plants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlants.map((plant, index) => (
          <motion.article
            key={plant.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border rounded-lg overflow-hidden bg-card"
          >
            <div className="relative h-48">
              <Image
                src={plant.images[0]}
                alt={plant.commonName}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{plant.commonName}</h3>
              <p className="text-sm text-muted-foreground italic mb-2">
                {plant.scientificName}
              </p>
              <p className="text-sm mb-4">{plant.description}</p>
              <div className="space-y-2">
                <h4 className="font-medium">Medical Uses:</h4>
                <ul className="text-sm space-y-1">
                  {plant.medicalUses.map((use) => (
                    <li key={use} className="text-muted-foreground">
                      • {use}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
