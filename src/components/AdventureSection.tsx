import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Compass, MapPin, Sparkles } from 'lucide-react';
import { destinations, adventureMessage, type Destination } from '../data/destinations';
import Reveal from './Reveal';
import Section from './Section';
import SmartImage from './SmartImage';

function DestinationCard({ d, index }: { d: Destination; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal as="li" delay={0.05 * (index % 3)} y={24}>
      <div className="group glass flex h-full flex-col overflow-hidden rounded-3xl">
        <div className="relative aspect-[4/3] overflow-hidden">
          <SmartImage
            src={d.image}
            alt={d.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent" />
          <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-ink/60 px-3 py-1 text-[0.6rem] uppercase tracking-widest text-lavender backdrop-blur">
            <MapPin className="h-3 w-3" />
            {d.place}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-2xl leading-snug text-soft">{d.name}</h3>
          <p className="mt-2 text-silver">{d.description}</p>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="mt-4 inline-flex items-center gap-2 self-start text-xs uppercase tracking-[0.25em] text-lavender transition hover:text-soft"
          >
            <Sparkles className="h-4 w-4" />
            {open ? 'show less' : 'the adventure'}
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
                <div className="mt-4 space-y-3 border-t border-lavender/10 pt-4">
                  <p className="text-soft/90">
                    <span className="mr-1 text-lavender">Try:</span>
                    {d.activity}
                  </p>
                  <p className="font-hand text-2xl leading-snug text-lavender">{d.message}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Reveal>
  );
}

export function AdventureSection() {
  return (
    <Section
      id="adventure"
      eyebrow="the world is waiting"
      title="THERE'S A WHOLE WORLD WAITING FOR YOU."
      lead="You were made to explore. Here are a few places I hope find their way to you."
    >
      <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((d, i) => (
          <DestinationCard key={d.id} d={d} index={i} />
        ))}
      </ul>
      <Reveal delay={0.1} className="mx-auto mt-16 max-w-2xl text-center">
        <Compass className="mx-auto mb-5 h-7 w-7 text-lavender/70" />
        {adventureMessage.split('\n\n').map((p, i) => (
          <p key={i} className="font-display text-xl italic leading-relaxed text-soft/90 sm:text-2xl">
            {p}
          </p>
        ))}
      </Reveal>
    </Section>
  );
}

export default AdventureSection;
