import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { roses } from '../data/messages';
import { site } from '../data/site';
import { asset } from '../lib/asset';
import Section from './Section';
import SmartImage from './SmartImage';
import useReducedMotion from '../hooks/useReducedMotion';

function RoseGlyph() {
  return (
    <svg viewBox="0 0 100 100" className="h-24 w-24 text-royal" fill="none" aria-hidden>
      <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M50 30c9 7 9 20 0 27-9-7-9-20 0-27z" stroke="currentColor" strokeWidth="1.4" fill="rgba(124,58,237,0.18)" />
      <path d="M50 45c11 0 17 7 17 13s-6 13-17 13-17-7-17-13 6-13 17-13z" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="50" cy="52" r="4" fill="currentColor" />
    </svg>
  );
}

export function RoseSurprise() {
  const reduced = useReducedMotion();
  const [opened, setOpened] = useState(false);
  const petals = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 9,
        dur: 7 + Math.random() * 7,
        scale: 0.5 + Math.random(),
      })),
    []
  );

  return (
    <Section id="roses" eyebrow="the surprise" title={roses.title}>
      <div className="relative mx-auto max-w-3xl text-center">
        {/* falling petals */}
        {opened && !reduced && (
          <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
            {petals.map((p) => (
              <motion.span
                key={p.id}
                className="absolute top-0 rounded-[60%_60%_60%_60%/70%_70%_40%_40%] bg-lavender/40"
                style={{ left: `${p.left}%`, width: 9 * p.scale, height: 13 * p.scale }}
                initial={{ y: '-12vh', rotate: 0, opacity: 0 }}
                animate={{ y: '110vh', rotate: 360, opacity: [0, 0.85, 0.85, 0] }}
                transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'linear' }}
              />
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              key="sealed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-6"
            >
              <motion.div
                animate={reduced ? undefined : { scale: [1, 1.06, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="glow-box rounded-full bg-deep/30 p-6"
              >
                <RoseGlyph />
              </motion.div>
              <p className="mx-auto max-w-md font-display text-xl leading-relaxed text-soft/90 sm:text-2xl">
                {roses.intro}
              </p>
              <button onClick={() => setOpened(true)} className="btn-primary animate-pulseGlow text-sm">
                {roses.open}
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="revealed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="flex flex-col items-center gap-8"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="glow-box relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-lavender/20"
              >
                <SmartImage
                  src={asset('assets/roses/bouquet.jpg')}
                  alt="a lush bouquet of purple roses"
                  className="h-[46svh] w-full object-cover sm:h-[54svh]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="glow-text font-display text-3xl leading-tight text-soft sm:text-5xl"
              >
                {roses.main}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mx-auto max-w-lg text-lg leading-relaxed text-silver"
              >
                {roses.sub}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="font-hand text-3xl text-lavender"
              >
                {site.roseDeliveryNote}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}

export default RoseSurprise;
