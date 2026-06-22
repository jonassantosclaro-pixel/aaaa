import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';

export default function InstagramFeed() {
  const instagramUrl = "https://www.instagram.com/neurobloom.fisio/";

  const posts = [
    {
      id: 'p1',
      title: 'Inaugurando a NeuroBloom!',
      desc: 'Um sonho nascendo: levar reabilitação neurofuncional científica de um jeito acolhedor e individualizado.',
      tag: 'Cuidado Humano',
      likes: 142,
      comments: 24,
      bgSeed: 'wellness'
    },
    {
      id: 'p2',
      title: 'Atraso Motor na Infância',
      desc: 'Como apoiar marcos motores essenciais? Dicas simples sobre engatinhar e brincar no chão.',
      tag: 'Pediátrico',
      likes: 98,
      comments: 11,
      bgSeed: 'children'
    },
    {
      id: 'p3',
      title: 'Exercícios de Marcha no idoso',
      desc: 'Preservando a barreira contra quedas. Por que fortificar a musculatura profunda da panturrilha?',
      tag: 'Idoso / Geriatria',
      likes: 115,
      comments: 18,
      bgSeed: 'elderly'
    },
    {
      id: 'p4',
      title: 'Reabilitação Pós-AVC',
      desc: 'A importância do treino funcional no ambiente em que o paciente efetivamente vive e convive.',
      tag: 'Adulto',
      likes: 167,
      comments: 32,
      bgSeed: 'therapy'
    },
    {
      id: 'p5',
      title: 'O que são Doenças Raras?',
      desc: 'Desmistificando nomenclaturas médicas e conhecendo a real dimensão do atendimento neurofuncional.',
      tag: 'Doenças Raras',
      likes: 84,
      comments: 9,
      bgSeed: 'dna'
    },
    {
      id: 'p6',
      title: 'Kit de Estimulação Sensorial',
      desc: 'Conheça os equipamentos lúdicos portáteis que viajam com a Dra. Aryane para ativar e motivar.',
      tag: 'Metodologia',
      likes: 121,
      comments: 15,
      bgSeed: 'equipment'
    }
  ];

  return (
    <section id="galeria" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-xs font-bold text-serenity-dark uppercase tracking-widest block flex items-center gap-1.5">
              <Instagram size={14} className="text-pink-600" /> @neurobloom.fisio
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Galeria e Conteúdo Prático no Instagram
            </h2>
            <p className="font-sans text-slate-600 text-sm sm:text-base max-w-2xl">
              Acompanhe nosso ecossistema de postagens diárias, novidades, vídeos interativos de reabilitação e dicas clínicas práticas diretamente na nossa página oficial.
            </p>
          </div>

          <div>
            <a
              id="instagram-follow-btn"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-tr from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 active:scale-95 text-white font-bold px-6 py-3.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer text-sm"
            >
              <Instagram size={18} />
              <span>Seguir @neurobloom.fisio</span>
              <ExternalLink size={14} className="opacity-70" />
            </a>
          </div>
        </div>

        {/* Visual Simulated Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              {/* Card visual graphic using themed colors/gradients representing medical illustration placeholders */}
              <div className="relative aspect-square w-full bg-gradient-to-br from-slate-100 via-white to-slate-200 overflow-hidden flex items-center justify-center border-b border-slate-100/60">
                
                {/* Simulated colorful medical bloom backgrounds */}
                <div className={`absolute w-44 h-44 rounded-full filter blur-2xl opacity-30 group-hover:scale-125 transition-transform duration-700 pointer-events-none ${
                  index % 3 === 0 ? 'bg-serenity-medium bg-gradient-to-tr' : index % 3 === 1 ? 'bg-foam-medium' : 'bg-indigo-300'
                }`} />

                {/* Abstract Medical vector icons and title representing active feed posts info */}
                <div className="p-8 text-center space-y-3 z-10 relative">
                  <div className="text-4xl select-none">
                    {index % 3 === 0 ? '🧠' : index % 3 === 1 ? '🧒' : '🌱'}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#2B6CB0] bg-slate-100 px-3 py-1 rounded-full inline-block">
                    {post.tag}
                  </span>
                  <h4 className="font-display font-semibold text-slate-800 text-sm sm:text-base leading-tight">
                    {post.title}
                  </h4>
                  <p className="font-sans text-slate-500 text-xs leading-normal line-clamp-3">
                    {post.desc}
                  </p>
                </div>

                {/* Interaction layer overlay appearing on Hover */}
                <div className="absolute inset-x-0 bottom-0 bg-slate-900/80 backdrop-blur-sm shadow-inner text-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-around font-sans text-sm font-semibold select-none">
                  <div className="flex items-center space-x-1.5 hover:text-rose-400">
                    <Heart size={18} fill="currentColor" className="text-rose-500" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 hover:text-serenity-light">
                    <MessageCircle size={18} fill="currentColor" className="text-sky-400" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                {/* Small indicator at the right top */}
                <div className="absolute top-4 right-4 bg-white/75 backdrop-blur shadow-sm p-2 rounded-full text-slate-600 group-hover:text-pink-600 transition-colors pointer-events-none">
                  <Instagram size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
