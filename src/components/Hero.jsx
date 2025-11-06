import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
      );
      gsap.fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power3.out' }
      );
      gsap.to(containerRef.current, {
        background:
          'radial-gradient(1200px 600px at 50% 40%, rgba(16, 185, 129, 0.15), rgba(45, 212, 191, 0.08) 35%, rgba(0,0,0,0) 70%)',
        duration: 1.5,
        ease: 'power2.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] w-full overflow-hidden text-white"
      style={{ backgroundColor: '#0b0a15' }}
    >
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Ujidb4bmigoHT4IV/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      <div className="relative mx-auto max-w-6xl px-6 pt-28 md:pt-36">
        <h1
          ref={titleRef}
          className="font-manrope text-5xl leading-tight md:text-7xl font-extrabold tracking-tight"
          style={{ textShadow: '0 0 30px rgba(20, 184, 166, 0.35)' }}
        >
          Scroll beautifully
          <span className="block bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">with GSAP</span>
        </h1>
        <p
          ref={subtitleRef}
          className="mt-6 max-w-2xl text-lg md:text-xl text-cyan-100/80"
        >
          Minimalistic animations that react to your scroll. Controlled by GSAP
          ScrollTrigger with a futuristic neon vibe.
        </p>
      </div>
    </section>
  );
}
