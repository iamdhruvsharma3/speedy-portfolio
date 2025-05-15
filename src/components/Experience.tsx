
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Briefcase, Code, ArrowRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'SpeedTech Solutions',
      period: '2022 - Present',
      description: 'Led development of performance-critical web applications for the automotive industry. Improved LCP by 40% and CLS to near-perfect scores.',
      skills: ['React', 'TypeScript', 'Next.js', 'Performance Optimization']
    },
    {
      title: 'Frontend Developer',
      company: 'Racing Web Labs',
      period: '2020 - 2022',
      description: 'Developed responsive, interactive user interfaces for high-traffic websites. Implemented modern animation techniques for enhanced user experience.',
      skills: ['React', 'JavaScript', 'GSAP', 'Tailwind CSS']
    },
    {
      title: 'UI/UX Developer',
      company: 'Velocity Digital',
      period: '2018 - 2020',
      description: 'Created user-centered designs and implemented them with clean, maintainable code. Collaborated closely with design and backend teams.',
      skills: ['HTML/CSS', 'JavaScript', 'Figma', 'User Testing']
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
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        
        <motion.div 
          className="space-y-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={item}>
              <Card className="racing-card border-l-4 border-l-racing-red">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase size={18} className="text-racing-red" />
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    </div>
                    <p className="text-racing-red mb-2">{exp.company} | {exp.period}</p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="text-xs bg-racing-red/20 text-racing-red px-2 py-1 rounded">
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
