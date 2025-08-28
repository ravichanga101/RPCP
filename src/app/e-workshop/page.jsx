"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactForm } from "@/components/forms/ContactForm";
import { Calendar } from "@/components/ui/calendar";

const upcomingWorkshops = [
  {
    id: 1,
    title: "Advanced Drug Formulation",
    date: "2025-09-15",
    duration: "3 days",
    description: "Learn advanced techniques in pharmaceutical formulation.",
    instructor: "Dr. Sarah Johnson",
  },
  {
    id: 2,
    title: "Clinical Research Methods",
    date: "2025-10-01",
    duration: "2 days",
    description: "Comprehensive training on clinical research methodologies.",
    instructor: "Dr. Michael Chen",
  },
];

const pastWorkshops = [
  {
    id: 3,
    title: "Pharmaceutical Analysis Techniques",
    date: "2025-07-20",
    duration: "2 days",
    resources: ["presentation.pdf", "workshop_notes.pdf"],
  },
];

export default function EWorkshop() {
  const [date, setDate] = useState(new Date());

  const registrationFields = [
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
      name: "workshop",
      label: "Select Workshop",
      type: "select",
      placeholder: "Select a workshop",
      options: upcomingWorkshops.map((workshop) => ({
        value: workshop.id.toString(),
        label: workshop.title,
      })),
    },
    {
      name: "message",
      label: "Additional Information",
      type: "textarea",
      placeholder: "Any specific requirements or questions?",
    },
  ];

  const handleRegistration = async (data) => {
    console.log("Registration data:", data);
    // Here you would typically send this to your API
    alert("Registration successful!");
  };

  return (
    <div className="container mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">E-Workshop Portal</h1>
        <p className="text-lg text-muted-foreground">
          Enhance your skills with our virtual workshops and training sessions
        </p>
      </motion.div>

      <Tabs defaultValue="upcoming" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upcoming">Upcoming Workshops</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="past">Past Workshops</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <div className="grid gap-6 mt-6">
            {upcomingWorkshops.map((workshop) => (
              <Card key={workshop.id}>
                <CardHeader>
                  <CardTitle>{workshop.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <p>
                      <strong>Date:</strong>{" "}
                      {new Date(workshop.date).toLocaleDateString()}
                    </p>
                    <p>
                      <strong>Duration:</strong> {workshop.duration}
                    </p>
                    <p>
                      <strong>Instructor:</strong> {workshop.instructor}
                    </p>
                    <p className="text-muted-foreground">
                      {workshop.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="calendar">
          <Card>
            <CardContent className="pt-6">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="past">
          <div className="grid gap-6 mt-6">
            {pastWorkshops.map((workshop) => (
              <Card key={workshop.id}>
                <CardHeader>
                  <CardTitle>{workshop.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <p>
                      <strong>Date:</strong>{" "}
                      {new Date(workshop.date).toLocaleDateString()}
                    </p>
                    <p>
                      <strong>Duration:</strong> {workshop.duration}
                    </p>
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Resources:</h4>
                      <ul className="list-disc pl-5">
                        {workshop.resources.map((resource) => (
                          <li key={resource}>
                            <a
                              href={`/resources/${resource}`}
                              className="text-primary hover:underline"
                            >
                              {resource}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <section className="max-w-4xl mx-auto mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Workshop Registration</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm
              fields={registrationFields}
              onSubmit={handleRegistration}
              submitText="Register for Workshop"
            />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
