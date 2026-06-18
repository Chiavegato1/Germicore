import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionSection from '@/components/SolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import { motion } from 'framer-motion';

export default function Solucao() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />
      <main className="pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SolutionSection />
          <HowItWorksSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
