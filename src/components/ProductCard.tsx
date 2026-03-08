import React from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { user, openAuthModal } = useAuth();

  const handleAction = (e: React.MouseEvent, action: string) => {
    e.preventDefault();
    if (!user) {
      openAuthModal();
      return;
    }
    console.log(`${action} product:`, product.name);
    // Real implementation would go here (e.g., add to cart, favorite)
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-[32px] border border-gray-100/50 overflow-hidden group hover:shadow-xl hover:shadow-[#5A5A40]/5 transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#fdfcfb]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-[#5A5A40] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Nouveau</span>
          )}
          {product.discount && (
            <span className="bg-[#d4a373] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">-{product.discount}%</span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute inset-0 bg-[#5A5A40]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
          <button 
            onClick={(e) => handleAction(e, 'View')}
            className="p-4 bg-white text-[#5A5A40] rounded-full hover:bg-[#5A5A40] hover:text-white transition-all shadow-xl"
          >
            <Eye size={20} />
          </button>
          <button 
            onClick={(e) => handleAction(e, 'Favorite')}
            className="p-4 bg-white text-[#5A5A40] rounded-full hover:bg-[#5A5A40] hover:text-white transition-all shadow-xl"
          >
            <Heart size={20} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-[10px] text-[#accent] mb-2 uppercase tracking-[0.2em] font-bold opacity-70">{product.category}</p>
        <h3 className="text-lg font-serif italic text-gray-800 mb-3 line-clamp-2 group-hover:text-[#5A5A40] transition-colors leading-tight">
          {product.name}
        </h3>
        
        <div className="mt-auto">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-xl font-serif text-[#5A5A40]">{product.price.toLocaleString()} DH</span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through font-light italic">{product.oldPrice.toLocaleString()} DH</span>
            )}
          </div>
          
          <button 
            onClick={(e) => handleAction(e, 'Add to Cart')}
            className="w-full py-3.5 bg-[#5A5A40] text-white rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#4a4a35] transition-all shadow-lg shadow-[#5A5A40]/10"
          >
            <ShoppingCart size={18} />
            Ajouter au rituel
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
