import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, CirclePlay } from "lucide-react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Bharat RTO",
      category: "Web App",
      image: "",
      description:
        "Bharat RTO - Vehicle Info & Management App is one-stop solution for managing RTO vehicle information, challan information, all car and bike information, RC status, bike and car insurance, mParivahan, pollution expiry, digilocker for documents, driving license, owner details, personal car garage management, calculate your car's expected selling price using sell calculator and more. With a focus on convenience and reliability, Bharat RTO app aims to enhance the vehicle ownership experience. From checking Parivahan details to managing car and bike information, the app helps you stay up to date with your vehicle's status and renewals.",
      technologies: ["React", "Tailwind CSS", "Zustand", "Rest APIs"],
      demo: "#",
      code: "#",
    },
    {
      title: "MixGenius AI",
      category: "Web App",
      image: "",
      description:
        "A responsive React app that lets users upload tracks and receive instant AI-powered mixing and mastering.",
      technologies: ["Next.js", "Tailwind CSS", "FastAPI"],
      demo: "#",
      code: "#",
    },
    {
      title: "NexusFlow",
      category: "Platform",
      image: "",
      description: "",
      technologies: ["TypeScript", "React", "Tailwind CSS", "ShadCN UI"],
      demo: "#",
      code: "#",
    },
    {
      title: "Tech Intranet",
      category: "Web App",
      image: "",
      description: "",
      technologies: ["Next.js", "Tailwind CSS"],
      demo: "#",
      code: "#",
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
    <section id="projects" className="py-20 relative bg-racing-black/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}>
          Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative group">
              <Card className="overflow-hidden border-0 h-full">
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-racing-black via-racing-black/50 to-transparent opacity-70"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-racing-red text-white text-xs px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-racing-red/20 text-racing-red px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 bg-transparent border border-racing-red text-racing-red hover:bg-racing-red/10">
                      <Code size={14} /> Code
                    </Button>
                    <Button className="flex items-center gap-2 bg-racing-red text-white hover:bg-racing-red/80">
                      <CirclePlay size={14} /> Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button className="btn-racing">
            View All Projects <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
