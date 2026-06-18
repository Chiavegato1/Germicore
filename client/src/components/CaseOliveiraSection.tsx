import { motion } from 'framer-motion';
import { ArrowUpRight, DollarSign, Calendar, Zap, Info } from 'lucide-react';

export default function CaseOliveiraSection() {
  return (
    <section className="py-24 relative bg-[#0F172A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" 
                alt="Agricultura Familiar" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0EA5E9]/20 border border-[#0EA5E9]/30 backdrop-blur-md">
                <Info className="w-3.5 h-3.5 text-[#0EA5E9]" />
                <span className="text-[10px] text-[#0EA5E9] font-bold uppercase tracking-widest">Simulação de Impacto</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 glass-card p-6 max-w-xs border-[#0EA5E9]/30">
              <p className="text-white font-medium italic">"Com a Germicore, a projeção é que consigamos produzir o ano todo, independente da seca."</p>
              <p className="text-[#0EA5E9] text-sm mt-2 font-bold">— Simulação: Família Oliveira</p>
            </div>
          </motion.div>

          <div className="space-y-8">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="section-label text-[#0EA5E9]"
              >
                Projeção de Impacto
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-display text-4xl text-white mt-4"
              >
                Simulação: Família Oliveira
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-white/60 mt-6 text-lg"
              >
                Utilizamos os dados reais de produtores como Paulo e Maria Oliveira para validar nosso <strong>Protótipo Digital</strong>. Abaixo estão as projeções de ganhos baseadas na eficiência do sistema Germicore.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Ciclos Estimados', old: '3-4/ano', new: '26/ano', icon: Calendar },
                { label: 'Lucro Anual Projetado', old: 'R$ 8.400', new: 'R$ 13.656', icon: DollarSign },
                { label: 'Risco Climático', old: 'Alto', new: 'Eliminado', icon: Zap },
                { label: 'Aumento de Renda', old: 'Base', new: '+142%', icon: ArrowUpRight },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="w-5 h-5 text-[#0EA5E9]" />
                    <span className="text-xs text-white/40 uppercase tracking-widest">{item.label}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-white/30 line-through text-sm">{item.old}</span>
                    <span className="text-white text-xl font-bold">{item.new}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 flex items-start gap-4"
            >
              <Info className="w-6 h-6 text-[#0EA5E9] shrink-0 mt-1" />
              <p className="text-white/80 text-sm leading-relaxed">
                <strong>Nota Técnica:</strong> Estes valores são baseados em simulações do nosso protótipo digital v2.0. Os resultados reais podem variar conforme a região e a cultura escolhida, mas o potencial de transformação é validado por dados técnicos da EMBRAPA e NASA.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
