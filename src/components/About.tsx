import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useParallax } from "react-scroll-parallax";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const parallaxImage = useParallax<HTMLDivElement>({
    speed: -15,
  });

  const parallaxText = useParallax<HTMLDivElement>({
    speed: 10,
  });

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}>
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="flex items-center justify-center"
            ref={parallaxImage.ref}>
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-racing-red/30 rounded-lg blur-lg animate-pulse-glow"></div>
              <Card className="relative bg-card border-0 overflow-hidden rounded-lg">
                <img
                  src="/public/ghibli-portfolio-anime.png"
                  alt="Developer"
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-racing-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <span className="text-racing-red font-racing text-2xl">
                    FRONTEND
                  </span>
                  <h3 className="text-white text-3xl font-bold">DEVELOPER</h3>
                </div>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            ref={parallaxText.ref}>
            <h3 className="text-2xl font-bold mb-4 text-white">Who Am I?</h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate frontend developer who loves creating immersive
              web experiences. With a strong foundation in HTML, CSS,
              JavaScript, and React, I focus on building responsive, accessible,
              and performant websites.
            </p>
            <p className="text-gray-300 mb-6">
              My approach combines technical expertise with creative
              problem-solving to deliver solutions that exceed expectations. I'm
              constantly learning and adapting to new technologies and
              methodologies.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h4 className="text-racing-red font-bold mb-2">Name:</h4>
                <p className="text-white">Dhruv Sharma</p>
              </div>
              <div>
                <h4 className="text-racing-red font-bold mb-2">Email:</h4>
                <p className="text-white">iamdhruvsharma3@gmail.com</p>
              </div>
              <div>
                <h4 className="text-racing-red font-bold mb-2">Location:</h4>
                <p className="text-white">New Delhi, India</p>
              </div>
              <div>
                <h4 className="text-racing-red font-bold mb-2">
                  Availability:
                </h4>
                <p className="text-white">Full-time</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
