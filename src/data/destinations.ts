import { asset } from '../lib/asset';

// Aspirational destinations she deserves to experience — NOT memories, and no
// claim that she has visited any of them. Scenery images are freely licensed
// (see public/assets/IMAGE_CREDITS.json).
export interface Destination {
  id: string;
  name: string;
  place: string;
  image: string;
  description: string;
  activity: string;
  message: string;
}

export const destinations: Destination[] = [
  {
    id: 'mountains',
    name: 'Where the mountains touch the sky',
    place: 'the high places',
    image: asset('assets/destinations/mountains.jpg'),
    description: 'Thin air, big silence, and a horizon that goes on forever.',
    activity: 'Climb to a ridge and watch the sun come up over the whole world.',
    message: 'You deserve to stand somewhere so vast it reminds you how big your life is going to be.',
  },
  {
    id: 'ocean',
    name: 'A coastline at golden hour',
    place: 'the sea at sunset',
    image: asset('assets/destinations/ocean-sunset.jpg'),
    description: 'Gold spilling across the water as the day says goodnight.',
    activity: 'Swim until the water has no floor and the horizon runs endless.',
    message: 'You deserve oceans that make you feel small in the best way, and sunsets painted just for you.',
  },
  {
    id: 'night-road',
    name: 'A long night drive',
    place: 'the open road at night',
    image: asset('assets/destinations/night-road.jpg'),
    description: 'Headlights, empty roads, and the whole country to yourselves.',
    activity: 'Take the long way home with the music loud and the windows down.',
    message: 'You deserve nights with nowhere to be and a favourite song playing on repeat.',
  },
  {
    id: 'city',
    name: 'A city that never sleeps',
    place: 'a skyline of lights',
    image: asset('assets/destinations/city-lights.jpg'),
    description: 'A thousand windows lit up like a galaxy you can walk through.',
    activity: 'Wander streets that hum late and find the view from the very top.',
    message: 'You deserve cities full of possibility and nights that turn into stories for years.',
  },
  {
    id: 'stars',
    name: 'Under a sky packed with stars',
    place: 'somewhere past the city lights',
    image: asset('assets/destinations/starry-sky.jpg'),
    description: 'No light pollution — just you and a ceiling of constellations.',
    activity: 'Drive out past the lights and lie back until you find the constellations.',
    message: 'You deserve to look up at so much wonder and remember how much is still waiting for you.',
  },
];

export const adventureMessage =
  "I hope you get to see places that take your breath away, try things that scare you in the best way, meet people who change your perspective, and collect memories that make you smile years from now.\n\nI hope your life is full of stories you cannot wait to tell.";

export default destinations;
