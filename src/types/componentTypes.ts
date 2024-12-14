import { type TProduct } from "./productTypes";

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
