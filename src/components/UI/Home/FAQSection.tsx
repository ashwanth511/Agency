'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MaskText from '@/components/Common/MaskText';
import Image from 'next/image';
import arrow_right_down from '@/svgs/arrow_down_right.svg';

// Types
interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQSectionProps {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

// Default FAQ data
const defaultFaqs: FAQItem[] = [
  {
    question: 'What amenities are included in the coworking space?',
    answer: 'Our coworking space includes high-speed WiFi, meeting rooms, printing facilities, kitchen amenities, lounge areas, and 24/7 access for premium members. We also provide coffee, tea, and refreshments throughout the day.',
    category: 'Amenities',
  },
  {
    question: 'Can I use the coworking space on weekends and after hours?',
    answer: 'Yes! We offer flexible access options including 24/7 access for premium members. Weekend and after-hours access is available with our extended hours package.',
    category: 'Access',
  },
  {
    question: 'How do I book meeting rooms, and is there an additional cost?',
    answer: 'Meeting rooms can be booked through our mobile app or website. Basic members get 2 hours per month included, while premium members get unlimited access. Additional hours are available at competitive rates.',
    category: 'Booking',
  },
  {
    question: 'Are there any networking or community events held at the coworking space?',
    answer: 'Absolutely! We host weekly networking events, workshops, and community meetups. Members get priority access to all events, and we also organize industry-specific gatherings and skill-sharing sessions.',
    category: 'Community',
  },
  {
    question: 'Can I bring guests or clients to the coworking space?',
    answer: 'Yes, you can bring guests! We offer guest passes for visitors, and premium members get complimentary guest access. All guests must be registered at the front desk for security purposes.',
    category: 'Guests',
  },
  {
    question: 'Is parking available at the coworking space?',
    answer: 'We provide free parking for all members, including dedicated spaces for premium members. We also offer bike storage and are easily accessible by public transportation.',
    category: 'Parking',
  },
];

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

const headerVariants = {
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

const FAQItemComponent: React.FC<{
  faq: FAQItem;
  isActive: boolean;
  onClick: () => void;
  index: number;
}> = ({ faq, isActive, onClick, index }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="border-b border-gray-200/20 last:border-b-0"
    >
      <button
        onClick={onClick}
        className="w-full py-6 lg:py-8 flex items-center justify-between text-left group hover:bg-white/5 transition-colors duration-300"
      >
        <div className="flex-1 pr-8">
          <h3 className="text-lg lg:text-xl font-medium text-white group-hover:text-freelancer_orange transition-colors duration-200">
            {faq.question}
          </h3>
          {faq.category && (
            <span className="inline-block mt-2 text-xs font-medium text-freelancer_orange/70 uppercase tracking-wider">
              {faq.category}
            </span>
          )}
        </div>
        
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-shrink-0"
        >
          <Image 
            src={arrow_right_down} 
            alt="Toggle answer" 
            className="w-6 h-6 lg:w-8 lg:h-8 text-white"
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.83, 0, 0.17, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 lg:pb-8 pl-0 lg:pl-8">
              <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection: React.FC<FAQSectionProps> = ({
  faqs = defaultFaqs,
  title = "FAQ'S",
  subtitle = "Everything you need to know about our coworking space",
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      ref={sectionRef}
      className={`bg-freelancer_orange relative overflow-hidden ${className}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          className="text-center mb-16 lg:mb-20"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            <MaskText phrases={[title]} tag="span" />
          </h1>
          {subtitle && (
            <p className="text-xl lg:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItemComponent
                key={index}
                faq={faq}
                isActive={activeIndex === index}
                onClick={() => handleToggle(index)}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 lg:mt-16"
        >
          <p className="text-white/80 text-lg lg:text-xl mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-freelancer_orange font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
