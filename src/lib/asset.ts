// Build an asset URL that works whether the site is served from a domain root
// (Vercel/Netlify) or a project sub-path (GitHub Pages), thanks to base:'./'.
export const asset = (p: string): string =>
  `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`;
