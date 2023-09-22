import { createSelector } from "reselect";

const selectReservationsReducer = (state) => state.reservations;

export const selectReservations = createSelector(
  [selectReservationsReducer],
  (reservationsSlice) => reservationsSlice.reservations
);
