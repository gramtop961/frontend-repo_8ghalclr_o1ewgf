import React from 'react';
import Hero from './components/Hero';
import ParallaxBackground from './components/ParallaxBackground';
import ScrollShowcase from './components/ScrollShowcase';
import DemoSection from './components/DemoSection';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: '#0b0a15' }}>
      <ParallaxBackground />
      <Hero />
      <ScrollShowcase />
      <DemoSection />
      <CTA />
      <footer className="border-t border-white/10 py-10 text-center text-cyan-100/60" style={{ backgroundColor: '#0b0a15' }}>
        Built with GSAP + ScrollTrigger • Neon dark aesthetic
      </footer>
    </div>
  );
}

export default App;
