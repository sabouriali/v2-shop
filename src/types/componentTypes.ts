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
  onSale: (data: boolean) => void;
  onFilterBrands: (brands: string[]) => void;
  onClearFilters: () => void;
};

export type UserAgreementProps = {
  showAgreement: boolean;
  hideAgreement: () => void;
  onAgree: () => void;
  agree: boolean;
};

export type DeleteAlertProps = {
  showAlert: boolean;
  closeAlert: () => void;
  deleteProduct: () => void;
  product: TProduct | undefined;
};
