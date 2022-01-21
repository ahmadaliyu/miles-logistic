import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";

export const signup = createAsyncThunk("signup/auth", async (data) => {
  return {
    user: "Test user",
    role: "Normal user",
  };
});
export const login = createAsyncThunk("signup/auth", async (data) => {
  return {
    user: "Test user",
    role: "Normal user",
  };
});
