import { useState } from 'react';
import { Heart } from 'lucide-react';
import { adoreCards, type AdoreCard as AdoreCardType } from '../data/messages';
import Reveal from './Reveal';
import Section from './Section';

function AdoreCard({ card, index }: { card: AdoreCardType; index: number }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <Reveal delay={0.05 * (index % 4)} y={22}>
      <button
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        className="block h-48 w-full text-left [perspective:1400px]"
      >
        <div
          className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
            flipped ? '[transform:rotateY(180deg)]' : ''
          }`}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl border border-lavender/20 bg-gradient-to-br from-deep/40 to-ink2 p-5 text-center [backface-visibility:hidden]">
            <Heart className="h-6 w-6 text-lavender/80" fill="currentColor" />
            <p className="font-display text-xl leading-snug text-soft">{card.title}</p>
            <span className="text-[0.6rem] uppercase tracking-widest text-silver/50">tap to read</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-lavender/30 bg-royal/25 p-5 text-center [backface-visibility:hidden] [transform:rotateY(180deg)] glow-box">
            <p className="font-hand text-2xl leading-snug text-soft">{card.message}</p>
          </div>
        </div>
      </button>
    </Reveal>
  );
}

export function AdoreSection() {
  return (
    <Section
      id="adore"
      eyebrow="the little things"
      title="THINGS I HOPE YOU NEVER FORGET."
      lead="A few reminders, whenever you need them. Tap any card."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {adoreCards.map((c, i) => (
          <AdoreCard key={c.id} card={c} index={i} />
        ))}
      </div>
    </Section>
  );
}

export default AdoreSection;
