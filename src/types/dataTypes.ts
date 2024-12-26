import { type TProduct } from "./productTypes";

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
