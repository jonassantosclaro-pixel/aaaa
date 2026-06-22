import { motion } from 'motion/react';
import { Sparkles, HelpingHand, Eye, Milestone, HeartHandshake } from 'lucide-react';

export default function Benefits() {
  const benefitList = [
    {
      icon: <Sparkles className="text-violet-600 w-6 h-6" />,
      title: 'Estimulação da Neuroplasticidade',
      desc: 'Desperta e modela novas conexões neurais no cérebro e medula espinhal para substituir vias lesionadas por AVC ou outras patologias.'
    },
    {
      icon: <HelpingHand className="text-emerald-605 w-6 h-6" />,
      title: 'Prevenção de Deformidades',
      desc: 'Evita atrofias severas, rigidezes crônicas e encurtamentos musculares incapacitantes causados pelo desuso ou espasticidade.'
    },
    {
      icon: <Eye className="text-blue-600 w-6 h-6" />,
      title: 'Treinamento de Equilíbrio Dinâmico',
      desc: 'Reduz de forma drástica os acidentes e escorregões domésticos em idosos mediante readequação proprioceptiva profunda.'
    },
    {
      icon: <Milestone className="text-indigo-600 w-6 h-6" />,
      title: 'Reconquista de Atividades Diárias',
      desc: 'Ensina padrões corretivos para tarefas como segurar talheres, pentear o cabelo, levantar-se da cama ou realizar transferências.'
    },
    {
      icon: <HeartHandshake className="text-rose-600 w-6 h-6" />,
      title: 'Acolhimento Integral de Cuidadores',
      desc: 'Orienta pais e cuidadores sobre posicionamentos adequados, manobras de transferência sem sobrecarga nas costas e readequação domiciliar.'
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-white relative overflow-hidden">
      {/* Backlighting */}
      <div className="absolute w-[350px] h-[350px] rounded-full bg-serenity-light/10 top-1/2 left-[-10%] filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Illustration text element */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-serenity-dark uppercase tracking-widest block">Benefícios Clínicos</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Por que escolher a Fisioterapia Neurofuncional?
            </h2>
            
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              Diferente de dores musculares comuns tratadas pela traumato-ortopedia convencional, as lesões de origem neurológica exigem estimulação sensorial profunda, neuroplasticidade e repetição estratégica.
            </p>
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              O neurodesenvolvimento de uma criança e a manutenção funcional de uma pessoa idosa dependem diretamente da frequência e da precisão técnica dos estímulos aplicados pela profissional assistente.
            </p>

            <div className="pt-4">
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center space-x-3 text-sm text-emerald-800">
                <span className="text-lg">🌿</span>
                <span className="font-medium">Tratamento seguro, individualizado e sem pressa.</span>
              </div>
            </div>
          </div>

          {/* Right: List of benefits */}
          <div className="lg:col-span-7 space-y-6">
            {benefitList.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md hover:border-serenity-light transition-all duration-350 group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 shrink-0">
                  {benefit.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-semibold text-slate-800 text-base group-hover:text-serenity-dark transition-colors">
                    {benefit.title}
                  </h4>
                  <p className="font-sans text-slate-550 text-xs sm:text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
