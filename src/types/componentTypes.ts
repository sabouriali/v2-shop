import { type TCartItem, type TProduct } from "./productTypes";

export type BackdropProps = {
  showBackdrop: boolean;
  hideBackdrop: () => void;
};

export type SearchProps = {
  showSearch: boolean;
  hideSearch: () => void;
};

export type ProductCardProps = {
  product: TProduct;
};

export type CategoriesMenuProps = {
  categoriesMenuHover: boolean;
};

export type CartHoverItemProps = {
  id: number;
  qty: number;
  price: number;
  discount?: number;
};

export type CartHoverProps = {
  cartHover: boolean;
  cart: TCartItem[];
};

export type CartItemProps = {
  id: number;
  qty: number;
  price: number;
  discount?: number;
};

export type ToggleSwitchProps = {
  changeCheck: () => void;
  checked: boolean;
  checkId: string;
};

export type FilterMenuProps = {
  brands: string[];
  sendOnSale: (data: boolean) => void;
  onFilterBrands: (brands: string[]) => void;
  onClearFilters: () => void;
};
