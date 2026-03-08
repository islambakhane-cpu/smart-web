import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Sérum Éclat Vitamine C + Acide Hyaluronique',
    description: 'Sérum revitalisant pour un teint lumineux et une peau hydratée en profondeur.',
    price: 350,
    oldPrice: 450,
    image: 'https://picsum.photos/seed/serum/400/400',
    category: 'Soins Visage',
    isBestSeller: true,
    discount: 22
  },
  {
    id: '2',
    name: 'Crème Hydratante Intense Karité & Aloé Vera',
    description: 'Nourrit intensément les peaux sèches et sensibles. 100% Naturel.',
    price: 180,
    oldPrice: 220,
    image: 'https://picsum.photos/seed/cream/400/400',
    category: 'Soins Corps',
    isNew: true,
    discount: 18
  },
  {
    id: '3',
    name: 'Masque Argile Rose Purifiant',
    description: 'Nettoie les pores et affine le grain de peau pour un fini mat et soyeux.',
    price: 120,
    image: 'https://picsum.photos/seed/mask/400/400',
    category: 'Soins Visage',
    isNew: true
  },
  {
    id: '4',
    name: 'Huile d\'Argan Pure du Maroc - 100ml',
    description: 'L\'or liquide pour vos cheveux, votre visage et votre corps. Bio et pressée à froid.',
    price: 250,
    oldPrice: 300,
    image: 'https://picsum.photos/seed/argan/400/400',
    category: 'Huiles Naturelles',
    discount: 16
  },
  {
    id: '5',
    name: 'Gel Nettoyant Doux au Thé Vert',
    description: 'Élimine les impuretés sans agresser la barrière cutanée. Idéal pour un usage quotidien.',
    price: 95,
    image: 'https://picsum.photos/seed/cleanser/400/400',
    category: 'Hygiène'
  },
  {
    id: '6',
    name: 'Shampooing Solide Détox au Charbon Actif',
    description: 'Alternative écologique pour des cheveux légers and brillants. Sans sulfates.',
    price: 85,
    image: 'https://picsum.photos/seed/shampoo/400/400',
    category: 'Soins Cheveux',
    isBestSeller: true
  },
  {
    id: '7',
    name: 'Baume à Lèvres Réparateur Miel & Cire d\'Abeille',
    description: 'Protège and répare les lèvres gercées. Texture fondante and non collante.',
    price: 45,
    image: 'https://picsum.photos/seed/lipbalm/400/400',
    category: 'Hygiène'
  },
  {
    id: '8',
    name: 'Crème Solaire SPF 50+ Anti-Âge',
    description: 'Protection maximale contre les UVA/UVB avec effet anti-rides. Résistant à l\'eau.',
    price: 210,
    image: 'https://picsum.photos/seed/sunscreen/400/400',
    category: 'Soins Visage',
    isNew: true
  }
];

export const categories = [
  { id: 'visage', name: 'Soins Visage', icon: 'Sparkles' },
  { id: 'corps', name: 'Soins Corps', icon: 'Waves' },
  { id: 'cheveux', name: 'Soins Cheveux', icon: 'Wind' },
  { id: 'huiles', name: 'Huiles Naturelles', icon: 'Droplets' },
  { id: 'hygiene', name: 'Hygiène', icon: 'ShieldCheck' },
  { id: 'maquillage', name: 'Maquillage', icon: 'Palette' }
];
