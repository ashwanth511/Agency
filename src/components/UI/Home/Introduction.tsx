"use client";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Tag from "@/components/UI/Effects/Tag";
import { twMerge } from "tailwind-merge";

const text = `You're navigating oceans of data, but legacy systems drag you down with poor scalability and real-time blind spots.`;

const words = text.split(' ');

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ 
        target: scrollTarget, 
        offset: ['start end', 'end start']
    });
    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on('change', (latest) => {
            setCurrentWord(Math.floor(latest));
        });
    }, [wordIndex]);

    return (
        <section className="relative min-h-screen flex items-center justify-center py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Sticky Content Container */}
                <div className="sticky top-1/2 -translate-y-1/2 max-w-6xl mx-auto">
                    {/* Tag Section */}
                    <div className="flex justify-center mb-8 lg:mb-12">
                        <Tag className="text-[#0a342f] font-bold border-[#0a342f] bg-white/80 backdrop-blur-sm">
                            Introducing Vadali.in
                        </Tag>
                    </div>

                    {/* Main Heading */}
                    <div className="text-center space-y-6 lg:space-y-8">
                        {/* First Line */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight text-freelancer_black">
                            The maritime world deserves smarter infrastructure.
                        </h1>

                        {/* Animated Text Line */}
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight min-h-[1.2em] flex flex-wrap justify-center">
                            {words.map((word, index) => (
                                <span 
                                    key={index} 
                                    className={twMerge(
                                        "transition-all duration-700 ease-out mr-2",
                                        index < currentWord 
                                            ? "text-freelancer_black" 
                                            : "text-black/15"
                                    )}
                                >
                                    {word}
                                </span>
                            ))}
                        </div>

                        {/* Final Line */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[#0a342f]">
                            That's why we built VADALI.
                        </h2>
                    </div>
                </div>
            </div>

            {/* Scroll Target for Animation */}
            <div 
                className="absolute inset-0 pointer-events-none" 
                ref={scrollTarget}
                style={{ height: '200vh' }}
            />
        </section>
    );
}
