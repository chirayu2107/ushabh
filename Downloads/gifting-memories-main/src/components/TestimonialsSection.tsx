import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Nisha Musal",
      company: "Corporate Client",
      content: "Excellent service, humble staff and best quality products. Gifting Memories has been our go-to partner for all corporate gifting needs.",
      rating: 5,
      image: "https://res.cloudinary.com/dkoiyuyhj/image/upload/v1755680752/a3odbsxcutu1mkxhcuop.png"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      company: "Event Organizer",
      content: "Their event management services are exceptional. Every detail was perfectly executed, making our corporate event a huge success.",
      rating: 5,
      image: "https://res.cloudinary.com/dkoiyuyhj/image/upload/v1755680844/fi4vj8utebfioygddgmu.png"
    },
    {
      id: 3,
      name: "Priya Sharma",
      company: "Marketing Manager",
      content: "Outstanding exhibition stall design! They transformed our vision into reality and helped us stand out at the trade show.",
      rating: 5,
      image: "https://res.cloudinary.com/dkoiyuyhj/image/upload/v1755680752/a3odbsxcutu1mkxhcuop.png"
    },
    {
      id: 4,
      name: "Amit Patel",
      company: "Wedding Planner",
      content: "Gifting Memories made our wedding dreams come true. Their attention to detail and creativity exceeded all our expectations.",
      rating: 5,
      image: "https://res.cloudinary.com/dkoiyuyhj/image/upload/v1755680844/fi4vj8utebfioygddgmu.png"
    },
    {
      id: 5,
      name: "Sunita Agarwal",
      company: "Business Owner",
      content: "Professional, reliable, and creative. Their UV printing services helped us create unique promotional materials that impressed our clients.",
      rating: 5,
      image: "https://res.cloudinary.com/dkoiyuyhj/image/upload/v1755680752/a3odbsxcutu1mkxhcuop.png"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-gradient-hero">
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
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Client Stories</span>
          </motion.div>

          <h2 className="text-section-title text-gradient mb-6">
            What Our Clients Say
          </h2>
          
          <p className="text-section-subtitle max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about their experience with Gifting Memories.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="card-testimonial text-center"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Quote className="w-8 h-8 text-primary" />
              </motion.div>

              {/* Rating */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex justify-center space-x-1 mb-6"
              >
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </motion.div>

              {/* Content */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl md:text-2xl font-medium text-foreground mb-8 leading-relaxed font-display italic"
              >
                "{testimonials[currentIndex].content}"
              </motion.blockquote>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-center justify-center space-x-4"
              >
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover shadow-medium"
                />
                <div className="text-left">
                  <div className="font-semibold text-foreground font-display">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-soft hover:shadow-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-soft hover:shadow-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary' : 'bg-border'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ delay: 0.8, duration: 0.6 }}
  className="mt-16 text-center overflow-hidden"
>
  <p className="text-muted-foreground mb-8">
    Trusted by leading brands and businesses
  </p>

  {/* Marquee wrapper */}
  <div className="relative w-full overflow-hidden">
    <motion.div
      className="flex gap-12"
      animate={{ x: ["0%", "-100%"] }}
      transition={{
        repeat: Infinity,
        duration: 20, // speed of scroll (lower = faster)
        ease: "linear",
      }}
    >
      {/* Duplicate the logos array to create seamless loop */}
      {[
        { src: "/logos/jio.png", alt: "Jio" },
        { src: "/logos/amazon.png", alt: "Amazon" },
        { src: "/logos/sbi.png", alt: "SBI Life" },
        { src: "/logos/jito.png", alt: "JITO" },
        { src: "/logos/cii.png", alt: "CII" },
        { src: "/logos/lic.png", alt: "LIC" },
      ].concat([
        { src: "/logos/vivo.png", alt: "VIVO" },
        { src: "/logos/oppo.png", alt: "OPPO" },
        { src: "/logos/bjs.png", alt: "BJS" },
        { src: "/logos/rel.png", alt: "Reliance" },
        { src: "/logos/iskcon.png", alt: "ISKCON" },
        { src: "/logos/metso.png", alt: "Metso" },
      ]).map((logo, i) => (
        <div
          key={i}
          className="w-24 h-12 flex items-center justify-center"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="max-h-12 max-w-[6rem] object-contain"
          />
        </div>
      ))}
    </motion.div>
  </div>
</motion.div>


      </div>
    </section>
  );
};

export default TestimonialsSection;