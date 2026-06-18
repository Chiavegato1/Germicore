import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { Thermometer, Droplets, Activity, Brain, Network, Zap, ShieldCheck, Share2 } from 'lucide-react';

const productionData = [
  { day: 'Seg', kg: 2.1 }, { day: 'Ter', kg: 2.4 }, { day: 'Qua', kg: 2.2 },
  { day: 'Qui', kg: 2.8 }, { day: 'Sex', kg: 3.1 }, { day: 'Sáb', kg: 2.9 }, { day: 'Dom', kg: 3.3 },
];

const iaFeatures = [
  { icon: Brain, title: 'Aprendizado por Recompensa', desc: 'A IA otimiza o uso de nutrientes e luz baseada no crescimento real das plantas.' },
  { icon: Network, title: 'Intercomunicação Global', desc: 'Cada unidade compartilha dados com outros polos para acelerar o aprendizado da rede.' },
  { icon: Zap, title: 'Decisão Autônoma', desc: 'Ajustes em tempo real de temperatura e pH sem necessidade de intervenção humana.' },
  { icon: ShieldCheck, title: 'Segurança Preventiva', desc: 'Detecta anomalias nos sensores antes que afetem a saúde da estufa.' },
];

export default function DashboardSection() {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="dashboard" className="relative py-24 lg:py-32 bg-[#020617] overflow-hidden">
      <div className="absolute inset-0 dot-grid-bg opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#22C55E]" />
            <span className="section-label">Sistema de IA GermiCore</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            className="font-display text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
          >
            IA Automatizada e <span className="text-gradient-green-blue">Interconectada</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            className="text-lg text-white/60 leading-relaxed"
          >
            Não é apenas um dashboard de monitoramento. É uma inteligência viva que se conecta aos sensores da incubadora e aprende como maximizar a produção através de <strong>Aprendizado por Recompensa</strong>.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 glass-card p-6 border-[#22C55E]/20"
          >
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
               <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#22C55E] animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Fluxo de Dados IA em Tempo Real</span>
               </div>
               <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <Share2 className="w-3 h-3 text-[#0EA5E9]" />
                  <span className="text-[10px] text-white/40">Conectado a 127 Polos</span>
               </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
               {[
                 { label: 'Temperatura', value: '24.2°C', icon: Thermometer, color: '#22C55E' },
                 { label: 'Umidade', value: '68%', icon: Droplets, color: '#0EA5E9' },
                 { label: 'pH Água', value: '6.8', icon: Activity, color: '#A855F7' },
               ].map((m) => (
                 <div key={m.label} className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                       <m.icon className="w-4 h-4" style={{ color: m.color }} />
                       <span className="text-[10px] text-white/40 uppercase">{m.label}</span>
                    </div>
                    <span className="text-2xl font-bold text-white">{m.value}</span>
                 </div>
               ))}
            </div>

            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={productionData}>
                  <defs>
                    <linearGradient id="colorProd" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="day" stroke="rgba(255,255,255,0.3)" fontSize={10} />
                  <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '12px' }}
                  />
                  <Area type="monotone" dataKey="kg" stroke="#22C55E" fillOpacity={1} fill="url(#colorProd)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* IA Features List */}
          <div className="flex flex-col gap-4">
            {iaFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5 border-white/5 hover:border-[#22C55E]/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-3">
                   <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 flex items-center justify-center">
                      <f.icon className="w-5 h-5 text-[#22C55E]" />
                   </div>
                   <h4 className="font-display text-sm text-white uppercase tracking-tight">{f.title}</h4>
                </div>
                <p className="text-xs text-white/50 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
