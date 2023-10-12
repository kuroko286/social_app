import api from "@/lib/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const getMessages = createAsyncThunk(
  "chat/fetchMessages",
  async (friendId) => {
    const user = JSON.parse(Cookies.get("user"));
    const response = await api.get(`/chat/${friendId}`, {
      headers: { Authorization: `Bearer ${user?.token}` },
    });
    console.log(response.data);
    return response.data;
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    currentFriend: null,
    messages: [],
    status: "idle",
  },
  reducers: {
    chooseFriend: (state, action) => {
      state.currentFriend = action.payload;
    },
    addMessage: (state, action) => {
      console.log(action.payload);
      state.messages.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMessages.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.messages = action.payload;
        state.status = "succeeded";
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.status = "failed";
        state.messages = [];
      });
  },
});

export const { chooseFriend, addMessage } = chatSlice.actions;

export default chatSlice.reducer;
