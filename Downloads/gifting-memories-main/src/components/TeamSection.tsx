import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, UserCheck } from 'lucide-react';

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      name: "Nikita Sharma",
      role: "Client Servicing",
      image: "https://res.cloudinary.com/dkoiyuyhj/image/upload/v1755679848/ixcojejbg56aqulmssfo.png"
    },
    {
      name: "Manshika Mehra",
      role: "Graphic Designing",
      image: "https://res.cloudinary.com/dkoiyuyhj/image/upload/v1755679889/q2jxsyyzbd1hoh0gyr8i.png"
    },
    {
      name: "Akhil Jain",
      role: "Accounts",
      image: "https://res.cloudinary.com/dkoiyuyhj/image/upload/v1755679908/szkt8tvocdcnim2ptazc.png"
    },
    {
      name: "Gopal Jajot",
      role: "Operations",
      image: "https://res.cloudinary.com/dkoiyuyhj/image/upload/v1755679932/ut5vrybcig34cxhmsalh.png"
    },
    {
      name: "Pinkesh",
      role: "Operations",
      image: "https://res.cloudinary.com/dkoiyuyhj/image/upload/v1755679960/cfi1wprrrie88ywy91f2.png"
    },
    {
      name: "Vinod",
      role: "Operations",
      image: "https://res.cloudinary.com/dkoiyuyhj/image/upload/v1755679985/v3mqs5d7uspulrvo77q1.png"
    },
    {
      name: "Suraj Kumar",
      role: "Marketing",
      image: "https://res.cloudinary.com/dkoiyuyhj/image/upload/v1755680011/jt2hgowztcncsy0ipai1.png"
    },
    {
      name: "Megha Verma",
      role: "Office Administration",
      image: "https://res.cloudinary.com/dkoiyuyhj/image/upload/v1755680039/strxhkg0w6a4cpeadgst.png"
    },
    {
      name: "Vanika Sharma",
      role: "Graphic Designer",
      image: "https://res.cloudinary.com/dkoiyuyhj/image/upload/v1755680061/xdc0jfyvwmijdqe9sdzv.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <section className="section-padding bg-gradient-hero">
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
            <span className="text-sm font-medium text-primary">Meet Our Team</span>
          </motion.div>

          <h2 className="text-section-title text-gradient mb-6">
            The People Behind The Magic
          </h2>
          
          <p className="text-section-subtitle max-w-3xl mx-auto">
            Our dedicated team of professionals brings creativity, expertise, and passion to every project, 
            ensuring exceptional results that exceed expectations.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              className="group"
            >
              <div className="card-elegant text-center hover-lift">
                {/* Profile Image */}
                <motion.div
                  className="relative mb-4 mx-auto w-24 h-24 overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Member Info */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground font-display">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium">
                    {member.role}
                  </p>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-accent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { number: '9+', label: 'Team Members', icon: Users },
            { number: '15+', label: 'Years Combined Experience', icon: UserCheck },
            { number: '100%', label: 'Dedicated Professionals', icon: Users },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary font-display mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;