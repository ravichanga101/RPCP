"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";
import { Search, Filter } from "lucide-react";

const drugCategories = [
  "Analgesics",
  "Antibiotics",
  "Antidepressants",
  "Antidiabetics",
  "Cardiovascular",
];

const sampleDrugs = [
  {
    name: "Paracetamol",
    category: "Analgesics",
    description: "Common pain reliever and fever reducer",
    uses: ["Pain relief", "Fever reduction"],
    sideEffects: ["Liver damage (in high doses)", "Nausea"],
    dosage: "500-1000mg every 4-6 hours",
  },
  {
    name: "Amoxicillin",
    category: "Antibiotics",
    description: "Broad-spectrum antibiotic",
    uses: ["Bacterial infections", "Respiratory tract infections"],
    sideEffects: ["Diarrhea", "Rash", "Nausea"],
    dosage: "250-500mg every 8 hours",
  },
];

const informationRequestFields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    name: "drug",
    label: "Drug Name",
    type: "text",
    placeholder: "Enter drug name",
  },
  {
    name: "query",
    label: "Query",
    type: "textarea",
    placeholder: "What information are you looking for?",
  },
];

export default function DrugInformation() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredDrugs = sampleDrugs.filter(
    (drug) =>
      (drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drug.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === "all" || drug.category === selectedCategory)
  );

  const handleInformationRequest = async (data) => {
    console.log("Information request:", data);
    // Here you would typically send this to your API
    alert("Request submitted successfully!");
  };

  return (
    <div className="container mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Drug Information Center</h1>
        <p className="text-lg text-muted-foreground">
          Access comprehensive information about pharmaceutical drugs
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search drugs..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="p-2 rounded-md border bg-background"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {drugCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Drug Information Cards */}
        <div className="grid gap-6">
          {filteredDrugs.map((drug) => (
            <motion.div
              key={drug.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {drug.name}
                    <span className="text-sm text-muted-foreground">
                      {drug.category}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>{drug.description}</p>
                    <div>
                      <h4 className="font-medium mb-2">Uses:</h4>
                      <ul className="list-disc pl-5">
                        {drug.uses.map((use) => (
                          <li key={use} className="text-muted-foreground">
                            {use}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Side Effects:</h4>
                      <ul className="list-disc pl-5">
                        {drug.sideEffects.map((effect) => (
                          <li key={effect} className="text-muted-foreground">
                            {effect}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Recommended Dosage:</h4>
                      <p className="text-muted-foreground">{drug.dosage}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Information Request Form */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Request Drug Information</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm
              fields={informationRequestFields}
              onSubmit={handleInformationRequest}
              submitText="Submit Request"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
