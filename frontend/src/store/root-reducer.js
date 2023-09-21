import { combineReducers } from "@reduxjs/toolkit";

import { moviesReducer } from "./movies/movie.reducer";
import { hallsReducer } from "./halls/halls.reducer";

export const rootReducer = combineReducers({
  movies: moviesReducer,
  halls: hallsReducer,
});
