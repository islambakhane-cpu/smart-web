import React from 'react';

const brands = [
  { name: 'L\'Oréal', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/L%27Oreal_logo.svg' },
  { name: 'Estée Lauder', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Estee_Lauder_logo.svg' },
  { name: 'Nivea', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Nivea_logo.svg' },
  { name: 'Dove', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Dove_logo.svg' },
  { name: 'Lancôme', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Lancome_logo.svg' },
  { name: 'Clinique', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Clinique_logo.svg' }
];

export default function Brands() {
  return (
    <section className="bg-[#fdfcfb] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-[#5A5A40] text-sm font-serif italic tracking-widest mb-12 opacity-60">Partenaires de Confiance</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {brands.map((brand) => (
            <img 
              key={brand.name} 
              src={brand.logo} 
              alt={brand.name} 
              className="h-8 md:h-10 object-contain hover:scale-110 transition-transform cursor-pointer"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
