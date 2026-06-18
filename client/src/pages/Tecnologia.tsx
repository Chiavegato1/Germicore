import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Model3DSection from '@/components/Model3DSection';
import { Cpu, Lightbulb, Droplets, Thermometer, Wind, Zap, Database, Search, RefreshCw, Sun } from 'lucide-react';

const techDetails = [
  {
    icon: Zap,
    title: 'Painéis Solares Inteligentes',
    desc: 'Instalados acima ou ao lado da incubadora, nossos painéis solares de alta eficiência garantem que o sistema seja energeticamente autônomo. Eles captam energia limpa para alimentar os LEDs e sensores, reduzindo o custo operacional a quase zero.',
    color: '#F59E0B'
  },
  {
    icon: RefreshCw,
    title: 'Biorreator de Bactérias',
    desc: 'Um sistema biológico avançado que processa resíduos e controla gases. Ele evita o efeito estufa interno ao converter CO2 e outros subprodutos em nutrientes gasosos e líquidos, devolvendo-os diretamente para as plantas em um ciclo perfeito.',
    color: '#10B981'
  },
  {
    icon: Lightbulb,
    title: 'Iluminação LED Bio-Ativa',
    desc: 'Nossa barra de LED utiliza espectro total (Full Spectrum), simulando a luz solar com precisão. Diferente de LEDs comuns, incluímos frequências de vermelho distante e azul profundo que aceleram a fotossíntese em até 40%, permitindo colheitas em menos de 15 dias.',
    color: '#EAB308'
  },
  {
    icon: Droplets,
    title: 'Nutrição Inteligente (Adubo)',
    desc: 'O sistema de adubação é 100% automatizado. Utilizamos uma solução nutritiva balanceada (macro e micronutrientes) que é injetada na água via bombas de precisão. A IA monitora a condutividade elétrica (EC) para garantir que a planta receba exatamente o que precisa, sem desperdício.',
    color: '#22C55E'
  },
  {
    icon: Cpu,
    title: 'Sensores de Alta Precisão',
    desc: 'Monitoramento constante de pH, temperatura da água, umidade do ar e níveis de CO2. Os sensores enviam dados a cada segundo para o núcleo de IA, que ajusta o ambiente instantaneamente para evitar estresse vegetal.',
    color: '#0EA5E9'
  },
  {
    icon: Wind,
    title: 'Climatização Controlada',
    desc: 'Micro-ventiladores integrados garantem a circulação de ar, prevenindo fungos e fortalecendo o caule das plantas. O sistema mantém a temperatura ideal entre 22°C e 26°C, independente do clima externo.',
    color: '#34D399'
  },
  {
    icon: Database,
    title: 'IA com Aprendizado por Recompensa',
    desc: 'O cérebro do sistema não apenas executa comandos, ele aprende. Se uma planta cresce mais rápido com 5% menos água, a IA registra isso e aplica o conhecimento em todas as unidades da rede através de intercomunicação global.',
    color: '#A855F7'
  }
];

export default function Tecnologia() {
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
              <span className="section-label">Engenharia de Ponta</span>
              <h1 className="font-display text-5xl md:text-6xl text-white mt-4">Tecnologia GermiCore</h1>
              <p className="text-white/60 mt-6 max-w-2xl mx-auto text-lg">
                Do hardware ao software, cada milímetro da nossa estufa foi projetado para máxima eficiência e sustentabilidade.
              </p>
            </motion.div>

            <Model3DSection />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
              {techDetails.map((tech, i) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 group hover:border-[#22C55E]/40 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ color: tech.color }}>
                    <tech.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl text-white mb-4">{tech.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{tech.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Comparativo de Eficiência */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="mt-24 glass-card p-10 border-[#0EA5E9]/20 bg-gradient-to-br from-[#0EA5E9]/5 to-transparent"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-3xl text-white mb-6">Por que nossa tecnologia é superior?</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#22C55E]/20 flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5 text-[#22C55E]" />
                      </div>
                      <div>
                        <p className="text-white font-bold">Consumo de Energia Otimizado</p>
                        <p className="text-sm text-white/50">Nossos algoritmos de IA ligam e desligam componentes apenas no momento exato, reduzindo o custo elétrico em 30%.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#0EA5E9]/20 flex items-center justify-center shrink-0">
                        <Search className="w-5 h-5 text-[#0EA5E9]" />
                      </div>
                      <div>
                        <p className="text-white font-bold">Manutenção Preditiva</p>
                        <p className="text-sm text-white/50">O sistema avisa antes de um sensor falhar ou antes da solução nutritiva acabar, garantindo que nada pare.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                   <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                      <img 
                        src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop" 
                        alt="Sensores e Hardware" 
                        className="w-full h-full object-cover opacity-40"
                      />
                   </div>
                   <div className="absolute -bottom-4 -right-4 glass-card p-4 border-[#22C55E]/30">
                      <p className="text-[10px] text-[#22C55E] font-bold uppercase tracking-widest">Hardware v2.1</p>
                      <p className="text-white font-mono-data text-xs">Uptime: 99.9%</p>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
