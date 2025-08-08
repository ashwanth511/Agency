'use client';
import MaskText from '@/components/Common/MaskText';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import freelancer from '@/svgs/freelancer.svg';
import monitor from '@/svgs/monitor.svg';
import book from '@/svgs/book.svg';
import corporate from '@/svgs/corporate.svg';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const AudienceSection = () => {
  const mainText = ['Open doors,', 'diverse minds:', 'welcomes all'];
  const pillsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.audience-section',
        start: 'top',
        end: '+=3000',
        pin: true,
        scrub: true,
      },
    });

    tl.from(pillsRef.current.filter(Boolean), {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });

    pillsRef.current.filter(Boolean).forEach((pill, index) => {
      tl.to(pill, {
        y: index % 2 === 0 ? '-=50' : '+=50',
        duration: 2,
      });
    });
  }, []);

  const handlePillRef = (index: number) => (el: HTMLDivElement | null) => {
    pillsRef.current[index] = el;
  };

  return (
    <section className="h-screen bg-freelancer_orange grid place-items-center relative audience-section">
      <div className="text-[3.5rem] md:text-[7.5rem] font-medium leading-[4rem] md:leading-[7.625rem] tracking-[-0.15rem] text-center">
        <MaskText phrases={mainText} tag="h1" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full space-y-[12rem] md:space-y-[19rem]">
        <div className="w-[90%] md:w-[50%] mx-auto flex items-center justify-between">
          <div
            ref={handlePillRef(0)}
            className="flex items-center bg-black gap-2 p-2 rounded-lg"
          >
            <Image src={freelancer} alt="Freelancer logo" className="w-3.5 md:w-6" />
            <span className="text-sm md:text-xl leading-[-0.025rem]">SalesForce</span>
          </div>
          <div
            ref={handlePillRef(1)}
            className="flex items-center bg-black gap-2 p-2 rounded-lg"
          >
            <Image src={book} alt="Book logo" className="w-3.5 md:w-6" />
            <span className="text-sm md:text-xl leading-[-0.025rem]">Mvp Development</span>
          </div>
        </div>
        <div className="w-[90%] md:w-[70%] mx-auto flex items-center justify-between">
          <div
            ref={handlePillRef(2)}
            className="flex items-center bg-black gap-2 p-2 rounded-lg"
          >
            <Image src={monitor} alt="Remote worker logo" className="w-3.5 md:w-6" />
            <span className="text-sm md:text-xl leading-[-0.025rem]">Web Development</span>
          </div>
          <div
            ref={handlePillRef(3)}
            className="flex items-center bg-black gap-2 p-2 rounded-lg"
          >
            <Image src={corporate} alt="Corporate logo" className="w-3.5 md:w-6" />
            <span className="text-sm md:text-xl leading-[-0.025rem]">
              App/IOS  Development
            </span>
          </div>
        </div>
        <div className="w-[90%] md:w-[70%] mx-auto flex items-center justify-between">
          <div
            ref={handlePillRef(4)}
            className="flex items-center bg-black gap-2 p-2 rounded-lg"
          >
            <Image src={monitor} alt="Remote worker logo" className="w-3.5 md:w-6" />
            <span className="text-sm md:text-xl leading-[-0.025rem]">Sales</span>
          </div>
          <div
            ref={handlePillRef(5)}
            className="flex items-center bg-black gap-2 p-2 rounded-lg"
          >
            <Image src={corporate} alt="Corporate logo" className="w-3.5 md:w-6" />
            <span className="text-sm md:text-xl leading-[-0.025rem]">
              Marketing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
