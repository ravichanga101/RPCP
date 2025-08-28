"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactForm } from "@/components/forms/ContactForm";

const labEquipment = [
  {
    id: "hplc-1",
    name: "High-Performance Liquid Chromatography (HPLC)",
    description:
      "Advanced analytical instrument for compound separation and analysis",
    specifications: [
      "Flow rate: 0.1-10 mL/min",
      "Pressure range: 0-6000 psi",
      "Detection: UV-Vis, fluorescence",
    ],
    availability: "Monday to Friday, 9 AM - 5 PM",
    location: "Analytical Lab 101",
  },
  {
    id: "uv-spec-1",
    name: "UV-Visible Spectrophotometer",
    description: "Measures the absorption of light by chemical substances",
    specifications: [
      "Wavelength range: 190-1100 nm",
      "Bandwidth: 1 nm",
      "Accuracy: ±0.3 nm",
    ],
    availability: "Monday to Friday, 9 AM - 5 PM",
    location: "Spectroscopy Lab 102",
  },
  {
    id: "ftir-1",
    name: "FTIR Spectrometer",
    description: "Identifies chemical substances through infrared absorption",
    specifications: [
      "Resolution: 0.5 cm-1",
      "Wavenumber range: 400-4000 cm-1",
      "ATR accessory available",
    ],
    availability: "Monday to Friday, 9 AM - 5 PM",
    location: "Spectroscopy Lab 102",
  },
];

const bookingFields = [
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
    name: "equipment",
    label: "Select Equipment",
    type: "select",
    placeholder: "Select equipment",
    options: labEquipment.map((equipment) => ({
      value: equipment.id,
      label: equipment.name,
    })),
  },
  {
    name: "date",
    label: "Preferred Date",
    type: "date",
    placeholder: "Select date",
  },
  {
    name: "purpose",
    label: "Purpose of Use",
    type: "textarea",
    placeholder: "Describe your experiment or analysis",
  },
];

export default function Labs() {
  const handleBooking = async (data) => {
    console.log("Booking request:", data);
    // Here you would typically send this to your API
    alert("Booking request submitted successfully!");
  };

  return (
    <div className="container mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Laboratory Facilities</h1>
        <p className="text-lg text-muted-foreground">
          State-of-the-art equipment and facilities for research and analysis
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="equipment">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="equipment">Equipment</TabsTrigger>
            <TabsTrigger value="booking">Equipment Booking</TabsTrigger>
          </TabsList>

          <TabsContent value="equipment">
            <div className="grid gap-6 mt-6">
              {labEquipment.map((equipment) => (
                <motion.div
                  key={equipment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{equipment.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          {equipment.description}
                        </p>
                        <div>
                          <h4 className="font-medium mb-2">Specifications:</h4>
                          <ul className="list-disc pl-5">
                            {equipment.specifications.map((spec) => (
                              <li key={spec} className="text-muted-foreground">
                                {spec}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium">Availability:</h4>
                            <p className="text-muted-foreground">
                              {equipment.availability}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium">Location:</h4>
                            <p className="text-muted-foreground">
                              {equipment.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="booking">
            <Card>
              <CardHeader>
                <CardTitle>Equipment Booking Request</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm
                  fields={bookingFields}
                  onSubmit={handleBooking}
                  submitText="Submit Booking Request"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
