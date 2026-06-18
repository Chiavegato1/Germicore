/**
 * HowItWorksSection — Germicore Design System
 * Animated flow timeline showing the 7-step process
 */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Droplets, Filter, RefreshCw, Cpu, Sun, Leaf, Monitor } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Droplets,
    title: 'Captação de Água',
    description: 'Água da chuva ou da rede é captada e armazenada no reservatório principal do sistema.',
    color: '#0EA5E9',
  },
  {
    step: '02',
    icon: Filter,
    title: 'Filtragem',
    description: 'Sistema de filtragem biológica e mecânica remove impurezas e prepara a água para circulação.',
    color: '#22C55E',
  },
  {
    step: '03',
    icon: RefreshCw,
    title: 'Circulação',
    description: 'Bomba automatizada distribui a água nutrida pelas bandejas hidropônicas em ciclos programados.',
    color: '#0EA5E9',
  },
  {
    step: '04',
    icon: Cpu,
    title: 'Sensores IoT',
    description: 'Sensores monitoram pH, temperatura, umidade, EC e luminosidade em tempo real, 24/7.',
    color: '#A855F7',
  },
  {
    step: '05',
    icon: Sun,
    title: 'LEDs Inteligentes',
    description: 'Iluminação de espectro completo ajustada automaticamente para cada fase de crescimento.',
    color: '#EAB308',
  },
  {
    step: '06',
    icon: Leaf,
    title: 'Crescimento das Plantas',
    description: 'Com condições ideais controladas, as plantas crescem até 3x mais rápido que no solo.',
    color: '#22C55E',
  },
  {
    step: '07',
    icon: Monitor,
    title: 'Monitoramento Remoto',
    description: 'Dashboard em tempo real permite controle e ajustes de qualquer lugar via smartphone.',
    color: '#0EA5E9',
  },
];

function StepCard({ step, index, total }: { step: typeof steps[0]; index: number; total: number }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const isLast = index === total - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="relative flex gap-6 items-start"
    >
      {/* Timeline line */}
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ delay: index * 0.12 + 0.3, duration: 0.5 }}
          className="absolute left-6 top-14 bottom-0 w-px origin-top"
          style={{
            background: `linear-gradient(to bottom, ${step.color}40, transparent)`,
            height: 'calc(100% + 1.5rem)',
          }}
        />
      )}

      {/* Step number circle */}
      <div className="relative flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.12 + 0.1, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="w-12 h-12 rounded-full flex items-center justify-center border-2 relative z-10"
          style={{
            background: `${step.color}15`,
            borderColor: `${step.color}50`,
            boxShadow: `0 0 20px ${step.color}20`,
          }}
        >
          <step.icon className="w-5 h-5" style={{ color: step.color }} />
        </motion.div>
        {/* Pulse ring */}
        {inView && (
          <motion.div
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.8, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
            className="absolute inset-0 rounded-full"
            style={{ border: `1px solid ${step.color}` }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono-data text-xs font-bold" style={{ color: `${step.color}80` }}>
            ETAPA {step.step}
          </span>
        </div>
        <h3 className="font-display text-lg font-bold text-white mb-2">{step.title}</h3>
        <p className="font-['Inter'] text-sm text-white/50 leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function HowItWorksSection() {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="como-funciona" className="relative py-24 lg:py-32 bg-[#0F172A] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid-bg opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0EA5E9]/20 to-transparent" />

      {/* Blue glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#0EA5E9]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#0EA5E9]" />
            <span className="section-label" style={{ color: '#0EA5E9' }}>Como Funciona</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
          >
            Da água à colheita em{' '}
            <span className="text-gradient-blue-green">7 etapas</span>{' '}
            automatizadas
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-['Inter'] text-base text-white/60 leading-relaxed"
          >
            O sistema Germicore opera de forma autônoma, com cada etapa monitorada e
            otimizada por inteligência artificial e sensores de precisão.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Timeline */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <StepCard key={step.step} step={step} index={i} total={steps.length} />
            ))}
          </div>

          {/* Right: Visual summary */}
          <div className="lg:sticky lg:top-24 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass-card p-6"
            >
              <h3 className="font-display text-base font-bold text-white mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#22C55E] pulse-glow" />
                Ciclo Completo de Produção
              </h3>

              {/* Flow diagram */}
              <div className="space-y-3">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}
                    >
                      <step.icon className="w-4 h-4" style={{ color: step.color }} />
                    </div>
                    <div className="flex-1 flex items-center gap-2">
                      <span className="font-['Inter'] text-xs text-white/60 flex-1">{step.title}</span>
                      <span className="font-mono-data text-[10px]" style={{ color: `${step.color}60` }}>
                        {step.step}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="absolute left-10 mt-8 w-px h-3 bg-white/10" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { value: '24/7', label: 'Monitoramento', color: '#22C55E' },
                { value: '<5min', label: 'Resposta a alertas', color: '#0EA5E9' },
                { value: '99%', label: 'Uptime do sistema', color: '#22C55E' },
                { value: '0', label: 'Agrotóxicos', color: '#0EA5E9' },
              ].map((m) => (
                <div key={m.label} className="dashboard-card p-4 text-center">
                  <p className="font-mono-data text-xl font-bold" style={{ color: m.color }}>{m.value}</p>
                  <p className="font-['Inter'] text-xs text-white/40 mt-1">{m.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
