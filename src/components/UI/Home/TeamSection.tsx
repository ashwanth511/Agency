import MaskText from '@/components/Common/MaskText';
import Image from 'next/image';
import React from 'react';
import ceo from '@/images/ceo.png';
import media_manager from '@/images/media_manager.png';
import gen_manager from '@/images/gen_manager.png';
import photographer from '@/images/photographer.png';
import gen_sec from '@/images/gen_sec.png';
import ParallaxText from '@/components/Common/ScrollVelocity';

const team = [
  {
    image: gen_manager,
    name: 'Henry Arthur',
    role: 'General Manager',
  },
  {
    image: ceo,
    name: 'Louise Marvin',
    role: 'CEO',
  },
  {
    image: media_manager,
    name: 'Bode Akinwunmi',
    role: 'Social Media manager',
  },
  {
    image: photographer,
    name: 'Nguyen Shane',
    role: 'Photographer',
  },
  {
    image: gen_sec,
    name: 'Ashraf Rahman',
    role: 'General Secetary',
  },
];

const TeamSection = () => {
  const headerArr = ['Brains Behind', 'Our Vision.'];
  return (
    <section className="py-[5rem] bg-freelancer_cream flex flex-col gap-[6.25rem]">
      <header className="w-[90%] mx-auto max-w-screen-xl text-freelancer_black font-medium text-[3rem] md:text-[5rem] leading-[4rem] md:leading-[5rem] tracking-[-0.1rem]">
        <MaskText phrases={headerArr} tag="h1" />
      </header>

      <div>
        <ParallaxText baseVelocity={1}>
          <div className="inline-flex gap-4 flex-shrink-0">
            {team.map((t, i) => (
              <article className="space-y-3 w-[16rem] md:w-[21.75rem]" key={i}>
                <Image
                  src={t.image}
                  alt={t.name}
                  quality={100}
                  placeholder="blur"
                  className="rounded-lg"
                />

                <div className="space-y-1">
                  <h3 className="!text-freelancer_black font-medium text-base leading-none tracking-[-0.02rem]">
                    {t.name}
                  </h3>
                  <h4 className="!text-freelancer_gray font-normal tracking-[-0.02rem] leading-none">
                    {t.role}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </ParallaxText>
      </div>
    </section>
  );
};

export default TeamSection;
