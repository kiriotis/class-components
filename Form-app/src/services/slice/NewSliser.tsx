// src/redux/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries: ["USA", "Canada", "Mexico", "India", "China", "Brazil"], // Add more countries as needed
  picture: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPicture(state, action) {
      state.picture = action.payload;
    },
  },
});

export const { setPicture } = formSlice.actions;
export default formSlice.reducer;
