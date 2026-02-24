import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Film, Code2, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Shuffler = () => {
    const [cards, setCards] = useState([
        { id: 1, label: 'Visual Identity', color: 'bg-primary text-background' },
        { id: 2, label: 'Motion Graphics', color: 'bg-accent text-background border-dark/10' },
        { id: 3, label: 'Creative Technologies', color: 'bg-dark text-background' }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newCards = [...prev];
                const last = newCards.pop();
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-40 flex items-center justify-center -mt-8">
            {cards.map((card, i) => (
                <div
                    key={card.id}
                    className={`absolute w-full py-4 px-6 rounded-2xl shadow-xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${card.color} flex items-center justify-center font-sans font-medium text-lg border border-transparent`}
                    style={{
                        zIndex: cards.length - i,
                        transform: `translateY(${i * 12}px) scale(${1 - i * 0.05})`,
                        opacity: 1 - (i * 0.2)
                    }}
                >
                    {card.label}
                </div>
            ))}
        </div>
    );
}

const Typewriter = () => {
    const [text, setText] = useState('');
    const fullText = "> Initialize pipeline...\n> Compiling full-stack architecture...\n> Optimizing algorithms...\n> Digital system ready for deployment.";

    useEffect(() => {
        let i = 0;
        let timer;
        let pauseTimer;

        const startTyping = () => {
            i = 0;
            setText('');
            timer = setInterval(() => {
                setText(fullText.substring(0, i + 1));
                i++;
                if (i >= fullText.length) {
                    clearInterval(timer);
                    pauseTimer = setTimeout(startTyping, 4000);
                }
            }, 35);
        };

        ScrollTrigger.create({
            trigger: '#typewriter-card',
            start: 'top 80%',
            onEnter: startTyping,
            once: true
        });
        return () => { clearInterval(timer); clearTimeout(pauseTimer); };
    }, []);

    return (
        <div className="w-full bg-dark/5 border border-dark/10 p-5 rounded-2xl h-44 overflow-hidden relative -mt-8">
            <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <span className="font-mono text-[10px] text-dark/70 tracking-widest uppercase font-bold">Live Feed</span>
            </div>
            <div className="font-mono text-xs leading-[1.6] text-dark whitespace-pre-wrap">
                {text}
                <span className="inline-block w-2 h-3.5 bg-accent ml-1 -mb-[1px] animate-pulse"></span>
            </div>
        </div>
    );
}

const Scheduler = () => {
    const container = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
            tl.to('.v-cursor', { x: 220, y: 35, duration: 1.2, ease: 'power2.inOut' })
                .to('.v-cursor', { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 })
                .to('.day-cell-target', { backgroundColor: '#CC5833', color: '#F2F0E9', duration: 0 }, "-=0.1")
                .to('.v-cursor', { x: 375, y: 95, duration: 1.2, ease: 'power2.inOut', delay: 0.4 })
                .to('.v-cursor', { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 })
                .to('.btn-save-ai', { backgroundColor: '#CC5833', color: '#F2F0E9', duration: 0 }, "-=0.1")
                .to('.v-cursor', { opacity: 0, duration: 0.2, delay: 0.8 })
                .to('.day-cell-target', { backgroundColor: 'transparent', color: 'rgba(26,26,26,0.5)', duration: 0 })
                .to('.btn-save-ai', { backgroundColor: 'var(--background)', color: 'var(--dark)', duration: 0 })
                .set('.v-cursor', { x: -20, y: -20, opacity: 1, scale: 1 });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={container} className="relative w-full h-44 bg-dark/5 rounded-2xl p-4 overflow-hidden border border-dark/10 -mt-8 select-none">
            <div className="grid grid-cols-7 gap-1 mb-8 text-center text-xs font-mono font-medium">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                    <div key={i} className={`p-1.5 rounded-md transition-colors ${i === 3 ? 'day-cell-target text-dark/50' : 'text-dark/50'}`}>{d}</div>
                ))}
            </div>
            <div className="flex justify-end pr-2">
                <div className="btn-save-ai px-4 py-1.5 bg-background rounded-full shadow-sm text-[10px] uppercase tracking-widest font-mono font-bold transition-colors border border-dark/5">
                    Deploy AI
                </div>
            </div>

            {/* SVG Cursor */}
            <svg className="v-cursor absolute top-0 left-0 w-6 h-6 text-dark drop-shadow-md z-10" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" fill="var(--background)" stroke="var(--dark)" />
            </svg>
        </div>
    );
}

