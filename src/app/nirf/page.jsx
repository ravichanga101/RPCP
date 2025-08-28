"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const nirfData = {
  currentRank: 15,
  year: 2025,
  metrics: [
    {
      category: "Teaching, Learning & Resources",
      score: 85.5,
      highlights: [
        "Student-Faculty ratio: 1:12",
        "PhD qualified faculty: 75%",
        "Research publications per faculty: 3.2",
      ],
    },
    {
      category: "Research and Professional Practice",
      score: 82.3,
      highlights: [
        "Sponsored research projects: 25+",
        "Patent applications: 12",
        "Consultancy projects: 15",
      ],
    },
    {
      category: "Graduation Outcomes",
      score: 88.7,
      highlights: [
        "Placement rate: 92%",
        "Higher education pursuit: 25%",
        "Median salary: ₹6.5 LPA",
      ],
    },
    {
      category: "Outreach and Inclusivity",
      score: 79.9,
      highlights: [
        "Women students: 55%",
        "Economically challenged students: 30%",
        "Regional diversity: Students from 15 states",
      ],
    },
  ],
  achievements: [
    "Ranked among top 20 pharmacy institutions consistently for 5 years",
    "Improved research output by 45% in last 3 years",
    "Enhanced industry collaboration network by 60%",
  ],
};

export default function NIRF() {
  return (
    <div className="container mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">NIRF Rankings</h1>
        <p className="text-lg text-muted-foreground">
          National Institutional Ranking Framework Performance
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Current Ranking Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                Current NIRF Ranking {nirfData.year}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <span className="text-6xl font-bold text-primary">
                #{nirfData.currentRank}
              </span>
            </CardContent>
          </Card>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid gap-6 mb-8">
          {nirfData.metrics.map((metric, index) => (
            <motion.div
              key={metric.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {metric.category}
                    <span className="text-2xl font-bold text-primary">
                      {metric.score}%
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {metric.highlights.map((highlight) => (
                      <li key={highlight} className="text-muted-foreground">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Key Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {nirfData.achievements.map((achievement) => (
                  <li key={achievement} className="text-muted-foreground">
                    {achievement}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
