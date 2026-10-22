import { Music } from 'lucide-react';
import { songs } from '../data/songs';
import { useMusic } from './MusicContext';

export function FloatingMusic() {
  const { index, playing, setExpanded } = useMusic();
  const track = songs[index];

  const open = () => {
    setExpanded(true);
    document.getElementById('music')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={open}
      aria-label={`Open the soundtrack — now showing ${track.title} by ${track.artist}`}
      className="glass fixed bottom-5 right-5 z-[75] flex items-center gap-3 rounded-full px-4 py-2.5 shadow-[0_8px_40px_rgba(72,32,120,0.5)] transition hover:border-lavender/40"
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-royal/50">
        <Music className="h-4 w-4 text-soft" />
        {playing && <span className="absolute -right-0.5 -top-0.5 h-2 w-2 animate-pulse rounded-full bg-lavender" />}
      </span>
      <span className="max-w-[8.5rem] truncate text-sm text-soft">{track.title}</span>
      {playing && (
        <span className="flex items-end gap-0.5" aria-hidden style={{ height: 16 }}>
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-0.5 animate-eq rounded-sm bg-lavender" style={{ height: '100%', animationDelay: `${i * 0.15}s` }} />
          ))}
        </span>
      )}
    </button>
  );
}

export default FloatingMusic;
