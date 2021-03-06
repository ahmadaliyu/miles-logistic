import { createSlice } from "@reduxjs/toolkit";
import { autoComplete, fetchPlaces, searchAddress, searchLocation } from './mapThunk';

const initialState = {
  placesDetail: [],
  autoCompletePlaces: [],
  addresses: [],
  locations:[],
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
      state.placesDetail = action.payload;
    },
    [fetchPlaces.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [autoComplete.pending]: (state, action) => {
      state.error = null;
      state.status = "completing";
    },
    [autoComplete.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.error = null;
      state.autoCompletePlaces = action.payload;
    },
    [autoComplete.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [searchAddress.pending]: (state, action) => {
      state.error = null;
      state.status = "address-loading";
    },
    [searchAddress.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.error = null;
      state.addresses = action.payload;
    },
    [searchAddress.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [searchLocation.pending]: (state, action) => {
      state.error = null;
      state.status = "location-loading";
    },
    [searchLocation.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.error = null;
      state.locations = action.payload;
    },
    [searchLocation.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
  },
});

export default mapSlice.reducer;

export const mapReducer = (state) => state.mapSlice;
