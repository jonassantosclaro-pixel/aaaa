import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight, Sparkles, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    patientType: 'Adulto',
    condition: '',
    notes: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const whatsAppPhone = "5541995727641";
  
  // Package form data into professional WhatsApp API message
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const baseGreeting = "Olá Dra. Aryane, gostaria de agendar uma avaliação.";
    const detailedMessage = `Olá Dra. Aryane! Meu nome é *${formData.name}* (Contato: ${formData.phone}). Gostaria de agendar uma avaliação neurofuncional.\n\n` +
      `• *Paciente:* ${formData.patientType}\n` +
      `• *Diagnóstico/Queixa:* ${formData.condition}\n` +
      (formData.notes ? `• *Observações adicionais:* ${formData.notes}\n` : '') +
      `\nAguardo seu retorno!`;

    // If form is empty, send default message. Otherwise, send detailed packaged message
    const finalMsg = formData.name ? encodeURIComponent(detailedMessage) : encodeURIComponent(baseGreeting);
    window.open(`https://wa.me/${whatsAppPhone}?text=${finalMsg}`, '_blank');
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("NeuroBloom.fisio@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="contato" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-serenity-light/15 bottom-0 left-[5%] filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-serenity-dark uppercase tracking-widest block">Como nos Encontrar</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Vamos Iniciar a Recuperação?
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            Estamos prontos para atender você ou quem você tanto ama com excelência científica e muito afeto. Preencha o formulário rápido de agendamento ou entre em contato diretamente.
          </p>
        </div>

        {/* Form and info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left panel - info cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-gradient-to-br from-[#1a365d] to-[#0e1d33] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute w-44 h-44 rounded-full bg-serenity-dark/10 -top-10 -right-10 pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-serenity-light bg-white/10 px-3 py-1 rounded-full inline-block">
                  Canais Oficiais
                </span>
                
                <h3 className="font-display font-bold text-2xl tracking-tight text-white leading-tight">
                  NeuroBloom Fisio • Dra. Aryane Bukner
                </h3>
                
                <p className="font-sans text-slate-300 text-sm leading-relaxed">
                  Todos os canais são geridos diretamente pela fisioterapeuta para garantir total discrição, segurança de dados e assertividade diagnóstica antes do primeiro contato físico.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/10 text-sm">
                  
                  {/* WhatsApp Info */}
                  <a
                    id="contact-whatsapp-link-box"
                    href={`https://wa.me/${whatsAppPhone}?text=Olá%20Dra.%20Aryane,%20gostaria%20de%20agendar%20uma%20avaliação.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-3 text-slate-200 hover:text-white transition-colors group/link"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-400 text-xs uppercase tracking-wider">WhatsApp Principal</p>
                      <p className="text-base font-bold text-slate-100 flex items-center gap-1">
                        (41) 99572-7641
                        <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </p>
                    </div>
                  </a>

                  {/* Email Info */}
                  <div
                    id="contact-email-link-box"
                    onClick={copyEmailToClipboard}
                    className="flex items-start space-x-3 text-slate-200 cursor-pointer hover:text-white transition-colors group/link"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/30">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-400 text-xs uppercase tracking-wider">Enviar E-mail</p>
                      <p className="text-base font-bold text-slate-100 flex items-center gap-1.5">
                        NeuroBloom.fisio@gmail.com
                        <span className="text-[10px] bg-white/10 text-slate-300 px-2 py-0.5 rounded-md font-normal group-hover/link:bg-white/20">
                          {copiedEmail ? 'Copiado!' : 'Copiar'}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Coverage area */}
                  <div className="flex items-start space-x-3 text-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-400 text-xs uppercase tracking-wider">Área de Atendimento</p>
                      <p className="text-sm font-bold text-slate-100 leading-normal">
                        Atendimento Domiciliar em Colombo, Curitiba e toda a região metropolitana.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Micro SEO Keywords compliance text for robot context */}
            <div className="bg-white p-6 rounded-3xl border border-slate-150/85 text-[11px] text-slate-400 space-y-2">
              <span className="font-bold text-slate-600 block">Informações de Credenciamento Clínico</span>
              <p>
                Atuando em Colombo, Curitiba e região metropolitana desde 2026. Fisioterapeuta Dra. Aryane Bukner trabalha na reabilitação neurológica com foco em síndromes genéticas fisioterapia, fisioterapeuta domiciliar Curitiba e Colombo PR, reabilitação neurológica adulto, fisioterapia pediátrica Colombo e doenças raras Colombo.
              </p>
            </div>
          </div>

          {/* Right panel - Dynamic intake form */}
          <div className="lg:col-span-7">
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-display font-semibold text-lg text-slate-800 flex items-center gap-1.5">
                  <MessageSquare size={18} className="text-serenity-dark" />
                  Formulário Rápido de Contato
                </h3>
                <p className="text-slate-500 text-xs">
                  Preencha para adiantar informações cruciais antes de enviarmos para o WhatsApp.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                
                {/* Name */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="form-name" className="text-xs font-bold text-slate-700">Seu Nome Completo (ou responsável):</label>
                  <input
                    type="text"
                    id="form-name"
                    required
                    placeholder="Ex: Rita de Cássia de Souza"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="p-3 border border-slate-200 rounded-xl font-sans text-sm outline-none focus:border-serenity-medium bg-slate-50 focus:bg-white transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="form-phone" className="text-xs font-bold text-slate-700">Telefone para Contato / WhatsApp:</label>
                    <input
                      type="tel"
                      id="form-phone"
                      required
                      placeholder="Ex: (41) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="p-3 border border-slate-200 rounded-xl font-sans text-sm outline-none focus:border-serenity-medium bg-slate-50 focus:bg-white transition"
                    />
                  </div>

                  {/* Patient Category selection */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="form-patient-type" className="text-xs font-bold text-slate-700">Categoria do Paciente:</label>
                    <select
                      id="form-patient-type"
                      value={formData.patientType}
                      onChange={(e) => setFormData({ ...formData, patientType: e.target.value })}
                      className="p-3 border border-slate-200 rounded-xl font-sans text-sm outline-none focus:border-serenity-medium bg-slate-50 focus:bg-white transition"
                    >
                      <option value="Adulto">Adulto</option>
                      <option value="Pediátrico">Pediátrico</option>
                      <option value="Idoso Geriátrico">Idoso Geriátrico</option>
                      <option value="Doença Rara ou Genética">Síndrome / Doença Rara</option>
                    </select>
                  </div>
                </div>

                {/* Patient condition/complaint */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="form-condition" className="text-xs font-bold text-slate-700">Diagnóstico Clínico ou Principal Queixa:</label>
                  <input
                    type="text"
                    id="form-condition"
                    required
                    placeholder="Ex: Recuperação de AVC hemiplégico, Atraso do desenvolvimento motor, etc."
                    value={formData.condition}
                    onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                    className="p-3 border border-slate-200 rounded-xl font-sans text-sm outline-none focus:border-serenity-medium bg-slate-50 focus:bg-white transition"
                  />
                </div>

                {/* Notes details */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="form-notes" className="text-xs font-bold text-slate-700">Mensagem ou Observações (Opcional):</label>
                  <textarea
                    id="form-notes"
                    rows={3}
                    placeholder="Conte um pouco sobre as atuais limitações motoras do paciente para podermos estudar seu plano..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="p-3 border border-slate-200 rounded-xl font-sans text-sm outline-none focus:border-serenity-medium bg-slate-50 focus:bg-white transition resize-none"
                  />
                </div>

                {/* Primary packaged execution button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    className="w-full bg-[#1a365d] hover:bg-slate-800 font-bold py-4 rounded-2xl text-white cursor-pointer transition-all duration-300 shadow-md flex items-center justify-center space-x-2 hover:-translate-y-[2px]"
                  >
                    <Send size={16} />
                    <span>Enviar Informações pelo WhatsApp</span>
                  </button>
                </div>

              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
