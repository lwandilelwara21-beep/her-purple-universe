import { Play } from 'lucide-react';
import { songs, spotifyEmbedUrl, spotifyTrackUrl, youtubeMusicSearchUrl } from '../data/songs';
import { useMusic } from './MusicContext';
import Reveal from './Reveal';
import Section from './Section';

const art = (i: number) => ({
  backgroundImage: `linear-gradient(${130 + i * 24}deg, #7C3AED 0%, #482078 55%, #110B1C 100%)`,
});

function Equalizer({ active, small }: { active: boolean; small?: boolean }) {
  const h = small ? 'h-4' : 'h-6';
  return (
    <span className={`flex items-end gap-0.5 ${h}`} aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={`w-1 origin-bottom rounded-sm bg-lavender ${active ? 'animate-eq' : ''}`}
          style={{ height: '100%', animationDelay: `${i * 0.14}s`, opacity: active ? 1 : 0.25 }}
        />
      ))}
    </span>
  );
}

export function MusicSection() {
  const { index, setIndex, next, prev, playing } = useMusic();
  const track = songs[index];

  return (
    <Section id="music" eyebrow="the soundtrack" title="IF THIS WAS A SOUNDTRACK, YOU'D BE EVERY SONG.">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <div className="glass rounded-3xl p-6 sm:p-8">
            <div
              className="glow-box mx-auto mb-6 flex aspect-square w-full max-w-xs items-center justify-center overflow-hidden rounded-2xl p-6 text-center"
              style={art(index)}
            >
              <div>
                <p className="font-display text-3xl leading-tight text-soft drop-shadow-lg sm:text-4xl">{track.title}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-lavender/90">{track.artist}</p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="truncate font-display text-2xl text-soft">{track.title}</p>
                <p className="truncate text-silver">
                  {track.artist} · {track.album}
                </p>
              </div>
              <Equalizer active={playing} />
            </div>
            <p className="mt-3 font-hand text-2xl text-lavender">{track.mood}</p>

            <div className="mt-5 flex items-center gap-3">
              <button onClick={prev} aria-label="Previous track" className="btn-ghost px-4 py-2">
                ◀
              </button>
              <button onClick={() => setIndex(index)} className="btn-primary px-6 py-2 text-sm">
                <Play className="h-4 w-4" /> Play
              </button>
              <button onClick={next} aria-label="Next track" className="btn-ghost px-4 py-2">
                ▶
              </button>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-lavender/10">
              <iframe
                key={track.id}
                title={`Spotify player — ${track.title}`}
                src={spotifyEmbedUrl(track.spotifyId)}
                width="100%"
                height="152"
                style={{ border: 0 }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <a href={spotifyTrackUrl(track.spotifyId)} target="_blank" rel="noopener noreferrer" className="btn-ghost px-4 py-2 text-xs">
                Open on Spotify ↗
              </a>
              <a href={youtubeMusicSearchUrl(track.title, track.artist)} target="_blank" rel="noopener noreferrer" className="btn-ghost px-4 py-2 text-xs">
                YouTube Music ↗
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass rounded-3xl p-4 sm:p-6">
            <p className="mb-4 px-2 text-[0.65rem] uppercase tracking-[0.3em] text-lavender/70">
              songs that remind me of you
            </p>
            <ul className="space-y-2">
              {songs.map((s, i) => (
                <li key={s.id}>
                  <button
                    onClick={() => setIndex(i)}
                    className={`flex w-full items-center gap-4 rounded-2xl p-3 text-left transition ${
                      i === index ? 'bg-royal/25' : 'hover:bg-royal/10'
                    }`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg" style={art(i)}>
                      <span className="font-display text-lg text-soft">{s.title.charAt(0)}</span>
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-medium text-soft">{s.title}</span>
                      <span className="block truncate text-sm text-silver">
                        {s.artist} · {s.album}
                      </span>
                    </span>
                    {i === index && playing ? <Equalizer active small /> : <Play className="h-4 w-4 text-lavender/60" />}
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-4 px-2 text-xs leading-relaxed text-silver/50">
              Playback uses Spotify's official player, and the little notes beside each song are my own words — no
              lyrics are reproduced here.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export default MusicSection;
