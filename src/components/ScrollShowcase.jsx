import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollShowcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.anim-card');

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.96, filter: 'blur(6px)' },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            ease: 'power3.out',
            duration: 0.9,
            scrollTrigger: {
              trigger: card,
              start: 'top 75%',
              end: 'top 35%',
              scrub: false,
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.to(card, {
          y: i % 2 === 0 ? -20 : 20,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 py-28" style={{ backgroundColor: '#0b0a15' }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex items-end justify-between">
          <h2 className="font-manrope text-3xl md:text-5xl font-semibold text-white">Scroll animations</h2>
          <p className="max-w-md text-cyan-100/70">Blocks move, scale and fade as you scroll. All powered by GSAP ScrollTrigger.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="anim-card group rounded-2xl border border-emerald-500/20 bg-white/5 p-6 backdrop-blur-md shadow-[0_0_40px_rgba(34,211,238,0.15)] hover:shadow-[0_0_60px_rgba(16,185,129,0.25)] transition-shadow"
            >
              <div className="mb-4 h-40 w-full rounded-xl bg-gradient-to-br from-emerald-500/40 to-cyan-500/30" />
              <h3 className="font-manrope text-xl font-semibold text-white">Dynamic card #{i}</h3>
              <p className="mt-2 text-cyan-100/80">Smooth fade, scale and parallax motion on scroll. Minimal and immersive.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
