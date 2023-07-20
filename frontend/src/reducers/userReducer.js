import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = Cookies.get("user") || null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
