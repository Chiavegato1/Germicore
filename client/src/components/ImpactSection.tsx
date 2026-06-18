/**
 * ImpactSection — Germicore Design System
 * Animated impact metrics with charts and social/environmental data
 */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';
import { Droplets, TrendingUp, Users, Leaf, DollarSign, Globe } from 'lucide-react';

const IMPACT_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663734922461/fYAR9BHf6eKF6BAZCv36Dc/germicore-impact-DsiXLTbh2e47KcG9EYAUXK.webp';

const impactMetrics = [
  {
    icon: Droplets,
    value: 95,
    unit: '%',
    label: 'Economia de Água',
    description: 'Redução no consumo hídrico comparado à agricultura convencional',
    color: '#0EA5E9',
  },
  {
    icon: TrendingUp,
    value: 300,
    unit: '%',
    label: 'Aumento de Produtividade',
    description: 'Produção até 3x maior por metro quadrado em relação ao cultivo tradicional',
    color: '#22C55E',
  },
  {
    icon: Users,
    value: 10,
    unit: 'K+',
    label: 'Famílias Beneficiadas',
    description: 'Meta de famílias atendidas com acesso a alimentos frescos e saudáveis',
    color: '#A855F7',
  },
  {
    icon: DollarSign,
    value: 40,
    unit: '%',
    label: 'Aumento de Renda',
    description: 'Incremento médio na renda de agricultores familiares que adotam o sistema',
    color: '#EAB308',
  },
  {
    icon: Leaf,
    value: 100,
    unit: '%',
    label: 'Produção Sustentável',
    description: 'Zero agrotóxicos, zero desperdício, ciclo fechado de nutrientes',
    color: '#22C55E',
  },
  {
    icon: Globe,
    value: 80,
    unit: '%',
    label: 'Redução de Emissões',
    description: 'Menor pegada de carbono por kg de alimento produzido',
    color: '#0EA5E9',
  },
];

const radarData = [
  { subject: 'Produtividade', A: 95, B: 30 },
  { subject: 'Sustentabilidade', A: 90, B: 40 },
  { subject: 'Acessibilidade', A: 85, B: 50 },
  { subject: 'Escalabilidade', A: 88, B: 35 },
  { subject: 'Impacto Social', A: 92, B: 45 },
  { subject: 'Inovação', A: 96, B: 30 },
];

const growthData = [
  { year: '2026', units: 5, families: 50 },
  { year: '2027', units: 50, families: 500 },
  { year: '2028', units: 500, families: 5000 },
  { year: '2029', units: 2000, families: 20000 },
];

function ImpactCard({ metric, index }: { metric: typeof impactMetrics[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="gradient-border-card p-6 group hover:scale-[1.02] transition-transform duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: `${metric.color}15`, border: `1px solid ${metric.color}25` }}
        >
          <metric.icon className="w-6 h-6" style={{ color: metric.color }} />
        </div>
        {inView && (
          <div className="text-right">
            <span className="font-mono-data font-black text-4xl leading-none" style={{ color: metric.color }}>
              {metric.unit === 'K+' ? (
                <><CountUp end={metric.value} duration={2} delay={index * 0.1} />{metric.unit}</>
              ) : (
                <><CountUp end={metric.value} duration={2} delay={index * 0.1} />{metric.unit}</>
              )}
            </span>
          </div>
        )}
      </div>
      <h3 className="font-display text-sm font-bold text-white mb-2">{metric.label}</h3>
      <p className="font-['Inter'] text-xs text-white/50 leading-relaxed">{metric.description}</p>

      {/* Progress bar */}
      <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${Math.min(metric.value, 100)}%` } : {}}
          transition={{ delay: index * 0.1 + 0.3, duration: 1.2, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${metric.color}, ${metric.color}80)` }}
        />
      </div>
    </motion.div>
  );
}

