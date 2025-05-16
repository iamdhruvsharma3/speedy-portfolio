import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Briefcase, Code, ArrowRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Intern",
      company: "Cars24",
      period: "January, 2025 - Present",
      description:
        "Developing high-performance UI components for the Bharat RTO Admin Portal using React.js and TypeScript.Built dynamic, responsive screens for agent onboarding and location-based rate card management.Enhanced state management using Redux and Zustand to boost responsiveness and scalability.Integrated RESTful APIs to streamline frontend functionality and improve user interactions.Collaborated with business and product teams to deliver scalable, business-aligned solutions.",
      skills: ["React", "TypeScript", "Zustand", "Rest APIs", "Tailwind CSS"],
    },
    {
      title: "Web Developer Intern",
      company: "Innobyte Services",
      period: "September, 2024 - November, 2024",
      description:
        "Created modular, reusable React.js components tailored for diverse web interfaces.Implemented user profiling and tracking techniques to enhance user experience.Built responsive designs ensuring smooth experience across multiple devices and browsers.",
      skills: ["React", "JavaScript", "Responsive Design", "Tailwind CSS"],
    },
    {
      title: "Full Stack Web Developer Intern",
      company: "NullClass",
      period: "July, 2023 - August, 2023",
      description:
        "Created user-centered designs and implemented them with clean, maintainable code. Collaborated closely with design and backend teams.",
      skills: ["HTML/CSS", "JavaScript", "API Integration", "React"],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}>
          Experience
        </motion.h2>

        <motion.div
          className="space-y-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}>
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={item}>
              <Card className="racing-card border-l-4 border-l-racing-red">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase size={18} className="text-racing-red" />
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-racing-red mb-2">
                      {exp.company} | {exp.period}
                    </p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-racing-red/20 text-racing-red px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
