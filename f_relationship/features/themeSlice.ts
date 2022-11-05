import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "app/store";

interface Theme {
  NetworkUpdateOpened: boolean;
  NetworkCreateOpened: boolean;
  NavBarOpened: boolean;
  ScrollPosition: { x: number; y: number };
}
const initialState: Theme = {
  NetworkUpdateOpened: false,
  NetworkCreateOpened: false,
  NavBarOpened: false,
  ScrollPosition: { x: 0, y: 0 },
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setNetworkUpdateOpened: (state, opened) => {
      state.NetworkUpdateOpened = opened.payload;
    },
    setNetworkCreateOpened: (state, opened) => {
      state.NetworkCreateOpened = opened.payload;
    },
    setNavBarOpened: (state, opened) => {
      state.NavBarOpened = opened.payload;
    },
    setScrollPosition: (state, position) => {
      state.ScrollPosition = position.payload;
    },
  },
});

export const {
  setNetworkUpdateOpened,
  setNetworkCreateOpened,
  setNavBarOpened,
  setScrollPosition,
} = themeSlice.actions;
export const selectNetworkUpdateOpened = (state: RootState) =>
  state.theme.NetworkUpdateOpened;
export const selectNetworkCreateOpened = (state: RootState) =>
  state.theme.NetworkCreateOpened;
export const selectNavBarOpened = (state: RootState) =>
  state.theme.NavBarOpened;
export const selectScrollPosition = (state: RootState) =>
  state.theme.ScrollPosition;
export default themeSlice.reducer;
