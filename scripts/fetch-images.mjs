// Downloads legally-reusable (Creative Commons / public domain) images from
// Wikimedia Commons into public/assets and records attribution.
// Run with: node scripts/fetch-images.mjs
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const UA = 'HerPurpleUniverse/1.0 (personal keepsake site; contact: local)';
const ROOT = path.resolve(process.cwd(), 'public', 'assets');

const items = [
  { key: 'roses', file: 'roses/bouquet.jpg', query: 'purple rose bouquet flowers', w: 1600 },
  { key: 'mountains', file: 'destinations/mountains.jpg', query: 'mountain range sunset landscape', w: 1600 },
  { key: 'ocean', file: 'destinations/ocean-sunset.jpg', query: 'ocean sunset sea horizon', w: 1600 },
  { key: 'night-road', file: 'destinations/night-road.jpg', query: 'road at night long exposure', w: 1600 },
  { key: 'city', file: 'destinations/city-lights.jpg', query: 'city skyline night lights', w: 1600 },
  { key: 'stars', file: 'destinations/starry-sky.jpg', query: 'milky way night sky stars', w: 1600 },
];

const strip = (html = '') =>
  html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
const clean = (u) => (u ? u.split('?')[0] : u);

async function searchCommons(query, width, limit = 12) {
  const url =
    'https://commons.wikimedia.org/w/api.php?action=query&format=json' +
    '&generator=search&gsrsearch=' + encodeURIComponent(query) +
    '&gsrnamespace=6&gsrlimit=' + limit +
    '&prop=imageinfo&iiprop=url|size|extmetadata&iiurlwidth=' + width;
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error('Commons API ' + res.status);
  const data = await res.json();
  const pages = data?.query?.pages || {};
  return Object.values(pages)
    .map((p) => ({ title: p.title, info: p.imageinfo?.[0] }))
    .filter((p) => p.info && /\.(jpe?g)$/i.test(clean(p.info.url)))
    .filter((p) => (p.info.width || 0) >= 900)
    .sort((a, b) => (b.info.width || 0) - (a.info.width || 0));
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error('download ' + res.status);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 15000) throw new Error('too small (' + buf.length + ')');
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, buf);
  return buf.length;
}

const credits = [];
for (const it of items) {
  const dest = path.join(ROOT, it.file);
  try {
    const results = await searchCommons(it.query, it.w);
    let done = false;
    for (const r of results.slice(0, 6)) {
      const src = clean(r.info.thumburl || r.info.url);
      try {
        const bytes = await download(src, dest);
        const md = r.info.extmetadata || {};
        credits.push({
          key: it.key,
          file: 'assets/' + it.file,
          title: strip(md.ObjectName?.value) || r.title,
          artist: strip(md.Artist?.value) || 'Unknown',
          license: strip(md.LicenseShortName?.value) || 'see source',
          source: r.info.descriptionurl || '',
          bytes,
        });
        console.log('OK  ', it.key, '->', it.file, bytes, 'bytes', '(' + credits[credits.length - 1].license + ')');
        done = true;
        break;
      } catch (e) {
        // try next candidate
      }
    }
    if (!done) console.log('FAIL', it.key, '(no usable image)');
  } catch (e) {
    console.log('ERR ', it.key, e.message);
  }
}

await mkdir(ROOT, { recursive: true });
await writeFile(
  path.join(ROOT, 'IMAGE_CREDITS.json'),
  JSON.stringify(credits, null, 2)
);
console.log('\nCredits written for', credits.length, 'images.');
