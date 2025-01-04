import { type TProduct } from "./productTypes";
import { type User } from "./userTypes";

export type ProductsData = {
  data: {
    status: string;
    message: string;
    products: TProduct[];
  };
};

export type ProductData = {
  data: {
    status: string;
    message: string;
    product: TProduct;
  };
};

export type UsersData = {
  data: {
    status: string;
    message: string;
    users: User[];
  };
};

export type UserData = {
  data: {
    status: string;
    message: string;
    user: User;
  };
};
