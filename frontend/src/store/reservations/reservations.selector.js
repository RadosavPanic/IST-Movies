import { createSelector } from "reselect";

const selectReservationsReducer = (state) => state.reservations;

export const selectProjections = createSelector(
  [selectReservationsReducer],
  (reservationsSlice) => reservationsSlice.reservations
);
