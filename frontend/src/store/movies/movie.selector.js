import { createSelector } from "reselect";

const selectMovieReducer = (state) => state.movies;

export const selectMovies = createSelector(
  [selectMovieReducer],
  (moviesSlice) => moviesSlice.movies
);
