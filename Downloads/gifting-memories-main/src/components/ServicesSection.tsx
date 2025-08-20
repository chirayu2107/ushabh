import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Gift, 
  Calendar, 
  Building2, 
  Megaphone, 
  Heart, 
  Printer 
} from 'lucide-react';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Gift,
      title: "Corporate Gifting",
      description: "Gifts are one of the best ways to express happiness. We cater to customized needs by providing best gifts, maintaining strong relations & personalized memories.",
      features: ["Custom Gift Collections", "Branded Merchandise", "Premium Quality", "Timely Delivery"]
    },
    {
      icon: Calendar,
      title: "Event Management",
      description: "Events have been integral part of civilization and markers of change. We ensure highest customer satisfaction through quality & timely services from conceptualizing to execution.",
      features: ["Event Planning", "Venue Management", "Technical Support", "Full Coordination"]
    },
    {
      icon: Building2,
      title: "Exhibition & Stall Designing",
      description: "Design is the silent ambassador of your brand. We transform exhibition stalls into captivating spaces that seamlessly engage your audience and drive meaningful interactions.",
      features: ["Creative Design", "Brand Integration", "Interactive Elements", "Professional Setup"]
    },
    {
      icon: Megaphone,
      title: "Outdoor Advertising",
      description: "Outshine the ordinary with outdoor advertising. We drive campaigns that command attention, leaving an indelible mark in the minds of passersby.",
      features: ["Strategic Placement", "Creative Campaigns", "High Visibility", "Measurable Impact"]
    },
    {
      icon: Heart,
      title: "Wedding Management",
      description: "Wedding is an exclusive event for any individual. We maintain exclusivity through wedding planning, theme designing and organizing to create cherished memories for lifetime.",
      features: ["Wedding Planning", "Theme Design", "Vendor Coordination", "Memory Creation"]
    },
    {
      icon: Printer,
      title: "UV Printing",
      description: "Print is no less than art. We aspire to provide quality printing on any object available without the barrier of quantity, bringing your creative visions to life.",
      features: ["Any Surface Printing", "High Quality Output", "No Minimum Order", "Quick Turnaround"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    <section id="portfolio" className="section-padding bg-gradient-elegant">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6"
          >
            <Gift className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </motion.div>

          <h2 className="text-section-title text-gradient mb-6">
            Portfolio
          </h2>
          
          <p className="text-section-subtitle max-w-3xl mx-auto">
            From carefully curated gift collections to flawlessly executed events and impactful promotional campaigns, our team combines creativity and professionalism to help your business thrive.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="card-feature cursor-pointer group"
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground font-display">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-2 text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        delay: 0.5 + (index * 0.1) + (featureIndex * 0.05),
                        duration: 0.4
                      }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  className="w-full bg-secondary/5 border border-secondary/20 rounded-lg py-3 text-secondary font-medium hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 mt-6"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;