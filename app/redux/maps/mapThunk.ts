import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";
import { googleApiKey } from '../../../env';

interface T{
  [key: string]: any
}

export const fetchPlaces  = createAsyncThunk(
  "fetchPlaces/maps",
  async (data: any) => {
    const response = await api(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
        data.latitude +
        "," +
        data.longitude +
        "&radius=4500&key=" +
        googleApiKey,
    );

       
    if (response) {
      return response.results;
    }
  },
);

export const autoComplete = createAsyncThunk(
  "autoComplete/maps",
  async (data : any) => {
    const response = await api(
      'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + data.text + '&key=' + googleApiKey
    );
      const formmatedAutoPlaces = [];
      response.predictions.forEach((pre:any) => {
        formmatedAutoPlaces.push({ description: pre.description, place_id: pre.place_id });
      });
      // console.log(response);
      return formmatedAutoPlaces;
  }
)

export const searchAddress = createAsyncThunk(
  "searchAddress/maps",
  async (data : any) => {
    const response = await api(
     'https://maps.googleapis.com/maps/api/geocode/json?address=' +
          data.address +
          '&key=' +
          googleApiKey
    );
      return response;
  }
)

export const searchLocation = createAsyncThunk(
  "searchLocation/maps",
  async (data : any) => {
    const response = await api(
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
          data.latitude +
          ',' +
          data.longitude +
          '&radius=4500&key=' +
          googleApiKey
    );
      return response;
  }
)
