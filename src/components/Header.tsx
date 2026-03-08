import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Phone, MapPin, Heart, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  onDashboardClick?: () => void;
  onHomeClick?: () => void;
}

export default function Header({ onDashboardClick, onHomeClick }: HeaderProps) {
  const { user, signOut, openAuthModal } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut();
      if (onHomeClick) onHomeClick();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#5A5A40] text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Phone size={14} className="mr-1" /> +212 5XX-XXXXXX</span>
            <span className="flex items-center"><MapPin size={14} className="mr-1" /> Casablanca, Maroc</span>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={onDashboardClick} className="hover:text-gray-200 transition-colors">Mon Compte</button>
            <a href="#" className="hover:text-gray-200 transition-colors">Suivre ma commande</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
          <button onClick={onHomeClick} className="text-2xl font-bold text-[#5A5A40] flex items-center font-serif italic">
            <span className="mr-1">Lumina</span>
            <span className="text-gray-400 font-light">Beauty</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xl mx-8">
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Rechercher un soin, une marque..." 
              className="w-full pl-4 pr-12 py-2.5 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#5A5A40]/20 focus:border-transparent transition-all font-serif italic"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#5A5A40] text-white rounded-full hover:bg-[#4a4a35] transition-colors">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2 md:space-x-6">
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 relative">
            <Heart size={24} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 relative">
            <ShoppingCart size={24} />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">0</span>
          </button>
          
          {user ? (
            <button 
              onClick={onDashboardClick}
              className="hidden md:flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full text-gray-600 group"
            >
              <div className="relative">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || ''} className="w-8 h-8 rounded-full border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
                ) : (
                  <User size={24} />
                )}
                <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
              </div>
              <div className="text-left leading-tight">
                <p className="text-xs text-gray-500 truncate max-w-[80px]">{user.displayName || user.email?.split('@')[0]}</p>
                <p className="text-sm font-semibold group-hover:text-[#5A5A40] transition-colors">Mon Profil</p>
              </div>
            </button>
          ) : (
            <button 
              onClick={openAuthModal}
              className="hidden md:flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full text-gray-600 group"
            >
              <User size={24} />
              <div className="text-left leading-tight">
                <p className="text-xs text-gray-500">Bonjour,</p>
                <p className="text-sm font-semibold group-hover:text-[#5A5A40] transition-colors">Se connecter</p>
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:block bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center space-x-8 py-3 text-sm font-medium text-gray-700 font-serif italic">
            <li className="hover:text-[#5A5A40] cursor-pointer transition-colors border-b-2 border-transparent hover:border-[#5A5A40] pb-1">Visage</li>
            <li className="hover:text-[#5A5A40] cursor-pointer transition-colors border-b-2 border-transparent hover:border-[#5A5A40] pb-1">Corps</li>
            <li className="hover:text-[#5A5A40] cursor-pointer transition-colors border-b-2 border-transparent hover:border-[#5A5A40] pb-1">Cheveux</li>
            <li className="hover:text-[#5A5A40] cursor-pointer transition-colors border-b-2 border-transparent hover:border-[#5A5A40] pb-1">Maquillage</li>
            <li className="hover:text-[#5A5A40] cursor-pointer transition-colors border-b-2 border-transparent hover:border-[#5A5A40] pb-1">Huiles</li>
            <li className="hover:text-[#5A5A40] cursor-pointer transition-colors border-b-2 border-transparent hover:border-[#5A5A40] pb-1">Hygiène</li>
            <li className="text-red-600 font-bold hover:text-red-700 cursor-pointer transition-colors border-b-2 border-transparent hover:border-red-600 pb-1 uppercase">Bons Plans</li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[60]"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-80 bg-white z-[70] shadow-2xl p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <button 
                  onClick={() => {
                    if (onHomeClick) onHomeClick();
                    setIsMenuOpen(false);
                  }}
                  className="text-2xl font-bold text-[#5A5A40] flex items-center font-serif italic"
                >
                  <span className="mr-1">Lumina</span>
                  <span className="text-gray-400 font-light">Beauty</span>
                </button>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X size={24} />
                </button>
              </div>

              <div className="mb-6">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Rechercher..." 
                    className="w-full pl-4 pr-10 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none"
                  />
                  <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <ul className="space-y-4 text-lg font-medium text-gray-700 font-serif italic">
                {user && (
                  <li className="pb-4 border-b border-gray-100">
                    <button 
                      onClick={() => {
                        if (onDashboardClick) onDashboardClick();
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center space-x-3 text-[#5A5A40]"
                    >
                      <User size={24} />
                      <span>Mon Profil</span>
                    </button>
                  </li>
                )}
                <li className="hover:text-[#5A5A40] cursor-pointer">Visage</li>
                <li className="hover:text-[#5A5A40] cursor-pointer">Corps</li>
                <li className="hover:text-[#5A5A40] cursor-pointer">Cheveux</li>
                <li className="hover:text-[#5A5A40] cursor-pointer">Maquillage</li>
                <li className="hover:text-[#5A5A40] cursor-pointer">Huiles</li>
                <li className="hover:text-[#5A5A40] cursor-pointer">Hygiène</li>
                <li className="text-red-600 font-bold">Bons Plans</li>
                <li className="pt-4 border-t border-gray-100">
                  {user ? (
                    <button 
                      onClick={handleLogout}
                      className="flex items-center space-x-2 text-red-600 font-bold w-full text-left"
                    >
                      <LogOut size={20} />
                      <span>Déconnexion</span>
                    </button>
                  ) : (
                    <button 
                      onClick={() => {
                        openAuthModal();
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center space-x-2 text-[#5A5A40] font-bold w-full text-left"
                    >
                      <User size={20} />
                      <span>Se connecter</span>
                    </button>
                  )}
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
