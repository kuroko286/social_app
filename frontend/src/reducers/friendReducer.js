import { addFriendStatus, getOnlineFriendsId } from "@/features/friends/utils";
import api from "@/lib/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const getFriends = createAsyncThunk("friends/fetchFriends", async () => {
  const user = JSON.parse(Cookies.get("user"));
  const response = await api.get("/friends", {
    headers: { Authorization: `Bearer ${user?.token}` },
  });
  console.log(response.data);
  return response.data;
});

const friendSlice = createSlice({
  name: "friends",
  initialState: {
    friends: [],
    connectedUser: [],
    status: "idle",
  },
  reducers: {
    setConnectedUser: (state, action) => {
      state.connectedUser = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getFriends.fulfilled, (state, action) => {
        state.friends = action.payload;
        state.status = "succeeded";
      })
      .addCase(getFriends.rejected, (state, action) => {
        state.status = "failed";
        state.friends = [];
      });
  },
});

export const getFriendsWithStatus = (state) => {
  const { friends, connectedUser } = state.friends;

  return addFriendStatus(friends, connectedUser);
};

export const { setConnectedUser } = friendSlice.actions;

export default friendSlice.reducer;
