import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Sparkles, ShieldCheck, Heart, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Main Banner */}
        <div className="lg:col-span-3 h-[300px] md:h-[500px] relative rounded-[40px] overflow-hidden group">
          <img 
            src="https://picsum.photos/seed/skincare/1200/600" 
            alt="Skincare Routine" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5A5A40]/60 to-transparent flex flex-col justify-center px-8 md:px-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/90 font-serif italic tracking-wider text-lg mb-2"
            >
              Éclat Naturel & Pureté
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif text-white max-w-lg leading-tight mb-8"
            >
              Révélez votre <span className="italic">beauté authentique</span> avec Lumina
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button className="bg-white text-[#5A5A40] px-10 py-4 rounded-full font-medium flex items-center hover:bg-[#f5f5f0] transition-all group shadow-xl">
                Découvrir la collection
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Side Banners */}
        <div className="hidden lg:flex flex-col gap-4">
          <div className="flex-1 relative rounded-[32px] overflow-hidden group cursor-pointer">
            <img 
              src="https://picsum.photos/seed/face/400/300" 
              alt="Face Care" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex flex-col justify-end p-6">
              <h3 className="text-white font-serif text-2xl mb-1">Soins Visage</h3>
              <p className="text-gray-100 text-sm italic">Pureté & Hydratation</p>
            </div>
          </div>
          <div className="flex-1 relative rounded-[32px] overflow-hidden group cursor-pointer">
            <img 
              src="https://picsum.photos/seed/body/400/300" 
              alt="Body Care" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex flex-col justify-end p-6">
              <h3 className="text-white font-serif text-2xl mb-1">Soins Corps</h3>
              <p className="text-gray-100 text-sm italic">Douceur Infinie</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 py-8 border-y border-gray-100">
        <div className="flex items-center space-x-4 justify-center md:justify-start">
          <div className="w-12 h-12 bg-[#f5f5f0] rounded-full flex items-center justify-center text-[#5A5A40]">
            <Leaf size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-800">100% Naturel</p>
            <p className="text-xs text-gray-500 italic">Ingrédients Bio</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 justify-center md:justify-start">
          <div className="w-12 h-12 bg-[#f5f5f0] rounded-full flex items-center justify-center text-[#5A5A40]">
            <ShieldCheck size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-800">Testé Dermato</p>
            <p className="text-xs text-gray-500 italic">Sécurité Garantie</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 justify-center md:justify-start">
          <div className="w-12 h-12 bg-[#f5f5f0] rounded-full flex items-center justify-center text-[#5A5A40]">
            <Heart size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-800">Cruelty Free</p>
            <p className="text-xs text-gray-500 italic">Non testé sur animaux</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 justify-center md:justify-start">
          <div className="w-12 h-12 bg-[#f5f5f0] rounded-full flex items-center justify-center text-[#5A5A40]">
            <Sparkles size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-800">Éclat Durable</p>
            <p className="text-xs text-gray-500 italic">Résultats visibles</p>
          </div>
        </div>
      </div>
    </section>
  );
}
