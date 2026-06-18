/**
 * TeamSection — Germicore Design System
 * Premium team cards with hover effects
 */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Github, Globe, Code2, Leaf, BarChart3, Cpu, Palette, FlaskConical } from 'lucide-react';

const TEAM_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663734922461/fYAR9BHf6eKF6BAZCv36Dc/germicore-team-bg-nQRJQbaUKTwZpSaHjSUZEo.webp';

const team = [
  {
    name: 'Ana Oliveira',
    role: 'CEO & Co-fundadora',
    description: 'Especialista em impacto social e agronegócio. Lidera a visão estratégica e as parcerias com cooperativas e ONGs.',
    icon: Leaf,
    color: '#22C55E',
    skills: ['Estratégia', 'Agronegócio', 'Impacto Social'],
    initials: 'AO',
  },
  {
    name: 'Carlos Santos',
    role: 'CTO & Co-fundador',
    description: 'Engenheiro de software com foco em IoT e sistemas embarcados. Arquiteto da plataforma tecnológica da Germicore.',
    icon: Code2,
    color: '#0EA5E9',
    skills: ['IoT', 'React', 'Node.js'],
    initials: 'CS',
  },
  {
    name: 'Marina Costa',
    role: 'Head de Produto',
    description: 'Designer de UX/UI e especialista em experiência do usuário. Responsável pelo dashboard e app mobile da plataforma.',
    icon: Palette,
    color: '#A855F7',
    skills: ['UX/UI', 'Design System', 'Produto'],
    initials: 'MC',
  },
  {
    name: 'Pedro Lima',
    role: 'Head de Engenharia',
    description: 'Engenheiro agrônomo e especialista em hidroponia e aquaponia. Responsável pelo design dos sistemas de cultivo.',
    icon: FlaskConical,
    color: '#22C55E',
    skills: ['Hidroponia', 'Aquaponia', 'Agronomia'],
    initials: 'PL',
  },
  {
    name: 'Julia Ferreira',
    role: 'Head de Dados',
    description: 'Cientista de dados com experiência em machine learning aplicado à agricultura de precisão e análise preditiva.',
    icon: BarChart3,
    color: '#EAB308',
    skills: ['Machine Learning', 'Python', 'Analytics'],
    initials: 'JF',
  },
  {
    name: 'Rafael Souza',
    role: 'Head de Hardware',
    description: 'Engenheiro eletrônico especializado em sistemas embarcados, sensores e automação industrial para AgriTech.',
    icon: Cpu,
    color: '#0EA5E9',
    skills: ['Eletrônica', 'Arduino', 'Sensores'],
    initials: 'RS',
  },
];

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="group relative rounded-2xl overflow-hidden bg-[#0F172A] border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      style={{ '--glow-color': member.color } as React.CSSProperties}
    >
      {/* Top gradient bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${member.color}, ${member.color}40)` }}
      />

      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${member.color}08, transparent 70%)` }}
      />

      <div className="p-6">
        {/* Avatar */}
        <div className="flex items-start justify-between mb-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black font-display"
              style={{
                background: `linear-gradient(135deg, ${member.color}25, ${member.color}10)`,
                border: `2px solid ${member.color}30`,
                color: member.color,
              }}
            >
              {member.initials}
            </div>
            {/* Role icon */}
            <div
              className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg flex items-center justify-center"
              style={{ background: member.color, boxShadow: `0 0 10px ${member.color}40` }}
            >
              <member.icon className="w-3 h-3 text-[#020617]" />
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
              <Linkedin className="w-3.5 h-3.5" />
            </button>
            <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
              <Github className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Info */}
        <h3 className="font-display text-base font-bold text-white mb-0.5">{member.name}</h3>
        <p className="font-mono-data text-[11px] mb-3" style={{ color: member.color }}>{member.role}</p>
        <p className="font-['Inter'] text-xs text-white/50 leading-relaxed mb-4">{member.description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 rounded-full text-[10px] font-mono-data"
              style={{
                background: `${member.color}12`,
                color: `${member.color}90`,
                border: `1px solid ${member.color}20`,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="equipe" className="relative py-24 lg:py-32 bg-[#0F172A] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={TEAM_BG} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-[#0F172A]/90" />
      </div>
      <div className="absolute inset-0 dot-grid-bg opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#22C55E]" />
            <span className="section-label">Equipe</span>
            <div className="w-8 h-px bg-[#22C55E]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
          >
            As mentes por trás da{' '}
            <span className="text-gradient-green-blue">revolução</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="font-['Inter'] text-base text-white/60 leading-relaxed"
          >
            Uma equipe multidisciplinar apaixonada por tecnologia, sustentabilidade
            e impacto social, unida pelo propósito de transformar a agricultura brasileira.
          </motion.p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Join team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-6 rounded-2xl border border-dashed border-white/10 text-center hover:border-[#22C55E]/30 transition-colors group cursor-pointer"
          onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-12 h-12 rounded-2xl bg-white/3 border border-white/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#22C55E]/10 group-hover:border-[#22C55E]/30 transition-all">
            <Globe className="w-6 h-6 text-white/20 group-hover:text-[#22C55E] transition-colors" />
          </div>
          <p className="font-display text-sm font-bold text-white/40 group-hover:text-white transition-colors">
            Quer fazer parte da equipe?
          </p>
          <p className="font-['Inter'] text-xs text-white/25 mt-1 group-hover:text-white/50 transition-colors">
            Estamos sempre buscando talentos apaixonados por impacto social
          </p>
        </motion.div>
      </div>
    </section>
  );
}
