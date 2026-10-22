import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { intro } from '../data/messages';
import useReducedMotion from '../hooks/useReducedMotion';

interface IntroProps {
  onOpen: () => void;
}

export function Intro({ onOpen }: IntroProps) {
  const reduced = useReducedMotion();
  const [stage, setStage] = useState(reduced ? intro.lines.length : 0);
  const [done, setDone] = useState(reduced);

  useEffect(() => {
    if (reduced) return;
    let timer = 0;
    let s = 0;
    const advance = () => {
      s += 1;
      setStage(s);
      if (s < intro.lines.length) {
        timer = window.setTimeout(advance, 2600);
      } else {
        timer = window.setTimeout(() => setDone(true), 900);
      }
    };
    timer = window.setTimeout(advance, 1300);
    return () => window.clearTimeout(timer);
  }, [reduced]);

  return (
    <div className="fixed inset-0 z-[80] flex flex-col items-center justify-center overflow-hidden bg-ink px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduced ? 0 : 2.4, ease: 'easeOut' }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[130vmax] w-[130vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.32),transparent_58%)]"
      />
      {/* distant stars */}
      {!reduced &&
        [12, 28, 44, 61, 77, 88, 35, 52].map((top, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.9, 0.2] }}
            transition={{ duration: 3, delay: 0.4 + i * 0.35, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute h-[3px] w-[3px] rounded-full bg-soft"
            style={{ top: `${top}%`, left: `${(i * 13 + 8) % 92}%` }}
          />
        ))}

      <button
        onClick={onOpen}
        className="absolute right-5 top-5 z-20 text-[0.65rem] uppercase tracking-[0.3em] text-silver/60 transition hover:text-lavender"
      >
        {intro.skip}
      </button>

      <div className="relative z-10 flex min-h-[200px] flex-col items-center justify-center gap-3">
        {intro.lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
            animate={stage > i ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0 }}
            transition={{ duration: reduced ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-hand text-3xl leading-snug text-lavender sm:text-4xl md:text-5xl"
          >
            {line}
          </motion.p>
        ))}
      </div>

      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.9, delay: 0.2 }}
            className="relative z-10 mt-8 flex flex-col items-center gap-5"
          >
            <button onClick={onOpen} className="btn-primary animate-pulseGlow text-sm sm:text-base">
              {intro.openButton}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Intro;
