import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { photos } from '../data/photos';
import Reveal from './Reveal';
import Section from './Section';
import SmartImage from './SmartImage';

export function PhotoGallery() {
  const [index, setIndex] = useState<number | null>(null);
  const [touchX, setTouchX] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(() => setIndex((i) => (i === null ? i : (i + 1) % photos.length)), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    []
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, close, next, prev]);

  return (
    <Section id="gallery" eyebrow="her little archive" title="MY FAVOURITE LITTLE CORNER OF THE WORLD.">
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
        {photos.map((p, i) => (
          <Reveal key={p.id} delay={0.05 * (i % 3)} y={24}>
            <button
              onClick={() => setIndex(i)}
              className="group block w-full overflow-hidden rounded-2xl border border-lavender/15 bg-ink2/60 p-2 text-left transition hover:border-lavender/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.3)]"
              style={{ transform: `rotate(${i % 2 ? 1.1 : -1.1}deg)` }}
            >
              <div className="aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-br from-deep/30 to-ink2">
                <SmartImage
                  src={p.src}
                  alt={p.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-2 px-1 pb-1 font-hand text-lg text-lavender">{p.caption}</p>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX === null) return;
              const dx = e.changedTouches[0].clientX - touchX;
              if (dx > 50) prev();
              else if (dx < -50) next();
              setTouchX(null);
            }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/96 p-4"
          >
            <button onClick={close} aria-label="Close" className="absolute right-5 top-5 z-10 text-silver hover:text-soft">
              <X className="h-7 w-7" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous" className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-silver hover:text-soft">
              <ChevronLeft className="h-9 w-9" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next" className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-silver hover:text-soft">
              <ChevronRight className="h-9 w-9" />
            </button>
            <motion.figure
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-[85svh] w-full max-w-[90vw] flex-col items-center"
            >
              <img
                src={photos[index].src}
                alt={photos[index].alt}
                className="max-h-[74svh] w-auto max-w-[90vw] rounded-2xl object-contain shadow-[0_0_80px_rgba(124,58,237,0.4)]"
              />
              <figcaption className="mt-4 text-center font-hand text-2xl text-lavender">
                {photos[index].caption}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

export default PhotoGallery;
