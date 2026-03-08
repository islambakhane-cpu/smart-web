import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import { products } from './data/products';
import { Leaf, ShieldCheck, Sparkles } from 'lucide-react';

function AppContent() {
  const { user, loading, openAuthModal } = useAuth();
  const [view, setView] = useState<'home' | 'dashboard'>('home');

  const bestSellers = products.filter(p => p.isBestSeller);
  const newArrivals = products.filter(p => p.isNew);
  const bestOffers = products.filter(p => p.discount && p.discount > 10);

  const handleRestrictedAction = (action: string) => {
    if (!user) {
      openAuthModal();
      return;
    }
    console.log(`Performing restricted action: ${action}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-600">
      <Header onDashboardClick={() => setView('dashboard')} onHomeClick={() => setView('home')} />
      
      <main>
        {view === 'dashboard' && user ? (
          <Dashboard />
        ) : (
          <>
            <Hero />
            
            {/* Best Offers Section */}
            <div className="bg-gray-50">
              <ProductGrid 
                title="Nos Meilleures Offres" 
                products={bestOffers} 
                viewAllLink="#" 
              />
            </div>

            {/* Categories Quick Links */}
            <section className="max-w-7xl mx-auto px-4 py-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { name: 'Visage', count: '45+ Produits', color: 'bg-[#f5f5f0] text-[#5A5A40]' },
                  { name: 'Corps', count: '32+ Produits', color: 'bg-[#fdfcfb] text-[#5A5A40]' },
                  { name: 'Cheveux', count: '28+ Produits', color: 'bg-[#f5f5f0] text-[#5A5A40]' },
                  { name: 'Huiles', count: '15+ Produits', color: 'bg-[#fdfcfb] text-[#5A5A40]' },
                  { name: 'Hygiène', count: '20+ Produits', color: 'bg-[#f5f5f0] text-[#5A5A40]' },
                  { name: 'Maquillage', count: '50+ Produits', color: 'bg-[#fdfcfb] text-[#5A5A40]' },
                ].map((cat) => (
                  <div key={cat.name} className={`${cat.color} p-8 rounded-[32px] cursor-pointer hover:scale-105 transition-transform text-center group border border-gray-100`}>
                    <h3 className="font-serif italic text-xl mb-1">{cat.name}</h3>
                    <p className="text-xs opacity-70">{cat.count}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Best Sellers */}
            <ProductGrid 
              title="Nos Incontournables" 
              products={bestSellers} 
              viewAllLink="#" 
            />

            {/* Promotional Banner */}
            <section className="max-w-7xl mx-auto px-4 py-8">
              <div className="bg-[#5A5A40] rounded-[48px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
                <div className="relative z-10 text-center md:text-left mb-8 md:mb-0">
                  <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Besoin d'un diagnostic peau ?</h2>
                  <p className="text-white/80 text-lg max-w-md mb-10 italic">
                    Nos experts en dermo-cosmétique vous accompagnent pour créer votre routine personnalisée.
                  </p>
                  <button 
                    onClick={() => handleRestrictedAction('Contact Expert')}
                    className="bg-white text-[#5A5A40] px-10 py-4 rounded-full font-medium hover:bg-[#f5f5f0] transition-colors shadow-xl"
                  >
                    Consulter un expert
                  </button>
                </div>
                <div className="relative z-10">
                  <img 
                    src="https://picsum.photos/seed/beauty-expert/500/400" 
                    alt="Beauty Expert" 
                    className="rounded-[32px] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 w-full max-w-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              </div>
            </section>

            {/* New Arrivals */}
            <div className="bg-gray-50">
              <ProductGrid 
                title="Nouveaux Arrivages" 
                products={newArrivals} 
                viewAllLink="#" 
              />
            </div>

            <Brands />
            
            {/* Why Choose Us */}
            <section className="max-w-7xl mx-auto px-4 py-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-serif text-gray-900 mb-4">L'Engagement Lumina</h2>
                <p className="text-gray-500 max-w-2xl mx-auto italic">
                  Nous croyons en une beauté consciente, respectueuse de votre peau and de l'environnement.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#f5f5f0] text-[#5A5A40] rounded-[32px] flex items-center justify-center mx-auto mb-8 shadow-sm">
                    <Leaf size={32} />
                  </div>
                  <h3 className="text-2xl font-serif mb-4">Ingrédients Bio</h3>
                  <p className="text-gray-500 text-sm leading-relaxed px-4">
                    Sélection rigoureuse d'ingrédients naturels and biologiques pour une efficacité maximale sans compromis.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#f5f5f0] text-[#5A5A40] rounded-[32px] flex items-center justify-center mx-auto mb-8 shadow-sm">
                    <ShieldCheck size={32} />
                  </div>
                  <h3 className="text-2xl font-serif mb-4">Expertise Dermo</h3>
                  <p className="text-gray-500 text-sm leading-relaxed px-4">
                    Chaque produit est validé par des dermatologues pour garantir une tolérance optimale, même pour les peaux sensibles.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#f5f5f0] text-[#5A5A40] rounded-[32px] flex items-center justify-center mx-auto mb-8 shadow-sm">
                    <Sparkles size={32} />
                  </div>
                  <h3 className="text-2xl font-serif mb-4">Résultats Visibles</h3>
                  <p className="text-gray-500 text-sm leading-relaxed px-4">
                    Des formules concentrées conçues pour transformer durablement l'aspect and la santé de votre peau.
                  </p>
                </div>
              </div>
            </section>

            <Contact />
          </>
        )}
      </main>

      <Footer />
      <ChatBot />
      <Auth />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
