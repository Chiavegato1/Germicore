/**
 * ContactSection — Germicore Design System
 * Modern contact form with social links and final CTA
 */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Github, Twitter, ArrowRight, Leaf } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, label: 'Instagram', handle: '@germicore', color: '#E1306C' },
  { icon: Linkedin, label: 'LinkedIn', handle: 'Germicore', color: '#0A66C2' },
  { icon: Github, label: 'GitHub', handle: 'germicore-tech', color: '#ffffff' },
  { icon: Twitter, label: 'Twitter', handle: '@germicore', color: '#1DA1F2' },
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'contato@germicore.com.br' },
  { icon: Phone, label: 'WhatsApp', value: '+55 (11) 99999-0000' },
  { icon: MapPin, label: 'Localização', value: 'São Paulo, Brasil' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.3, triggerOnce: true });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contato" className="relative py-24 lg:py-32 bg-[#020617] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid-bg opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />

      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#22C55E]/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#0EA5E9]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 p-10 lg:p-16 rounded-3xl relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(14,165,233,0.08) 100%)',
            border: '1px solid rgba(34,197,94,0.15)',
          }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 dot-grid-bg opacity-20" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#22C55E] to-[#0EA5E9] flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/20">
              <Leaf className="w-8 h-8 text-[#020617]" />
            </div>

            <h2 className="font-display text-3xl lg:text-5xl font-black text-white leading-tight mb-4">
              Junte-se à Revolução da{' '}
              <span className="text-gradient-green-blue block lg:inline">Agricultura Inteligente</span>
            </h2>

            <p className="font-['Inter'] text-base lg:text-lg text-white/60 max-w-2xl mx-auto mb-8 leading-relaxed">
              Seja você um investidor, parceiro, agricultor ou entusiasta da tecnologia —
              a Germicore tem um lugar para você nessa transformação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contato-form"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contato-form')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary-glow px-8 py-4 text-base flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Entrar em Contato
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:contato@germicore.com.br"
                className="btn-outline-glow px-8 py-4 text-base flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail className="w-5 h-5" />
                Enviar Email
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Contact form + info */}
        <div id="contato-form" className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-6">
            <div ref={titleRef}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={titleInView ? { opacity: 1, x: 0 } : {}}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-8 h-px bg-[#22C55E]" />
                <span className="section-label">Contato</span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="font-display text-2xl lg:text-3xl font-black text-white mb-4"
              >
                Vamos conversar sobre o futuro da agricultura
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={titleInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="font-['Inter'] text-sm text-white/60 leading-relaxed"
              >
                Estamos abertos a parcerias, investimentos, colaborações acadêmicas
                e qualquer iniciativa que acelere nosso impacto.
              </motion.p>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/5"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#22C55E]/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-4 h-4 text-[#22C55E]" />
                  </div>
                  <div>
                    <p className="font-mono-data text-[10px] text-white/30 tracking-wider uppercase">{info.label}</p>
                    <p className="font-['Inter'] text-sm text-white/70">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="font-mono-data text-xs text-white/30 tracking-wider uppercase mb-3">Redes Sociais</p>
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-white/3 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <social.icon className="w-4 h-4 transition-colors" style={{ color: social.color }} />
                    <div>
                      <p className="font-['Inter'] text-xs font-medium text-white/60 group-hover:text-white/80 transition-colors">{social.label}</p>
                      <p className="font-mono-data text-[10px] text-white/30">{social.handle}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-10 text-center h-full flex flex-col items-center justify-center gap-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#22C55E]/20 border border-[#22C55E]/30 flex items-center justify-center">
                  <Send className="w-8 h-8 text-[#22C55E]" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Mensagem enviada!</h3>
                <p className="font-['Inter'] text-sm text-white/60">
                  Obrigado pelo contato. Nossa equipe responderá em até 24 horas.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline-glow px-6 py-2.5 text-sm mt-2"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-6 lg:p-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono-data text-[10px] text-white/40 tracking-wider uppercase mb-2">Nome</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome completo"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 font-['Inter'] focus:outline-none focus:border-[#22C55E]/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-mono-data text-[10px] text-white/40 tracking-wider uppercase mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 font-['Inter'] focus:outline-none focus:border-[#22C55E]/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono-data text-[10px] text-white/40 tracking-wider uppercase mb-2">Assunto</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white font-['Inter'] focus:outline-none focus:border-[#22C55E]/50 transition-all appearance-none"
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="" className="bg-[#0F172A]">Selecione um assunto</option>
                    <option value="investimento" className="bg-[#0F172A]">Investimento</option>
                    <option value="parceria" className="bg-[#0F172A]">Parceria Estratégica</option>
                    <option value="cooperativa" className="bg-[#0F172A]">Cooperativa / ONG</option>
                    <option value="imprensa" className="bg-[#0F172A]">Imprensa / Mídia</option>
                    <option value="academico" className="bg-[#0F172A]">Colaboração Acadêmica</option>
                    <option value="outro" className="bg-[#0F172A]">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono-data text-[10px] text-white/40 tracking-wider uppercase mb-2">Mensagem</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Conte-nos sobre sua proposta, ideia ou interesse..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 font-['Inter'] focus:outline-none focus:border-[#22C55E]/50 focus:bg-white/8 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary-glow py-4 text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
                  whileHover={{ scale: loading ? 1 : 1.01 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#020617]/30 border-t-[#020617] rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Mensagem
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
