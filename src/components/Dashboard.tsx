import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Package, Heart, User, Settings, LogOut, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Dashboard() {
  const { user, signOut } = useAuth();

  if (!user) return null;

  const stats = [
    { label: 'Commandes', value: '0', icon: Package, color: 'text-[#5A5A40] bg-[#f5f5f0]' },
    { label: 'Favoris', value: '0', icon: Heart, color: 'text-red-600 bg-red-50' },
    { label: 'Points Fidélité', value: '0', icon: Settings, color: 'text-[#d4a373] bg-[#fdfcfb]' },
  ];

  return (
    <div className="min-h-screen bg-[#fdfcfb] pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-[40px] p-8 shadow-xl shadow-primary/5 border border-gray-50 text-center">
              <div className="relative inline-block mb-6">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || ''} className="w-28 h-28 rounded-full border-4 border-white shadow-xl mx-auto" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-28 h-28 rounded-full bg-[#f5f5f0] flex items-center justify-center mx-auto border-4 border-white shadow-xl">
                    <User size={48} className="text-[#5A5A40]" />
                  </div>
                )}
                <div className="absolute bottom-2 right-2 bg-emerald-500 w-6 h-6 rounded-full border-4 border-white"></div>
              </div>
              <h2 className="text-2xl font-serif italic text-gray-900 truncate px-2">{user.displayName || 'Utilisateur'}</h2>
              <p className="text-xs text-gray-400 truncate mb-8 uppercase tracking-widest">{user.email}</p>
              
              <button 
                onClick={signOut}
                className="w-full flex items-center justify-center space-x-3 py-3.5 text-red-600 font-medium border border-red-50 rounded-2xl hover:bg-red-50 transition-all"
              >
                <LogOut size={18} />
                <span className="font-serif italic">Se déconnecter</span>
              </button>
            </div>

            <nav className="bg-white rounded-[40px] shadow-xl shadow-primary/5 border border-gray-50 overflow-hidden">
              {[
                { label: 'Mon Profil', icon: User },
                { label: 'Mes Rituels', icon: Package },
                { label: 'Ma Liste d\'Envies', icon: Heart },
                { label: 'Paramètres Beauté', icon: Settings },
              ].map((item, idx) => (
                <button 
                  key={idx}
                  className={`w-full flex items-center justify-between p-5 hover:bg-[#fdfcfb] transition-all border-b border-gray-50 last:border-0 ${idx === 0 ? 'text-[#5A5A40] bg-[#f5f5f0]/50' : 'text-gray-500'}`}
                >
                  <div className="flex items-center space-x-4">
                    <item.icon size={20} className={idx === 0 ? 'text-[#5A5A40]' : 'text-gray-400'} />
                    <span className="font-serif italic text-lg">{item.label}</span>
                  </div>
                  <ChevronRight size={16} className="opacity-30" />
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-10">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[40px] shadow-xl shadow-primary/5 border border-gray-50 flex items-center space-x-6"
                >
                  <div className={`p-5 rounded-3xl ${stat.color}`}>
                    <stat.icon size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{stat.label}</p>
                    <p className="text-3xl font-serif italic text-gray-900">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity / Placeholder */}
            <div className="bg-white rounded-[50px] shadow-xl shadow-primary/5 border border-gray-50 p-12 min-h-[450px] flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-[#fdfcfb] rounded-full flex items-center justify-center mb-8 border border-gray-50">
                <Package size={48} className="text-gray-200" />
              </div>
              <h3 className="text-2xl font-serif italic text-gray-900 mb-4">Votre panier est encore vide</h3>
              <p className="text-gray-500 max-w-sm italic">
                Commencez votre voyage vers une beauté naturelle en explorant nos collections exclusives.
              </p>
              <button className="mt-10 bg-[#5A5A40] text-white px-10 py-4 rounded-full font-medium hover:bg-[#4a4a35] transition-all shadow-xl shadow-[#5A5A40]/20">
                Découvrir nos rituels
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
