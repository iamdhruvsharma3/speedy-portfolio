import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Home } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-racing-red" />,
      title: "Email",
      value: "iamdhruvsharma3@gmail.com",
      link: "mailto:iamdhruvsharma3@gmail.com",
    },
    {
      icon: <Phone className="text-racing-red" />,
      title: "Phone",
      value: "+91-9315063616",
      link: "tel:+91-9315063616",
    },
    {
      icon: <Home className="text-racing-red" />,
      title: "Location",
      value: "New Delhi, India",
      link: "#",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}>
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Info */}
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Card className="racing-card h-full flex items-center p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-racing-red/10 flex items-center justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {info.title}
                  </h3>
                  <a
                    href={info.link}
                    className="text-gray-300 hover:text-racing-red transition-colors duration-300">
                    {info.value}
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}>
          <Card className="racing-card">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="bg-racing-darkgray border-racing-red/20 focus:border-racing-red text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-racing-darkgray border-racing-red/20 focus:border-racing-red text-white"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="subject" className="block text-white mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    className="bg-racing-darkgray border-racing-red/20 focus:border-racing-red text-white"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your Message"
                    className="bg-racing-darkgray border-racing-red/20 focus:border-racing-red text-white min-h-[150px]"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Button type="submit" className="btn-racing w-full md:w-auto">
                    Send Message
                  </Button>
                </div>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
