import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';
import { Link, useLocation } from 'wouter';

const navLinks = [
  { label: 'Problema', href: '/problema' },
  { label: 'Solução', href: '/solucao' },
  { label: 'Tecnologia', href: '/tecnologia' },
  { label: 'Aquaponia', href: '/aquaponia' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Impacto', href: '/impacto' },
  { label: 'Equipe', href: '/equipe' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || location !== '/'
            ? 'bg-[#020617]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/">
              <motion.a
                className="flex items-center gap-2.5 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#22C55E] to-[#0EA5E9] flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:shadow-green-500/40 transition-shadow">
                  <Leaf className="w-4 h-4 text-[#020617]" strokeWidth={2.5} />
                </div>
                <span className="font-display text-xl font-black tracking-tight text-white">
                  Germi<span className="text-gradient-green-blue">core</span>
                </span>
              </motion.a>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <Link key={link.href} href={link.href}>
                  <motion.a
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                      location === link.href 
                        ? 'text-white bg-white/10' 
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </motion.a>
                </Link>
              ))}
            </div>

            {/* CTA + Mobile */}
            <div className="flex items-center gap-3">
              <Link href="/contato">
                <motion.a
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="hidden sm:flex btn-primary-glow px-5 py-2.5 text-sm items-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Fale Conosco
                </motion.a>
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#020617]/95 backdrop-blur-xl border-b border-white/5 lg:hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    onClick={() => setMobileOpen(false)}
                    className={`text-left px-4 py-3 rounded-lg transition-all font-medium cursor-pointer ${
                      location === link.href 
                        ? 'text-white bg-white/10' 
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <Link href="/contato">
                <a
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 btn-primary-glow px-5 py-3 text-sm text-center cursor-pointer"
                >
                  Fale Conosco
                </a>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
