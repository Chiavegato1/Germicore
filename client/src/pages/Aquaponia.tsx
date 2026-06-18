import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Fish, Leaf, RefreshCw, TrendingUp, DollarSign, CheckCircle2, Droplets } from 'lucide-react';

export default function Aquaponia() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <Navbar />
      
      <main className="pt-20">
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <span className="section-label">Módulo Opcional Premium</span>
              <h1 className="font-display text-5xl md:text-6xl text-white mt-4">Sistema de Aquaponia</h1>
              <p className="text-white/60 mt-6 max-w-2xl mx-auto text-lg">
                O equilíbrio perfeito entre a criação de peixes e o cultivo de plantas. Um ecossistema fechado que gera proteína e vegetais simultaneamente.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden border border-[#0EA5E9]/30 shadow-2xl bg-[#0F172A]">
                  <img 
                    src="https://tse1.mm.bing.net/th/id/OIP.5OYXnz7pqalBCQpA9xcqJwHaFN?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" 
                    alt="Sistema de Aquaponia Real" 
                    className="w-full h-full object-cover opacity-80"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2000&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 glass-card p-6 border-[#0EA5E9]/40">
                  <div className="flex items-center gap-3 text-[#0EA5E9] mb-2">
                    <Fish className="w-5 h-5" />
                    <span className="font-bold text-sm">Produção Dupla</span>
                  </div>
                  <p className="text-xs text-white/60">Peixes + Hortaliças em um único ciclo.</p>
                </div>
              </motion.div>

              <div className="space-y-8">
                <h2 className="font-display text-3xl text-white">O que é e como funciona?</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  A aquaponia combina a **aquicultura** (criação de peixes) com a **hidroponia** (cultivo de plantas em água). Em vez de usar adubos químicos, as plantas se alimentam dos resíduos orgânicos dos peixes, que são convertidos em nutrientes por bactérias benéficas.
                </p>
                
                <div className="space-y-4">
                  {[
                    { title: 'Ciclo Fechado', desc: 'A água dos peixes nutre as plantas, e as plantas filtram a água para os peixes.', icon: RefreshCw },
                    { title: '90% Menos Água', desc: 'Comparado à agricultura tradicional, o sistema é extremamente eficiente.', icon: Droplets },
                    { title: 'Sem Químicos', desc: 'Produção 100% orgânica e natural, livre de agrotóxicos.', icon: Leaf }
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-[#0EA5E9]" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">{item.title}</h4>
                        <p className="text-xs text-white/40">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Valorização e Impacto */}
            <div className="grid md:grid-cols-3 gap-8 mb-24">
              {[
                { 
                  title: 'Aumento de Renda', 
                  value: '+45%', 
                  desc: 'A venda de peixes (como Tilápia) adiciona uma nova fonte de receita para a família.',
                  icon: DollarSign,
                  color: '#22C55E'
                },
                { 
                  title: 'Valorização do Sistema', 
                  value: 'Premium', 
                  desc: 'Um sistema aquapônico valoriza o imóvel e o projeto em até 60% devido à complexidade e entrega.',
                  icon: TrendingUp,
                  color: '#0EA5E9'
                },
                { 
                  title: 'Segurança Alimentar', 
                  value: 'Total', 
                  desc: 'Fornece proteína animal de alta qualidade e vegetais frescos no mesmo espaço.',
                  icon: CheckCircle2,
                  color: '#A855F7'
                }
              ].map((card) => (
                <div key={card.title} className="glass-card p-8 text-center border-white/5">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6" style={{ color: card.color }}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-white/40 text-xs uppercase tracking-widest mb-2">{card.title}</h3>
                  <div className="text-3xl font-bold text-white mb-4" style={{ color: card.color }}>{card.value}</div>
                  <p className="text-sm text-white/50 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-card p-12 text-center bg-gradient-to-br from-[#0EA5E9]/10 to-transparent border-[#0EA5E9]/20"
            >
              <h2 className="font-display text-3xl text-white mb-6">Sucesso Garantido com Treinamento</h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Não apenas entregamos o equipamento. Oferecemos **treinamento especializado** para o uso e manutenção do sistema de aquaponia, elevando o potencial de sucesso da sua colheita e garantindo a saúde do seu ecossistema.
              </p>
              <button className="btn-primary-glow px-10 py-4 text-sm uppercase tracking-widest font-bold">Iniciar Treinamento e Implantação</button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
