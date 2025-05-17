import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CirclePlay } from "lucide-react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Bharat RTO",
      category: "Web App",
      image: "/brto.png",
      description:
        "Bharat RTO - Vehicle Info & Management App is a one-stop solution for managing RTO vehicle information, challan details, car/bike info, RC status, insurance, mParivahan, pollution expiry, digilocker for documents, and more.",
      technologies: ["React", "Tailwind CSS", "Zustand", "Rest APIs"],
      demo: "#",
    },
    {
      title: "MixGenius AI",
      category: "Web App",
      image: "/mixgenius.png",
      description:
        "A responsive web app where users upload audio tracks to get instant AI-powered mixing and mastering results. Designed for creators, musicians, and podcasters seeking studio-quality sound in seconds.",
      technologies: ["Next.js", "Tailwind CSS", "FastAPI"],
      demo: "https://mixgenius.netlify.app/",
    },
    {
      title: "NexusFlow",
      category: "Platform",
      image: "/nexusflow.png",
      description:
        "Admin dashboard to manage and monitor ETL processes and real-time analytics. Features include role-based access control, dynamic filters, visualizations, and secure data handling.",
      technologies: ["TypeScript", "React", "Tailwind CSS", "ShadCN UI"],
      demo: "#",
    },
    {
      title: "Tech Intranet",
      category: "Web App",
      image: "/techintranet.png",
      description:
        "Developed an internal culture page for CARS24 featuring employee highlights, leadership quotes, events, and DEI initiatives. Integrated with headless CMS and built for performance.",
      technologies: ["Next.js", "Tailwind CSS"],
      demo: "#",
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
                    {project.title === "MixGenius AI" ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Button className="flex items-center gap-2 bg-racing-red text-white hover:bg-racing-red/80">
                          <CirclePlay size={14} /> Live Demo
                        </Button>
                      </a>
                    ) : (
                      <Button className="flex items-center gap-2 bg-racing-red text-white hover:bg-racing-red/80">
                        <ArrowRight size={14} /> View Case Study
                      </Button>
                    )}
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
