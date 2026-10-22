import { motion } from 'framer-motion';
import { finalReveal } from '../data/messages';
import { site } from '../data/site';
import Section from './Section';

interface FinalRevealProps {
  onRestart: () => void;
}

export function FinalReveal({ onRestart }: FinalRevealProps) {
  const handwrittenFrom = finalReveal.body.length - 2;
  return (
    <Section id="finale">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs uppercase tracking-[0.3em] text-lavender/70 sm:text-sm"
      >
        {finalReveal.preLine}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="glow-text mt-4 font-display text-5xl leading-none text-soft sm:text-7xl"
      >
        {finalReveal.reveal}
      </motion.h2>

      <div className="mx-auto mt-12 max-w-2xl space-y-5">
        {finalReveal.body.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className={
              i >= handwrittenFrom
                ? 'font-hand text-3xl leading-snug text-lavender'
                : 'font-display text-2xl leading-snug text-soft/90 sm:text-3xl'
            }
          >
            {line}
          </motion.p>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 flex flex-col items-center gap-3"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-silver/50">{site.madeWith}</p>
        <p className="text-sm text-silver/70">{site.signature}</p>
        <p className="text-xs text-silver/40">{site.dateNote}</p>
        <button onClick={onRestart} className="btn-primary animate-pulseGlow mt-5 text-sm">
          {finalReveal.restart}
        </button>
      </motion.div>
    </Section>
  );
}

export default FinalReveal;
