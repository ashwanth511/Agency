'use client';
import MaskText from '@/components/Common/MaskText';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import speed from '@/svgs/speed.svg';
import meeting from '@/svgs/meeting.svg';
import scan from '@/svgs/scan.svg';
import support from '@/svgs/support.svg';
import networking from '@/svgs/networking.svg';
import sms from '@/svgs/sms.svg';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'High-Speed Internet',
    description:
      'Experience reliable, lightning-fast internet for seamless productivity',
    icon: speed,
  },
  {
    title: 'Meeting Rooms',
    description:
      'Bookable meeting rooms equipped with AV facilities for presentations and conferences.',
    icon: meeting,
  },
  {
    title: 'Printing and Scanning',
    description:
      'On-site printing, scanning, and copying services for documents.',
    icon: scan,
  },
  {
    title: 'Tech Support',
    description:
      'Basic IT support for troubleshooting connectivity or equipment issues',
    icon: support,
  },
  {
    title: 'Networking Opportunities',
    description:
      'Introductions to potential collaborators, mentors, or investors within the coworking community.',
    icon: networking,
  },
  {
    title: 'Mail Handling',
    description:
      'Reception services for mail and packages, with secure storage for members.',
    icon: sms,
  },
];

const ServicesSection = () => {
  const headerArr = ['Unlocking Potential,', 'Together'];
  const servicesRef = useRef<HTMLDivElement>(null);
  const serviceBoxesRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const boxes = serviceBoxesRef.current.filter(Boolean);

    gsap.set(boxes, {
      y: 50,
      opacity: 0,
    });

    ScrollTrigger.batch(boxes, {
      start: 'top bottom-=100px',
      onEnter: (elements) => {
        gsap.to(elements, {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
        });
      },
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const setServiceBoxRef = (el: HTMLElement | null, index: number) => {
    if (el) {
      serviceBoxesRef.current[index] = el;
    }
  };

  return (
    <section className="bg-[#0E1118] pt-[5rem] pb-[7.25rem]">
      <div className="w-[90%] max-w-screen-xl mx-auto space-y-[6.25rem]">
        <header className="font-medium text-[3rem] md:text-[5rem] max-md:leading-[4rem] tracking-[-0.1rem]">
          <MaskText phrases={headerArr} tag="h1" />
        </header>

        <div
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10"
        >
          {services.map((service, i) => (
            <article
              key={i}
              ref={(el) => setServiceBoxRef(el, i)}
              className="flex flex-col gap-4"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={48}
                height={48}
              />
              <h3 className="font-medium text-xl tracking-[-0.025rem]">
                {service.title}
              </h3>
              <p className="font-light tracking-[-0.02rem] text-[#DCDCDC]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
