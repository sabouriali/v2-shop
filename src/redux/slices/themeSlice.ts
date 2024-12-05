import { createSlice } from "@reduxjs/toolkit";

const localTheme = localStorage.getItem("theme");

const initialState = {
  value: localTheme ? localTheme : "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme(state) {
      if (state.value === "light") {
        state.value = "dark";
        localStorage.setItem("theme", state.value);
      } else {
        state.value = "light";
        localStorage.setItem("theme", state.value);
      }
    },
  },
});

export const { switchTheme } = themeSlice.actions;
