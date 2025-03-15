import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hotels: [],
    loading: false,
    error: null,
  };
  
  const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    fetchHotelsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchHotelsSuccess: (state, action) => {
      state.loading = false;
      state.hotels = action.payload;
    },
    fetchHotelsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchHotelsRequest, fetchHotelsSuccess, fetchHotelsFailure } = hotelsSlice.actions;
  
  export default hotelsReducer;
  
