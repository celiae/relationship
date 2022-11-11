import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "app/store";

interface Theme {
  SidebarActive: number;
  NavBarOpened: boolean;
}
const initialState: Theme = {
  SidebarActive: 0,
  NavBarOpened: false,
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setSidebarActive: (state, id) => {
      state.SidebarActive = id.payload;
    },
    setNavBarOpened: (state, opened) => {},
  },
});

export const { setSidebarActive, setNavBarOpened } = themeSlice.actions;
export const selectSidebarActive = (state: RootState) =>
  state.theme.SidebarActive;
export const selectNavBarOpened = (state: RootState) =>
  state.theme.NavBarOpened;

export default themeSlice.reducer;
