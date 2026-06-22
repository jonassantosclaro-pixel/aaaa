import { motion } from 'motion/react';
import { MessageCircle, Check, ShieldCheck, HeartPulse } from 'lucide-react';

export default function Specialties() {
  const whatsAppLink = "https://wa.me/5541995727641?text=Olá%20Dra.%2520Aryane,%20gostaria%20de%20agendar%2520uma%20avaliação.";

  // Exact specialties format layout
  const coreSpecialties = [
    { emoji: '🧠', text: 'Fisioterapia Neurofuncional', desc: 'Tratamento especializado focado no sistema nervoso central e periférico para recuperar vias e potencializar a plasticidade neural.' },
    { emoji: '🧒', text: 'Adulto | Pediátrico', desc: 'Acompanhamento sob medida para crianças em desenvolvimento motor e adultos que buscam manter ou reaver suas potencialidades.' },
    { emoji: '🧬', text: 'Síndromes Genéticas | Doenças Raras', desc: 'Protocolos adaptados para condições raras que demandam extremo carinho, paciência e atenção sensível a cada detalhe anatômico.' },
    { emoji: '⚡', text: 'Alterações Neurológicas', desc: 'Reabilitação direcionada para disfunções de força, tônus, equilíbrio e controle motor secundárias a lesões neurológicas.' },
    { emoji: '🏠', text: 'Atendimento Domiciliar', desc: 'O máximo de comodidade, segurança e eficácia no seio do lar para Colombo e toda a região metropolitana.' }
  ];

  // Specific pathways and pathologies
  const conditions = [
    {
      title: 'AVC (Acidente Vascular Cerebral)',
      desc: 'Reabilitação motora precoce para corrigir padrões de marcha, espasticidade e readquirir o uso funcional dos membros acometidos.',
      tag: 'Adulto'
    },
    {
      title: 'TCE (Traumatismo Cranioencefálico)',
      desc: 'Adequação postural, estimulação sensório-motora e readequação de equilíbrio dinâmico para reconquistar a autossuficiência.',
      tag: 'Adulto e Pediátrico'
    },
    {
      title: 'Doença de Parkinson',
      desc: 'Exercícios específicos voltados para dupla tarefa, controle de rigidez, prevenção de quedas, coordenação fina e amplitude de passos.',
      tag: 'Adulto / Idoso'
    },
    {
      title: 'Alzheimer & Demências',
      desc: 'Manutenção da mobilidade geral, estimulação proprioceptiva e prevenção ativa das complicações decorrentes do declínio motor.',
      tag: 'Idoso'
    },
    {
      title: 'Fisioterapia para Idosos',
      desc: 'Combate direto à perda de massa muscular, treino de marcha, ganho de força muscular e adaptações espaciais contra acidentes domésticos.',
      tag: 'Geriátrico'
    },
    {
      title: 'Atraso do Desenvolvimento',
      desc: 'Intervenção precoce pediátrica, estimulando marcos motores cruciais como rolar, sentar, engatinhar e andar firme.',
      tag: 'Pediátrico'
    }
  ];

  return (
    <section id="especialidades" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Visual background gradient accents */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-serenity-light/10 -top-10 -right-10 filter blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold text-serenity-dark uppercase tracking-widest block">Áreas de Atuação Especializada</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Especialidades Médicas e Funcionais
          </h2>
          <p className="font-sans text-slate-600 text-base leading-relaxed">
            Oferecendo reabilitação de alta performance e profundo carinho humano. Conectamos rigor científico ao ambiente acolhedor do domicílio.
          </p>
        </div>

        {/* 1. REQUIRED FORMAT PRESENTATION - Big Beautiful visual panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          {/* Visual Presentation list of requested exact specialties */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white p-8 sm:p-10 rounded-3xl shadow-md border border-slate-100">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 pb-4 border-b border-slate-100">
                <HeartPulse className="text-serenity-dark w-6 h-6 animate-pulse" />
                <h3 className="font-display font-semibold text-xl text-slate-800">
                  Pilares do Cuidado NeuroBloom
                </h3>
              </div>
              
              {/* EXACT FORMAT PRESENTATION */}
              <div className="space-y-6 pt-2">
                {coreSpecialties.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4 group"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-neutral-soft flex items-center justify-center text-2xl shadow-sm border border-slate-100 group-hover:bg-serenity-light/40 group-hover:scale-110 transition-all duration-300 shrink-0">
                      {item.emoji}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display font-semibold text-slate-800 text-base sm:text-lg group-hover:text-serenity-dark transition-colors">
                        {item.text}
                      </h4>
                      <p className="font-sans text-slate-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick warning list about home-health-checks */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center space-x-3 text-xs text-slate-500">
              <ShieldCheck className="text-emerald-500 w-5 h-5 shrink-0" />
              <span>Todos os protocolos de reabilitação seguem diretrizes regulamentadas pelo COFFITO.</span>
            </div>
          </div>

          {/* Side Graphic and Quick Assessment Trigger */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#A5D6FF] to-[#98E6C9]/40 p-8 sm:p-10 rounded-3xl flex flex-col justify-between text-slate-800 shadow-xl relative overflow-hidden group">
            {/* background circle designs */}
            <div className="absolute w-56 h-56 rounded-full bg-white/20 -top-20 -right-20 pointer-events-none" />
            <div className="absolute w-36 h-36 rounded-full bg-slate-900/5 -bottom-10 -left-10 pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-white/50 px-3 py-1 rounded-full inline-block">
                Colombo e RMC
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-800 tracking-tight leading-tight">
                Dificuldade de locomoção? Atendemos em seu lar.
              </h3>
              <p className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed">
                Nossos equipamentos são transportados diretamente até a sua residência para realizar uma sessão terapêutica idêntica à de um consultório clínico física tradicional, porém com o conforto e o bem-estar que só seu lar oferece.
              </p>
              
              <ul className="space-y-2.5 text-sm font-medium text-slate-800">
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-700">✓</span>
                  <span>Avaliação diagnóstica completa no domicílio</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-700">✓</span>
                  <span>Adaptação dos exercícios com as barreiras do lar</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-emerald-700">✓</span>
                  <span>Menos estresse de deslocamento para o paciente</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-8 relative z-10">
              <a
                id="specialties-trigger-btn"
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1a365d] hover:bg-slate-800 text-white font-semibold py-4 px-6 rounded-2xl flex items-center justify-center space-x-2 shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle size={18} />
                <span>Solicitar Avaliação Domiciliar</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. SECONDARY CLINICAL conditions and pathways */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-800">
              Patologias e Condições Clinicamente Monitoradas
            </h3>
            <p className="text-slate-500 text-sm">
              Tratamentos específicos moldados para as manifestações singulares de cada diagnóstico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {conditions.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-serenity-medium/40 transition-all duration-300 flex flex-col justify-between"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 block">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="font-display font-semibold text-slate-800 text-base sm:text-lg">
                    {item.title}
                  </h4>
                  <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                <div className="pt-4 mt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold">
                  <a
                    id={`condition-link-${index}`}
                    href={whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-serenity-dark hover:text-indigo-900 transition-colors inline-flex items-center space-x-1"
                  >
                    <span>Tratar esta condição</span>
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
