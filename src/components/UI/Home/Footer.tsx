'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Types
interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  sections?: FooterSection[];
  brandName?: string;
  tagline?: string;
  copyrightYear?: number;
  className?: string;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.6,
      ease: [0.83, 0, 0.17, 1],
    },
  }),
};

const Footer: React.FC<FooterProps> = ({
  sections = [
    {
      title: 'Menu',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Socials',
      links: [
        { label: 'Twitter', href: 'https://twitter.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
        { label: 'Instagram', href: 'https://instagram.com' },
        { label: 'YouTube', href: 'https://youtube.com' },
      ],
    },
  ],
  brandName = 'Freelancer',
  tagline = 'Dive into a community buzzing with energy, collaboration, and endless opportunities.',
  copyrightYear = new Date().getFullYear(),
  className = '',
}) => {
  return (
    <footer className={`bg-freelancer_black relative overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-freelancer_orange/20 to-transparent"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <motion.p
                className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-gray-300 max-w-2xl"
                variants={textVariants}
                custom={0}
              >
                {tagline}{' '}
                <Link 
                  href="/contact" 
                  className="text-freelancer_orange hover:text-orange-400 underline underline-offset-4 transition-colors duration-200"
                >
                  Book now
                </Link>
              </motion.p>
            </motion.div>

            {/* Navigation Sections */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-8 lg:gap-12"
            >
              {sections.map((section, sectionIndex) => (
                <div key={section.title} className="space-y-4">
                  <motion.h3
                    className="text-sm font-semibold uppercase tracking-wider text-white"
                    variants={textVariants}
                    custom={sectionIndex + 1}
                  >
                    {section.title}
                  </motion.h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-white transition-colors duration-200 group"
                          variants={textVariants}
                          custom={sectionIndex + linkIndex + 2}
                        >
                          <span className="relative">
                            {link.label}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-freelancer_orange transition-all duration-200 group-hover:w-full"></span>
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Brand Name Section */}
          <motion.div 
            variants={itemVariants}
            className="py-12 lg:py-16 border-t border-gray-800 mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none text-white/90">
              {brandName.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={textVariants}
                  custom={index}
                  className="inline-block hover:text-freelancer_orange transition-colors duration-200"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Bottom Section */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-800"
          >
            {/* Legal Links */}
            <div className="flex items-center gap-6 md:gap-10">
              {[
                { label: 'Terms', href: '/terms' },
                { label: 'Privacy', href: '/privacy' },
                { label: 'Cookies', href: '/cookies' },
              ].map((link, index) => (
                <motion.div key={link.label} variants={textVariants} custom={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Copyright */}
            <motion.div
              variants={textVariants}
              custom={4}
              className="flex items-center gap-3 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gray-500"
                >
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 9C13.52 8.4 12.93 8 12 8C7.82902 8 7.82902 16 12 16C12.93 16 13.52 15.6 14 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  © {copyrightYear} {brandName}. All rights reserved.
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
