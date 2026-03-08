import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* About */}
        <div>
          <div className="text-3xl font-serif italic text-white flex items-center mb-8">
            <span className="mr-1">Lumina</span>
            <span className="text-gray-500 font-light">Beauty</span>
          </div>
          <p className="text-sm leading-relaxed mb-8 italic">
            Lumina Beauty est votre sanctuaire de soins naturels au Maroc. Nous sélectionnons le meilleur de la nature pour sublimer votre éclat quotidien.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-serif text-xl mb-8">L'Univers Lumina</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Notre Histoire</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Engagement Éco-responsable</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Conseils Beauté</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Diagnostic Peau</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-serif text-xl mb-8">Collections</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Soins du Visage</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Rituels Corps</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Soins Capillaires</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Huiles Essentielles</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Maquillage Naturel</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-serif text-xl mb-8">Contact</h3>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start space-x-4">
              <MapPin size={18} className="text-[#accent] shrink-0" />
              <span>Quartier Gauthier, Casablanca, Maroc</span>
            </li>
            <li className="flex items-center space-x-4">
              <Phone size={18} className="text-[#accent] shrink-0" />
              <span>+212 522-XXXXXX</span>
            </li>
            <li className="flex items-center space-x-4">
              <Mail size={18} className="text-[#accent] shrink-0" />
              <span>contact@lumina-beauty.ma</span>
            </li>
            <li className="flex items-center space-x-4">
              <Clock size={18} className="text-[#accent] shrink-0" />
              <span>Lun - Sam: 10:00 - 20:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-widest text-gray-600">
          © 2026 Lumina Beauty. Éclat & Pureté.
        </p>
        <div className="flex items-center space-x-6 opacity-30 grayscale">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-3" />
        </div>
      </div>
    </footer>
  );
}
