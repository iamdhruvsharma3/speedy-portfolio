
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, CirclePlay } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: 'Racing Dashboard',
      category: 'Web App',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      description: 'A performance-optimized dashboard for racing teams to monitor vehicle metrics in real-time.',
      technologies: ['React', 'D3.js', 'WebSockets'],
      demo: '#',
      code: '#'
    },
    {
      title: 'SpeedShop',
      category: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      description: 'High-performance e-commerce platform for automotive parts with advanced filtering options.',
      technologies: ['Next.js', 'Tailwind CSS', 'Stripe'],
      demo: '#',
      code: '#'
    },
    {
      title: 'RacerPortfolio',
      category: 'Template',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      description: 'Customizable portfolio template optimized for automotive professionals with P75 score of 98.',
      technologies: ['TypeScript', 'Framer Motion', 'ThreeJS'],
      demo: '#',
      code: '#'
    },
    {
      title: 'PitStop Timer',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      description: 'React Native app for timing and analyzing pit stop performance with sub-millisecond accuracy.',
      technologies: ['React Native', 'Redux', 'Firebase'],
      demo: '#',
      code: '#'
    }
  ];
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 relative bg-racing-black/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={item}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative group"
            >
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
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-racing-red/20 text-racing-red px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Button variant="outline" className="flex items-center gap-2 bg-transparent border border-racing-red text-racing-red hover:bg-racing-red/10">
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
