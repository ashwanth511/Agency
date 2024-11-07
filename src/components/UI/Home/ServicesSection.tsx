import MaskText from '@/components/Common/MaskText';
import React from 'react';

const ServicesSection = () => {
  const headerArr = ['Unlocking Potential,', 'Together'];
  return (
    <section className="bg-[#0E1118] pt-[5rem] pb-[7.25rem]">
      <div className="w-[90%] max-w-screen-xl mx-auto">
        <header className="font-medium text-[5rem] tracking-[-0.1rem]">
          <MaskText phrases={headerArr} tag="h1" />
        </header>
      </div>
    </section>
  );
};

export default ServicesSection;
