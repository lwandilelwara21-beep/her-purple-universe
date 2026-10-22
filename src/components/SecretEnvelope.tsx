import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { envelope } from '../data/messages';
import Section from './Section';
import useReducedMotion from '../hooks/useReducedMotion';

function WaxSeal({ broken }: { broken: boolean }) {
  return (
    <motion.div
      animate={broken ? { scale: [1, 1.4, 0], opacity: [1, 1, 0] } : { scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex h-14 w-14 items-center justify-center rounded-full border border-lavender/40 bg-gradient-to-br from-royal to-deep glow-box"
    >
      <span className="font-display text-xl text-soft">♡</span>
    </motion.div>
  );
}

export function SecretEnvelope() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const stars = useMemo(
    () => Array.from({ length: 18 }, (_, i) => ({ id: i, top: Math.random() * 100, left: Math.random() * 100, d: Math.random() * 3 })),
    []
  );

  return (
    <Section id="envelope" eyebrow="sealed with care" title={envelope.title}>
      <div className="mx-auto max-w-md text-center">
        {!open ? (
          <motion.button
            onClick={() => setOpen(true)}
            whileHover={reduced ? undefined : { y: -4 }}
            className="group relative mx-auto block w-full max-w-xs"
          >
            <div className="relative overflow-hidden rounded-2xl border border-lavender/25 bg-gradient-to-br from-ink2 to-deep/50 p-10 shadow-[0_0_60px_rgba(72,32,120,0.5)]">
              <div className="mx-auto mb-6 h-10 w-full rounded bg-lavender/10" />
              <div className="flex justify-center">
                <WaxSeal broken={false} />
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-lavender/80">{envelope.openLabel}</p>
            </div>
          </motion.button>
        ) : (
          <p className="text-silver/70">your letter is open below — scroll to read it. 💜</p>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[85] flex items-center justify-center overflow-y-auto bg-ink/96 p-5"
          >
            {!reduced &&
              stars.map((s) => (
                <motion.span
                  key={s.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 1, 0.3] }}
                  transition={{ duration: 2.5, delay: s.d, repeat: Infinity, repeatType: 'reverse' }}
                  className="pointer-events-none absolute h-1 w-1 rounded-full bg-soft"
                  style={{ top: `${s.top}%`, left: `${s.left}%` }}
                />
              ))}
            <motion.div
              initial={{ y: 40, opacity: 0, rotateX: 8 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-xl rounded-3xl border border-lavender/25 bg-ink2/90 p-8 shadow-[0_0_100px_rgba(124,58,237,0.4)] sm:p-12"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close letter"
                className="absolute right-4 top-4 text-silver hover:text-soft"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="mb-6 flex justify-center">
                <WaxSeal broken />
              </div>
              <div className="space-y-4 text-[1.05rem] leading-[1.9] text-soft/90">
                {envelope.paragraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
                    className={i === envelope.paragraphs.length - 1 ? 'font-hand text-3xl text-lavender' : ''}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
              <button onClick={() => setOpen(false)} className="btn-ghost mx-auto mt-8 flex text-sm">
                close, and keep it close ♡
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

export default SecretEnvelope;
