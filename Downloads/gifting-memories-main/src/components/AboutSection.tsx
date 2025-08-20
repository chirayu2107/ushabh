import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';
import founderPhoto from '../assets/founder-photo.jpg';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    "Jaipur Star Award for Business Excellence (2018)",
    "Global Pride Award for Business Excellence (2018)",
    "India 5000 Best MSME Award Nominee (2017 & 2019)",
    "Global Excellence Award Nominee (2019)",
    "Trusted Brand Awards Nominee (2019)"
  ];

  const organizations = [
    "BNI", "JITO", "BJS", "JSG", "Yi", "FORTI", 
    "UCORI", "MiA", "AEE", "CGAI", "BAL SAMBAL"
  ];

  return (
    <section id="about" className="section-padding">
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
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Us</span>
          </motion.div>

          <h2 className="text-section-title text-gradient mb-6">
            Our Story
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold font-display text-foreground">
                About Gifting Memories
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                This company is managed by professionals who understand the exact needs & requirements 
                of corporate entities & individual clients, ensuring no gaps between expected and delivered service.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Our Belief",
                  description: "Bringing smiles & gladdening customer's hearts so they feel 'MIGHTY NICE'"
                },
                {
                  icon: Target,
                  title: "Our Vision",
                  description: "Catering customized needs with quality service that gladdens hearts"
                },
                {
                  icon: Award,
                  title: "Our Mission",
                  description: "Continuity in quality through innovation, creativity, commitment & passion"
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="bg-card border border-border/30 rounded-xl p-6 hover:shadow-medium transition-all duration-300"
                >
                  <value.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold font-display mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Founder Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Founder Card */}
            <div className="card-elegant">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src="http://res.cloudinary.com/dkoiyuyhj/image/upload/v1755678456/y82ycuv2okpcme7lcxmj.png"
                    alt="Aatish Lodha - Founder"
                    className="w-38 h-38 rounded-2xl object-cover shadow-medium"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-primary-foreground" />
                  </div>
                </motion.div>

                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-semibold font-display text-foreground mb-2">
                    Aatish Lodha
                  </h3>
                  <p className="text-primary font-medium mb-3">Founder & CEO</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A post graduate in management who incorporated Gifting Memories with an aim to provide 
                    complete solutions for all promotional needs of businesses.
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="mt-8 space-y-4">
                <h4 className="font-semibold font-display text-foreground">Awards & Recognition</h4>
                <div className="space-y-2">
                  {achievements.slice(0, 3).map((achievement, index) => (
                    <motion.div
                      key={achievement}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                      className="flex items-center space-x-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-gradient-accent border border-border/30 rounded-xl p-6"
            >
              <h4 className="font-semibold font-display text-foreground mb-3">Philosophy</h4>
              <p className="text-muted-foreground italic">
                "He strongly believes in the philosophy of <span className="text-primary font-semibold">SEVA</span> which means selfless service. 
                According to him, SEVA is the biggest KARMA and one should keep doing this as & when possible."
              </p>
            </motion.div>

            {/* Organizations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="space-y-4"
            >
              <h4 className="font-semibold font-display text-foreground">Active Member Of</h4>
              <div className="flex flex-wrap gap-2">
                {organizations.map((org, index) => (
                  <motion.span
                    key={org}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + index * 0.05, duration: 0.4 }}
                    className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full border border-primary/20"
                  >
                    {org}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;