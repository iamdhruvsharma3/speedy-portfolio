
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCards = [
    {
      title: 'React Development',
      icon: '⚛️',
      description: 'Building high-performance component-based UIs with React and Next.js'
    },
    {
      title: 'UI/UX Design',
      icon: '🎨',
      description: 'Creating intuitive, engaging user interfaces with attention to detail'
    },
    {
      title: 'Animation',
      icon: '✨',
      description: 'Implementing smooth, performant animations with GSAP and Framer Motion'
    },
    {
      title: 'Performance Optimization',
      icon: '⚡',
      description: 'Ensuring lightning-fast load times and smooth user experiences'
    },
    {
      title: 'Responsive Design',
      icon: '📱',
      description: 'Developing interfaces that work flawlessly across all devices'
    },
    {
      title: 'State Management',
      icon: '🔄',
      description: 'Managing complex application state with Redux, Zustand, or Context API'
    },
    {
      title: 'API Integration',
      icon: '🔌',
      description: 'Connecting frontend applications to backend services and APIs'
    },
    {
      title: 'Testing & QA',
      icon: '🧪',
      description: 'Ensuring code quality with comprehensive test suites'
    },
    {
      title: 'CI/CD',
      icon: '🚀',
      description: 'Setting up continuous integration and deployment pipelines'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 relative bg-racing-black/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          What I Do
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCards.map((card, index) => (
            <motion.div key={index} variants={item}>
              <Card className="racing-card h-full">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-300">{card.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
