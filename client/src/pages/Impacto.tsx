import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImpactSection from '@/components/ImpactSection';
import RoadmapSection from '@/components/RoadmapSection';
import { motion } from 'framer-motion';

export default function Impacto() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />
      <main className="pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ImpactSection />
          <RoadmapSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
