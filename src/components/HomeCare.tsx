import { motion } from 'motion/react';
import { CalendarRange, Activity, ClipboardList, Home, MessageCircle, ArrowRight } from 'lucide-react';

export default function HomeCare() {
  const whatsAppLink = "https://wa.me/5541995727641?text=Olá%20Dra.%2520Aryane,%20gostaria%20de%20agendar%252520uma%20avaliação.";

  const steps = [
    {
      num: '01',
      icon: <CalendarRange className="text-serenity-dark w-6 h-6" />,
      title: 'Agendamento Prático',
      desc: 'Entre em contato pelo WhatsApp. Nós conversamos sobre as queixas principais do paciente e escolhemos o melhor dia e horário para a visita diagnóstica.'
    },
    {
      num: '02',
      icon: <ClipboardList className="text-foam-dark w-6 h-6" />,
      title: 'Avaliação Avançada no Lar',
      desc: 'A Dra. Aryane vai até a residência e analisa o tônus muscular, marcha, equilíbrio, força, amplitude de movimento e estuda o ambiente em busca de barreiras físicas ou riscos de queda.'
    },
    {
      num: '03',
      icon: <Activity className="text-indigo-600 w-6 h-6" />,
      title: 'Plano Baseado em Evidências',
      desc: 'Criamos um protocolo exclusivo com metas e prazos reais compartilhados com os familiares. O tratamento é centrado no objetivo particular do paciente (Ex: sentar com autonomia ou voltar a andar).'
    },
    {
      num: '04',
      icon: <Home className="text-emerald-600 w-6 h-6" />,
      title: 'Sessões e Reavaliações',
      desc: 'Realizamos os treinos motores e a reabilitação com materiais portáteis estéreis trazidos pela terapeuta, com atualizações periódicas da escala funcional.'
    }
  ];

  return (
    <section id="atendimento" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[#98E6C9]/10 -bottom-20 -right-20 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-serenity-dark uppercase tracking-widest block">Metodologia Neurofuncional</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Como funciona o Atendimento Domiciliar?
            </h2>
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              Entenda o passo a passo simplificado para iniciar o tratamento neurofuncional especializado no conforto de sua casa em Colombo-PR e arredores.
            </p>
          </div>
          
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <span className="text-xs font-semibold text-slate-500 border border-slate-200 bg-white/70 px-4 py-2 rounded-full inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> Atendimento Personalizado
            </span>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              id={`step-card-${index}`}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative hover:shadow-md hover:border-serenity-light transition-all duration-300 group flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="space-y-4">
                {/* Number indicator */}
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-3xl text-slate-100 group-hover:text-serenity-light/40 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-neutral-soft flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-display font-semibold text-slate-800 text-base sm:text-lg">
                    {step.title}
                  </h4>
                  <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Progress arrow indicator for desktop except last step */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] z-20 text-slate-300 group-hover:text-serenity-medium transition-colors">
                  <ArrowRight size={18} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional trust info and Call To Action */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm col-span-full max-w-4xl mx-auto text-center space-y-6">
          <h3 className="font-display font-semibold text-slate-800 text-lg sm:text-xl">
            Toda a estrutura de reabilitação vai com a fisioterapeuta!
          </h3>
          <p className="font-sans text-slate-600 text-sm max-w-2.5xl mx-auto leading-relaxed">
            Você não precisa comprar aparelhos caros. A Dra. Aryane Bukner leva faixas elásticas, exercitadores, pesos, eletroestimulador portátil (FES/TENS), estimulação sensorial e todo o acervo técnico específico necessários para a conduta.
          </p>
          <div className="pt-2">
            <a
              id="homecare-whats-cta"
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#1a365d] hover:bg-slate-800 active:scale-95 text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-[2px]"
            >
              <MessageCircle size={20} />
              <span>Solicitar Orçamento sem Compromisso</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
