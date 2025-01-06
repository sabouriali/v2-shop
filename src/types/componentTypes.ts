import { type TCartItem, type TProduct } from "./productTypes";
import { type Name, type User } from "./userTypes";

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
  onCloseSearch?: () => void;
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
  title: string;
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

export type DeleteItemAlertProps = {
  showAlert: boolean;
  closeAlert: () => void;
  deleteProduct: () => void;
  product: TProduct | undefined;
};

export type UserHoverMenuProps = {
  showMenu: boolean;
};

export type EditUserProps = {
  user: User;
  onLoading: () => void;
  onLoaded: () => void;
  closeEdit: () => void;
};

export type DeleteUserAlertProps = {
  showDeleteMessage: boolean;
  hideDeleteMessage: () => void;
  onDeleteUser: () => void;
};

export type DeleteCartAlertProps = {
  showDeleteMessage: boolean;
  hideDeleteMessage: () => void;
  onDeleteCart: () => void;
};

export type SortBarProps = {
  sort: string;
  handleSort: (sort: string) => void;
};

export type EditAddressProps = {
  user: User;
  closeEdit: () => void;
};

export type CheckoutInfoProps = {
  userName: Name | undefined;
  userContact: {
    phone: string;
    address: {
      city: string;
      street: string;
      number: string;
      zipcode: string;
    };
  };
  showInfo: boolean;
  hideInfo: () => void;
};

export type CheckoutCartItemProps = {
  title: string;
  qty: number;
  price: number;
  discount?: number;
};
