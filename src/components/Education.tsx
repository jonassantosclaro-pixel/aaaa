import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Activity, AlertTriangle, HelpCircle, Eye, RefreshCw, MessageCircle } from 'lucide-react';

export default function Education() {
  const [activeTab, setActiveTab] = useState<'idoso' | 'imobilismo' | 'familia' | 'genetica'>('idoso');
  const whatsAppLink = "https://wa.me/5541995727641?text=Olá%20Dra.%2520Aryane,%20li%2520seu%20artigo%2520educativo%2520e%2520gostaria%2520de%2520agendar%2520uma%2520avaliação.";

  const tabs = [
    { id: 'idoso', title: 'Perna do Idoso', icon: <Eye size={16} /> },
    { id: 'imobilismo', title: 'Síndrome do Imobilismo', icon: <AlertTriangle size={16} /> },
    { id: 'familia', title: 'Querida Família', icon: <Heart size={16} /> },
    { id: 'genetica', title: 'Genética vs Rara', icon: <HelpCircle size={16} /> }
  ] as const;

  return (
    <section id="educacao" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blurred backgrounds */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-serenity-light/10 bottom-[-10%] right-[-10%] filter blur-3xl pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-foam-light/10 top-[-5%] left-[-5%] filter blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold text-serenity-dark uppercase tracking-widest block">Espaço Dicas & Educação</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Educação & Informação para Famílias
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            A reabilitação neurofuncional vai além da sessão de fisioterapia. Ela passa pelo conhecimento diário de quem cuida. Leia os materiais preparados pela Dra. Aryane.
          </p>
        </div>

        {/* Tab switch control */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-100 rounded-2xl mb-12 max-w-3xl mx-auto border border-slate-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-btn-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              {tab.icon}
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="min-h-[460px] bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm relative">
          <AnimatePresence mode="wait">
            
            {/* 1. VOCE JA OLHOU PARA A PERNA DO SEU IDOSO HOJE? */}
            {activeTab === 'idoso' && (
              <motion.div
                key="tab-idoso"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-bold px-2.5 py-1 bg-amber-100 text-amber-800 rounded-md uppercase tracking-wider">Atenção ao Idoso</span>
                  <h3 className="font-display font-bold text-2xl text-slate-800 leading-tight">
                    Você já olhou para a perna do seu idoso hoje?
                  </h3>
                  
                  <div className="space-y-4 font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                    <p>
                      Para pessoas idosas com mobilidade reduzida ou que passam a maior parte do dia deitadas ou sentadas, observar as pernas é uma rotina vital que evita sérias complicações clínicas.
                    </p>
                    <p>
                      A perda do estímulo mecânico de caminhar enfraquece a panturrilha — que desempenha o papel essencial de ser o <strong className="text-slate-900">“segundo coração”</strong> do corpo humano ao bombear o sangue de volta para cima. Sem esse retorno venoso ativo, ocorrem retenções de líquidos e alterações teciduais importantes.
                    </p>
                  </div>

                  <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-100/60 flex items-start space-x-3 text-sm text-slate-700">
                    <AlertTriangle className="text-amber-600 w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-800">Sinal de Alerta Urgente:</p>
                      <p className="text-xs text-slate-600">Se um dos membros apresentar inchaço súbito, calor intenso ao toque ou vermelhidão acentuada apenas de um lado, procure ajuda médica para descartar Trombose Venosa Profunda (TVP).</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-100/80 space-y-4 shadow-sm self-stretch flex flex-col justify-between">
                  <div className="space-y-4">
                    <h4 className="font-display font-bold text-sm text-slate-800 uppercase tracking-widest border-b border-slate-100 pb-2">
                      O que fiscalizar diariamente:
                    </h4>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2.5">
                        <span className="text-emerald-500 font-bold text-sm mt-0.5">✓</span>
                        <div className="text-xs text-slate-600 leading-normal">
                          <strong className="text-slate-800">Circulação e Edema (Inchaço):</strong> Aperte suavemente a canela por 3 segundos. Se a marca do dedo demorar a sumir (Sinal de Cacifo), há acúmulo severo de líquidos.
                        </div>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <span className="text-emerald-500 font-bold text-sm mt-0.5">✓</span>
                        <div className="text-xs text-slate-600 leading-normal">
                          <strong className="text-slate-800">Coloração da Pele:</strong> Manchas arroxeadas ou escurecidas indicam má circulação crônica, necessitando de drenagem funcional e posicionamento correto.
                        </div>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <span className="text-emerald-500 font-bold text-sm mt-0.5">✓</span>
                        <div className="text-xs text-slate-600 leading-normal">
                          <strong className="text-slate-800">Descamação e Aspereza:</strong> Ressecamento severo rompe a barreira de integridade cutânea, deixando a pele propensa a erisipelas ou fissuras dolorosas.
                        </div>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <span className="text-emerald-500 font-bold text-sm mt-0.5">✓</span>
                        <div className="text-xs text-slate-600 leading-normal">
                          <strong className="text-slate-800">Pontos de Pressão:</strong> Verifique calcanhares, maléolos (ossos laterais do tornozelo). Se estiverem vermelhos que não somem após o posicionamento elevado de pernas, use protetores.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <a
                    id="education-idoso-whatsapp"
                    href={whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-serenity-dark hover:bg-slate-900 text-white text-xs font-semibold py-3 px-4 rounded-xl shadow transition"
                  >
                    Quero tirar dúvidas sobre meu idoso
                  </a>
                </div>
              </motion.div>
            )}

            {/* 2. SINDROME DO IMOBILISMO */}
            {activeTab === 'imobilismo' && (
              <motion.div
                key="tab-imobilismo"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-bold px-2.5 py-1 bg-red-100 text-red-800 rounded-md uppercase tracking-wider">Alerta Neurofuncional</span>
                  <h3 className="font-display font-bold text-2xl text-slate-800 leading-tight">
                    Síndrome do Imobilismo: O perigo da falta de movimentação
                  </h3>
                  
                  <div className="space-y-4 font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                    <p>
                      A repouso prolongado na cama (acamamento) ou o sedentarismo extremo em poltrona gera uma desestruturação sistêmica conhecida como <strong className="text-slate-900">Síndrome do Imobilismo</strong>.
                    </p>
                    <p>
                      Em pouquíssimas semanas, o corpo perde de forma vertiginosa força contrátil, flexibilidade e capacidade respiratória. O sistema osteoarticular começa a se fixar (formando rigidezes e contraturas), o pulmão acumula secreções profundas por falta de expansão pulmonar e a integridade da pele fica gravemente comprometida devido à compressão contínua.
                    </p>
                  </div>

                  <div className="border bg-white border-red-100 p-5 rounded-2xl flex flex-col space-y-2">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">A Chave da Solução:</p>
                    <p className="text-sm font-semibold text-slate-800 italic">"O movimento estruturado é o melhor remédio para prevenir e reverter as mazelas do repouso prolongado."</p>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-100/80 space-y-4 shadow-sm self-stretch flex flex-col justify-between">
                  <div className="space-y-4">
                    <h4 className="font-display font-bold text-sm text-slate-800 uppercase tracking-widest border-b border-slate-100 pb-2">
                      Sinais e Manifestações no Corpo:
                    </h4>
                    
                    <ul className="space-y-3 text-xs text-slate-600">
                      <li className="flex items-start space-x-2.5">
                        <span className="text-red-500 font-bold">☠</span>
                        <div>
                          <strong className="text-slate-800">Sistema Musculoesquelético:</strong> Atrofia progressiva das fibras rápidas, formação de deformidades (pé equino, flexão rígida de joelhos) e intensa dor articular ao mínimo toque.
                        </div>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <span className="text-red-500 font-bold">☠</span>
                        <div>
                          <strong className="text-slate-800">Sistema Tegumentar:</strong> Úlceras de pressão (escaras) doloridas no sacro, calcanhares, escápulas por falta de mudança frequente de decúbito.
                        </div>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <span className="text-red-500 font-bold">☠</span>
                        <div>
                          <strong className="text-slate-800">Sistema Respiratório:</strong> Respiração superficial crônica e acúmulo denso de catarro nos lobos inferiors, abrindo espaço para pneumonias e hipoxemia recorrente.
                        </div>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <span className="text-red-500 font-bold">☠</span>
                        <div>
                          <strong className="text-slate-800">Sistema Gastrointestinal:</strong> Rápida lentificação dos movimentos intestinais (peristaltismo), causando constipação severa e desconforto abdominal agudo.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <a
                    id="education-imobilismo-whatsapp"
                    href={whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-red-600 hover:bg-slate-900 text-white text-xs font-semibold py-3 px-4 rounded-xl shadow transition"
                  >
                    Quero reabilitar um paciente acamado
                  </a>
                </div>
              </motion.div>
            )}

            {/* 3. QUERIDA FAMILIA */}
            {activeTab === 'familia' && (
              <motion.div
                key="tab-familia"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="max-w-3xl mx-auto space-y-6 text-center"
              >
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-rose-50 text-rose-500 mb-2">
                  <Heart size={32} className="fill-rose-500/10 animate-pulse" />
                </div>
                
                <h3 className="font-display font-semibold text-2xl text-slate-800 leading-tight">
                  Querida família com diagnóstico de atraso escolar ou atraso no neurodesenvolvimento:
                </h3>
                
                <div className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 text-justify max-w-2xl mx-auto italic border-l-2 border-rose-300 pl-4 py-1">
                  <p>
                    "Eu sei que o momento em que recebemos a notícia de que nosso filho possui algum atraso motor, alteração neurológica ou diagnóstico genético pode ser avassalador. O chão parece sumir e uma enxurrada de medos, angústias e culpas infundadas tenta se instalar na sua casa."
                  </p>
                  <p>
                    "Quero que ouça isso: <strong className="text-slate-800">diagnóstico não delimita o destino final</strong> de quem você tanto ama. O sistema nervoso infantil possui uma capacidade extraordinária chamada <strong className="text-slate-800">neuroplasticidade</strong> — a habilidade maravilhosa das células nervosas de formarem novas redes e sinapses compensatórias a cada novo estímulo lúdico estruturado."
                  </p>
                  <p>
                    "Cada bebê, criança ou jovem cresce sob o seu próprio compasso único. Na NeuroBloom, nós dividimos esse fardo com você. Nós transformamos o choro em estímulo, a insegurança em planejamento clínico e acompanhamos cada milímetro de desenvolvimento motor com paciência e amor sinceros. Estamos lado a lado nessa história."
                  </p>
                </div>

                <div className="pt-4">
                  <a
                    id="education-familia-whatsapp"
                    href={whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-rose-500 hover:bg-rose-600 active:scale-95 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
                  >
                    <MessageCircle size={18} />
                    <span>Falar sobre o desenvolvimento do meu filho</span>
                  </a>
                </div>
              </motion.div>
            )}

            {/* 4. SINDROME GENETICA VS DOENCA RARA */}
            {activeTab === 'genetica' && (
              <motion.div
                key="tab-genetica"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="text-center max-w-2xl mx-auto">
                  <span className="text-xs font-bold px-2.5 py-1 bg-serenity-light/30 text-indigo-900 rounded-md uppercase tracking-wider">Esclarecimento Clínico</span>
                  <h3 className="font-display font-bold text-2xl text-slate-800 leading-tight mt-3">
                    Síndrome Genética vs Doença Rara: Qual a diferença?
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    Entenda de uma vez por todas o que esses termos médicos significam e como eles se sobrepõem no diagnóstico.
                  </p>
                </div>

                {/* Venn / Diagram layout side-by-side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                  
                  {/* Left: Sindrome Genética */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold font-mono">🧬</div>
                      <h4 className="font-display font-bold text-slate-850 text-base">Síndrome Genética</h4>
                    </div>
                    
                    <div className="space-y-3 font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
                      <p>
                        Diga respeito à <strong className="text-slate-800">origem etiológica</strong> da alteração: decorre de modificações estruturais ou numéricas no código genético (DNA, mutação pontual em genes específicos ou trissomias cromossômicas).
                      </p>
                      <ul className="space-y-1.5 list-disc pl-4 text-xs font-medium text-slate-700">
                        <li>Pode ser hereditário (herdado dos pais) ou <em>de novo</em> (espontâneo).</li>
                        <li>Exemplo clássico: Trissomia do Cromossomo 21 (Síndrome de Down).</li>
                        <li>Nem toda alteração genética é considerada uma "Doença Rara" (algumas são muito prevalentes na população).</li>
                      </ul>
                    </div>
                  </div>

                  {/* Right: Doença Rara */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold font-mono">🌍</div>
                      <h4 className="font-display font-bold text-slate-850 text-base">Doença Rara</h4>
                    </div>
                    
                    <div className="space-y-3 font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
                      <p>
                        Refere-se à <strong className="text-slate-800">frequência epidemiológica</strong> na população. Conforme definição da OMS, afeta menos de 1,3 pessoas em cada 2.000 habitantes (cerca de 65 em cada 100 mil).
                      </p>
                      <ul className="space-y-1.5 list-disc pl-4 text-xs font-medium text-slate-700">
                        <li>Cerca de 80% das Doenças Raras são genéticas estruturais.</li>
                        <li>Os outros 20% advêm de manifestações ambientais, virais, inflamatórias ou autoimunes graves.</li>
                        <li>Exemplo clássico: ELA, Huntington, Distrofia de Duchenne.</li>
                      </ul>
                    </div>
                  </div>

                </div>

                {/* Overlap Summary Box */}
                <div className="bg-indigo-50/50 p-4 rounded-2xl border border-indigo-100/60 max-w-2xl mx-auto text-center text-xs text-indigo-950 font-medium leading-relaxed">
                  📢 <strong>Área de Interseção:</strong> Uma condição como a Síndrome de Rett é ao mesmo tempo uma <strong>Síndrome Genética</strong> (ocorre por mutação no gene MECP2) e uma <strong>Doença Rara</strong> (baixa incidência populacional). A fisioterapia neurofuncional em Colombo atua na estimulação e manutenção precoce das habilidades de ambos de forma extremamente individualizada.
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
