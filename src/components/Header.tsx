import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Dicas & Educação', href: '#educacao' },
    { label: 'Atendimento', href: '#atendimento' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Feed', href: '#galeria' }
  ];

  const whatsAppLink = "https://wa.me/5541995727641?text=Olá%20Dra.%20Aryane,%20gostaria%20de%20agendar%20uma%20avaliação.";

  return (
    <motion.header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 py-3' 
          : 'bg-transparent py-5'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 5.5, duration: 0.8 }} // Appears near/after hero sequence completes
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo and Brand */}
        <a id="header-logo-link" href="#home" className="flex items-center space-x-2 group">
          <div className="relative w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100 p-0.5">
            <img 
              src="https://i.postimg.cc/59T65c58/Chat-GPT-Image-22-de-jun-de-2026-12-06-20.png" 
              alt="NeuroBloom" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-tight text-serenity-dark group-hover:text-slate-900 transition-colors leading-none">NeuroBloom <span className="font-light text-slate-500">Fisio</span></span>
            <span className="font-sans text-[10px] text-slate-400 font-medium">Dra. Aryane</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {menuItems.map((item) => (
            <a
              key={item.href}
              id={`nav-${item.href.replace('#', '')}`}
              href={item.href}
              className="px-3 py-2 text-sm text-slate-600 hover:text-serenity-dark transition-colors duration-200 font-medium rounded-lg hover:bg-slate-50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            id="contact-header-phone"
            href="tel:+5541995727641"
            className="text-sm font-semibold text-slate-600 flex items-center gap-1.5 hover:text-serenity-dark transition-colors"
          >
            <Phone size={14} className="text-serenity-medium" />
            (41) 99572-7641
          </a>
          <a
            id="contact-header-btn"
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-serenity-medium hover:bg-serenity-light text-white text-xs font-semibold px-5 py-2.5 rounded-full cursor-pointer transition shadow-md flex items-center space-x-1 hover:shadow-lg hover:-translate-y-[1px]"
          >
            <MessageCircle size={14} />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center space-x-3">
          <a
            id="contact-header-phone-mobile"
            href="tel:+5541995727641"
            className="p-2 text-slate-500 hover:text-slate-800"
            aria-label="Ligar para Dra. Aryane"
          >
            <Phone size={18} />
          </a>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-serenity-medium rounded"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            className="fixed inset-x-0 top-[60px] bg-white border-b border-slate-100 shadow-xl overflow-hidden z-30 flex flex-col md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-3 pb-6 space-y-2 flex flex-col">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  id={`mobile-nav-${item.href.replace('#', '')}`}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-base text-slate-700 hover:text-serenity-dark hover:bg-slate-50 rounded-lg transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <div className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600">
                  <span className="font-semibold text-slate-800">Cuidado Domiciliar em Colombo, Curitiba e Região</span>
                </div>
                <a
                  id="mobile-whatsapp-call"
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-serenity-medium hover:bg-serenity-light text-white font-semibold py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 shadow"
                >
                  <MessageCircle size={18} />
                  Agendar Avaliação pelo WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
