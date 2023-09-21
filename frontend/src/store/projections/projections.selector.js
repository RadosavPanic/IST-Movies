import { createSelector } from "reselect";

const selectProjectionsReducer = (state) => state.projections;

export const selectProjections = createSelector(
  [selectProjectionsReducer],
  (projectionsSlice) => projectionsSlice.projections
);
