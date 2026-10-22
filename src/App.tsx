import { useEffect, useState } from 'react';
import { MusicProvider } from './components/MusicContext';
import Starfield from './components/Starfield';
import Cursor from './components/Cursor';
import Intro from './components/Intro';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LoveLetter from './components/LoveLetter';
import FaithCorner from './components/FaithCorner';
import ExamSupport from './components/ExamSupport';
import MusicSection from './components/MusicSection';
import AdventureSection from './components/AdventureSection';
import PhotoGallery from './components/PhotoGallery';
import RoseSurprise from './components/RoseSurprise';
import AdoreSection from './components/AdoreSection';
import SecretEnvelope from './components/SecretEnvelope';
import PickWhatYouNeed from './components/PickWhatYouNeed';
import FinalReveal from './components/FinalReveal';
import FloatingMusic from './components/FloatingMusic';
import Footer from './components/Footer';

function Universe({ onRestart }: { onRestart: () => void }) {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <LoveLetter />
        <FaithCorner />
        <ExamSupport />
        <MusicSection />
        <AdventureSection />
        <PhotoGallery />
        <RoseSurprise />
        <AdoreSection />
        <SecretEnvelope />
        <PickWhatYouNeed />
        <FinalReveal onRestart={onRestart} />
      </main>
      <Footer />
      <FloatingMusic />
    </>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    document.body.style.overflow = showIntro ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showIntro]);

  const start = () => setShowIntro(false);
  const restart = () => {
    setShowIntro(true);
    window.scrollTo({ top: 0 });
  };

  return (
    <MusicProvider>
      <Starfield />
      <Cursor />
      <div className="grain-overlay" aria-hidden />
      {showIntro ? <Intro onOpen={start} /> : <Universe onRestart={restart} />}
    </MusicProvider>
  );
}
