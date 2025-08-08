'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Types
interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to elevate your brand and unlock new growth?",
  subtitle = "With years of experience, we've helped businesses generate millions. Partner with us to scale confidently.",
  buttonText = "Get started",
  buttonHref = "/contact",
  
}) => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Main CTA Card */}
        <div className="relative bg-[#002228] rounded-3xl p-8 lg:p-12 overflow-hidden">
         
        <div 
            className="relative -inset-16 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          ></div>
          <div className="relative z-10 text-center">
            {/* Title */}
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              {title}
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={textVariants}
              className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 lg:mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={buttonVariants}>
              <Link
                href={buttonHref}
                className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {buttonText}
                <svg
                  className="ml-3 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-white/5 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection; 