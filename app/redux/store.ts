import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";
import mapReducer from "./maps/mapReducer";

// const middleWares = [];


const store = configureStore({
  reducer: {
    mapSlice: mapReducer,
    authSlice: authReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableStateInvariant: false,
      serializableCheck: false,
    }),
  ],
});

export default store;
