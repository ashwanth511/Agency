'use client';
import React from 'react';
import { motion } from 'framer-motion';

// Types
interface ComparisonItem {
  others: string;
  untilSolutions: string;
}

interface ComparisonSectionProps {
  title?: string;
  subtitle?: string;
  items?: ComparisonItem[];
  className?: string;
}

// Default comparison data
const defaultItems: ComparisonItem[] = [
  {
    others: 'Generic, one-size-fits-all strategies',
    untilSolutions: 'Custom strategies tailored to your business goals',
  },
  {
    others: 'Focus on vanity metrics (likes, shares)',
    untilSolutions: 'Focus on real KPIs like leads, conversions, and ROI',
  },
  {
    others: 'Slow response times and poor communication',
    untilSolutions: 'Transparent communication and dedicated support',
  },
  {
    others: 'Minimal post-launch support or guidance',
    untilSolutions: 'Provide long-term support and optimization',
  },
  {
    others: 'Use outdated marketing techniques',
    untilSolutions: 'Use the latest tools and data-driven marketing tactics',
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
  hidden: { opacity: 0, y: 30 },
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

const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  title = "Why UntilSolutions Stands Out",
  subtitle = "How UntilSolutions delivers more value, clarity, and results compared to typical service providers",
  items = defaultItems,
  className = '',
}) => {
  return (
    <section className={`py-20 lg:py-32 bg-freelancer_black relative overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-freelancer_orange/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Table Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-red-400 mb-4">
                Others Agencies
              </h3>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center lg:text-right">
              <h3 className="text-2xl lg:text-3xl font-bold text-green-400 mb-4">
                UntilSolutions
              </h3>
            </motion.div>
          </div>

          {/* Comparison Items */}
          <div className="space-y-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
              >
                {/* Others Column */}
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                      {item.others}
                    </p>
                  </div>
                </div>

                {/* UntilSolutions Column */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                      {item.untilSolutions}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection; 