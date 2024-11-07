'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import testimonial_banner from '@/images/testimonial_banner.png';
import hero_banner from '@/images/hero_banner.png';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  image: StaticImageData;
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    image: testimonial_banner,
    quote:
      "The environment at Freelancer is super inclusive. I love coming here knowing i'm going to have a fun, productive day",
    author: 'Courtney Henry',
  },
  {
    image: hero_banner,
    quote:
      'This space has transformed how I work. The community here is unmatched and the facilities are top-notch',
    author: 'Alex Johnson',
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const authorRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=300%',
        pin: true,
        scrub: 1,
      },
    });

    const rotationInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(rotationInterval);
      pinTl.kill();
    };
  }, []);

  useEffect(() => {
    const currentImage = imageRefs.current[currentIndex];
    const prevIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    const prevImage = imageRefs.current[prevIndex];

    gsap.set(currentImage, {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      opacity: 1,
      zIndex: 2,
    });

    gsap.set(prevImage, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      opacity: 1,
      zIndex: 1,
    });

    const tl = gsap.timeline();

    tl.to([quoteRef.current, authorRef.current], {
      opacity: 0,
      duration: 0.5,
      y: 20,
    })
      .to(
        currentImage,
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 1.2,
          ease: 'power2.inOut',
        },
        'reveal'
      )
      .to(
        prevImage,
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          duration: 1.2,
          ease: 'power2.inOut',
        },
        'reveal'
      )
      .to([quoteRef.current, authorRef.current], {
        opacity: 1,
        duration: 0.5,
        y: 0,
        stagger: 0.1,
      });

    return () => {
      tl.kill();
    };
  }, [currentIndex]);

  return (
    <section
      ref={sectionRef}
      className="h-screen relative flex overflow-hidden"
    >
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          ref={(el) => {
            imageRefs.current[index] = el;
          }}
          className="absolute inset-0"
        >
          <Image
            src={testimonial.image}
            alt={`testimonial ${index + 1}`}
            fill
            quality={100}
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      <div className="mx-auto w-[90%] max-w-screen-xl flex flex-col self-end pb-[5rem] space-y-8 relative z-10">
        <p
          ref={quoteRef}
          className="font-light text-[2.25rem] tracking-[-0.045rem] max-w-[42.3125rem]"
        >
          &quot;{testimonials[currentIndex].quote}&quot;
        </p>

        <h3
          ref={authorRef}
          className="text-[2.25rem] font-medium tracking-[-0.045rem]"
        >
          {testimonials[currentIndex].author}
        </h3>
      </div>
    </section>
  );
};

export default TestimonialSection;
