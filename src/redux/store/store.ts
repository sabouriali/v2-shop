import { configureStore } from "@reduxjs/toolkit";

import { themeSlice } from "../slices/themeSlice";
import { cartSlice } from "../slices/cartSlice";
import { loginSlice } from "../slices/loginSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    cart: cartSlice.reducer,
    login: loginSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
