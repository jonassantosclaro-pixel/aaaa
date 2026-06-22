import { motion } from 'motion/react';
import { 
  Star, Heart, ArrowLeft, Video, Phone, MoreVertical, 
  Smile, Paperclip, Camera, Mic, CheckCheck 
} from 'lucide-react';

export default function Testimonials() {
  const whatsappChats = [
    {
      id: '1',
      name: 'Rita de Cássia M.',
      relation: 'Mãe do Theo (4 anos) • Atraso Motor',
      avatarBg: 'bg-emerald-500',
      avatarLetter: 'R',
      messages: [
        {
          id: 'm1',
          sender: 'patient',
          text: 'Olá Dra. Aryane! Queria te mandar uma mensagem para agradecer de coração toda a dedicação com o Theo nesses meses... ❤️',
          time: '14:32'
        },
        {
          id: 'm2',
          sender: 'patient',
          text: 'Ele não conseguia firmar o corpinho para sentar de jeito nenhum. Com a sua paciência infinita, as brincadeiras nas sessões e as orientações que nos passou, hoje ele já consegue sentar sozinho e brincar no chão com a irmãzinha! Você foi um anjo nas nossas vidas! 🙏✨',
          time: '14:34'
        },
        {
          id: 'm3',
          sender: 'doctor',
          text: 'Rita, que alegria imensa ler isso! O Theo é um verdadeiro campeão e ver ele florescer e conquistar essa autonomia é o que dá sentido a todo o meu trabalho. Um beijo enorme nele! Estamos juntos nessa linda caminhada! 🥰🌻',
          time: '14:38'
        }
      ]
    },
    {
      id: '2',
      name: 'Carlos Alberto S.',
      relation: 'Filho do Sr. Geraldo (72) • Pós-AVC',
      avatarBg: 'bg-blue-600',
      avatarLetter: 'C',
      messages: [
        {
          id: 'm1',
          sender: 'patient',
          text: 'Boa tarde Dra. Aryane! Passando para te dar o feedback de hoje do meu pai. O Sr. Geraldo está super animado por aqui!',
          time: '16:05'
        },
        {
          id: 'm2',
          sender: 'patient',
          text: 'Após o AVC do meu pai, o deslocamento até a clínica era um sofrimento enorme e perigoso. O tratamento domiciliar mudou tudo. Hoje ele já caminha dentro de casa com andador! Um carinho indescritível.',
          time: '16:07'
        },
        {
          id: 'm3',
          sender: 'doctor',
          text: 'Carlos, fico extremamente feliz e emocionada! Fisioterapia neurofuncional domiciliar traz exatamente esse conforto e segurança. O empenho do Seu Geraldo é exemplar. Vamos continuar evoluindo! 💪🩺',
          time: '16:15'
        }
      ]
    },
    {
      id: '3',
      name: 'Mariana de Oliveira',
      relation: 'Neta da Sra. Nair (81) • Parkinson',
      avatarBg: 'bg-purple-600',
      avatarLetter: 'M',
      messages: [
        {
          id: 'm1',
          sender: 'patient',
          text: 'Dra. Aryane, boa noite! Minha avó Nair andou passeando pelo quintal de casa hoje super firme e confiante!',
          time: '19:10'
        },
        {
          id: 'm2',
          sender: 'patient',
          text: 'Antes das sessões de equilíbrio ela andava caindo muito por causa do Parkinson, o que nos causava pânico. Com os treinos e as barras de apoio recomendadas, ela está super segura. Excelente profissional! 🌟',
          time: '19:12'
        },
        {
          id: 'm3',
          sender: 'doctor',
          text: 'Mariana, que excelente notícia! Treinar o equilíbrio e fazer adaptações de segurança no domicílio devolvem a qualidade de vida. Fico realizada demais sabendo desse passeio! Um abração nela! 🤗🌸',
          time: '19:20'
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="depoimentos">
      {/* Decorative subtle blurs */}
      <div className="absolute w-[500px] h-[500px] bg-[#A5D6FF]/10 top-0 right-[-10%] filter blur-3xl pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] bg-[#98E6C9]/10 bottom-0 left-[-10%] filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-[#1a365d] bg-blue-50/80 px-4 py-1.5 rounded-full uppercase tracking-widest inline-block border border-blue-100">
            Espaço Gratidão
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#1a365d] tracking-tight">
            Depoimentos & Histórias Reais
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Nada nos traz mais alegria do que ver a autonomia florescer de volta na trajetória de cada família. Veja o que dizem sobre o cuidado humanizado da Dra. Aryane.
          </p>
        </div>

        {/* 1. Official Google rating badge */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
            {/* Soft geometric accent decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/60 rounded-full filter blur-xl pointer-events-none" />
            
            <div className="flex items-center gap-4 flex-col sm:flex-row text-center sm:text-left">
              <div className="w-14 h-14 flex items-center justify-center bg-slate-50 rounded-2xl border border-slate-100 p-3 shadow-inner">
                {/* Official Google Vector G Logo */}
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <span className="font-display font-extrabold text-slate-800 text-lg leading-tight">Google Avaliações</span>
                  <span className="bg-[#4285F4]/10 text-[#4285F4] text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">Oficial</span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-1">Garantia absoluta de feedback transparente de pacientes</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 divide-x divide-slate-100 w-full md:w-auto justify-around sm:justify-center md:justify-end">
              <div className="text-center sm:text-right pr-2 sm:pr-6">
                <div className="flex items-center gap-2 justify-center sm:justify-end">
                  <span className="text-4xl font-display font-black text-slate-900 leading-none">4.9</span>
                  <div className="flex flex-col items-center sm:items-end">
                    <div className="flex text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" className="mr-0.5" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold mt-1">4.9 de 5 estrelas</span>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-[#34A853] mt-1.5 block">Selo de Qualidade Prata</span>
              </div>
              <div className="pl-6 flex flex-col justify-center text-center sm:text-left">
                <span className="text-xs font-bold text-slate-700">Certificado Google Oficial</span>
                <span className="text-[10px] text-slate-450 mt-1">Avaliações consolidadas de Colombo-PR</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Testimonials grid in form of realistic WhatsApp chat prints */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {whatsappChats.map((chat, idx) => (
            <motion.div
              key={chat.id}
              className="bg-white rounded-[32px] border border-slate-200/60 shadow-lg overflow-hidden flex flex-col h-[520px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              {/* WhatsApp App Mockup Top Ribbon / Header */}
              <div className="bg-[#008069] text-white px-4 py-3 flex items-center justify-between shadow-sm relative z-10">
                <div className="flex items-center space-x-2">
                  <ArrowLeft size={18} className="cursor-pointer text-white/90 hover:text-white" />
                  
                  {/* Avatar circle */}
                  <div className={`w-9 h-9 rounded-full ${chat.avatarBg} flex items-center justify-center text-white font-bold text-sm shadow-sm relative`}>
                    <span>{chat.avatarLetter}</span>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#008069]"></span>
                  </div>

                  <div className="flex flex-col">
                    <h4 className="font-sans font-bold text-sm leading-tight text-white/95 truncate max-w-[130px] sm:max-w-[150px]">
                      {chat.name}
                    </h4>
                    <span className="text-[10px] text-emerald-100 font-medium">
                      online
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5 text-white/90">
                  <Video size={16} className="cursor-pointer hover:text-white" />
                  <Phone size={15} className="cursor-pointer hover:text-white" />
                  <MoreVertical size={16} className="cursor-pointer hover:text-white" />
                </div>
              </div>

              {/* Status context bar showing relation */}
              <div className="bg-[#005e4d]/10 backdrop-blur px-4 py-1.5 border-b border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-700">
                <span className="truncate">{chat.relation}</span>
                <span className="text-[#008069] text-[10px] font-bold tracking-wider">PACIENTE ATIVO</span>
              </div>

              {/* Chat messages canvas (Classic soft beige WhatsApp wallpaper) */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3.5 relative bg-[#efeae2]">
                <div className="absolute inset-0 bg-[radial-gradient(#c5bba3_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>
                
                {/* Date stamp bubble */}
                <div className="flex justify-center my-1 z-10 relative">
                  <span className="bg-white/80 py-1 px-3.5 rounded-lg text-[10px] font-bold text-slate-500 shadow-sm uppercase tracking-wide">
                    Hoje
                  </span>
                </div>

                {chat.messages.map((msg) => {
                  const isDoctor = msg.sender === 'doctor';
                  return (
                    <div
                      key={msg.id}
                      className={`flex ${isDoctor ? 'justify-end' : 'justify-start'} w-full relative z-10`}
                    >
                      {/* Speech bubble tail effect simulated using simple rounded corners */}
                      <div
                        className={`max-w-[85%] p-3 shadow-sm text-xs leading-relaxed relative ${
                          isDoctor
                            ? 'bg-[#d9fdd3] text-slate-800 rounded-2xl rounded-tr-none'
                            : 'bg-white text-slate-800 rounded-2xl rounded-tl-none'
                        }`}
                      >
                        <p className="font-sans whitespace-pre-wrap">{msg.text}</p>
                        
                        <div className="flex items-center justify-end space-x-1 mt-1 text-[9px] text-slate-400 font-semibold">
                          <span>{msg.time}</span>
                          {isDoctor && (
                            <CheckCheck size={12} className="text-[#53bdeb]" />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* WhatsApp Input bar decorator */}
              <div className="bg-[#f0f2f5] p-2.5 flex items-center space-x-2 border-t border-slate-200">
                <div className="bg-white flex-1 rounded-full px-3.5 py-2 flex items-center justify-between border border-slate-200 shadow-sm">
                  <div className="flex items-center space-x-2">
                    <Smile size={18} className="text-slate-400 cursor-pointer" />
                    <span className="text-xs text-slate-400 font-medium">Mensagem</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-slate-400">
                    <Paperclip size={16} className="cursor-pointer hover:text-slate-500" />
                    <Camera size={16} className="cursor-pointer hover:text-slate-500" />
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center text-white shadow cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200">
                  <Mic size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button & Trust elements */}
        <div className="mt-16 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
            <Heart size={14} className="text-rose-500 fill-rose-500" />
            <span>Resultados de reabilitação e bem-estar em ambiente acolhedor e seguro.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
