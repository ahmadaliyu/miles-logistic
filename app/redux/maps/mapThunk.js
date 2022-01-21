import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";

export const fetchPlaces = createAsyncThunk(
  "fetchPlaces/maps",
  async (data) => {
    let details = {};
    const response = await api(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
        data.latitude +
        "," +
        data.longitude +
        "&radius=4500&key=" +
        "AIzaSyAoSoEbh6gl5LFvsYweufdbeblBCC89qFI",
    );
    if (response) {
      // console.log(response.results);
      return response.results;
    }
  },
);
