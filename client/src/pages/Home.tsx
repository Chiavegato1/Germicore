import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ImpactSocialSection from '@/components/ImpactSocialSection';
import CaseOliveiraSection from '@/components/CaseOliveiraSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <LoadingScreen isLoading={isLoading} />

      {!isLoading && (
        <>
          <Navbar />
          <main>
            <HeroSection />
            <ImpactSocialSection />
            <CaseOliveiraSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
