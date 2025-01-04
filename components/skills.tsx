"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code2,
  Database,
  Wrench,
  Server,
  Palette,
  Terminal,
} from "lucide-react";
import { useState } from "react";

const skillsData = [
  {
    category: "Frontend",
    icon: <Code2 className="h-8 w-8 mb-4 text-primary" />,
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8 mb-4 text-primary" />,
    skills: ["Node.js", "Next.js"],
  },
  {
    category: "Tools",
    icon: <Wrench className="h-8 w-8 mb-4 text-primary" />,
    skills: ["Git", "VS Code", "Notion", "Parcel", "Vite"],
  },
];

export function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <Card
              key={category.category}
              className={`border-2 border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 bg-card transform perspective-1000 ${
                hoveredIndex === index ? "rotate-y-10" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: hoveredIndex === index ? "tilt 5s infinite" : "none",
              }}
            >
              <CardHeader>
                <div className="flex flex-col items-center">
                  {category.icon}
                  <CardTitle className="text-xl mb-2">
                    {category.category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm p-2 bg-secondary/10 rounded-md flex items-center justify-center text-center h-full"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
