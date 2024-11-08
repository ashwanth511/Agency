'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { wordContainerVariants, wordVariants } from './HeroSection';
import Image from 'next/image';
import logo from '@/svgs/logo.svg';
import Link from 'next/link';
import { Squeeze as Hamburger } from 'hamburger-react';

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

        <motion.div variants={wordVariants} className="hidden md:block">
          <button className="py-[0.625rem] px-4 rounded-lg bg-freelancer_orange">
            Contact Us
          </button>
        </motion.div>
      </div>

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
