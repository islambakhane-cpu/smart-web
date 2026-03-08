import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-serif text-gray-900 mb-4">Parlons de votre beauté</h2>
        <p className="text-gray-500 max-w-2xl mx-auto italic">
          Une question sur nos rituels ou besoin d'un conseil personnalisé ? Notre équipe d'experts est à votre écoute.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-10">
          <div className="bg-[#f5f5f0] p-10 rounded-[40px]">
            <h3 className="text-2xl font-serif text-[#5A5A40] mb-8 italic">Nos Coordonnées</h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-5">
                <div className="w-14 h-14 bg-white rounded-[20px] flex items-center justify-center text-[#5A5A40] shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-serif text-lg text-gray-900">Boutique Casablanca</p>
                  <p className="text-gray-600 text-sm italic">Quartier Gauthier, Casablanca, Maroc</p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="w-14 h-14 bg-white rounded-[20px] flex items-center justify-center text-[#5A5A40] shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-serif text-lg text-gray-900">Conseil Client</p>
                  <p className="text-gray-600 text-sm italic">+212 522-XXXXXX</p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="w-14 h-14 bg-white rounded-[20px] flex items-center justify-center text-[#5A5A40] shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-serif text-lg text-gray-900">Email</p>
                  <p className="text-gray-600 text-sm italic">contact@lumina-beauty.ma</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-72 rounded-[40px] overflow-hidden grayscale opacity-80 border border-gray-100 shadow-inner">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846353714521!2d-7.632432!3d33.58332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzU5LjkiTiA3wrAzNyc1Ni44Ilc!5e0!3m2!1sen!2sma!4v1625561000000!5m2!1sen!2sma" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Lumina Beauty Location"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl shadow-primary/5">
          <h3 className="text-2xl font-serif text-gray-900 mb-8 italic">Écrivez-nous</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Nom complet</label>
                <input type="text" className="w-full px-6 py-4 bg-[#fdfcfb] border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5A5A40]/20 transition-all font-serif italic" placeholder="Votre nom" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email</label>
                <input type="email" className="w-full px-6 py-4 bg-[#fdfcfb] border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5A5A40]/20 transition-all font-serif italic" placeholder="votre@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Sujet</label>
              <input type="text" className="w-full px-6 py-4 bg-[#fdfcfb] border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5A5A40]/20 transition-all font-serif italic" placeholder="Comment pouvons-nous vous aider ?" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
              <textarea rows={5} className="w-full px-6 py-4 bg-[#fdfcfb] border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5A5A40]/20 transition-all font-serif italic" placeholder="Votre message..."></textarea>
            </div>
            <button className="w-full py-5 bg-[#5A5A40] text-white rounded-full font-medium flex items-center justify-center gap-3 hover:bg-[#4a4a35] transition-all shadow-xl shadow-[#5A5A40]/20">
              <Send size={20} />
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
