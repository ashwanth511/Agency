'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const businessServices = [
  {
    title: 'Digital Marketing',
    description: 'Maximize online visibility with paid ads, social media, and strategic SEO to drive targeted traffic and higher conversions.',
    icon: (
      <svg className="w-12 h-12 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
  },
  {
    title: 'Business Consulting',
    description: 'Enhance business strategy, optimize core processes, and leverage real-time analytics for sustainable growth.',
    icon: (
      <svg className="w-12 h-12 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
      </svg>
    ),
  },
  {
    title: 'Lead Generation',
    description: 'Optimize advanced funnels, automate processes, and boost customer conversions to generate leads.',
    icon: (
      <svg className="w-12 h-12 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
      </svg>
    ),
  },
  {
    title: 'Brand Strategy',
    description: 'Building a powerful, data-driven brand identity that resonates, inspires, and drives long-term success.',
    icon: (
      <svg className="w-12 h-12 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
  },
  {
    title: 'Content Writing',
    description: 'Crafting compelling, SEO-optimized content that boosts engagement, authority, and conversions.',
    icon: (
      <svg className="w-12 h-12 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
  },
  {
    title: 'Strategic Planning',
    description: 'Generate high-quality leads through targeted campaigns and optimized funnels for maximum conversions.',
    icon: (
      <svg className="w-12 h-12 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 17V7h2v10h-2zm4-4V7h2v6h-2zm4-2V7h2v4h-2z"/>
      </svg>
    ),
  },
];

const BusinessServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 60,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  const headingVariants = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  return (
    <section className="bg-gray-50 py-20" ref={ref}>
      <div className="w-[90%] max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={headingVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            What we offer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for business success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {businessServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="mb-6">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessServicesSection;