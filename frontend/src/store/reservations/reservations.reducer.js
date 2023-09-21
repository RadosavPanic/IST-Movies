import { createSlice } from "@reduxjs/toolkit";

export const RESERVATIONS_INITIAL_STATE = {
  reservations: [],
};

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState: RESERVATIONS_INITIAL_STATE,
  reducers: {
    setReservations(state, action) {
      state.reservations = action.payload;
    },
  },
});

export const { setReservations } = reservationsSlice.actions;

export const reservationsReducer = reservationsSlice.reducer;
