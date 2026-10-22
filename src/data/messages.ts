// All the words of her little universe live here so they are easy to edit.
// Nothing here invents memories, promises, or things she has said.

export const intro = {
  lines: ['hey you, beautiful.', 'I made something for you.', 'come a little closer.'],
  openButton: 'OPEN YOUR LITTLE UNIVERSE ✦',
  skip: 'skip intro',
};

export const hero = {
  cta: "THERE'S MORE I WANT YOU TO SEE",
  note: 'take your time. this is yours.',
};

export const loveLetter = {
  title: "something i've wanted to tell you.",
  paragraphs: [
    "I don't even know where to begin, because somehow a whole year of knowing you has turned into so many feelings that I can't always find the right words for.",
    "What I do know is that you're genuinely special to me.",
    "I love the way we've been able to connect, the moments we've shared, and the fact that even with distance between us, you've managed to become someone who means so much to me.",
    "Sometimes I think about how different things might feel if distance wasn't something we had to navigate. But I also know that what makes a connection meaningful isn't just how close two people are physically. It's the way they make each other feel, the care they show, and the way they stay in each other's lives.",
    "And I need you to know something: I don't want to keep pretending that my feelings are smaller than they really are.",
    'I care about you deeply. I admire you. I want to see you win, chase your dreams, experience the world, and become everything you’re working towards.',
    "I don't know exactly what the future holds for us, and I'm not writing this to put pressure on you or ask you to figure everything out right now.",
    'I just wanted to be honest with you for once.',
    'You matter to me. More than I probably show you sometimes.',
    'And regardless of how busy life gets or how far apart we might be, I genuinely want good things for you.',
    "So while you're working through this chapter of your life, I hope this little corner of the internet reminds you that someone is rooting for you, praying for you, and smiling whenever they think about you.",
    'You deserve to be loved properly, to feel safe being yourself, to experience beautiful things, and to have a life that makes you excited to wake up every morning.',
    "And if there's one thing I hope you take from this, it's that you never have to question whether you are worth showing up for.",
    'You are.',
  ],
  signoff: ['With so much love,', 'someone who is really, really glad he met you. ♡'],
  cta: "there's something else...",
};

export const envelope = {
  title: 'for when you need a little extra love.',
  openLabel: 'open it',
  paragraphs: [
    'if you ever have a day when everything feels like too much, please remember that you don’t have to figure your whole life out at once.',
    'You are allowed to rest.',
    'You are allowed to pray.',
    'You are allowed to start again.',
    'You are allowed to have difficult days and still be someone who is going places.',
    'I hope you never forget how much potential you carry.',
    'And I hope that, somewhere in the middle of all your studying, planning, dreaming, and growing, you make time to enjoy being the person you are right now.',
    'You deserve the future you’re working towards.',
    "I'm rooting for you, always. 💜",
  ],
};

export interface NeedOption {
  id: string;
  label: string;
  verse?: { ref: string; text: string };
  message: string[];
}

export const pickWhatYouNeed: NeedOption[] = [
  {
    id: 'peace',
    label: 'I NEED PEACE.',
    verse: {
      ref: 'Philippians 4:6–7 (WEB)',
      text: 'In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your thoughts in Christ Jesus.',
    },
    message: [
      'Take one slow breath in… and let it out.',
      'You do not have to hold everything together right now. You are safe in this moment, and you are deeply loved.',
    ],
  },
  {
    id: 'motivation',
    label: 'I NEED MOTIVATION.',
    message: [
      'You have already done the hard part — you showed up, you studied, you kept going.',
      'One question at a time. You are more ready than you feel. Go and show that paper what you’re made of.',
    ],
  },
  {
    id: 'smile',
    label: 'I NEED A SMILE.',
    message: [
      'Somewhere out there, someone is smiling just because your name crossed their mind.',
      'Consider this your official reminder that you are ridiculously easy to be happy for. 💜',
    ],
  },
  {
    id: 'love',
    label: "I NEED A REMINDER THAT I'M LOVED.",
    message: [
      'You are valued — not for what you achieve, not for how you look on your best day, but simply for who you are.',
      'You are allowed to be loved gently, consistently, and without having to earn it. And you are, truly, so deeply loved.',
    ],
  },
];

export interface AdoreCard {
  id: string;
  title: string;
  message: string;
}

export const adoreCards: AdoreCard[] = [
  { id: 'smile', title: 'Your smile', message: 'Your smile could fix a whole bad day. I hope you never stop using it.' },
  { id: 'spirit', title: 'Your adventurous spirit', message: 'You were made for more than ordinary. Go and collect the world.' },
  {
    id: 'moments',
    title: 'The way you make ordinary moments feel different',
    message: 'You turn normal days into memories without even trying.',
  },
  { id: 'dreams', title: 'Your dreams', message: 'Your dreams are not too big. They were built for someone as capable as you.' },
  { id: 'strength', title: 'Your strength', message: 'you can be strong and still need rest.' },
  { id: 'faith', title: 'Your faith', message: 'Your faith is a quiet kind of beautiful, and it moves me more than you know.' },
  { id: 'potential', title: 'Your potential', message: 'you don’t have to achieve anything today to deserve kindness.' },
  {
    id: 'becoming',
    title: 'The person you are becoming',
    message: 'you are allowed to become a new version of yourself. there is so much life left for you to experience.',
  },
];

export const finalReveal = {
  preLine: 'IF YOU TAKE ANYTHING FROM THIS LITTLE UNIVERSE…',
  reveal: 'LET IT BE THIS.',
  body: [
    'You are worth believing in.',
    'You are worth praying for.',
    'You are worth showing up for.',
    'You are worth loving with honesty and care.',
    'I hope you pass through these exams with courage.',
    'I hope you grow into the life you’ve been dreaming about.',
    'I hope you experience a world bigger and more beautiful than you can imagine.',
    'And I hope you know that meeting you has meant something real to me.',
    'Whatever happens next, I’m genuinely grateful that you’re part of my story.',
    'You deserve beautiful things, beautiful moments, and a love that never makes you question your worth.',
    'Keep going, beautiful.',
    'Your story is only beginning. ♡',
  ],
  restart: 'START OUR LITTLE UNIVERSE AGAIN ✦',
};

export const roses = {
  title: 'EIGHTY LITTLE REMINDERS.',
  intro: 'I wanted to send you something that could say a little more than a message ever could.',
  open: 'OPEN YOUR SURPRISE',
  main: '80 PURPLE ROSES. JUST FOR YOU.',
  sub: "because you deserve to be reminded that you're special, even on the days when life gets busy and you forget it yourself.",
};

export default {
  intro,
  hero,
  loveLetter,
  envelope,
  pickWhatYouNeed,
  adoreCards,
  finalReveal,
  roses,
};