export default function Features() {
    const container = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.feature-card', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 75%'
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section id="services" ref={container} className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto z-10 relative">
            <div className="mb-20">
                <h2 className="font-mono text-sm uppercase tracking-widest text-dark/60 mb-4 border-l-2 border-accent pl-4">Digital Instruments</h2>
                <h3 className="font-sans font-bold text-4xl md:text-5xl tracking-tight text-dark">Capabilities Portfolio.</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card 1 — Web & Apps */}
                <div id="typewriter-card" className="feature-card bg-background border border-dark/[0.08] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] rounded-[2.5rem] p-10 hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex flex-col justify-between h-[480px]">
                    <div>
                        <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-8 border border-accent/20">
                            <Code2 size={24} strokeWidth={1.5} />
                        </div>
                        <h4 className="font-sans font-bold text-2xl tracking-tight mb-4 text-dark">Web & Apps</h4>
                        <p className="font-mono text-[13px] text-dark/60 leading-relaxed mb-6">Websites, web apps, and mobile apps — from WordPress and e-commerce to full-stack builds with modern front-ends and scalable back-ends.</p>
                    </div>
                    <Typewriter />
                </div>

                {/* Card 2 — AI Powerhouse */}
                <div className="feature-card bg-background border border-dark/[0.08] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] rounded-[2.5rem] p-10 hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex flex-col justify-between h-[480px]">
                    <div>
                        <div className="w-14 h-14 rounded-full bg-dark/10 text-dark flex items-center justify-center mb-8 border border-dark/20">
                            <Cpu size={24} strokeWidth={1.5} />
                        </div>
                        <h4 className="font-sans font-bold text-2xl tracking-tight mb-4 text-dark">AI Powerhouse</h4>
                        <p className="font-mono text-[13px] text-dark/60 leading-relaxed mb-6">25 years of digital expertise amplified by AI. Shipping full products solo that used to require entire teams — faster, smarter, and at scale.</p>
                    </div>
                    <Scheduler />
                </div>

                {/* Card 3 — Graphic Design */}
                <div className="feature-card bg-background border border-dark/[0.08] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] rounded-[2.5rem] p-10 hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex flex-col justify-between h-[480px]">
                    <div>
                        <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-8 border border-primary/20">
                            <Palette size={24} strokeWidth={1.5} />
                        </div>
                        <h4 className="font-sans font-bold text-2xl tracking-tight mb-4 text-dark">Graphic Design</h4>
                        <p className="font-mono text-[13px] text-dark/60 leading-relaxed mb-6">Flyers, page layouts, branding, and visual identity systems. Pixel-perfect design built to demand attention and compel action.</p>
                    </div>
                    <Shuffler />
                </div>

                {/* Card 4 — Video & Animation */}
                <div className="feature-card bg-background border border-dark/[0.08] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] rounded-[2.5rem] p-10 hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex flex-col justify-between h-[480px]">
                    <div>
                        <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-8 border border-accent/20">
                            <Film size={24} strokeWidth={1.5} />
                        </div>
                        <h4 className="font-sans font-bold text-2xl tracking-tight mb-4 text-dark">Video & Animation</h4>
                        <p className="font-mono text-[13px] text-dark/60 leading-relaxed mb-6">Video editing, motion graphics, and After Effects work. Cinematic storytelling that brings brands to life through movement.</p>
                    </div>
                    <div className="w-full bg-dark/5 border border-dark/10 p-5 rounded-2xl h-44 overflow-hidden relative -mt-8 flex items-center justify-center">
                        <svg className="w-full h-24 opacity-60" viewBox="0 0 200 60" fill="none">
                            {[...Array(20)].map((_, i) => (
                                <rect key={i} x={i * 10 + 1} y={30 - Math.abs(Math.sin(i * 0.8) * 25)} width="6" height={Math.abs(Math.sin(i * 0.8) * 50) + 4} rx="2" fill="var(--accent)" opacity={0.3 + Math.sin(i * 0.8) * 0.4} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                            ))}
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
