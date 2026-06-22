import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import AtypicalMother from './components/AtypicalMother';
import Specialties from './components/Specialties';
import Education from './components/Education';
import HomeCare from './components/HomeCare';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import InstagramFeed from './components/InstagramFeed';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function App() {
  const whatsAppLink = "https://wa.me/5541995727641?text=Olá%20Dra.%2520Aryane,%20gostaria%20de%20agendar%2520uma%20avaliação.";

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-slate-800 bg-neutral-soft">
      {/* Dynamic Floating Global Header */}
      <Header />

      {/* Structured Sections stacked one-page design */}
      <main className="flex-grow">
        {/* Hero featuring the 6s neural-botanical intro sequence and medical presentation */}
        <Hero />

        {/* Story tell about the doctor and the brand values */}
        <About />

        {/* Emotionally resonant mother's perspective and core caring values */}
        <AtypicalMother />

        {/* Structured expertise emojis grid: Pediatric & Adult conditions */}
        <Specialties />

        {/* Interactive caretakers info switcher */}
        <Education />

        {/* Step-by-step description of home assessments */}
        <HomeCare />

        {/* Deep details of neurofunctional therapy benefits */}
        <Benefits />

        {/* Patient reviews and success milestones */}
        <Testimonials />

        {/* Instagram Simulated Feed and social networks */}
        <InstagramFeed />

        {/* Final contact intake form block */}
        <Contact />
      </main>

      {/* Floating fixed instant actions */}
      <WhatsAppButton />

      {/* Highly polished, informative professional Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-12">
            
            {/* Left Col - Brand identity */}
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-inner border border-slate-700 p-0.5 overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/59T65c58/Chat-GPT-Image-22-de-jun-de-2026-12-06-20.png" 
                    alt="NeuroBloom" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-lg text-white leading-none">NeuroBloom</span>
                  <span className="font-sans text-xs text-slate-400 font-medium">Fisioterapia Neurofuncional</span>
                </div>
              </div>
              <p className="font-sans text-sm text-slate-450 leading-relaxed max-w-sm">
                Cuidado especializado, sensível e verdadeiramente personalizado para desabrochar todo o potencial funcional de crianças e adultos com alterações neurológicas.
              </p>
            </div>

            {/* Middle Col - Fast Contact links */}
            <div className="space-y-4">
              <h4 className="font-display font-medium text-white text-sm uppercase tracking-wider">Contato Direto</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="tel:+5541995727641" className="hover:text-white flex items-center gap-2 transition-colors">
                    <Phone size={14} className="text-serenity-medium" />
                    <span>(41) 99572-7641</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:NeuroBloom.fisio@gmail.com" className="hover:text-white flex items-center gap-2 transition-colors">
                    <Mail size={14} className="text-serenity-medium" />
                    <span className="break-all">NeuroBloom.fisio@gmail.com</span>
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={14} className="text-serenity-medium shrink-0 mt-0.5" />
                  <span className="text-slate-440">Domiciliar em Colombo, Curitiba e Região Metropolitana</span>
                </li>
              </ul>
            </div>

            {/* Right Col - Navigation mapping */}
            <div className="space-y-4">
              <h4 className="font-display font-medium text-white text-sm uppercase tracking-wider">Conecte-se Conosco</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="https://www.instagram.com/neurobloom.fisio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Instagram size={14} className="text-rose-400" />
                    <span>@neurobloom.fisio</span>
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-white transition-colors">Sobre a Dra. Aryane</a>
                </li>
                <li>
                  <a href="#educacao" className="hover:text-white transition-colors">Materiais de Dicas</a>
                </li>
                <li>
                  <a href={whatsAppLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-semibold text-emerald-400 flex items-center gap-1">
                    Agendar consulta pelo Whatsapp →
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Legal references & copyright info */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <div className="text-center sm:text-left space-y-1">
              <p>
                &copy; {new Date().getFullYear()} <strong>NeuroBloom Fisioterapia Neurofuncional</strong>. Todos os direitos reservados.
              </p>
              <p className="text-slate-600">
                Fisioterapeuta Dra. Aryane Bukner • Registro Profissional CREFITO 8 / Colombo-PR
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-slate-600">Desenvolvido com carinho e ciência</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
