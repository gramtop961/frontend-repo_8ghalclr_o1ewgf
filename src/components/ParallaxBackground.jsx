import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxBackground() {
  const bgRef = useRef(null);

  useEffect(() => {
    const el = bgRef.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: 0 },
        {
          yPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: 'bottom+=150% top',
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={bgRef}
      className="pointer-events-none fixed inset-0 opacity-40"
      aria-hidden
      style={{
        background:
          'radial-gradient(800px 400px at 15% 20%, rgba(16,185,129,.15), transparent 60%), radial-gradient(900px 600px at 85% 50%, rgba(34,211,238,.12), transparent 65%)',
        filter: 'blur(20px)',
      }}
    />
  );
}
