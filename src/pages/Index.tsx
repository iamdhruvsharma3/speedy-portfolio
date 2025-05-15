import React, { useState, useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { AnimatePresence } from "framer-motion";
import PageLoader from "../components/PageLoader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Increase loading time to 3 seconds to see the speedometer animation better

    return () => clearTimeout(timer);
  }, []);

  return (
    <ParallaxProvider>
      <AnimatePresence>
        <PageLoader isLoading={loading} />
      </AnimatePresence>

      <div className="min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default Index;
