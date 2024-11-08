'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
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
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'bounce.out' },
        '-=0.4'
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'bounce.out' },
        '-=0.4'
      )
      .to(preloaderRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        delay: 0.8,
      })
      .set(preloaderRef.current, { display: 'none' });

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
