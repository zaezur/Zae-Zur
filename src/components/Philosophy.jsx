import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const container = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax Background
            gsap.to(bgRef.current, {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // Split Text imitation
            const words = gsap.utils.toArray('.split-word');
            gsap.from(words, {
                opacity: 0,
                y: 20,
                duration: 1,
                stagger: 0.08,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 60%'
                }
            });
        }, container);
        return () => ctx.revert();
    }, []);

    const statement1 = "Most digital agencies focus on: fragmented deliverables.".split(" ");
    const statement2 = "We focus on:".split(" ");

    return (
        <section id="philosophy" ref={container} className="relative w-full py-40 md:py-64 px-6 md:px-16 overflow-hidden bg-dark flex flex-col items-center justify-center text-center">
            {/* Background image */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-overlay opacity-20">
                <img
                    ref={bgRef}
                    src="https://images.unsplash.com/photo-1574676150239-011296cdcd6d?auto=format&fit=crop&q=80&w=2000"
                    alt="Organic laboratory textures"
                    className="w-full h-[130%] object-cover -translate-y-[15%]"
                />
                <div className="absolute inset-0 bg-dark/60"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-16 md:gap-24">
                {/* Neutral statement */}
                <div className="font-mono text-sm md:text-xl text-background/60 tracking-widest uppercase flex flex-wrap justify-center gap-[0.3em] font-medium leading-[1.8]">
                    {statement1.map((w, i) => <span key={`s1-${i}`} className="split-word inline-block">{w}</span>)}
                </div>

                {/* Massive differentiated approach */}
                <div className="font-drama italic text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.8] text-background flex flex-wrap justify-center gap-x-[0.2em] gap-y-[0.3em]">
                    {statement2.map((w, i) => <span key={`s2-${i}`} className="split-word inline-block">{w}</span>)}
                    <span className="split-word inline-block text-accent drop-shadow-2xl">holistic</span>
                    <span className="split-word inline-block text-accent drop-shadow-2xl">intelligence.</span>
                </div>
            </div>
        </section>
    );
}
