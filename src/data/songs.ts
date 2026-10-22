// "songs that remind me of you" — an R&B soundtrack for missing someone,
// caring deeply, and thinking about the future.
//
// COPYRIGHT RULES RESPECTED:
//  - No lyrics are reproduced anywhere. The "mood" lines are ORIGINAL captions
//    written for this site, not lyrics.
//  - Nothing is streamed or redistributed by this site. Each track links to the
//    OFFICIAL Spotify page and uses Spotify's official embed player for
//    playback, which stays fully within the rights-holder's terms.
//  - Spotify track IDs below were verified via Spotify's oEmbed API.
export interface Song {
  id: string;
  title: string;
  artist: 'Drake' | 'Brent Faiyaz';
  album: string;
  spotifyId: string;
  mood: string; // original caption, never a lyric
}

export const songs: Song[] = [
  {
    id: 'passionfruit',
    title: 'Passionfruit',
    artist: 'Drake',
    album: 'More Life',
    spotifyId: '5mCPDVBb16L4XQwDdbRUpz',
    mood: 'for the nights when you wish someone was a little closer.',
  },
  {
    id: 'hold-on',
    title: "Hold On, We're Going Home",
    artist: 'Drake',
    album: 'Nothing Was The Same',
    spotifyId: '2aSC2xhRxOLiiZZVjhbylH',
    mood: 'some songs understand the distance.',
  },
  {
    id: 'jungle',
    title: 'Jungle',
    artist: 'Drake',
    album: 'If You’re Reading This It’s Too Late',
    spotifyId: '0mnABjjVAEmnSsoqzAX9E1',
    mood: 'if missing someone had a soundtrack.',
  },
  {
    id: 'all-mine',
    title: 'ALL MINE',
    artist: 'Brent Faiyaz',
    album: 'Wasteland',
    spotifyId: '3XgGQ1wjo5khvq2UImjyNF',
    mood: 'you have a way of staying on my mind.',
  },
  {
    id: 'clouded',
    title: 'Clouded',
    artist: 'Brent Faiyaz',
    album: 'Fuck The World',
    spotifyId: '2J6OF7CkpdQGSfm1wdclqn',
    mood: 'a little atmospheric, a little like the way you feel.',
  },
  {
    id: 'wyat',
    title: 'WY@',
    artist: 'Brent Faiyaz',
    album: 'Sonder Son',
    spotifyId: '1aa4wUXY3Bkc1uAYSi1W2z',
    mood: 'soft, late-night, and impossible not to feel.',
  },
];

export const spotifyTrackUrl = (id: string) => `https://open.spotify.com/track/${id}`;
export const spotifyEmbedUrl = (id: string) =>
  `https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`;
export const youtubeMusicSearchUrl = (title: string, artist: string) =>
  `https://music.youtube.com/search?q=${encodeURIComponent(`${title} ${artist}`)}`;

export default songs;
