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
        "A fully responsive web application built with React that enables users to upload their audio tracks and instantly receive professionally mixed and mastered versions powered by AI. The platform leverages advanced audio processing algorithms to deliver studio-quality sound enhancements within seconds, eliminating the need for manual editing or expensive production tools. Designed with user experience in mind, the app offers a seamless interface for musicians, podcasters, and creators to enhance their audio with just a few clicks—anytime, anywhere.",
      technologies: ["Next.js", "Tailwind CSS", "FastAPI"],
      demo: "#",
      code: "#",
    },
    {
      title: "NexusFlow",
      category: "Platform",
      image: "",
      description:
        "Developed a comprehensive admin dashboard for NexusFlow that provides secure access to data analytics and streamlined control over ETL (Extract, Transform, Load) processes. The dashboard enables administrators to monitor data pipelines, trigger ETL jobs, and view real-time analytics through intuitive visualizations and dynamic filters. Designed with scalability and usability in mind, the interface supports role-based access control, audit logging, and efficient data exploration, making it easier for teams to manage and operationalize their data workflows.",
      technologies: ["TypeScript", "React", "Tailwind CSS", "ShadCN UI"],
      demo: "#",
      code: "#",
    },
    {
      title: "Tech Intranet",
      category: "Web App",
      image: "",
      description:
        "developed a dynamic, responsive Culture Page for CARS24 that authentically reflects the company’s values, work environment, and team spirit. The page features interactive sections such as employee spotlights, leadership quotes, behind-the-scenes event highlights, and DEI (Diversity, Equity & Inclusion) initiatives—brought to life with smooth animations and engaging layouts. Built using Next.js and Tailwind CSS, and integrated with a headless CMS, the page allows non-technical teams to update content effortlessly. The architecture supports modular content blocks, lazy-loaded media, and SEO-optimized rendering, ensuring fast performance and scalability. This project plays a key role in employer branding, recruitment, and internal engagement.",
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
