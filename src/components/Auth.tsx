import React, { useState } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  AuthError
} from 'firebase/auth';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { auth } from '../lib/firebase';
import { useAuth } from '../context/AuthContext';

export default function Auth() {
  const { isAuthModalOpen, closeAuthModal, signInWithGoogle } = useAuth();
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignIn) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      closeAuthModal();
    } catch (err: any) {
      const authError = err as AuthError;
      if (isSignIn) {
        setError('Email or password is incorrect');
      } else {
        if (authError.code === 'auth/email-already-in-use') {
          setError('User already exists. Please sign in');
        } else {
          setError(authError.message);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeAuthModal}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-md bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100"
        >
          <button 
            onClick={closeAuthModal}
            className="absolute right-6 top-6 p-2 hover:bg-[#f5f5f0] rounded-full transition-colors z-10"
          >
            <X size={20} className="text-[#5A5A40]" />
          </button>

          <div className="p-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif italic text-gray-900">
                {isSignIn ? 'Bon retour parmi nous' : 'Rejoindre Lumina'}
              </h2>
              <p className="text-gray-500 mt-3 text-sm italic">
                {isSignIn 
                  ? 'Connectez-vous pour retrouver vos rituels' 
                  : 'Créeز votre compte pour une expérience personnalisée'}
              </p>
            </div>

            <div className="space-y-6">
              <button
                onClick={async () => {
                  setError('');
                  setLoading(true);
                  try {
                    await signInWithGoogle();
                  } catch (err: any) {
                    setError('Erreur lors de la connexion avec Google. Veuillez réessayer.');
                    setLoading(false);
                  }
                }}
                disabled={loading}
                className="w-full flex items-center justify-center space-x-3 px-6 py-4 border border-gray-100 rounded-2xl hover:bg-[#fdfcfb] transition-all font-medium text-gray-700 disabled:opacity-50 shadow-sm"
              >
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                <span className="font-serif italic">Continuer avec Google</span>
              </button>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-gray-100"></div>
                <span className="flex-shrink mx-4 text-gray-300 text-xs uppercase tracking-widest">ou</span>
                <div className="flex-grow border-t border-gray-100"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-[#fdfcfb] focus:ring-2 focus:ring-[#5A5A40]/10 focus:border-transparent outline-none transition-all font-serif italic"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-[#fdfcfb] focus:ring-2 focus:ring-[#5A5A40]/10 focus:border-transparent outline-none transition-all font-serif italic"
                    placeholder="••••••••"
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-50 text-red-600 text-xs rounded-2xl border border-red-100 italic">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#5A5A40] text-white py-4 rounded-full font-medium hover:bg-[#4a4a35] transition-all disabled:opacity-50 shadow-xl shadow-[#5A5A40]/10"
                >
                  {loading ? 'Chargement...' : (isSignIn ? 'Se connecter' : "Créer mon compte")}
                </button>
              </form>

              <div className="pt-6 text-center">
                <button
                  onClick={() => {
                    setIsSignIn(!isSignIn);
                    setError('');
                  }}
                  className="text-[#5A5A40] font-serif italic hover:underline text-sm"
                >
                  {isSignIn 
                    ? "Pas encore de compte ? S'inscrire" 
                    : "Déjà un compte ? Se connecter"}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
