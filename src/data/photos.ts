import { asset } from '../lib/asset';

// HER real photos (already processed: EXIF stripped, watermark corners trimmed,
// optimised for web). Add or remove entries freely — the gallery adapts.
export interface Photo {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export const heroPhoto = {
  src: asset('assets/her/hero.jpg'),
  alt: 'a portrait of her',
  caption: 'the world looks a little different through your eyes.',
};

export const photos: Photo[] = [
  {
    id: 'g1',
    src: asset('assets/her/gallery-1.jpg'),
    alt: 'a photo of her',
    caption: 'pretty in every universe.',
  },
  {
    id: 'g2',
    src: asset('assets/her/gallery-2.jpg'),
    alt: 'a close-up photo of her',
    caption: "there's something about you.",
  },
  {
    id: 'g3',
    src: asset('assets/her/gallery-3.jpg'),
    alt: 'a black-and-white photo of her',
    caption: 'you, being you.',
  },
  {
    id: 'g4',
    src: asset('assets/her/gallery-4.jpg'),
    alt: 'a black-and-white photo of her',
    caption: 'a moment worth keeping.',
  },
  {
    id: 'g5',
    src: asset('assets/her/gallery-5.jpg'),
    alt: 'a black-and-white photo of her',
    caption: 'my favourite kind of distraction.',
  },
];

export default photos;
