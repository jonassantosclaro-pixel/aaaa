import { motion } from 'motion/react';
import { CheckCircle2, Award, Heart, BookOpen } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Heart className="text-rose-500 w-5 h-5" />,
      title: 'Cuidado Humanizado',
      description: 'O paciente e sua família são acolhidos em sua totalidade, com sensibilidade e respeito às suas lutas diárias.'
    },
    {
      icon: <BookOpen className="text-serenity-dark w-5 h-5" />,
      title: 'Prática Baseada em Evidências',
      description: 'Condutas construídas sobre as melhores publicações científicas mundiais e diretrizes neurofuncionais.'
    },
    {
      icon: <Award className="text-amber-500 w-5 h-5" />,
      title: 'Foco na Autonomia',
      description: 'Mais do que exercícios: treinar movimentos reais que devolvem liberdade, independência e o prazer de viver.'
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative light elements */}
      <div className="absolute w-[350px] h-[350px] rounded-full bg-foam-light/10 -bottom-20 -left-20 filter blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* About Image / Visual Element */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Backglow blur */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-foam-light/30 via-slate-50 to-serenity-light/30 rounded-3xl filter blur-xl opacity-60" />

              {/* Main Clinical Card */}
              <motion.div
                className="relative bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl shadow-xl border border-slate-100"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-6">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">🌱</span>
                    <div>
                      <h4 className="font-display font-semibold text-lg text-slate-800 leading-tight">O Propósito NeuroBloom</h4>
                      <p className="text-xs text-slate-400">Origem da Identidade Visual</p>
                    </div>
                  </div>

                  <p className="font-sans text-slate-600 text-sm leading-relaxed">
                    A marca <strong>NeuroBloom</strong> nasceu da junção entre <strong>Neuro</strong> (representando as conexões de reabilitação cerebral, plasticidade e sinapses) e <strong>Bloom</strong> (que significa desabrochar, florescer). 
                  </p>
                  
                  <p className="font-sans text-slate-600 text-sm leading-relaxed">
                    Acreditamos que, mesmo diante de graves lesões do sistema nervoso, novas ramificações e comportamentos motores podem desabrochar quando regados com dedicação técnica, amor e respeito duradouros.
                  </p>

                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex items-start space-x-2.5">
                      <CheckCircle2 className="text-emerald-500 w-4 h-4 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-700">Atendimento humanizado domiciliar permanente</span>
                    </div>
                    <div className="flex items-start space-x-2.5">
                      <CheckCircle2 className="text-emerald-500 w-4 h-4 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-700">Abordagem científica individualizada</span>
                    </div>
                    <div className="flex items-start space-x-2.5">
                      <CheckCircle2 className="text-emerald-500 w-4 h-4 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-700">Segurança de reabilitação no conforto do lar</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Abstract Floating leaf badge */}
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-[#1a365d] text-white rounded-2xl p-4 shadow-xl text-center hidden sm:block"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="block font-display font-bold text-lg text-serenity-light">CREFITO 8</span>
                <span className="block text-[10px] text-slate-300 font-medium tracking-wide uppercase">Dra. Aryane Bukner</span>
              </motion.div>
            </div>
          </div>

          {/* About Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-serenity-dark uppercase tracking-widest block">Sobre a Profissional</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Dra. Aryane Bukner
              </h2>
              <p className="text-sm text-serenity-dark font-semibold font-display italic">
                Fisioterapeuta Neurofuncional • Colombo PR e região metropolitana
              </p>
            </div>

            <div className="space-y-5 font-sans text-slate-600 text-base leading-relaxed">
              <p>
                A <strong className="text-slate-800">Dra. Aryane Bukner</strong> é fisioterapeuta neurofuncional inteiramente dedicada à reabilitação de crianças e adultos com alterações neurológicas. Com atendimento domiciliar humanizado em Colombo e região metropolitana, busca incansavelmente promover autonomia, funcionalidade e qualidade de vida através de tratamentos altamente personalizados e baseados no que há de mais recente em evidências científicas.
              </p>
              
              <blockquote className="border-l-4 border-serenity-medium pl-4 py-1.5 my-6 text-slate-700 italic bg-slate-50 rounded-r-lg font-medium">
                “Hoje nasce a NeuroBloom, uma marca com identidade e propósito profundo: oferecer cuidado neurofuncional especializado, individualizado e verdadeiramente sensível às singularidades de cada trajetória.”
              </blockquote>

              <p>
                O atendimento domiciliar proporciona um pilar indispensável para quem enfrenta desafios motores: o treinamento no próprio ambiente de vida do paciente. Isso acelera a aprendizagem de tarefas diárias como alimentar-se, andar e realizar transferências de forma segura, garantindo um acolhimento carinhoso e integrador para os familiares.
              </p>
            </div>

            {/* Core Values / Pill list */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-6">
              {values.map((v, i) => (
                <div key={i} className="flex-1 space-y-2">
                  <div className="flex items-center space-x-2">
                    {v.icon}
                    <h5 className="font-display font-semibold text-sm text-slate-800">{v.title}</h5>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">{v.description}</p>
                </div>
              ))}
            </div>

            {/* Action link */}
            <div className="pt-4 flex items-center space-x-4">
              <a
                id="about-action-btn"
                href="#especialidades"
                className="inline-flex items-center space-x-2 text-serenity-dark text-sm font-bold hover:text-indigo-900 transition-colors"
              >
                <span>Ver especialidades de atuação</span>
                <span className="font-display font-bold">→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
