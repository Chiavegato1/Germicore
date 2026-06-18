import { motion } from 'framer-motion';
import { Users, TrendingUp, Droplets, Utensils } from 'lucide-react';

const stats = [
  { label: 'Famílias de Agric. Familiar', value: '4,3 mi', icon: Users },
  { label: 'Brasileiros em situação de fome', value: '33 mi', icon: Utensils },
  { label: 'Economia de Água', value: '95%', icon: Droplets },
  { label: 'Aumento de Produtividade', value: '800%+', icon: TrendingUp },
];

export default function ImpactSocialSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-label"
          >
            Impacto Real
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl text-white mt-4"
          >
            Combatendo a Insegurança Alimentar
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 mt-6 max-w-2xl mx-auto text-lg"
          >
            O Brasil é um dos maiores produtores agrícolas do mundo, mas 33 milhões de brasileiros ainda passam fome. A Germicore nasceu para mudar essa realidade através de tecnologia validada digitalmente.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/40 uppercase tracking-widest"
          >
            <div className="w-1 h-1 rounded-full bg-[#22C55E] animate-pulse" />
            Dados baseados em simulações de protótipo digital
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col items-center text-center group hover:border-[#22C55E]/40 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#22C55E]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-[#22C55E]" />
              </div>
              <span className="font-display text-3xl font-bold text-white mb-2">{stat.value}</span>
              <span className="text-white/40 text-sm uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="font-display text-3xl text-white">Por que focar no pequeno produtor?</h3>
            <ul className="space-y-4">
              {[
                "Responsáveis por 70% dos alimentos consumidos no Brasil.",
                "Altamente vulneráveis a secas, pragas e variações climáticas.",
                "Dificuldade de acesso a tecnologias de alta produtividade.",
                "Renda média mensal muitas vezes abaixo de R$ 1.500."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card p-8 bg-gradient-to-br from-[#22C55E]/5 to-[#0EA5E9]/5"
          >
            <h4 className="font-display text-xl text-[#22C55E] mb-4">A Dor que Resolvemos</h4>
            <div className="space-y-4 text-white/60">
              <p>O ciclo convencional de cultivo leva de 45 a 60 dias. Com a Germicore, reduzimos para <strong>12 a 14 dias</strong>.</p>
              <p>Enquanto a seca pode destruir 40% de uma plantação aberta, nosso sistema fechado é <strong>100% independente do clima</strong>.</p>
              <p>Aumentamos a produtividade de 20kg/m² para mais de <strong>140kg/m² ao ano</strong>.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
