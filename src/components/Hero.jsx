import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
    const container = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-anim', {
                y: 60,
                opacity: 0,
                duration: 1.4,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.3
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative w-full h-[100dvh] flex items-end pb-24 px-6 md:px-16 overflow-hidden bg-primary">
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1542385151-efd5e9ccf8fd?auto=format&fit=crop&q=80&w=2000"
                    alt="Dark mossy texture"
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-6xl w-full flex flex-col items-start gap-8 mt-32">
                <div className="flex flex-col select-texts">
                    <h1 className="hero-anim text-background font-sans font-bold text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[7.5rem] tracking-tighter leading-[0.85]">
                        Evolution is the
                    </h1>
                    <h2 className="hero-anim text-accent font-drama italic font-medium text-[4rem] sm:text-[5.5rem] md:text-[8rem] lg:text-[11rem] leading-[0.75] pr-8 -ml-[2px] md:-ml-4 drop-shadow-2xl">
                        Algorithm.
                    </h2>
                </div>

                <p className="hero-anim text-background/80 font-mono text-xs sm:text-sm md:text-base max-w-lg tracking-widest leading-relaxed uppercase mt-6 border-l-2 border-accent pl-6">
                    Zae Zur — 25-Year Full Stack Creative Technologist.
                    Deploying design, video, web, and AI-powered systems for modern visionaries.
                </p>

                <a href="#services" className="hero-anim mt-4 group relative overflow-hidden bg-background text-dark px-10 py-5 rounded-[3rem] font-sans font-bold text-lg hover:scale-[1.03] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex items-center gap-3 shadow-2xl">
                    <span className="relative z-10 flex items-center gap-2">
                        Explore Capabilities <ArrowDownRight size={20} />
                    </span>
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0 group-hover:text-background"></div>
                </a>
            </div>
        </section>
    );
}
