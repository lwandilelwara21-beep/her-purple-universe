// Scripture for the Faith Corner.
// Translation: World English Bible (WEB) — modern English and PUBLIC DOMAIN,
// so these passages may be quoted in full. Every quotation below was verified
// against Bible Gateway (version=WEB) before publishing.

export const translation = {
  name: 'World English Bible',
  abbr: 'WEB',
  license: 'public domain',
  sourceUrl: 'https://worldenglish.bible/',
  gatewayUrl: 'https://www.biblegateway.com/versions/world-english-bible-web/',
};

export interface Verse {
  id: string;
  ref: string;
  headline: string;
  text: string;
  reflection: string;
  forHer: string;
  link: string;
}

export const verses: Verse[] = [
  {
    id: 'phil-4-6-7',
    ref: 'Philippians 4:6–7',
    headline: 'Your peace is not dependent on a perfect exam.',
    text: 'In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your thoughts in Christ Jesus.',
    reflection:
      'You do not have to carry every worry by yourself. Take a breath, pray, prepare as best you can, and remember that your worth is not measured by a mark on a page.',
    forHer:
      'Before you open your paper, take one quiet breath and hand the worry to God — then write with a calm, clear mind. You have done the work.',
    link: 'https://www.biblegateway.com/passage/?search=Philippians+4%3A6-7&version=WEB',
  },
  {
    id: 'isaiah-41-10',
    ref: 'Isaiah 41:10',
    headline: "You don't have to be afraid.",
    text: "Don't you be afraid, for I am with you. Don't be dismayed, for I am your God. I will strengthen you. Yes, I will help you. Yes, I will uphold you with the right hand of my righteousness.",
    reflection:
      'On the days the pressure feels heavy, this is the reminder: you are not doing this alone. The same God who calms storms is holding your hand through every single paper.',
    forHer:
      'If fear shows up before an exam, answer it with this verse. You are strengthened, helped, and upheld — walk in and write with courage.',
    link: 'https://www.biblegateway.com/passage/?search=Isaiah+41%3A10&version=WEB',
  },
  {
    id: 'prov-3-5-6',
    ref: 'Proverbs 3:5–6',
    headline: 'Trust Him with the whole road.',
    text: 'Trust in Yahweh with all your heart, and don’t lean on your own understanding. In all your ways acknowledge him, and he will make your paths straight.',
    reflection:
      'You don’t have to see the whole path to take the next step. Trust opens the way, even when the future feels blurry and unsure.',
    forHer:
      'You don’t need your whole life figured out today. Acknowledge Him in this season of studying, and trust that He is guiding every step you take.',
    link: 'https://www.biblegateway.com/passage/?search=Proverbs+3%3A5-6&version=WEB',
  },
  {
    id: 'jer-29-11',
    ref: 'Jeremiah 29:11',
    headline: 'He has good plans for you.',
    text: '"For I know the thoughts that I think toward you," says Yahweh, "thoughts of peace, and not of evil, to give you hope and a future."',
    reflection:
      'This exam is a chapter, not the whole story. God’s plans for you are full of hope — and your future is still being written, beautifully.',
    forHer:
      'Whatever mark you get, it cannot limit what God has planned for you. Your future is safe in His hands.',
    link: 'https://www.biblegateway.com/passage/?search=Jeremiah+29%3A11&version=WEB',
  },
  {
    id: 'ps-121-1-2',
    ref: 'Psalm 121:1–2',
    headline: 'Your help comes from the Lord.',
    text: 'I will lift up my eyes to the hills. Where does my help come from? My help comes from Yahweh, who made heaven and earth.',
    reflection:
      'When you feel small against everything you’re carrying, look up. The Maker of heaven and earth is the One who helps you.',
    forHer:
      'When a question stumps you, pause and look up for a second. Your help comes from the Lord — and He has never once failed you.',
    link: 'https://www.biblegateway.com/passage/?search=Psalm+121%3A1-2&version=WEB',
  },
  {
    id: 'josh-1-9',
    ref: 'Joshua 1:9',
    headline: 'Be strong and courageous.',
    text: "Haven't I commanded you? Be strong and courageous. Don't be afraid. Don't be dismayed, for Yahweh your God is with you wherever you go.",
    reflection:
      'Courage isn’t the absence of nerves — it’s choosing to keep going because God is with you. And He goes with you everywhere, including into that exam room.',
    forHer:
      'Walk into every exam strong and courageous. You are never alone in that room — He is right there with you.',
    link: 'https://www.biblegateway.com/passage/?search=Joshua+1%3A9&version=WEB',
  },
  {
    id: 'ps-46-5',
    ref: 'Psalm 46:5',
    headline: 'God is within her.',
    text: 'God is within her. She shall not be moved. God will help her at dawn.',
    reflection:
      'There is a strength inside you that comes from God Himself — steady, unshakable, and quietly renewed every single morning.',
    forHer:
      'Even after a hard paper, help comes at dawn. Rest, reset, and trust the strength God has already placed inside you.',
    link: 'https://www.biblegateway.com/passage/?search=Psalm+46%3A5&version=WEB',
  },
];

export const prayer =
  'Lord, please guide her through these exams. Give her wisdom when she studies, clarity when she writes, peace when she feels overwhelmed, and strength when she is tired. Help her remember how far she has come and give her courage for everything ahead. Protect her, bless her efforts, and lead her into the future You have prepared for her. Amen.';

export default verses;
