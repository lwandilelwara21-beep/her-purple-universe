import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { id: 'letter', label: 'letter' },
  { id: 'faith', label: 'faith' },
  { id: 'exams', label: 'exams' },
  { id: 'music', label: 'music' },
  { id: 'adventure', label: 'adventure' },
  { id: 'gallery', label: 'gallery' },
  { id: 'roses', label: 'roses' },
  { id: 'adore', label: 'adore' },
  { id: 'need', label: 'today' },
  { id: 'finale', label: 'finale' },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-colors ${
        scrolled ? 'border-b border-lavender/10 bg-ink/80 backdrop-blur-md' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <button onClick={() => go('home')} className="font-display text-lg tracking-wide text-soft">
          her <span className="text-lavender">universe</span> ✦
        </button>
        <nav className="hidden items-center gap-5 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="text-[0.7rem] uppercase tracking-[0.2em] text-silver transition hover:text-lavender"
            >
              {l.label}
            </button>
          ))}
        </nav>
        <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="text-lavender md:hidden">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden bg-ink/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-4">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="rounded-lg px-3 py-2 text-left text-xs uppercase tracking-widest text-silver hover:bg-royal/15 hover:text-lavender"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navigation;
