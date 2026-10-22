import { useEffect, useState } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';

// A gentle violet glow that trails the cursor — desktop only, never on touch
// devices or when reduced motion is preferred.
export function Cursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia && window.matchMedia('(pointer: fine)').matches) setEnabled(true);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[65] hidden md:block"
      style={{ left: pos.x, top: pos.y, transform: 'translate(-50%, -50%)' }}
    >
      <div className="h-10 w-10 rounded-full bg-royal/25 blur-xl" />
    </div>
  );
}

export default Cursor;
