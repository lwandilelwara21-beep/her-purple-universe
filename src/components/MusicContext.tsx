import { createContext, useContext, useState, type ReactNode } from 'react';
import songs from '../data/songs';

interface MusicState {
  index: number;
  playing: boolean;
  expanded: boolean;
  setIndex: (i: number) => void;
  toggle: () => void;
  next: () => void;
  prev: () => void;
  setExpanded: (v: boolean) => void;
}

const MusicCtx = createContext<MusicState | null>(null);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [index, setIndexState] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const setIndex = (i: number) => {
    const n = ((i % songs.length) + songs.length) % songs.length;
    setIndexState(n);
    setPlaying(true);
  };
  const toggle = () => setPlaying((p) => !p);
  const next = () => setIndex(index + 1);
  const prev = () => setIndex(index - 1);

  return (
    <MusicCtx.Provider value={{ index, playing, expanded, setIndex, toggle, next, prev, setExpanded }}>
      {children}
    </MusicCtx.Provider>
  );
}

export function useMusic(): MusicState {
  const ctx = useContext(MusicCtx);
  if (!ctx) throw new Error('useMusic must be used within a MusicProvider');
  return ctx;
}

export default MusicCtx;
