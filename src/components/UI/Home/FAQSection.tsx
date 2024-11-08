'use client';
import React, { useState } from 'react';
import MaskText from '@/components/Common/MaskText';
import Image from 'next/image';
import arrow_right_down from '@/svgs/arrow_down_right.svg';
import { motion, useInView } from 'framer-motion';

const faqs = [
  {
    question: 'What amenities are included in the coworking space',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sit voluptatum eius excepturi aliquid! Dolorem alias animi magni nostrum eius? Consectetur accusantium molestiae non ipsum ea esse nisi, odio unde eum in itaque. Placeat maiores, minima aliquam aperiam ratione quas.',
  },
  {
    question: 'Can I use the coworking space on weekends and after hours',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sit voluptatum eius excepturi aliquid! Dolorem alias animi magni nostrum eius? Consectetur accusantium molestiae non ipsum ea esse nisi, odio unde eum in itaque. Placeat maiores, minima aliquam aperiam ratione quas.',
  },
  {
    question: 'How do I book meeting rooms, and is there an additional cost',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sit voluptatum eius excepturi aliquid! Dolorem alias animi magni nostrum eius? Consectetur accusantium molestiae non ipsum ea esse nisi, odio unde eum in itaque. Placeat maiores, minima aliquam aperiam ratione quas.',
  },
  {
    question:
      'Are there any networking or community events held at the coworking space',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sit voluptatum eius excepturi aliquid! Dolorem alias animi magni nostrum eius? Consectetur accusantium molestiae non ipsum ea esse nisi, odio unde eum in itaque. Placeat maiores, minima aliquam aperiam ratione quas.',
  },
  {
    question: 'Can I bring guests or clients to the coworking space',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sit voluptatum eius excepturi aliquid! Dolorem alias animi magni nostrum eius? Consectetur accusantium molestiae non ipsum ea esse nisi, odio unde eum in itaque. Placeat maiores, minima aliquam aperiam ratione quas.',
  },
  {
    question: 'Is parking available at the coworking space',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sit voluptatum eius excepturi aliquid! Dolorem alias animi magni nostrum eius? Consectetur accusantium molestiae non ipsum ea esse nisi, odio unde eum in itaque. Placeat maiores, minima aliquam aperiam ratione quas.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.645, 0.045, 0.355, 1.0],
    },
  },
};

const FAQItem: React.FC<FAQItemProps> = ({ faq, isActive, onClick }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="py-4 md:py-5 border-t border-border transition-all duration-300"
    >
      <div
        className="flex items-center justify-between max-w-screen-xl mx-auto w-[90%] cursor-pointer group"
        onClick={onClick}
      >
        <p className="font-light md:text-2xl leading-none">{faq.question}</p>

        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Image src={arrow_right_down} alt="Toggle answer" />
        </motion.div>
      </div>

      <motion.div
        className="max-w-screen-xl mx-auto w-[90%] overflow-hidden"
        animate={{
          height: isActive ? 'auto' : 0,
          marginTop: isActive ? '1rem' : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <p className="text-sm font-normal md:max-w-[80%]">{faq.answer}</p>
      </motion.div>
    </motion.div>
  );
};

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
    margin: '0px 0px -200px 0px',
  });

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="pt-20 pb-24 bg-freelancer_orange space-y-[4.75rem]"
      ref={sectionRef}
    >
      <header className="max-w-screen-xl mx-auto w-[90%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-[5rem] md:text-[8rem] leading-normal md:leading-[7.625rem] tracking-[-0.16rem] font-medium"
        >
          <MaskText phrases={["FAQ'S"]} tag="h1" />
        </motion.div>
      </header>

      <motion.div
        className="border-b border-border"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isActive={activeIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default FAQSection;