export default function ImpactSection() {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="impacto" className="relative py-24 lg:py-32 bg-[#0F172A] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={IMPACT_IMG} alt="" className="w-full h-full object-cover opacity-5" />
        <div className="absolute inset-0 bg-[#0F172A]/95" />
      </div>
      <div className="absolute inset-0 dot-grid-bg opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />

      {/* Green glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#22C55E]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#22C55E]" />
            <span className="section-label">Impacto</span>
            <div className="w-8 h-px bg-[#22C55E]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
          >
            Números que{' '}
            <span className="text-gradient-green-blue">transformam</span>{' '}
            vidas
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="font-['Inter'] text-base text-white/60 leading-relaxed"
          >
            A Germicore não é apenas uma solução tecnológica — é um instrumento de
            transformação social, ambiental e econômica para comunidades vulneráveis.
          </motion.p>
        </div>

        {/* Impact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-16">
          {impactMetrics.map((m, i) => (
            <ImpactCard key={m.label} metric={m} index={i} />
          ))}
        </div>

        {/* Charts row */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Radar chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card p-6"
          >
            <h3 className="font-display text-base font-bold text-white mb-1">
              Germicore vs. Agricultura Tradicional
            </h3>
            <p className="font-['Inter'] text-xs text-white/40 mb-4">Comparativo multidimensional de desempenho</p>
            <div className="flex items-center gap-4 mb-4 text-xs font-mono-data">
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#22C55E]/60" /><span className="text-white/40">Germicore</span></div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#0EA5E9]/40" /><span className="text-white/40">Tradicional</span></div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.08)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 11, fontFamily: 'Inter' }} />
                  <Radar name="Germicore" dataKey="A" stroke="#22C55E" fill="#22C55E" fillOpacity={0.2} strokeWidth={2} />
                  <Radar name="Tradicional" dataKey="B" stroke="#0EA5E9" fill="#0EA5E9" fillOpacity={0.1} strokeWidth={1.5} strokeDasharray="4 2" />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Growth projection */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card p-6"
          >
            <h3 className="font-display text-base font-bold text-white mb-1">
              Projeção de Crescimento
            </h3>
            <p className="font-['Inter'] text-xs text-white/40 mb-4">Unidades instaladas e famílias beneficiadas</p>
            <div className="flex items-center gap-4 mb-4 text-xs font-mono-data">
              <div className="flex items-center gap-1.5"><div className="w-3 h-px bg-[#22C55E]" /><span className="text-white/40">Unidades</span></div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-px bg-[#0EA5E9]" /><span className="text-white/40">Famílias</span></div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={growthData}>
                  <defs>
                    <linearGradient id="gradUnits" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22C55E" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#22C55E" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="gradFamilies" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0EA5E9" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#0EA5E9" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="year" tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11, fontFamily: 'JetBrains Mono' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10, fontFamily: 'JetBrains Mono' }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: '#0F172A', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '8px', fontFamily: 'JetBrains Mono', fontSize: '11px' }}
                    labelStyle={{ color: 'rgba(255,255,255,0.5)' }}
                    itemStyle={{ color: '#22C55E' }}
                  />
                  <Area type="monotone" dataKey="units" stroke="#22C55E" strokeWidth={2} fill="url(#gradUnits)" name="Unidades" />
                  <Area type="monotone" dataKey="families" stroke="#0EA5E9" strokeWidth={2} fill="url(#gradFamilies)" name="Famílias" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* SDG badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 p-6 glass-card text-center"
        >
          <p className="font-mono-data text-xs text-white/30 tracking-widest uppercase mb-4">
            Alinhado aos Objetivos de Desenvolvimento Sustentável da ONU
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { num: '2', label: 'Fome Zero' },
              { num: '6', label: 'Água Limpa' },
              { num: '8', label: 'Trabalho Digno' },
              { num: '9', label: 'Inovação' },
              { num: '12', label: 'Consumo Responsável' },
              { num: '13', label: 'Ação Climática' },
            ].map((sdg) => (
              <div
                key={sdg.num}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/3 border border-white/8"
              >
                <span className="font-mono-data text-sm font-bold text-gradient-green-blue">ODS {sdg.num}</span>
                <span className="font-['Inter'] text-xs text-white/50">{sdg.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
