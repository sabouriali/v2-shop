import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const user = sessionStorage.getItem("user");

const initialState = {
  isLogin: user ? true : false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin(state, action: PayloadAction<{ id: number; name: string }>) {
      state.isLogin = true;
      sessionStorage.setItem("user", JSON.stringify(action.payload));
    },
    setLogout(state) {
      state.isLogin = false;
      sessionStorage.removeItem("user");
    },
  },
});

export const { setLogin, setLogout } = loginSlice.actions;
