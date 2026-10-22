import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { heroPhoto } from '../data/photos';
import { hero as heroCopy } from '../data/messages';
import { site } from '../data/site';
import useReducedMotion from '../hooks/useReducedMotion';

function Constellation() {
  const pts = [
    [62, 18],
    [70, 30],
    [66, 44],
    [78, 52],
    [86, 40],
  ] as const;
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 70"
      className="absolute right-[6%] top-[16%] hidden h-auto w-[38%] opacity-40 md:block"
    >
      <polyline
        points={pts.map((p) => p.join(',')).join(' ')}
        fill="none"
        stroke="#C4A5FF"
        strokeWidth="0.3"
        strokeDasharray="1 1.4"
      />
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="0.9" fill="#F7F3FF" />
      ))}
    </svg>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const [p, setP] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced || !window.matchMedia?.('(pointer: fine)').matches) return;
    const onMove = (e: MouseEvent) =>
      setP({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduced]);

  const scrollNext = () =>
    document.getElementById('letter')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });

  const parallax = (f: number) => (reduced ? undefined : { x: p.x * f, y: p.y * f });

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[75vmax] w-[75vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.26),transparent_60%)] blur-2xl" />
        <Constellation />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div style={parallax(-20)} className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mb-4 text-[0.7rem] uppercase tracking-[0.45em] text-lavender/80"
          >
            {site.heroTitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="glow-text font-display text-4xl leading-[1.06] text-soft sm:text-5xl md:text-6xl lg:text-[4.1rem]"
          >
            in a world full of people,
            <br />
            <span className="text-grad italic">you became someone special to me.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-6 font-hand text-2xl text-lavender sm:text-3xl"
          >
            {site.heroAltTitle} ♡
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95 }}
            className="mt-9 flex flex-col items-start gap-4"
          >
            <button onClick={scrollNext} className="btn-primary animate-pulseGlow text-sm">
              {heroCopy.cta}
            </button>
            <span className="text-sm text-silver/70">{heroCopy.note}</span>
          </motion.div>
        </motion.div>

        <motion.div style={parallax(26)} className="order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-royal/30 blur-3xl" />
            <div className="glow-box relative overflow-hidden rounded-[2rem] border border-lavender/20">
              <motion.img
                src={heroPhoto.src}
                alt={heroPhoto.alt}
                loading="eager"
                className="h-[68svh] w-full object-cover object-top md:h-[80svh]"
                animate={reduced ? undefined : { scale: [1, 1.07, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-lavender/10" />
            </div>
            {!reduced &&
              [
                { top: '8%', left: '-8%', d: '0s' },
                { top: '24%', left: '92%', d: '1.2s' },
                { top: '70%', left: '-6%', d: '2s' },
                { top: '86%', left: '88%', d: '0.6s' },
              ].map((s, i) => (
                <span
                  key={i}
                  className="absolute h-1.5 w-1.5 animate-floaty rounded-full bg-lavender/80"
                  style={{ top: s.top, left: s.left, animationDelay: s.d }}
                />
              ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
