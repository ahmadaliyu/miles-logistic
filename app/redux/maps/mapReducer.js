import { createSlice } from "@reduxjs/toolkit";
import { fetchPlaces } from "./mapThunk";

const initialState = {
  placesDetail: [],
  status: "idle",
  error: null,
};

const mapSlice = createSlice({
  name: "fetchPlaces",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPlaces.pending]: (state, action) => {
      state.error = null;
      state.status = "loading";
    },
    [fetchPlaces.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.error = null;
      state.placesDetails = action.payload;
    },
    [fetchPlaces.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
  },
});

export default mapSlice.reducer;

export const mapReducer = (state) => state.mapSlice;
