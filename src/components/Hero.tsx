import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Lottie from "react-lottie-player";

const Hero = () => {
  const parallaxBg = useParallax<HTMLDivElement>({ speed: -10 });
  const parallaxContent = useParallax<HTMLDivElement>({ speed: 10 });

  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/sports-car.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((err) => console.error("Failed to load Lottie JSON", err));
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen pt-20 relative overflow-hidden flex items-center bg-black">
      {/* Background Racing Stripe */}
      <div ref={parallaxBg.ref} className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[40%] right-0 w-full h-20 bg-racing-red/30 transform -skew-y-2"></div>
          <div className="absolute top-[50%] right-0 w-full h-10 bg-racing-red transform -skew-y-3"></div>
        </div>
      </div>

      {/* Content + Car Animation side by side */}
      <div
        ref={parallaxContent.ref}
        className="container mx-auto px-4 z-20 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Text Content */}
        <div className="max-w-3xl flex-1">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-racing-red font-racing text-2xl mb-4">
            FRONTEND DEVELOPER
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-5xl md:text-7xl font-racing text-white leading-tight mb-6">
            RACING TOWARDS THE <br />
            <span className="text-racing-red">PERFECT CODE</span>
          </motion.h1>

          {/* Craftsman paragraph: y values in initial and animate props are changed */}
          <motion.p
            initial={{ opacity: 0, y: 170 }} // Changed from y: 20. (Example: 150 for shift + original 20 for animation start)
            animate={{ opacity: 1, y: 150 }} // Changed from y: 0. (Example: 150px downwards shift)
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-300 text-lg mb-8 max-w-lg">
            A craftsman of the frontend realm, versed in the ways of JavaScript
            and React.js. I shape interfaces with precision — scalable, swift,
            and serene. Through optimized UI/UX and mastered state flows, I
            weave seamless user journeys across the digital landscape. With calm
            resolve, I integrate APIs, harmonize logic, and align tech with
            purpose. My code is not just function — it is intent. I do not chase
            perfection — I refine it. Through clarity, through collaboration, I
            build.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4">
            <Button className="btn-racing flex items-center gap-2">
              View Projects <ArrowRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border border-racing-red text-racing-red hover:bg-racing-red/10">
              Contact Me
            </Button>
          </motion.div> */}
        </div>

        {/* Car Animation moving side to side */}
        <motion.div
          className="relative w-72 h-48 pointer-events-none"
          initial={{ x: "-20%" }}
          animate={{ x: "20%" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}>
          {/* Speed lines */}
          <div className="absolute left-[-60px] top-1/2 w-16 h-1 bg-white/20 blur-md rotate-6" />
          <div className="absolute left-[-80px] top-[60%] w-10 h-[2px] bg-white/10 blur-sm rotate-3" />

          {animationData && (
            <Lottie
              animationData={animationData}
              play
              loop
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
