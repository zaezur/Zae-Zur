import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function GetStarted() {
    return (
        <section id="contact" className="relative z-20 w-full bg-background py-32 px-6 flex justify-center">
            <div className="max-w-[1200px] w-full bg-dark rounded-[3.5rem] p-12 md:p-24 text-center flex flex-col items-center justify-center relative overflow-hidden text-background shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent pointer-events-none mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <h2 className="relative z-10 font-drama italic text-5xl sm:text-7xl md:text-[6rem] leading-[0.9] mb-8 font-medium max-w-4xl tracking-tight">
                    Ready to scale your digital presence?
                </h2>

                <p className="relative z-10 font-mono text-xs sm:text-sm md:text-base text-background/60 max-w-2xl mb-12 uppercase tracking-[0.2em] leading-relaxed border-l-2 border-accent pl-6">
                    Initialize a consultation for full-stack design, development, and AI integration services.
                </p>

                <a href="mailto:mail@zaezur.com" className="relative z-10 btn-magnetic group overflow-hidden bg-accent text-background px-12 py-5 rounded-[4rem] font-sans font-bold text-xl sm:text-2xl hover:scale-[1.03] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex items-center justify-center gap-3 no-underline">
                    <span className="relative z-20 flex items-center justify-center gap-2">
                        Let's Work Together <ArrowUpRight size={24} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-10"></div>
                </a>
            </div>
        </section>
    );
}
