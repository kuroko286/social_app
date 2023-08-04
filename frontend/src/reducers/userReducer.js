import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState =
  (Cookies.get("user") && JSON.parse(Cookies.get("user"))) || null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
    verify: (state) => {
      return { ...state, verified: true };
    },
    logout: () => {
      return null;
    },
  },
});

export const { login, verify, logout } = userSlice.actions;

export default userSlice.reducer;
