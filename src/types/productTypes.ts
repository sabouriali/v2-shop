export type TProduct = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color?: string;
  category: string;
  discount?: number;
  popular?: boolean;
  onSale?: boolean;
};

export type TCartItem = {
  id: number;
  title: string;
  qty: number;
  price: number;
  discount?: number;
};
