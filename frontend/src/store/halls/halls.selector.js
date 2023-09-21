import { createSelector } from "reselect";

const selectHallsReducer = (state) => state.halls;

export const selectHalls = createSelector(
  [selectHallsReducer],
  (hallsSlice) => hallsSlice.halls
);
