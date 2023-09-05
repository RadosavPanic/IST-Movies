import { combineReducers } from "@reduxjs/toolkit";

import { moviesReducer } from "./movies/movie.reducer";

export const rootReducer = combineReducers({
  movies: moviesReducer,
});
