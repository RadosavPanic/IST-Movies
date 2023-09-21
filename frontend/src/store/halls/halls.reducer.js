import { createSlice } from "@reduxjs/toolkit";

export const HALLS_INITIAL_STATE = {
  halls: [],
};

export const hallsSlice = createSlice({
  name: "halls",
  initialState: HALLS_INITIAL_STATE,
  reducers: {
    setHalls(state, action) {
      state.halls = action.payload;
    },
  },
});

export const { setHalls } = hallsSlice.actions;

export const hallsReducer = hallsSlice.reducer;
