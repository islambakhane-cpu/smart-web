import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProductGridProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
}

export default function ProductGrid({ title, products, viewAllLink }: ProductGridProps) {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <div className="h-1 w-20 bg-emerald-600 mt-2 rounded-full"></div>
        </div>
        {viewAllLink && (
          <a href={viewAllLink} className="text-emerald-600 font-semibold text-sm flex items-center hover:underline">
            {t('products.view_all')} <ChevronRight size={16} className="ml-1" />
          </a>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
