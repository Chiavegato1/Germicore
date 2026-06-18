import { Suspense, useState, lazy, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';
import { Box, Cpu, Info, RefreshCw } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// Lazy load the model component
const GermicoreModel = lazy(() => import('./GermicoreModel'));

const SIDE_IMG = 'https://cdn.phototourl.com/free/2026-06-05-5fc66552-690a-4eed-b168-76b772c90b83.jpg'; // Foto do projeto real solicitada

export default function Model3DSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [renderKey, setRenderKey] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Detecta quando a seção entra na viewport
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Uma vez que entrou na viewport, mantém o Canvas montado para não sumir
  useEffect(() => {
    if (inView && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [inView, hasLoaded]);

  const handleReload = () => {
    setHasLoaded(false);
    setTimeout(() => setHasLoaded(true), 50);
    setRenderKey(prev => prev + 1);
  };

  return (
    <section id="tecnologia" className="relative py-24 lg:py-32 bg-[#020617] overflow-hidden">
      <div className="absolute inset-0 dot-grid-bg opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#22C55E]" />
            <span className="section-label">Gêmeo Digital v2.3</span>
            <div className="w-8 h-px bg-[#22C55E]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
          >
            Explore a <span className="text-gradient-green-blue">Tecnologia</span> em 3D
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-base text-white/60 leading-relaxed"
          >
            Interaja com o modelo digital da nossa estufa inteligente. Otimizamos a renderização para máxima fluidez em todos os dispositivos.
          </motion.p>
        </div>

        <div
          ref={ref}
          className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden glass-card border-[#22C55E]/20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Canvas é montado uma vez e permanece visível mesmo fora da viewport */}
          {hasLoaded ? (
            <Suspense fallback={
              <div className="absolute inset-0 flex items-center justify-center bg-[#0F172A]">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-[#22C55E] border-t-transparent rounded-full animate-spin" />
                  <span className="font-mono-data text-xs text-[#22C55E]">CARREGANDO MOTOR 3D...</span>
                </div>
              </div>
            }>
              <Canvas
                key={renderKey}
                shadows={false}
                camera={{ position: [4, 2, 4], fov: 40 }}
                dpr={[1, 1.2]} // Reduzido o DPR máximo para melhorar performance
                gl={{ 
                  antialias: true, 
                  powerPreference: "high-performance",
                  precision: "lowp", // Reduz precisão do shader para performance
                  alpha: false,
                  stencil: false,
                  depth: true
                }}
                frameloop="demand" // Usar demand para máxima performance
              >
                <AdaptiveDpr pixelated />
                <AdaptiveEvents />
                <Environment preset="city" />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                <GermicoreModel />

                <ContactShadows position={[0, -1.5, 0]} opacity={0.3} scale={8} blur={3} far={4} />
                <OrbitControls
                  enableZoom={isHovered}
                  enablePan={false}
                  minDistance={3}
                  maxDistance={8}
                  makeDefault
                />
              </Canvas>
            </Suspense>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0F172A]">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-[#22C55E] border-t-transparent rounded-full animate-spin" />
                <span className="font-mono-data text-xs text-[#22C55E]">INICIANDO MOTOR 3D...</span>
              </div>
            </div>
          )}

          {/* Side Image Overlay (Incubadora com Vidro) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-40 h-56 rounded-2xl overflow-hidden border border-[#22C55E]/30 shadow-2xl glass-card group hidden xl:block z-20"
          >
            <img 
              src={SIDE_IMG} 
              alt="Protótipo Germicore" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3">
              <span className="text-[9px] font-bold text-white uppercase tracking-tighter bg-[#22C55E]/20 px-2 py-1 rounded-md border border-[#22C55E]/30">Protótipo Real</span>
            </div>
          </motion.div>

          {/* Overlay UI */}
          <div className="absolute top-6 left-6 flex flex-col gap-3 pointer-events-none z-10">
             <div className="glass-card px-4 py-2 flex items-center gap-3 border-[#22C55E]/30">
                <Box className="w-4 h-4 text-[#22C55E]" />
                <span className="text-xs font-bold text-white uppercase tracking-widest">Renderização Inteligente</span>
             </div>
             <div className="glass-card px-4 py-2 flex items-center gap-3 border-[#0EA5E9]/30">
                <Cpu className="w-4 h-4 text-[#0EA5E9]" />
                <span className="text-xs font-bold text-white uppercase tracking-widest">Recursos Otimizados</span>
             </div>
          </div>

          {/* Reload Button */}
          <div className="absolute top-6 right-6 flex flex-col gap-3 z-10">
            <button
              onClick={handleReload}
              className="glass-card p-3 border-[#22C55E]/30 hover:bg-[#22C55E]/10 transition-colors group"
              title="Recarregar Modelo 3D"
            >
              <RefreshCw className="w-5 h-5 text-[#22C55E] group-active:rotate-180 transition-transform duration-500" />
            </button>
          </div>

          <div className="absolute bottom-6 right-6 glass-card p-4 max-w-xs pointer-events-auto bg-black/40 backdrop-blur-md z-10">
             <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-[#22C55E]" />
                <span className="text-xs font-bold text-white">Controles</span>
             </div>
             <p className="text-[10px] text-white/50 leading-relaxed">
                Use o botão no topo direito para recarregar o modelo em caso de erro. Passe o mouse para ativar o zoom.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
