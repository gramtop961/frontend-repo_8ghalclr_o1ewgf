import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DemoSection() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: headlineRef.current, start: 'top 80%' } }
      );

      const items = gsap.utils.toArray('.demo-item');
      items.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40, rotate: i % 2 ? -2 : 2 },
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 py-28" style={{ backgroundColor: '#0b0a15' }}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 ref={headlineRef} className="font-manrope text-3xl md:text-5xl font-semibold text-white">Demo effects</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="demo-item rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="text-emerald-300 text-lg font-semibold">Text reveal</h3>
            <p className="mt-2 text-cyan-100/80">Headlines and paragraphs reveal smoothly as you scroll for a calm, premium feel.</p>
          </div>

          <div className="demo-item rounded-2xl border border-emerald-400/20 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="text-cyan-300 text-lg font-semibold">Image zoom</h3>
            <div className="mt-3 h-48 w-full overflow-hidden rounded-xl">
              <div className="h-full w-full bg-gradient-to-br from-cyan-500/40 to-emerald-500/30 scale-100 transition-transform will-change-transform" />
            </div>
            <p className="mt-2 text-cyan-100/80">Parallax and scale-in combine to keep visuals engaging without noise.</p>
          </div>

          <div className="demo-item rounded-2xl border border-emerald-400/20 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="text-emerald-300 text-lg font-semibold">Elements timeline</h3>
            <p className="mt-2 text-cyan-100/80">Sequences choreographed via GSAP timelines for precise control.</p>
          </div>

          <div className="demo-item rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="text-cyan-300 text-lg font-semibold">Magnetic buttons</h3>
            <p className="mt-2 text-cyan-100/80">Hover states with subtle glow and blur for a soft, neon touch.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
