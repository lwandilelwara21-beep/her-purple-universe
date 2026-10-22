import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { pickWhatYouNeed, type NeedOption } from '../data/messages';
import Reveal from './Reveal';
import Section from './Section';

export function PickWhatYouNeed() {
  const [selected, setSelected] = useState<NeedOption | null>(null);

  return (
    <Section id="need" eyebrow="just for right now" title="PICK WHAT YOU NEED TODAY.">
      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {pickWhatYouNeed.map((opt, i) => (
          <Reveal key={opt.id} delay={0.05 * i} y={20}>
            <button
              onClick={() => setSelected(opt)}
              className={`w-full rounded-2xl border p-6 text-left font-display text-xl transition ${
                selected?.id === opt.id
                  ? 'border-lavender/50 bg-royal/25 text-soft glow-box'
                  : 'border-lavender/20 bg-ink2/50 text-soft/90 hover:border-lavender/40 hover:bg-royal/10'
              }`}
            >
              {opt.label}
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-8 max-w-2xl rounded-3xl border border-lavender/20 bg-gradient-to-br from-deep/30 to-ink2/70 p-8 text-center sm:p-10"
          >
            {selected.verse && (
              <div className="mb-6 rounded-2xl border border-lavender/15 bg-ink/40 p-5">
                <p className="font-display text-lg italic leading-relaxed text-lavender">“{selected.verse.text}”</p>
                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-silver/60">{selected.verse.ref}</p>
              </div>
            )}
            {selected.message.map((m, i) => (
              <p key={i} className="mt-3 text-lg leading-relaxed text-soft/90">
                {m}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

export default PickWhatYouNeed;
