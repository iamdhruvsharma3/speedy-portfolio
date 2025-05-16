import React from "react";
import { Code, Home, User, Mail, Phone, Briefcase } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", href: "#home", icon: <Home size={16} /> },
    { name: "About", href: "#about", icon: <User size={16} /> },
    { name: "Skills", href: "#skills", icon: <Code size={16} /> },
    { name: "Experience", href: "#experience", icon: <Briefcase size={16} /> },
    { name: "Projects", href: "#projects", icon: <Code size={16} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={16} /> },
  ];

  const socialLinks = [
    { name: "GitHub", href: "#", icon: "github.svg" },
    { name: "LinkedIn", href: "#", icon: "linkedin.svg" },
    { name: "Twitter", href: "#", icon: "twitter.svg" },
  ];

  return (
    <footer className="bg-racing-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="flex items-center gap-2">
              <span className="text-3xl font-racing text-racing-red font-bold">
                DHRUV
              </span>
              <span className="text-3xl font-racing text-white">SHARMA</span>
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              Building high-performance web experiences with the precision of a
              racing engineer.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center gap-2 text-gray-400 hover:text-racing-red transition-colors duration-300">
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Dhruv Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
