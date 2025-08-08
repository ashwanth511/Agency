'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const headingVariants = {
    hidden: {
      y: 60,
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

  return (
    <section className="bg-gray-50 py-20" ref={ref}>
      <div className="w-[90%] max-w-5xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={headingVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-8">
            At Upreach, we deliver real results through{' '}
            <span className="text-green-500">high-converting marketing strategies</span>{' '}
            designed to scale your business, attract the right audience, and{' '}
            <span className="text-green-500">maximize ROI with precision.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;