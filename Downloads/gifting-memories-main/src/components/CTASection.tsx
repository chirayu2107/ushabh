"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Sparkles } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact" // 👈 Important: so navbar "Contact" can scroll here
      ref={ref}
      className="section-padding bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(43 96% 56% / 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, hsl(43 96% 56% / 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-primary/20 border border-primary/30 rounded-full px-6 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">
                Get Started Today
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-display leading-tight"
            >
              Ready to Create
              <span className="block text-primary">Lasting Memories?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-primary-foreground/80 mb-8 leading-relaxed"
            >
              Let's bring your vision to life with our expert services in
              corporate gifting, event management, and creative solutions that
              leave lasting impressions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg shadow-large hover:shadow-glow transform hover:scale-105 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-foreground hover:text-secondary transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-card/10 backdrop-blur-lg border border-primary-foreground/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-primary-foreground mb-6 font-display">
                Get In Touch
              </h3>

              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+91-9309295750",
                    action: "tel:+919309295750",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "giftingmemories@gmail.com",
                    action: "mailto:giftingmemories@gmail.com",
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    content:
                      "B1 Mahesh Nagar, Lodha Parisar, Chittorgarh-312001, Rajasthan",
                    action: "#",
                  },
                ].map((contact, index) => (
                  <motion.a
                    key={contact.title}
                    href={contact.action}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <contact.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-foreground mb-1">
                        {contact.title}
                      </h4>
                      <p className="text-primary-foreground/80 text-sm leading-relaxed">
                        {contact.content}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="mt-6 pt-6 border-t border-primary-foreground/20"
              >
                <h4 className="font-semibold text-primary-foreground mb-2">
                  Business Hours
                </h4>
                <p className="text-primary-foreground/80 text-sm">
                  Monday - Saturday: 9:00 AM - 7:00 PM
                  <br />
                  Sunday: By Appointment
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
