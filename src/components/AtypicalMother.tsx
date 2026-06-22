import { motion } from 'motion/react';
import { Heart, Sparkles, Quote } from 'lucide-react';

export default function AtypicalMother() {
  return (
    <section id="vivencia-atipica" className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Soft background glow circles */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-rose-100/20 top-1/4 -left-12 filter blur-3xl pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-teal-50/30 bottom-1/4 -right-16 filter blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="bg-white/85 backdrop-blur-md rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-xl border border-rose-100/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle stylized top flower watermark */}
          <div className="absolute top-0 right-0 w-32 h-32 text-rose-100/20 pointer-events-none transform translate-x-8 -translate-y-8 select-none">
            🌱
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Icon panel */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center border border-rose-100 shadow-sm">
                <Heart className="text-rose-500 w-8 h-8 fill-rose-500/20" />
              </div>
              <div>
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest block mb-1">
                  Maternidade Atípica
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
                  A Essência do Nosso Cuidado
                </h3>
              </div>
              <p className="font-sans text-xs text-slate-400">
                Uma conexão que transcende a ciência e encontra o amor em cada pequena conquista.
              </p>
            </div>

            {/* Substantive content */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="relative">
                <Quote className="absolute -top-4 -left-6 w-12 h-12 text-rose-100/60 pointer-events-none" />
                
                <h4 className="font-display font-medium text-lg sm:text-xl text-slate-800 leading-relaxed italic relative z-10">
                  “Mas a NeuroBloom não nasce apenas da minha formação profissional. Ela também nasce da minha vivência.”
                </h4>
              </div>

              <div className="space-y-4 font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>Sou mãe atípica</strong>, e isso transformou radicalmente a forma como eu enxergo o cuidado, o desenvolvimento, as conquistas, os medos, os silêncios e tudo aquilo que tantas famílias vivem todos os dias.
                </p>
                <p>
                  Essa caminhada me ensinou que a reabilitação neurofuncional não fala apenas sobre repetições de movimentos; fala sobre empatia absoluta, sobre acolher o cansaço dos pais e celebrar com alegria genuína cada passo — por menor que pareça aos olhos de fora. 
                </p>
                <p className="text-slate-700 font-medium">
                  Na NeuroBloom, você e seu filho encontram um porto seguro projetado por quem entende profundamente a teoria científica e a realidade do dia a dia no lar.
                </p>
              </div>

              {/* Decorative key benefit tags */}
              <div className="pt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="text-xs font-medium text-rose-600 bg-rose-50 border border-rose-100/65 px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Sparkles size={12} /> Acolhimento Sincero
                </span>
                <span className="text-xs font-medium text-teal-600 bg-teal-50 border border-teal-100/65 px-3 py-1.5 rounded-full flex items-center gap-1">
                  🧠 Sensibilidade Neurofuncional
                </span>
                <span className="text-xs font-medium text-slate-650 bg-slate-100 border border-slate-200/50 px-3 py-1.5 rounded-full">
                  Parceria com a Família
                </span>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
