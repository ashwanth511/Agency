'use client';
import Image from 'next/image';
import logo from '@/svgs/logo.svg';
import hero_banner from '@/images/hero_banner.png';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <main className="h-[48rem] relative flex flex-col w-full overflow-hidden">
      <TopbarSection />

      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <Image
          src={hero_banner}
          alt="hero banner"
          fill
          priority
          quality={100}
          className="object-cover -z-10"
        />
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <motion.h1
          className="flex flex-col text-center items-center font-normal"
          initial="hidden"
          animate="visible"
          variants={headingContainerVariants}
        >
          {['Create', 'Innovate', 'Connect'].map((text, index) => (
            <motion.span
              key={text}
              variants={wordContainerVariants}
              className={`${index === 2 ? 'ml-[10rem]' : ''} overflow-hidden`}
            >
              <motion.span
                className={`inline-flex text-[8rem] tracking-[-0.16rem] ${
                  index === 0
                    ? 'h-[7.75rem] -mt-8'
                    : index === 1
                    ? 'h-[7.75rem] -mt-10'
                    : 'h-[7.75rem] -mt-6'
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

export const TopbarSection = () => {
  return (
    <motion.nav
      className="w-[90%] max-w-screen-xl mx-auto font-medium"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="py-3 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-3"
          variants={wordVariants}
        >
          <Image src={logo} alt="logo" />
          <span className="text-lg tracking-[-0.0225rem]">Freelancer</span>
        </motion.div>

        <motion.ul
          className="flex items-center gap-[3.75rem]"
          variants={wordContainerVariants}
        >
          {['Home', 'About', 'Membership'].map((item) => (
            <motion.li
              key={item}
              variants={wordVariants}
            >
              <Link href="#" className="tracking-[-0.02rem]">
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div variants={wordVariants}>
          <button className="py-[0.625rem] px-4 rounded-lg bg-freelancer_orange">
            Contact Us
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

