import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        }
      );

      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(buttonRef.current, {
        boxShadow: '0 0 25px rgba(16,185,129,.55), 0 0 60px rgba(34,211,238,.35)',
        duration: 1.6,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 py-28" style={{ backgroundColor: '#0b0a15' }}>
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-manrope text-3xl md:text-5xl font-semibold text-white">Ready to build?</h2>
        <p className="mt-3 text-cyan-100/80">Try ScrollTrigger now and make your scroll sing.</p>
        <div className="mt-8 flex justify-center">
          <a
            ref={buttonRef}
            href="https://greensock.com/scrolltrigger/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 font-semibold text-black shadow-[0_0_20px_rgba(16,185,129,0.45)] hover:scale-[1.02] transition-transform"
          >
            Try ScrollTrigger now
          </a>
        </div>
      </div>
    </section>
  );
}
