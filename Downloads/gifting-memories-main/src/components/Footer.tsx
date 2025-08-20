import React from 'react';
import { motion } from 'framer-motion';
import { 
  Gift, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About us', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#CTASection' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/giftingmemoriesindia/', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/giftingmemories', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/giftingmemoriesindia/?igsh=YXRzemV0NHAycmdh#', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/gifting-memories/', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UCUQ1S0c7TnwlH_omJ2ewRzA', label: 'YouTube' },
  ];

  const services = [
    'Corporate Gifting',
    'Event Management',
    'Exhibition & Stall Designing',
    'Outdoor Advertising',
    'Wedding Management',
    'UV Printing'
  ];

  return (
    <footer className="bg-gray-600 text-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(43 96% 56%) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, hsl(43 96% 56%) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto container-padding py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img 
                src="https://res.cloudinary.com/dkoiyuyhj/image/upload/v1755678038/lcvkoxn1hkwnqeqqxfzo.png" 
                alt="Gifting Memories Logo" 
                className="h-10 w-auto"
              />
            </motion.div>
              
              <p className="text-secondary-foreground/80 leading-relaxed">
                Creating lasting memories through exceptional corporate gifting, 
                event management, and creative solutions that bring smiles to hearts.
              </p>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="space-y-6"
            >
              <h4 className="font-display text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  >
                    <a
                      href={link.href}
                      className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <h4 className="font-display text-lg font-semibold">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    className="text-secondary-foreground/80 text-sm"
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-6"
            >
              <h4 className="font-display text-lg font-semibold">Contact Info</h4>
              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    content: "+91-9309295750",
                    href: "tel:+919309295750"
                  },
                  {
                    icon: Mail,
                    content: "giftingmemories@gmail.com",
                    href: "mailto:giftingmemories@gmail.com"
                  },
                  {
                    icon: MapPin,
                    content: "B1 Mahesh Nagar, Lodha Parisar, Chittorgarh-312001, Rajasthan",
                    href: "#"
                  }
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    className="flex items-start space-x-3 text-secondary-foreground/80 hover:text-primary transition-colors duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  >
                    <contact.icon className="w-4 h-4 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm leading-relaxed">{contact.content}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20">
          <div className="max-w-7xl mx-auto container-padding py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-secondary-foreground/60 text-sm text-center md:text-left"
              >
                © 2025 Gifting Memories. All rights reserved. | Made with ❤️ by Chirayu
              </motion.div>
              
              <motion.button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ArrowUp className="w-4 h-4 text-primary-foreground" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;