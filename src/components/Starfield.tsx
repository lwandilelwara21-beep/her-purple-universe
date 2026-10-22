import { useMemo } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';

// A soft, fixed night-sky backdrop. Static when reduced motion is preferred.
export function Starfield() {
  const reduced = useReducedMotion();
  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5,
        dur: 3 + Math.random() * 5,
      })),
    []
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_-10%,rgba(124,58,237,0.28),transparent),radial-gradient(900px_500px_at_80%_100%,rgba(72,32,120,0.25),transparent)]" />
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-soft"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            opacity: reduced ? 0.5 : undefined,
            animation: reduced ? undefined : `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default Starfield;
