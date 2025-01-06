import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

import { type TCartItem } from "../../types/productTypes";

type CartState = {
  items: TCartItem[];
  isPayed: boolean;
};

const cookieCart = Cookies.get("cart");

const initialState: CartState = {
  items: cookieCart ? JSON.parse(cookieCart) : [],
  isPayed: false,
};

export function getProductQty(cart: TCartItem[], id: number) {
  const qty = cart.find((item) => item.id === id)?.qty;

  if (qty === undefined) {
    return 0;
  } else {
    return qty;
  }
}

export function getCartQty(cart: TCartItem[]) {
  const cartQty = cart.reduce((acc, cur) => acc + cur.qty, 0);
  return cartQty;
}

export function getTotalPrice(cart: TCartItem[]) {
  const totalPrice = cart.reduce((acc, cur) => acc + cur.price * cur.qty, 0);
  return totalPrice;
}

export function getTotalDiscount(cart: TCartItem[]) {
  const totalDiscount = cart.reduce((acc, cur) => {
    if (cur.discount) {
      return acc + cur.discount * cur.qty;
    } else {
      return acc;
    }
  }, 0);
  return totalDiscount;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{
        id: number;
        title: string;
        price: number;
        discount?: number;
      }>
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].qty++;
        Cookies.set("cart", JSON.stringify(state.items), { expires: 7 });
      } else {
        state.items.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          discount: action.payload.discount,
          qty: 1,
        });
        Cookies.set("cart", JSON.stringify(state.items), { expires: 7 });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (state.items[itemIndex].qty === 1) {
        state.items.splice(itemIndex, 1);
        Cookies.set("cart", JSON.stringify(state.items), { expires: 7 });
      } else {
        state.items[itemIndex].qty--;
        Cookies.set("cart", JSON.stringify(state.items), { expires: 7 });
      }
    },
    clearCart(state) {
      state.items = [];
      Cookies.set("cart", JSON.stringify(state.items), { expires: 7 });
    },
    setPayed(state) {
      state.isPayed = true;
    },
  },
});

export const { addToCart, clearCart, removeFromCart, setPayed } =
  cartSlice.actions;
