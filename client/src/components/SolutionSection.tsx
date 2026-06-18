/**
 * SolutionSection — Germicore Design System
 * Technology cards with hover effects + solution image
 */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Wifi, Thermometer, Fish, Sun, LayoutDashboard,
  Droplets, Cpu, Zap, Shield, Clock, Package, Leaf, Sprout
} from 'lucide-react';

const SOLUTION_IMG = 'https://www.image2url.com/6a988e0c-8822-421b-857c-2936e398939c'; // URL da imagem de domo enviada

const techCards = [
  {
    icon: Wifi,
    title: 'IoT & Sensores',
    description: 'Sensores ambientais monitoram temperatura, umidade, pH e nutrientes em tempo real, enviando dados para a nuvem.',
    color: '#0EA5E9',
    tag: 'Conectividade',
  },
  {
    icon: Fish,
    title: 'Aquaponia Integrada',
    description: 'Sistema simbiótico onde peixes e plantas se beneficiam mutuamente, criando um ecossistema sustentável e produtivo.',
    color: '#22C55E',
    tag: 'Sustentabilidade',
  },
  {
    icon: Sun,
    title: 'LEDs Inteligentes',
    description: 'Iluminação de espectro completo otimizada para cada fase do crescimento, com controle automatizado de ciclos.',
    color: '#EAB308',
    tag: 'Fotossíntese',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard Remoto',
    description: 'Interface SaaS para monitoramento e controle completo da mini estufa de qualquer lugar, via smartphone ou computador.',
    color: '#A855F7',
    tag: 'Software',
  },
  {
    icon: Droplets,
    title: 'Reaproveitamento de Água',
    description: 'Sistema fechado de circulação que reduz o consumo de água em até 95% comparado à agricultura convencional.',
    color: '#0EA5E9',
    tag: 'Eficiência',
  },
  {
    icon: Cpu,
    title: 'Automação Total',
    description: 'Controle automatizado de irrigação, iluminação, ventilação e nutrição, reduzindo a necessidade de mão de obra.',
    color: '#22C55E',
    tag: 'Automação',
  },
];

const benefits = [
  { icon: Zap, label: '3x mais produção', desc: 'vs. solo convencional' },
  { icon: Droplets, label: '95% menos água', desc: 'sistema fechado' },
  { icon: Sprout, label: 'Estufa de germinação', desc: 'clima controlado' },
  { icon: Shield, label: 'Sem agrotóxicos', desc: '100% orgânico' },
  { icon: Clock, label: 'Todo o ano', desc: '365 dias' },
  { icon: Package, label: 'Modular e escalável', desc: 'Qualquer espaço' },
];

function TechCard({ card, index }: { card: typeof techCards[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="tech-card p-6 group cursor-default"
    >
      <div className="relative z-10">
        {/* Tag */}
        <div className="flex items-center justify-between mb-4">
          <div
            className="px-2.5 py-1 rounded-full text-[10px] font-mono-data tracking-wider uppercase"
            style={{ background: `${card.color}15`, color: card.color, border: `1px solid ${card.color}30` }}
          >
            {card.tag}
          </div>
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ background: `${card.color}15`, border: `1px solid ${card.color}20` }}
          >
            <card.icon className="w-5 h-5" style={{ color: card.color }} />
          </div>
        </div>

        <h3 className="font-display text-base font-bold text-white mb-2">{card.title}</h3>
        <p className="font-['Inter'] text-sm text-white/50 leading-relaxed">{card.description}</p>

        {/* Bottom line */}
        <div
          className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
          style={{ background: `linear-gradient(90deg, ${card.color}, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

export default function SolutionSection() {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="solucao" className="relative py-24 lg:py-32 bg-[#020617] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid-bg opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />

      {/* Green glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-[#22C55E]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={titleInView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-[#22C55E]" />
              <span className="section-label">Nossa Solução</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="font-display text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
            >
              A mini estufa{' '}
              <span className="text-gradient-green-blue">inteligente</span>{' '}
              que o Brasil precisa
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-['Inter'] text-base text-white/60 leading-relaxed mb-8"
            >
              A Germicore é um sistema agrícola modular que combina IoT, automação e
              sustentabilidade para democratizar o acesso à produção de alimentos de qualidade,
              independente do clima ou do espaço disponível.
            </motion.p>

            {/* Benefits grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
              {benefits.map((b) => (
                <div key={b.label} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/3 border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-[#22C55E]/10 flex items-center justify-center flex-shrink-0">
                    <b.icon className="w-4 h-4 text-[#22C55E]" />
                  </div>
                  <div>
                    <p className="font-['Inter'] text-xs font-semibold text-white/80">{b.label}</p>
                    <p className="font-mono-data text-[10px] text-[#22C55E]/70">{b.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Solution image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden gradient-border-card">
              <img
                src={SOLUTION_IMG}
                alt="Germicore Mini Estufa Inteligente"
                className="w-full h-80 lg:h-96 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663734922461/fYAR9BHf6eKF6BAZCv36Dc/germicore-solution-FDtqn6rUEsQdW5CmuoW9sq.webp';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent" />

              {/* Overlay badges */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="glass-card px-3 py-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#22C55E] pulse-glow" />
                  <span className="font-mono-data text-[10px] text-white/80">SISTEMA ATIVO</span>
                </div>
                <div className="glass-card px-3 py-2">
                  <span className="font-mono-data text-[10px] text-[#22C55E]">ESTUFA DE GERMINAÇÃO</span>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 glass-card p-4 glow-green"
            >
              <p className="font-mono-data text-2xl font-bold text-[#22C55E]">95%</p>
              <p className="font-['Inter'] text-xs text-white/50 mt-0.5">menos água</p>
            </motion.div>

            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 glass-card p-4 glow-blue"
            >
              <p className="font-mono-data text-2xl font-bold text-[#0EA5E9]">3x</p>
              <p className="font-['Inter'] text-xs text-white/50 mt-0.5">mais produção</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech cards grid */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-[#0EA5E9]" />
            <span className="section-label" style={{ color: '#0EA5E9' }}>Tecnologias Integradas</span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {techCards.map((card, i) => (
              <TechCard key={card.title} card={card} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
