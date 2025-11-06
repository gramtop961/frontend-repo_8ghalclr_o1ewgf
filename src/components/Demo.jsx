import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Demo() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.demo-item');

      items.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0, rotate: i % 2 === 0 ? -2 : 2, filter: 'blur(8px)' },
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          }
        );
      });

      // Sticky image with scale
      const sticky = document.querySelector('#stickyBox');
      if (sticky) {
        gsap.fromTo(
          sticky,
          { scale: 0.9, y: 0 },
          {
            scale: 1.05,
            y: -40,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top center',
              end: 'bottom center',
              scrub: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="demo" ref={sectionRef} className="relative bg-[#0b0a15] py-28 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="font-manrope text-4xl font-bold tracking-tight sm:text-5xl">
            Demo animations
          </h2>
          <p className="text-white/70">
            Examples of text, image, and element animations powered by ScrollTrigger.
          </p>

          <div className="demo-item rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="font-semibold">Text reveal</h3>
            <p className="mt-2 text-white/70">
              Lines rise gently as you approach, with blur resolving into clarity.
            </p>
          </div>

          <div className="demo-item rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="font-semibold">Image fade + scale</h3>
            <p className="mt-2 text-white/70">Classic hero effect adapted for scroll.</p>
          </div>

          <div className="demo-item rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="font-semibold">Cards stagger</h3>
            <p className="mt-2 text-white/70">Snappy entrances with glow on hover.</p>
          </div>
        </div>

        <div className="relative">
          <div
            id="stickyBox"
            className="demo-item relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-400/15 via-teal-400/15 to-cyan-400/15 shadow-[0_0_24px_rgba(0,255,171,0.15)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.35),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(34,211,238,0.35),transparent_45%)]" />
            <div className="absolute inset-0" style={{ backdropFilter: 'blur(2px)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
