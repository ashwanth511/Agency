'use client';
import ParallaxText from '@/components/Common/ScrollVelocity';
import placeholder_1 from '@/images/placeholder_1.png';
import placeholder_2 from '@/images/placeholder_2.png';
import placeholder_3 from '@/images/placeholder_3.png';
import placeholder_4 from '@/images/placeholder_4.png';
import placeholder_5 from '@/images/placeholder_5.png';
import placeholder_6 from '@/images/placeholder_6.png';
import placeholder_7 from '@/images/placeholder_7.png';
import placeholder_8 from '@/images/placeholder_8.png';
import Image from 'next/image';
import MaskText from '@/components/Common/MaskText';

const AboutSection = () => {
  const rowOne = [placeholder_5, placeholder_1, placeholder_2, placeholder_6];
  const rowTwo = [placeholder_3, placeholder_4, placeholder_7, placeholder_8];

  const mainText = ['Where', 'Productivity', 'Meets', 'Community'];
  const paragraphText = [
    'Step into our co-working sanctuary – where',
    'ambition ignites and creativity flourishes. With top-',
    'notch amenities and a vibrant community, fuel',
    'your drive and feed your imagination. Welcome to',
    'the space where your dreams take flight',
  ];

  return (
    <section className="bg-freelancer_cream py-[6.25rem] space-y-[10rem]">
      <div className="flex items-start justify-between max-w-screen-xl mx-auto w-[90%]">
        <div className="max-w-[43.25rem] text-freelancer_black font-medium text-[8rem] leading-[8.875rem] tracking-[-0.16rem]">
          <MaskText phrases={mainText} tag="h1" />
        </div>

        <div className="max-w-[22.75rem] text-freelancer_gray leading-[1.375rem] flex flex-col">
          <MaskText phrases={paragraphText} tag="p" />
        </div>
      </div>

      <div className="space-y-4">
        <ParallaxText baseVelocity={1}>
          <div className="inline-flex gap-4 flex-shrink-0">
            {rowOne.map((image, i) => (
              <div key={i} className="w-[26rem]">
                <Image
                  src={image}
                  alt="placeholder"
                  className="object-contain w-full h-auto"
                  quality={100}
                />
              </div>
            ))}
          </div>
        </ParallaxText>
        <ParallaxText baseVelocity={-1}>
          <div className="inline-flex gap-4 flex-shrink-0">
            {rowTwo.map((image, i) => (
              <div key={i} className="w-[26rem]">
                <Image
                  src={image}
                  alt="placeholder"
                  className="object-contain w-full h-auto"
                  quality={100}
                />
              </div>
            ))}
          </div>
        </ParallaxText>
      </div>
    </section>
  );
};

export default AboutSection;
