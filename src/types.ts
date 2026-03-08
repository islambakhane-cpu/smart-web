export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  discount?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
