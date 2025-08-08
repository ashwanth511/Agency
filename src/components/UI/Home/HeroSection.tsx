'use client';
import Image from 'next/image';
import hero_banner from '@/images/hero_banner.png';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { usePreloader } from '@/context/preloader';
import { TopbarSection } from './TopbarSection';
import LightRays from '../Effects/LightRays';

const HeroSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const { isPreloaderDone } = usePreloader();
  return (
    <main
      className="h-screen bg-[#002228] relative flex flex-col w-full overflow-hidden"
      ref={ref}
    >
      <TopbarSection />

     



      {/* Centered Content with Grid */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="relative max-w-4xl mx-auto">
          
          {/* Grid Background - Only around content */}
          <div 
            className="absolute inset-0 -inset-16 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          ></div>

          {/* Content Area */}
          <motion.div
          initial="hidden"
          animate={isPreloaderDone && inView ? 'visible' : 'hidden'}
          variants={headingContainerVariants}
            className="relative z-10 text-center space-y-8 py-16"
          >
            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1 
                variants={fadeInUpVariants}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white space-mono-bold tracking-tight leading-tight"
              >
                Grow your business,<br />
                <span className="text-green-400">master every move.</span>
        </motion.h1>
      </div>

            {/* Description */}
            <motion.div
              variants={descriptionVariants}
              className="max-w-2xl mx-auto"
            >
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                Helping businesses thrive with innovative digital strategies,
                creative solutions, and measurable outcomes.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={buttonContainerVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
            >
              <motion.button
                variants={buttonVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34, 197, 94, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-green-500/25 min-w-[160px]"
              >
                Book a call
              </motion.button>
              <motion.button
                variants={buttonVariants}
                whileHover={{ scale: 1.05, borderColor: "rgb(156, 163, 175)" }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-500 hover:border-gray-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 bg-transparent hover:bg-white/5 min-w-[160px]"
              >
                Learn more
              </motion.button>
            </motion.div>

            {/* Logo Section */}
            <motion.div
              variants={fadeInUpVariants}
              className="pt-12 flex justify-center items-center gap-8 opacity-60"
            >
              <div className="text-gray-400 text-sm">Trusted by</div>
              <div className="flex items-center gap-6">
                <div className="text-gray-500 text-lg font-semibold">Logoipsum</div>
                <div className="text-gray-500 text-lg font-semibold">Logoipsum</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
      


    </main>
  );
};

export default HeroSection;



export const headingContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1,
    },
  },
};

export const fadeInUpVariants = {
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

export const descriptionVariants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 1.6,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

export const buttonContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 2.2,
    },
  },
};

export const buttonVariants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

export const floatingCardsVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 2.5,
    },
  },
};

export const cardVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
    y: -20,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.4,
    },
  },
};
