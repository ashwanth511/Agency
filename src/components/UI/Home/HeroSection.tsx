'use client';
import Image from 'next/image';
import logo from '@/svgs/logo.svg';
import hero_banner from '@/images/hero_banner.png';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { usePreloader } from '@/context/preloader';
import { Squeeze as Hamburger } from 'hamburger-react';

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
              className={`${index === 2 ? 'ml-[5rem] lg:ml-[10rem]' : ''} overflow-hidden`}
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

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const headingContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1,
    },
  },
};

const wordContainerVariants = {
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

const wordVariants = {
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

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export const TopbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="w-[90%] max-w-screen-xl mx-auto font-medium"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="py-3 flex items-center justify-between">
        <motion.div
          variants={wordVariants}
          className="flex items-center justify-between max-md:w-full"
        >
          <div className="flex items-center gap-3">
            <Image src={logo} alt="logo" />
            <span className="text-lg tracking-[-0.0225rem]">Freelancer</span>
          </div>

          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>
        </motion.div>

        <motion.ul
          className="hidden md:flex items-center gap-[3.75rem]"
          variants={wordContainerVariants}
        >
          {['Home', 'About', 'Membership'].map((item) => (
            <motion.li key={item} variants={wordVariants}>
              <Link href="#" className="tracking-[-0.02rem]">
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Desktop Contact Us Button */}
        <motion.div variants={wordVariants} className="hidden md:block">
          <button className="py-[0.625rem] px-4 rounded-lg bg-freelancer_orange">
            Contact Us
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center gap-4 mt-4 bg-freelancer_black py-4 rounded-lg relative z-50"
          >
            <ul className="flex flex-col items-center gap-3">
              {['Home', 'About', 'Membership'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-base tracking-[-0.02rem]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="py-2 px-4 rounded-lg bg-freelancer_orange w-full max-w-[10rem]">
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
