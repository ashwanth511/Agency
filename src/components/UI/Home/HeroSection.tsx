'use client';
import Image from 'next/image';
import hero_banner from '@/images/hero_banner.png';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { usePreloader } from '@/context/preloader';
import { TopbarSection } from './TopbarSection';


const HeroSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const { isPreloaderDone } = usePreloader();
  return (
    <main
      className="h-screen relative flex flex-col w-full overflow-hidden"
      ref={ref}
    >
      <TopbarSection />

      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.2 }}
        animate={isPreloaderDone && inView ? { scale: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <Image
          src={hero_banner}
          alt="hero banner"
          fill
          priority
          quality={100}
          className="object-cover"
          placeholder="blur"
        />
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <motion.h1
          className="flex flex-col text-center items-center font-normal"
          initial="hidden"
          animate={isPreloaderDone && inView ? 'visible' : 'hidden'}
          variants={headingContainerVariants}
        >
          {['Create', 'Innovate', 'Connect'].map((text, index) => (
            <motion.span
              key={text}
              variants={wordContainerVariants}
              className={`${
                index === 2 ? 'ml-[5rem] lg:ml-[10rem]' : ''
              } overflow-hidden`}
            >
              <motion.span
                className={`inline-flex text-[4rem] md:text-[5rem] lg:text-[8rem] tracking-[-0.16rem] ${
                  index === 0
                    ? 'max-h-[7.75rem] -mt-0 lg:-mt-8'
                    : index === 1
                    ? 'max-h-[7.75rem] -mt-5 lg:-mt-10'
                    : 'max-h-[7.75rem] -mt-4 lg:-mt-6'
                }`}
                variants={wordVariants}
              >
                {text}
              </motion.span>
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </main>
  );
};

export default HeroSection;



export const headingContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1,
    },
  },
};

export const wordContainerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const wordVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};
