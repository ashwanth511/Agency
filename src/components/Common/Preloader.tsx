'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { Power2, Elastic, Back } from 'gsap/all';
import Image from 'next/image';
import logo from '@/svgs/logo.svg';
import { usePreloader } from '@/context/preloader';

const Preloader = () => {
  const preloaderRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const { finishPreloader } = usePreloader();

  useEffect(() => {
    gsap.registerPlugin(Flip);

    const tl = gsap.timeline({
      onComplete: finishPreloader,
    });

    tl.to(layer1Ref.current, {
      clipPath: 'circle(100% at 50% 50%)',
      duration: 1.5,
      ease: 'power2.out',
    })
      .to(
        layer2Ref.current,
        {
          clipPath: 'circle(100% at 50% 50%)',
          duration: 1.5,
          ease: 'power2.out',
        },
        '-=1.2'
      )
      .to(
        layer3Ref.current,
        {
          clipPath: 'circle(100% at 50% 50%)',
          duration: 1.5,
          ease: 'power2.out',
        },
        '-=1.2'
      )
      .fromTo(
        logoRef.current,
        { opacity: 0, y: -20, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'bounce.out',
        },
        '-=0.4'
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 20, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'bounce.out',
        },
        '-=0.4'
      )
      .to(preloaderRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        delay: 0.8,
      })
      .set(preloaderRef.current, { display: 'none' });

    // Animate the logo and text with a flip effect
    const state = Flip.getState([logoRef.current, textRef.current]);
    tl.add(() => {
      Flip.from(state, {
        duration: 1,
        ease: Back.easeOut.config(1.7),
        onComplete: () => {
          gsap.to([logoRef.current, textRef.current], {
            scale: 1,
            duration: 0.5,
            ease: Elastic.easeOut.config(1, 0.3),
          });
        },
      });
    }, '-=0.8');

    // Add a pulsing effect to the logo and text
    gsap.to([logoRef.current, textRef.current], {
      scale: 1.1,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: Power2.easeInOut,
    });

    return () => {
      tl.kill();
    };
  }, [finishPreloader]);

  return (
    <section
      ref={preloaderRef}
      className="bg-[#0E1118] h-screen w-full fixed inset-0 z-[9999999] grid place-items-center"
    >
      <div
        ref={layer1Ref}
        className="absolute inset-0 bg-freelancer_cream clip-path-[circle(0%_at_50%_50%)]"
      ></div>
      <div
        ref={layer2Ref}
        className="absolute inset-0 bg-freelancer_orange clip-path-[circle(0%_at_50%_50%)]"
      ></div>
      <div
        ref={layer3Ref}
        className="absolute inset-0 bg-[#0E1118] clip-path-[circle(0%_at_50%_50%)]"
      ></div>

      <div className="relative flex items-center gap-4">
        <Image ref={logoRef} src={logo} alt="logo" className="w-[2.1875rem]" />
        <h1
          ref={textRef}
          className="text-5xl font-medium tracking-[-0.05rem] text-white"
        >
          Freelancer
        </h1>
      </div>
    </section>
  );
};

export default Preloader;
