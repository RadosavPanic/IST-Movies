import { combineReducers } from "@reduxjs/toolkit";

import { moviesReducer } from "./movies/movie.reducer";
import { hallsReducer } from "./halls/halls.reducer";
import { projectionsReducer } from "./projections/projections.reducer";
import { reservationsReducer } from "./reservations/reservations.reducer";

export const rootReducer = combineReducers({
  movies: moviesReducer,
  halls: hallsReducer,
  projections: projectionsReducer,
  reservations: reservationsReducer,
});
