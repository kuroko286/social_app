import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import friendReducer from "./friendReducer";
import chatReducer from "./chatReducer";
import notificationReducer from "./notificationReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    friends: friendReducer,
    chat: chatReducer,
    notifications: notificationReducer,
  },
});
