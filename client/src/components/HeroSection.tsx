/**
 * HeroSection — Germicore Design System
 * Updated with Real 3D GLB Integration + Side Image
 */
import { Suspense, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Cpu, Wifi, Droplets, Leaf, Box } from 'lucide-react';
import { Link } from 'wouter';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import GermicoreModel from './GermicoreModel';

const HERO_BG = 'https://www.image2url.com/6a988e0c-8822-421b-857c-2936e398939c'; // Mesma imagem da solução (domo)
const SIDE_IMG = 'https://cdn.phototourl.com/free/2026-06-05-5fc66552-690a-4eed-b168-76b772c90b83.jpg'; // Foto do projeto real solicitada

function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number; color: string }[] = [];
    const colors = ['#22C55E', '#0EA5E9', '#34D399'];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3 - 0.1,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

function useTypewriter(texts: string[], speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    if (!deleting && charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), speed);
      return () => clearTimeout(t);
    }
    if (!deleting && charIdx === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx > 0) {
      const t = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % texts.length);
    }
  }, [charIdx, deleting, idx, texts, speed, pause]);

  useEffect(() => {
    setDisplay(texts[idx].slice(0, charIdx));
  }, [charIdx, idx, texts]);

  return display;
}

export default function HeroSection() {
  const typeText = useTypewriter([
    'Cultivando o futuro com tecnologia.',
    'IA autônoma para produção de alimentos.',
    'Agricultura modular interconectada.',
    'Democratizando o acesso à nutrição.',
  ]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#020617]">
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Germicore Estufa de Germinação"
          className="w-full h-full object-cover opacity-20"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-[#020617]/40" />
      </div>

      <div className="absolute inset-0 dot-grid-bg opacity-20" />
      <ParticlesCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen lg:min-h-0 lg:py-32">

          {/* Left: Text content */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-px bg-[#22C55E]" />
              <span className="section-label">AgriTech · IA Autônoma · 3D Real</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] text-white">
                Incubadora de <br />
                <span className="text-gradient-green-blue">Impacto</span> Social
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-8"
            >
              <p className="text-lg text-[#22C55E] font-medium">
                {typeText}
                <span className="inline-block w-0.5 h-5 bg-[#22C55E] ml-0.5 animate-pulse" />
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-base lg:text-lg text-white/60 leading-relaxed max-w-lg"
            >
              Conheça o sistema agrícola modular que utiliza <strong>Aprendizado por Recompensa</strong> para democratizar a produção de alimentos de alta qualidade.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/solucao">
                <motion.a
                  className="btn-primary-glow px-7 py-3.5 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Conheça a Solução
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </Link>
              <Link href="/tecnologia">
                <motion.a
                  className="btn-outline-glow px-7 py-3.5 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Box className="w-4 h-4" />
                  Ver em 3D
                </motion.a>
              </Link>
            </div>
          </div>

          {/* Right: Real 3D GLB Model + Side Image Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px] hidden lg:block"
          >
            {/* 3D Model Container */}
            <div className="w-full h-full relative">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-[#22C55E] border-t-transparent rounded-full animate-spin" />
                </div>
              }>
                <Canvas
                  shadows={false}
                  camera={{ position: [5, 2, 5], fov: 40 }}
                  dpr={[1, 1.5]}
                  gl={{ antialias: true, powerPreference: "high-performance" }}
                >
                  <Environment preset="city" />
                  <ambientLight intensity={0.5} />
                  <GermicoreModel />
                  <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
              </Suspense>
            </div>
            
            {/* Side Image Overlay (Incubadora com Vidro) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -right-8 top-1/2 -translate-y-1/2 w-48 h-64 rounded-2xl overflow-hidden border border-[#22C55E]/30 shadow-2xl glass-card group hidden xl:block"
            >
              <img 
                src={SIDE_IMG} 
                alt="Incubadora Germicore" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-[10px] font-bold text-white uppercase tracking-tighter bg-[#22C55E]/20 px-2 py-1 rounded-md border border-[#22C55E]/30">Protótipo Real</span>
              </div>
            </motion.div>
            
            {/* 3D Label */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 glass-card px-4 py-2 flex items-center gap-3 border-[#22C55E]/30 pointer-events-none">
                <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Modelo GLB Interativo</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
