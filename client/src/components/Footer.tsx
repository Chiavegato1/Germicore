/**
 * Footer — Germicore Design System (Pixel Art Edition)
 */
import { motion } from 'framer-motion';
import { Leaf, Heart } from 'lucide-react';
import { Link } from 'wouter';

const footerLinks = {
  'Produto': [
    { label: 'Nossa Solução', href: '/solucao' },
    { label: 'Tecnologia', href: '/tecnologia' },
    { label: 'Dashboard', href: '/dashboard' }
  ],
  'Empresa': [
    { label: 'Equipe', href: '/equipe' },
    { label: 'Impacto', href: '/impacto' }
  ],
  'Contato': [
    { label: 'Fale Conosco', href: '/contato' }
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] border-t-4 border-[#22C55E]/20 overflow-hidden">
      <div className="absolute inset-0 dot-grid-bg opacity-5" />
      <div className="scanline" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16 grid grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-[#22C55E] flex items-center justify-center border-2 border-[#166534]">
                <Leaf className="w-4 h-4 text-[#020617]" strokeWidth={3} />
              </div>
              <span className="font-display text-xl font-black text-white tracking-tighter">
                GERMI<span className="text-gradient-green-blue">CORE</span>
              </span>
            </div>
            <p className="text-lg text-white/50 leading-relaxed mb-6 max-w-xs">
              AGRITECH DE IMPACTO SOCIAL DEMOCRATIZANDO O ACESSO À PRODUÇÃO DE ALIMENTOS.
            </p>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#22C55E]/10 border-2 border-[#22C55E]/20 w-fit">
              <div className="w-2 h-2 bg-[#22C55E] animate-pulse" />
              <span className="text-xs text-[#22C55E] uppercase font-bold">FASE: PROTÓTIPO DIGITAL</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display text-[10px] text-[#22C55E] mb-6 uppercase tracking-widest">{category}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <a className="text-lg text-white/40 hover:text-[#22C55E] transition-colors uppercase cursor-pointer">
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-8 border-t-2 border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/20 flex items-center gap-2 uppercase">
            © 2026 GERMICORE. FEITO COM
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            PARA O BRASIL.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/10 uppercase tracking-widest">V1.0.0-PIXEL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
