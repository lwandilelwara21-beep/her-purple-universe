// Processes HER real photos for the web: strips all EXIF/metadata (privacy),
// lightly trims obvious watermark corners, resizes + optimises.
// It does NOT alter her appearance and never generates faces.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const SRC = ROOT;
const OUT = path.join(ROOT, 'public', 'assets', 'her');

// source file in project root -> output name + crop fractions (right/bottom)
const jobs = [
  { src: '046e5ef1-4745-443e-b9bb-59f282690467.JPEG', out: 'hero.jpg', width: 1000, right: 0.05, bottom: 0.14 },
  { src: 'c4be66ad-e0cc-480e-b853-d049c0869ed3.JPEG', out: 'gallery-1.jpg', width: 900, right: 0.15, bottom: 0.05 },
  { src: 'f6e9671b-776b-482e-9b1c-ee7a99545882.JPEG', out: 'gallery-2.jpg', width: 900, right: 0, bottom: 0 },
  { src: '3376cabc-0940-42cf-a86b-99108b657ffa.JPEG', out: 'gallery-3.jpg', width: 900, right: 0, bottom: 0 },
  { src: 'ce2db96a-5bff-4318-8452-dcaf14d97208.JPEG', out: 'gallery-4.jpg', width: 900, right: 0.15, bottom: 0.04 },
  { src: '4a8da113-6c51-42e3-8549-d38225064377.JPEG', out: 'gallery-5.jpg', width: 900, right: 0.07, bottom: 0.14 },
];

await mkdir(OUT, { recursive: true });
for (const j of jobs) {
  const src = path.join(SRC, j.src);
  try {
    const meta = await sharp(src).rotate().metadata();
    const w = meta.width || 0;
    const h = meta.height || 0;
    const cw = Math.max(1, Math.round(w * (1 - j.right)));
    const ch = Math.max(1, Math.round(h * (1 - j.bottom)));
    const dest = path.join(OUT, j.out);
    await sharp(src)
      .rotate()
      .extract({ left: 0, top: 0, width: cw, height: ch })
      .resize({ width: j.width, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(dest);
    const o = await sharp(dest).metadata();
    console.log('OK ', j.out, `${w}x${h} -> ${o.width}x${o.height}`);
  } catch (e) {
    console.log('ERR', j.src, e.message);
  }
}
console.log('done');
