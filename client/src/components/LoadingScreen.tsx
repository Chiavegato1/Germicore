/**
 * LoadingScreen — Germicore Design System (Pixel Art Edition)
 */
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf } from 'lucide-react';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617]"
        >
          <div className="absolute inset-0 dot-grid-bg opacity-10" />
          <div className="scanline" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            <motion.div
              animate={{ rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 bg-[#22C55E] flex items-center justify-center border-4 border-[#166534] shadow-[0_0_20px_#22C55E]"
            >
              <Leaf className="w-12 h-12 text-[#020617]" strokeWidth={3} />
            </motion.div>

            <div className="text-center">
              <h1 className="font-display text-4xl text-white tracking-tighter">
                GERMI<span className="text-[#22C55E]">CORE</span>
              </h1>
              <div className="mt-4 w-64 h-6 bg-black border-2 border-[#22C55E] relative overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, ease: "linear" }}
                  className="h-full bg-[#22C55E] glow-green"
                />
              </div>
              <p className="mt-4 text-xl text-[#22C55E] animate-pulse tracking-widest uppercase">
                INICIALIZANDO SISTEMA...
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
