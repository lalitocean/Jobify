import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice"; // Import the authSlice

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;
