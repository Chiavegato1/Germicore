/**
 * ProblemSection — Germicore Design System
 * Narrative section with animated counters, problem cards, and scroll storytelling
 */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView as useInViewObs } from 'react-intersection-observer';
import { CloudRain, Droplets, TrendingDown, Users, Wheat, AlertTriangle } from 'lucide-react';

const problems = [
  {
    icon: Users,
    stat: '33',
    unit: 'M+',
    label: 'brasileiros em insegurança alimentar',
    description: 'Mais de 33 milhões de pessoas no Brasil não têm acesso regular a alimentos de qualidade.',
    color: '#EF4444',
    gradient: 'from-red-500/20 to-red-900/10',
    border: 'border-red-500/20',
  },
  {
    icon: CloudRain,
    stat: '60',
    unit: '%',
    label: 'das colheitas afetadas pelo clima',
    description: 'Secas, geadas e eventos extremos destroem safras inteiras, comprometendo a renda familiar.',
    color: '#F97316',
    gradient: 'from-orange-500/20 to-orange-900/10',
    border: 'border-orange-500/20',
  },
  {
    icon: Droplets,
    stat: '70',
    unit: '%',
    label: 'da água doce vai para a agricultura',
    description: 'A agricultura tradicional desperdiça enormes volumes de água em sistemas ineficientes.',
    color: '#0EA5E9',
    gradient: 'from-blue-500/20 to-blue-900/10',
    border: 'border-blue-500/20',
  },
  {
    icon: TrendingDown,
    stat: '40',
    unit: '%',
    label: 'da renda comprometida com alimentação',
    description: 'Famílias vulneráveis gastam quase metade da renda apenas para se alimentar.',
    color: '#A855F7',
    gradient: 'from-purple-500/20 to-purple-900/10',
    border: 'border-purple-500/20',
  },
  {
    icon: Wheat,
    stat: '3x',
    unit: '',
    label: 'menos produtivo que o potencial',
    description: 'Pequenas propriedades produzem muito abaixo do potencial por falta de tecnologia acessível.',
    color: '#EAB308',
    gradient: 'from-yellow-500/20 to-yellow-900/10',
    border: 'border-yellow-500/20',
  },
  {
    icon: AlertTriangle,
    stat: '85',
    unit: '%',
    label: 'dependência de condições climáticas',
    description: 'A produção agrícola familiar é quase totalmente dependente do clima e das estações.',
    color: '#22C55E',
    gradient: 'from-green-500/20 to-green-900/10',
    border: 'border-green-500/20',
  },
];

function ProblemCard({ problem, index }: { problem: typeof problems[0]; index: number }) {
  const { ref, inView } = useInViewObs({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className={`relative p-6 rounded-2xl bg-gradient-to-br ${problem.gradient} border ${problem.border} backdrop-blur-sm group hover:scale-[1.02] transition-transform duration-300`}
    >
      {/* Icon */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: `${problem.color}20`, border: `1px solid ${problem.color}30` }}
        >
          <problem.icon className="w-6 h-6" style={{ color: problem.color }} />
        </div>
        <div className="text-right">
          {inView && (
            <div className="font-mono-data font-bold text-3xl leading-none" style={{ color: problem.color }}>
              {problem.stat === '3x' ? (
                <span>3x</span>
              ) : (
                <>
                  <CountUp end={parseInt(problem.stat)} duration={2} delay={index * 0.1} />
                  {problem.unit}
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="font-display text-sm font-bold text-white mb-2 leading-tight">
        {problem.label}
      </h3>
      <p className="font-['Inter'] text-xs text-white/50 leading-relaxed">
        {problem.description}
      </p>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 30px ${problem.color}10` }}
      />
    </motion.div>
  );
}

export default function ProblemSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-100px' });

  return (
    <section id="problema" className="relative py-24 lg:py-32 bg-[#020617] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid-bg opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      {/* Red glow top-left */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-red-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="max-w-3xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-red-400" />
            <span className="section-label" style={{ color: '#EF4444' }}>O Problema</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-4xl lg:text-6xl font-black text-white leading-tight mb-6"
          >
            Uma crise silenciosa{' '}
            <span className="text-red-400">que precisa</span>{' '}
            de solução urgente
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-['Inter'] text-lg text-white/60 leading-relaxed"
          >
            A insegurança alimentar no Brasil não é apenas uma estatística — é a realidade diária
            de milhões de famílias que dependem de uma agricultura vulnerável ao clima, ao desperdício
            e à falta de tecnologia acessível.
          </motion.p>
        </div>

        {/* Problem cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {problems.map((problem, i) => (
            <ProblemCard key={problem.label} problem={problem} index={i} />
          ))}
        </div>

        {/* Bottom narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mt-16 p-8 rounded-2xl glass-card border border-red-500/10 text-center"
        >
          <p className="font-display text-xl lg:text-2xl font-bold text-white leading-relaxed">
            "A agricultura familiar responde por{' '}
            <span className="text-red-400">70% dos alimentos</span>{' '}
            consumidos no Brasil, mas ainda opera com tecnologia do século passado."
          </p>
          <p className="font-['Inter'] text-sm text-white/40 mt-4">
            Fonte: IBGE, FAO, Rede Brasileira de Pesquisa em Soberania e Segurança Alimentar
          </p>
        </motion.div>
      </div>
    </section>
  );
}
