import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
    const navRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: 'top -50',
                end: 99999,
                onUpdate: (self) => {
                    if (self.direction === 1 || self.progress > 0.05) {
                        gsap.to(navRef.current, {
                            backgroundColor: 'rgba(242, 240, 233, 0.65)',
                            backdropFilter: 'blur(16px)',
                            borderColor: 'rgba(46, 64, 54, 0.1)',
                            color: '#2E4036',
                            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
                            duration: 0.3
                        });
                    } else {
                        gsap.to(navRef.current, {
                            backgroundColor: 'transparent',
                            backdropFilter: 'blur(0px)',
                            borderColor: 'transparent',
                            color: '#F2F0E9',
                            boxShadow: 'none',
                            duration: 0.3
                        });
                    }
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
            <nav
                ref={navRef}
                className="flex items-center justify-between px-6 py-4 rounded-[2rem] border border-transparent text-background transition-colors duration-300 pointer-events-auto"
            >
                <div className="font-sans font-bold text-xl tracking-tighter">ZAE ZUR.</div>
                <div className="hidden md:flex gap-10 font-mono text-xs uppercase tracking-[0.2em] font-medium">
                    <a href="#services" className="hover:-translate-y-[2px] transition-transform duration-300">Services</a>
                    <a href="#philosophy" className="hover:-translate-y-[2px] transition-transform duration-300">Philosophy</a>
                    <a href="#protocol" className="hover:-translate-y-[2px] transition-transform duration-300">Method</a>
                </div>
                <a href="mailto:mail@zaezur.com" className="group relative overflow-hidden bg-accent text-background px-6 py-2.5 rounded-[2rem] font-sans font-medium hover:scale-[1.03] transition-transform duration-300 flex items-center gap-2">
                    <span className="relative z-10 flex items-center gap-1.5 text-sm">
                        Let's Work <ArrowUpRight size={16} />
                    </span>
                    <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0"></div>
                </a>
            </nav>
        </div>
    );
}
