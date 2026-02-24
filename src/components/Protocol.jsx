import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const protocols = [
    {
        num: "01",
        title: "ANALYSIS",
        desc: "Auditing current digital ecosystems to identify structural bottlenecks and algorithm opportunities.",
        graphics: (
            <svg className="w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                {[...Array(10)].map((_, i) => (
                    <circle key={i} cx="50" cy="50" r={10 + i * 4} strokeDasharray={`${1 + i} ${1 + i}`} opacity={1 - i * 0.05} />
                ))}
            </svg>
        )
    },
    {
        num: "02",
        title: "SYNTHESIS",
        desc: "Blueprinting highly-scalable, AI-integrated architectures specifically tailored for enterprise growth.",
        graphics: (
            <div className="w-full h-full relative overflow-hidden bg-[radial-gradient(var(--dark)_1px,transparent_1px)] [background-size:20px_20px] opacity-60">
                <div className="absolute top-0 left-0 w-full h-1 bg-accent/80 shadow-[0_0_10px_rgba(204,88,51,0.8)] animate-[scan_3s_ease-in-out_infinite_alternate]" />
                <style>{`@keyframes scan { from { transform: translateY(0); } to { transform: translateY(400px); } }`}</style>
            </div>
        )
    },
    {
        num: "03",
        title: "DEPLOYMENT",
        desc: "Launching polished full-stack digital instruments that function flawlessly at scale.",
        graphics: (
            <svg className="w-full h-full" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="1">
                <path
                    d="M0,50 L40,50 L50,20 L60,80 L70,50 L200,50"
                    strokeDasharray="250"
                    strokeDashoffset="250"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="waveform-path animate-[dash_2s_linear_infinite]"
                />
                <style>{`@keyframes dash { to { stroke-dashoffset: 0; } } .waveform-path { stroke: var(--accent); filter: drop-shadow(0 0 4px var(--accent)); }`}</style>
            </svg>
        )
    }
];

export default function Protocol() {
    const container = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card, i) => {
                if (i === 0) return;

                ScrollTrigger.create({
                    trigger: card,
                    start: 'top top',
                    end: '+=100%',
                    pin: true,
                    pinSpacing: false,
                    animation: gsap.to(cardsRef.current[i - 1], {
                        scale: 0.9,
                        filter: 'blur(20px)',
                        opacity: 0.3,
                        duration: 1,
                        ease: 'none'
                    }),
                    scrub: true
                });
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section id="protocol" ref={container} className="relative w-full bg-background pt-32 pb-64">
            <div className="mb-20 px-6 md:px-16 max-w-[1400px] mx-auto z-10 relative">
                <h2 className="font-mono text-sm uppercase tracking-widest text-dark/60 mb-4 border-l-2 border-primary pl-4">System Protocol</h2>
                <h3 className="font-sans font-bold text-4xl md:text-5xl tracking-tight text-dark">Methodology Stack.</h3>
            </div>

            {protocols.map((p, i) => (
                <div
                    key={i}
                    ref={el => cardsRef.current[i] = el}
                    className="h-[100vh] w-full sticky top-0 flex items-center justify-center p-6 md:p-16 z-10"
                >
                    <div className="w-full max-w-[1400px] h-[80vh] bg-dark rounded-[3rem] p-12 md:p-24 flex flex-col md:flex-row gap-12 border border-[rgba(255,255,255,0.05)] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden relative">

                        {/* Background Graphic Area */}
                        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none text-background flex items-center justify-center pointer-events-none p-12">
                            <div className="w-full h-full max-w-3xl opacity-50">
                                {p.graphics}
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="relative z-10 flex flex-col justify-between w-full h-full">
                            <div className="font-mono text-[8rem] sm:text-[12rem] md:text-[18rem] lg:text-[24rem] leading-[0.7] text-background/5 -ml-8 tracking-tighter mix-blend-overlay">
                                {p.num}
                            </div>
                            <div className="max-w-2xl">
                                <div className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-6 text-accent font-bold">Step {p.num}</div>
                                <h4 className="font-sans font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] tracking-tighter text-background mb-8">{p.title}.</h4>
                                <p className="font-mono text-sm sm:text-base md:text-lg text-background/70 leading-[1.8]">{p.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
