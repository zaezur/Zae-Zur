import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

export default function App() {

  // Custom cursor logic could go here if requested, but for now scrolling is the main interaction
  useEffect(() => {
    // Add custom cursor CSS class when interacting, etc.
  }, []);

  return (
    <div className="relative w-full bg-background min-h-screen text-dark selection:bg-accent selection:text-background">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <GetStarted />
      <Footer />
    </div>
  );
}
