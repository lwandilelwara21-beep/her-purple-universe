import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, RefreshCw } from 'lucide-react';
import { verses, prayer, translation, type Verse } from '../data/verses';
import Reveal from './Reveal';
import Section from './Section';

function VerseCard({ verse }: { verse: Verse }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass overflow-hidden rounded-2xl transition-shadow hover:shadow-[0_0_40px_rgba(124,58,237,0.3)]">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-4 p-6 text-left"
      >
        <div>
          <p className="font-display text-xl leading-snug text-soft sm:text-2xl">{verse.headline}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-lavender/70">{verse.ref}</p>
        </div>
        <BookOpen className="mt-1 h-5 w-5 shrink-0 text-lavender/70" />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-t border-lavender/10 px-6 pb-6 pt-4">
              <p className="font-display text-lg italic leading-relaxed text-lavender">“{verse.text}”</p>
              <p className="leading-relaxed text-soft/85">{verse.reflection}</p>
              <p className="rounded-xl bg-deep/30 p-4 text-sm leading-relaxed text-lavender">
                <span className="mr-2 font-semibold uppercase tracking-wider">For your exams:</span>
                {verse.forHer}
              </p>
              <a
                href={verse.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs text-silver/70 underline decoration-lavender/40 underline-offset-4 hover:text-lavender"
              >
                read {verse.ref} in full ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaithCorner() {
  const dayIndex = useMemo(() => Math.floor(Date.now() / 86400000) % verses.length, []);
  const [active, setActive] = useState(dayIndex);
  const daily = verses[active];

  return (
    <Section id="faith" eyebrow="words for your journey" title="GOD'S GOT YOU, ALWAYS. ✦">
      {/* Daily encouragement card */}
      <Reveal className="mx-auto mb-14 max-w-2xl">
        <div className="glow-box relative overflow-hidden rounded-3xl border border-lavender/20 bg-gradient-to-br from-deep/40 to-ink2/80 p-8 text-center sm:p-10">
          <p className="mb-3 text-[0.65rem] uppercase tracking-[0.4em] text-lavender/70">
            a little encouragement for today
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              key={daily.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-display text-2xl leading-snug text-soft sm:text-3xl">{daily.headline}</p>
              <p className="mt-4 font-hand text-2xl text-lavender">{daily.ref}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={() => setActive((a) => (a + 1) % verses.length)}
            className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-silver/70 transition hover:text-lavender"
          >
            <RefreshCw className="h-4 w-4" /> another reminder
          </button>
        </div>
      </Reveal>

      {/* Verse cards */}
      <div className="grid gap-5 md:grid-cols-2">
        {verses.map((v, i) => (
          <Reveal key={v.id} delay={0.05 * (i % 2)} y={22}>
            <VerseCard verse={v} />
          </Reveal>
        ))}
      </div>

      {/* Prayer */}
      <Reveal delay={0.1} className="mx-auto mt-14 max-w-2xl">
        <div className="rounded-3xl border border-lavender/15 bg-ink2/60 p-8 text-center">
          <p className="mb-4 text-[0.65rem] uppercase tracking-[0.4em] text-lavender/70">a prayer for you</p>
          <p className="font-display text-xl italic leading-relaxed text-soft/90 sm:text-2xl">“{prayer}”</p>
        </div>
      </Reveal>

      <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-relaxed text-silver/50">
        Scripture quoted from the {translation.name} ({translation.abbr}), {translation.license}.{' '}
        <a href={translation.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-lavender/30 underline-offset-2 hover:text-lavender">
          {translation.abbr} ↗
        </a>
      </p>
    </Section>
  );
}

export default FaithCorner;
