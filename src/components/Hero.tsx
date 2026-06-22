import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowDown, Sparkles, Heart } from 'lucide-react';

export default function Hero() {
  const [introPhase, setIntroPhase] = useState(0); // 0: Logo, 1: Sprout, 2: Reveal main hero
  const whatsAppLink = "https://wa.me/5541995727641?text=Olá%20Dra.%20Aryane,%20gostaria%20de%20agendar%20uma%20avaliação.";

  useEffect(() => {
    // 0 -> 1: Sprout starts around 2 seconds
    const timer1 = setTimeout(() => {
      setIntroPhase(1);
    }, 2200);

    // 1 -> 2: Transition out the intro loader overlay around 5.2 seconds, complete by 6.0 seconds.
    const timer2 = setTimeout(() => {
      setIntroPhase(2);
      // Unlock body scrolling once transition starts
      document.body.style.overflow = 'auto';
    }, 5200);

    // Lock scroll on mount
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      document.body.style.overflow = 'auto'; // ensure unlocked
    };
  }, []);

  return (
    <section id="home" className="relative min-h-[96vh] flex items-center bg-radial from-white via-neutral-soft to-slate-50 overflow-hidden pt-28 sm:pt-36 lg:pt-32 pb-12 sm:pb-20">
      {/* 6-Second Intro Loader Screen */}
      <AnimatePresence>
        {introPhase < 2 && (
          <motion.div
            id="hero-intro-loader"
            className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center px-4"
            exit={{ 
              opacity: 0,
              y: -50,
              transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
            }}
          >
            {/* Ambient Background Glow during intro */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-serenity-light/30 filter blur-3xl animate-bloom-glow -top-10 -left-10" />
            <div className="absolute w-[400px] h-[400px] rounded-full bg-foam-light/25 filter blur-3xl animate-bloom-glow bottom-[-10%] right-[-10%]" />

            <div className="max-w-md w-full text-center space-y-8 relative">
              {/* Brand Logo with Pulsing Rings - Scaled up for prominent entry */}
              <div className="flex justify-center relative scale-110 mb-6">
                <motion.div
                  className="absolute w-56 h-56 rounded-full bg-blue-100/40"
                  style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute w-56 h-56 rounded-full bg-emerald-100/30"
                  style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
                />
                
                <motion.div
                  className="relative w-44 h-44 bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100/80 flex items-center justify-center p-2.5 z-10"
                  initial={{ scale: 0.5, rotate: -15, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                  <img
                    src="https://i.postimg.cc/59T65c58/Chat-GPT-Image-22-de-jun-de-2026-12-06-20.png"
                    alt="NeuroBloom Logo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </motion.div>
              </div>

              {/* Sequencing texts with timing */}
              <div className="space-y-3">
                <motion.h2
                  className="font-display font-bold text-3xl tracking-wide text-slate-800"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  NeuroBloom
                </motion.h2>
                
                <motion.p
                  className="text-slate-400 text-xs font-semibold uppercase tracking-widest"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  Fisioterapia Neurofuncional
                </motion.p>

                <AnimatePresence>
                  {introPhase === 1 && (
                    <motion.p
                      className="text-serenity-dark text-sm italic font-medium pt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      "Movimento é vida, conexões florescem..."
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Simple subtle loading progress bar representing exactly 5.2 seconds progress */}
              <div className="w-48 h-1 bg-slate-100 rounded-full mx-auto overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-serenity-medium to-foam-medium"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5.2, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Decorative Neuro-Spacial Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft floating colored glowing circles */}
        <div className="absolute w-[450px] h-[450px] rounded-full bg-serenity-light/20 -top-40 -right-20 filter blur-3xl animate-bloom-glow" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-foam-light/15 bottom-[-10%] left-[-10%] filter blur-3xl animate-bloom-glow" />
        
        {/* Abstract floating botanical leaves / synaptic sparkles */}
        <div className="absolute top-[25%] left-[5%] animate-bounce opacity-40 text-serenity-medium" style={{ animationDuration: '8s' }}>
          <Sparkles size={24} />
        </div>
        <div className="absolute bottom-[20%] right-[8%] animate-pulse opacity-40 text-foam-medium" style={{ animationDuration: '6s' }}>
          <Heart size={20} />
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-center text-center lg:text-left">
            
            {/* Medical Care Tag */}
            <motion.div
              id="hero-care-badge"
              className="inline-flex self-center lg:self-start items-center gap-2 bg-blue-50 text-serenity-dark px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-blue-100"
              initial={{ opacity: 0, y: 15 }}
              animate={introPhase === 2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="flex h-2 w-2 rounded-full bg-serenity-medium animate-pulse" />
              <span>Fisioterapia Neurofuncional</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                id="hero-headline"
                className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-serenity-dark tracking-tight leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={introPhase === 2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Recuperando movimentos,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-serenity-medium to-foam-light font-bold">
                  florescendo vidas
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                id="hero-subtitle"
                className="font-sans text-lg text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={introPhase === 2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Prestando atendimento especializado para crianças e adultos. Fisioterapia domiciliar humanizada em Colombo, Curitiba e região metropolitana.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              id="hero-actions"
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-2"
              initial={{ opacity: 0, y: 25 }}
              animate={introPhase === 2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <a
                id="hero-whatsapp-btn"
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#1a365d] active:scale-95 text-white rounded-2xl font-bold shadow-lg shadow-blue-900/10 flex items-center justify-center gap-2 hover:-translate-y-[2px] transition duration-300 cursor-pointer"
              >
                <span>Agendar Avaliação</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a
                id="hero-learn-more-btn"
                href="#sobre"
                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-100 text-slate-700 rounded-2xl font-bold shadow-sm hover:bg-slate-50 transition duration-300 flex items-center justify-center gap-2"
              >
                <span>Conheça a Dra. Aryane</span>
              </a>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              id="hero-trust-indicators"
              className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100 max-w-sm mx-auto lg:mx-0 text-sm"
              initial={{ opacity: 0 }}
              animate={introPhase === 2 ? { opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 1.1 }}
            >
              <div className="flex items-center gap-3 text-slate-500">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-lg">
                  📧
                </div>
                <span className="text-xs break-all">NeuroBloom.fisio@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 font-semibold">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-lg">
                  📱
                </div>
                <span>(41) 99572-7641</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Content - Professional portrait with elegant layered frames */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              id="hero-portrait-frame"
              className="relative w-full max-w-[380px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={introPhase === 2 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            >
              {/* Outer decorative backplates */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-serenity-light/40 to-foam-light/40 rounded-[4rem] filter blur-xl opacity-80 animate-pulse pointer-events-none" style={{ animationDuration: '10s' }} />
              
              {/* Main portrait wrapper */}
              <div className="relative w-full h-[500px] bg-slate-200 rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white group">
                <img
                  src="https://i.postimg.cc/xTcNBwSc/634484.jpg"
                  alt="Dra. Aryane Bukner - Fisioterapeuta Neurofuncional"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top brightness-100 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Visual Overlay mimicking professional medical badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
                

              </div>
            </motion.div>
          </div>
          </div>
        
        {/* Scroll hint icon */}
        <motion.div
          id="hero-scroll-cue"
          className="flex justify-center pt-12 lg:pt-4"
          initial={{ opacity: 0 }}
          animate={introPhase === 2 ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          <a
            href="#sobre"
            className="flex flex-col items-center gap-1.5 text-xs text-slate-400 font-medium hover:text-serenity-dark transition-colors"
          >
            <span>Deslize para explorar</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={14} className="text-slate-400" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
