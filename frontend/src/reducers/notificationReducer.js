import api from "@/lib/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await api.get(`/notifications/${user._id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    console.log(response);
    return response.data;
  }
);

const notificationSlice = createSlice({
  name: "notifications",
  initialState: {
    notifications: [],
    status: "idle",
  },
  reducers: {
    setNotification: (state, action) => {
      state.notifications = action.payload;
    },
    addNotification: (state, action) => {
      state.notifications.unshift(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNotifications.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const { setNotification, addNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
