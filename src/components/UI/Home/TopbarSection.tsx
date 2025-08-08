'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Squeeze as Hamburger } from 'hamburger-react';

// Types
interface NavigationItem {
  label: string;
  href: string;
}

interface TopbarSectionProps {
  navigationItems?: NavigationItem[];
  logo?: string;
  brandName?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

// Animation variants
const containerVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 20,
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

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
};

export const TopbarSection = ({
  navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  logo = '/logo.png',
  brandName = 'Freelancer',
  ctaText = 'Contact Us',
  ctaHref = '/contact',
  className = '',
}: TopbarSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border ${className}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo and Brand */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3"
          >
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="relative w-8 h-8 lg:w-10 lg:h-10">
                <Image
                  src={logo}
                  alt={`${brandName} logo`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
                             <span className="text-lg lg:text-xl font-semibold tracking-tight text-freelancer_black">
                {brandName}
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul
            className="hidden md:flex items-center gap-8 lg:gap-12"
            variants={containerVariants}
          >
            {navigationItems.map((item) => (
              <motion.li key={item.label} variants={itemVariants}>
                <Link
                  href={item.href}
                                className="text-freelancer_gray hover:text-freelancer_black font-medium transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-freelancer_black transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="hidden md:block">
            <Link
              href={ctaHref}
              className="inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 rounded-lg bg-freelancer_orange hover:bg-orange-600 text-white font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              {ctaText}
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div variants={itemVariants} className="md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="p-2 rounded-md text-freelancer_gray hover:text-freelancer_black hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <Hamburger toggled={isOpen} toggle={handleMobileMenuToggle} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
                         className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Items */}
              <ul className="space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={handleMobileMenuClose}
                      className="block py-2 text-freelancer_gray hover:text-freelancer_black font-medium transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Mobile CTA Button */}
                             <div className="pt-4 border-t border-border">
                <Link
                  href={ctaHref}
                  onClick={handleMobileMenuClose}
                                     className="block w-full text-center py-3 px-4 rounded-lg bg-freelancer_orange hover:bg-orange-600 text-white font-medium transition-colors duration-200"
                >
                  {ctaText}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default TopbarSection;
