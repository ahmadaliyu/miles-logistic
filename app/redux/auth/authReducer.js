import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "./authThunk";

const initialState = {
  userRepresentation: {},
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: {
    [signup.pending]: (state, action) => {
      state.error = null;
      state.status = "loading";
    },
    [signup.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.error = null;
      state.userRepresentation = action.payload;
    },
    [signup.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
  },
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending]: (state, action) => {
      state.error = null;
      state.status = "loading";
    },
    [login.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.error = null;
      state.userRepresentation = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
  },
});

export default authSlice.reducer;

export const authReducer = (state) => state.authSlice;
