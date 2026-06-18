/**
 * RoadmapSection — Germicore Design System
 * Horizontal timeline with milestone cards
 */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Code2, Wrench, FlaskConical, Building2, Globe } from 'lucide-react';

const milestones = [
  {
    year: '2026',
    quarter: 'Q1',
    title: 'Conceito & Validação',
    description: 'Desenvolvimento do conceito, pesquisa de mercado, validação com agricultores familiares e definição da arquitetura do sistema.',
    icon: Lightbulb,
    color: '#22C55E',
    status: 'current',
    achievements: ['Pesquisa de mercado', 'Validação com usuários', 'Arquitetura do sistema', 'Pitch inicial'],
  },
  {
    year: '2026',
    quarter: 'Q3',
    title: 'Protótipo Digital',
    description: 'Desenvolvimento do software, dashboard, aplicativo mobile e simulação completa do sistema de controle IoT.',
    icon: Code2,
    color: '#0EA5E9',
    status: 'current',
    achievements: ['Dashboard MVP', 'App mobile', 'Simulação IoT', 'Digital Twin'],
  },
  {
    year: '2027',
    quarter: 'Q1',
    title: 'Protótipo Físico',
    description: 'Construção da primeira unidade física funcional com todos os componentes integrados e testados em ambiente controlado.',
    icon: Wrench,
    color: '#A855F7',
    status: 'upcoming',
    achievements: ['Unidade física', 'Integração IoT', 'Testes de hardware', 'Calibração'],
  },
  {
    year: '2027',
    quarter: 'Q3',
    title: 'Testes Piloto',
    description: 'Implantação em 5 propriedades rurais parceiras para validação em campo real, coleta de dados e refinamento do produto.',
    icon: FlaskConical,
    color: '#EAB308',
    status: 'upcoming',
    achievements: ['5 propriedades piloto', 'Dados reais', 'Refinamento', 'Certificações'],
  },
  {
    year: '2028',
    quarter: 'Q2',
    title: 'Cooperativas',
    description: 'Expansão para cooperativas agrícolas, ONGs e programas governamentais. Início da produção em escala com parceiros estratégicos.',
    icon: Building2,
    color: '#22C55E',
    status: 'future',
    achievements: ['Cooperativas parceiras', 'Programa gov.', 'Produção em escala', 'Parcerias ONG'],
  },
  {
    year: '2029',
    quarter: 'Q1',
    title: 'Escala Nacional',
    description: 'Presença em todos os estados brasileiros, 2.000+ unidades instaladas e 20.000 famílias beneficiadas com alimentação segura.',
    icon: Globe,
    color: '#0EA5E9',
    status: 'future',
    achievements: ['2.000+ unidades', '20K famílias', 'Todos os estados', 'Expansão LATAM'],
  },
];

function MilestoneCard({ milestone, index }: { milestone: typeof milestones[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const statusStyles = {
    current: { bg: `${milestone.color}20`, border: `${milestone.color}50`, glow: `0 0 20px ${milestone.color}30` },
    upcoming: { bg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.1)', glow: 'none' },
    future: { bg: 'rgba(255,255,255,0.02)', border: 'rgba(255,255,255,0.06)', glow: 'none' },
  };

  const style = statusStyles[milestone.status as keyof typeof statusStyles];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="flex flex-col min-w-[240px] lg:min-w-0"
    >
      {/* Timeline dot */}
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="relative w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: style.bg, border: `2px solid ${style.border}`, boxShadow: style.glow }}
        >
          <milestone.icon className="w-5 h-5" style={{ color: milestone.color }} />
          {milestone.status === 'current' && (
            <motion.div
              animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full"
              style={{ border: `1px solid ${milestone.color}` }}
            />
          )}
        </motion.div>

        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono-data text-xs font-bold" style={{ color: milestone.color }}>
              {milestone.year}
            </span>
            <span className="font-mono-data text-[10px] text-white/30">{milestone.quarter}</span>
          </div>
          {milestone.status === 'current' && (
            <span className="font-mono-data text-[9px] text-[#22C55E]/60 tracking-wider">EM ANDAMENTO</span>
          )}
        </div>
      </div>

      {/* Card */}
      <div
        className="flex-1 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
        style={{
          background: style.bg,
          border: `1px solid ${style.border}`,
        }}
      >
        <h3 className="font-display text-sm font-bold text-white mb-2">{milestone.title}</h3>
        <p className="font-['Inter'] text-xs text-white/50 leading-relaxed mb-4">{milestone.description}</p>

        <div className="space-y-1.5">
          {milestone.achievements.map((a) => (
            <div key={a} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: milestone.color }} />
              <span className="font-['Inter'] text-[11px] text-white/40">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function RoadmapSection() {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="roadmap" className="relative py-24 lg:py-32 bg-[#020617] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid-bg opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A855F7]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#A855F7]" />
            <span className="section-label" style={{ color: '#A855F7' }}>Roadmap</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
          >
            Do conceito à{' '}
            <span className="text-gradient-green-blue">escala nacional</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="font-['Inter'] text-base text-white/60 leading-relaxed"
          >
            Um plano de execução claro e ambicioso para transformar a Germicore
            em uma plataforma nacional de segurança alimentar.
          </motion.p>
        </div>

        {/* Timeline connector */}
        <div className="relative">
          {/* Horizontal line (desktop) */}
          <div className="hidden lg:block absolute top-5 left-5 right-5 h-px bg-gradient-to-r from-[#22C55E]/20 via-[#0EA5E9]/20 to-[#22C55E]/20" />

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-6 overflow-x-auto pb-4">
            {milestones.map((m, i) => (
              <MilestoneCard key={m.title} milestone={m} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-6 glass-card text-center"
        >
          <p className="font-display text-lg font-bold text-white mb-2">
            Estamos na fase de{' '}
            <span className="text-gradient-green-blue">Conceito e Protótipo Digital</span>
          </p>
          <p className="font-['Inter'] text-sm text-white/50">
            Buscamos parceiros, investidores e colaboradores para acelerar nossa jornada.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
