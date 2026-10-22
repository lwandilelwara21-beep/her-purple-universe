import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { loveLetter } from '../data/messages';
import Reveal from './Reveal';
import Section from './Section';
import useReducedMotion from '../hooks/useReducedMotion';

export function LoveLetter() {
  const reduced = useReducedMotion();
  const next = () =>
    document.getElementById('faith')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });

  return (
    <Section id="letter" eyebrow="a private letter" title={loveLetter.title}>
      <Reveal className="mx-auto max-w-2xl">
        <div className="relative rounded-3xl border border-lavender/15 bg-ink2/70 p-7 shadow-[0_0_80px_rgba(72,32,120,0.35)] sm:p-12">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(600px_200px_at_20%_0%,rgba(196,165,255,0.08),transparent)]" />
          <div className="pointer-events-none absolute -top-5 left-1/2 -translate-x-1/2">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-lavender/30 bg-deep/80 glow-box">
              <Heart className="h-5 w-5 text-lavender" fill="currentColor" />
            </div>
          </div>

          <div className="relative mt-2 space-y-6 text-[1.05rem] leading-[1.9] text-soft/90 sm:text-lg">
            {loveLetter.paragraphs.map((para, i) => (
              <Reveal key={i} delay={0.04 * (i % 4)} y={18}>
                <p className={i === loveLetter.paragraphs.length - 1 ? 'font-hand text-3xl text-lavender' : ''}>
                  {para}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.1} className="pt-4">
              <div className="font-hand text-2xl leading-relaxed text-lavender sm:text-3xl">
                {loveLetter.signoff.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex justify-center"
          >
            <button onClick={next} className="btn-ghost text-sm">
              {loveLetter.cta}
            </button>
          </motion.div>
        </div>
      </Reveal>
    </Section>
  );
}

export default LoveLetter;
