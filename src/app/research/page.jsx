"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const researchProjects = [
  {
    id: 1,
    title: "Novel Drug Delivery Systems for Cancer Treatment",
    investigators: ["Dr. John Smith", "Dr. Sarah Johnson"],
    status: "Ongoing",
    funding: "National Research Foundation",
    description:
      "Development of targeted drug delivery systems using nanotechnology for improved cancer treatment efficacy.",
    publications: [
      {
        title: "Nanoparticle-based Drug Delivery in Cancer Treatment",
        journal: "Journal of Controlled Release",
        year: 2025,
      },
    ],
  },
  {
    id: 2,
    title: "Natural Product Drug Discovery",
    investigators: ["Dr. Michael Chen"],
    status: "Completed",
    funding: "Industry Partnership",
    description:
      "Investigation of medicinal plants for novel drug compounds with antimicrobial properties.",
    publications: [
      {
        title: "Antimicrobial Compounds from Traditional Medicinal Plants",
        journal: "Journal of Natural Products",
        year: 2024,
      },
    ],
  },
];

const facilities = [
  {
    name: "Drug Discovery Lab",
    equipment: [
      "High-Throughput Screening System",
      "Mass Spectrometer",
      "NMR Spectrometer",
    ],
  },
  {
    name: "Formulation Development Lab",
    equipment: [
      "Particle Size Analyzer",
      "Dissolution Testing Apparatus",
      "Stability Chambers",
    ],
  },
];

export default function Research() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = researchProjects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Research</h1>
        <p className="text-lg text-muted-foreground">
          Exploring innovative solutions in pharmaceutical sciences
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="projects">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="projects">Research Projects</TabsTrigger>
            <TabsTrigger value="facilities">Research Facilities</TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full pl-10 p-2 rounded-md border bg-background"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-6">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">
                            Principal Investigators:
                          </h4>
                          <p className="text-muted-foreground">
                            {project.investigators.join(", ")}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Status:</h4>
                          <p className="text-muted-foreground">
                            {project.status}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Funding:</h4>
                          <p className="text-muted-foreground">
                            {project.funding}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Description:</h4>
                          <p className="text-muted-foreground">
                            {project.description}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Publications:</h4>
                          <ul className="list-disc pl-5">
                            {project.publications.map((pub) => (
                              <li
                                key={pub.title}
                                className="text-muted-foreground"
                              >
                                {pub.title} ({pub.journal}, {pub.year})
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="facilities">
            <div className="grid gap-6">
              {facilities.map((facility) => (
                <Card key={facility.name}>
                  <CardHeader>
                    <CardTitle>{facility.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h4 className="font-medium">Available Equipment:</h4>
                      <ul className="list-disc pl-5">
                        {facility.equipment.map((item) => (
                          <li key={item} className="text-muted-foreground">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
