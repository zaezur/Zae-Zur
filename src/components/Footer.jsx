import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full bg-dark text-background rounded-t-[4rem] px-8 py-20 md:py-32 flex flex-col items-center border-t border-primary/20 -mt-10 relative z-20">
            <div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">

                {/* Brand */}
                <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
                    <h2 className="font-sans font-bold text-5xl md:text-6xl tracking-tighter">ZAE ZUR.</h2>
                    <p className="font-mono text-xs text-background/50 uppercase tracking-[0.2em] leading-relaxed max-w-sm">
                        25-Year Full Stack Creative Technologist.
                        Design, Video, Web, & AI Powerhouse.
                    </p>
                </div>

                {/* Navigation */}
                <div className="col-span-1 flex flex-col gap-4 font-mono text-sm tracking-widest uppercase">
                    <div className="text-background/30 mb-2 text-[10px] font-bold">Directory</div>
                    <a href="#services" className="hover:text-accent transition-colors">Services</a>
                    <a href="#philosophy" className="hover:text-accent transition-colors">Philosophy</a>
                    <a href="#protocol" className="hover:text-accent transition-colors">Method</a>
                    <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
                </div>

                {/* Status */}
                <div className="col-span-1 flex flex-col gap-6 font-mono text-xs uppercase tracking-widest text-background/60">
                    <div className="text-background/30 text-[10px] font-bold">System Status</div>
                    <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                        <span className="font-bold text-background/90 text-sm">Operational</span>
                    </div>
                    <div className="mt-8 text-[10px] text-background/30">
                        &copy; {new Date().getFullYear()} Zae Zur. All rights reserved.
                    </div>
                </div>

            </div>
        </footer>
    );
}
