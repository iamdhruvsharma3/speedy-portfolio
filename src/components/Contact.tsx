import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          formRef.current?.reset();
          setLoading(false);
        },
        (error) => {
          toast.error("Failed to send message. Please try again later.");
          console.error("Email error:", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* ... other content ... */}

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}>
          <Card className="racing-card">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* ... inputs for name, email, subject, message ... */}
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="user_name"
                    type="text"
                    placeholder="Your Name"
                    className="bg-racing-darkgray border-racing-red/20 focus:border-racing-red text-white"
                    required
                    disabled={loading}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="user_email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-racing-darkgray border-racing-red/20 focus:border-racing-red text-white"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="subject" className="block text-white mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="bg-racing-darkgray border-racing-red/20 focus:border-racing-red text-white"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    className="bg-racing-darkgray border-racing-red/20 focus:border-racing-red text-white min-h-[150px]"
                    required
                    disabled={loading}
                  />
                  <Input
                    type="hidden"
                    name="time"
                    value={new Date().toLocaleString()}
                  />
                </div>
                <div className="md:col-span-2">
                  <Button
                    type="submit"
                    className="btn-racing w-full md:w-auto flex items-center justify-center"
                    disabled={loading}>
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
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
