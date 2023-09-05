import { createSlice } from "@reduxjs/toolkit";

const addMovieItem = (moviesList, movieToAdd) => {
  return [...moviesList, movieToAdd];
};

const updateMovieItem = (moviesList, movieToUpdate) => {
  return moviesList.map((movie) =>
    movie.id === movieToUpdate.id ? { ...movieToUpdate } : movie
  );
};

const removeMovieItem = (moviesList, movieToRemove) => {
  return moviesList.moviesList.filter((movie) => movie.id !== movieToRemove.id);
};

export const MOVIES_INITIAL_STATE = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState: MOVIES_INITIAL_STATE,
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    addMovie(state, action) {
      state.movies = addMovieItem(state.movies, action.payload);
    },
    updateMovie(state, action) {
      state.movies = updateMovieItem(state.movies, action.payload);
    },
    removeMovie(state, action) {
      state.movies = removeMovieItem(state.movies, action.payload);
    },
  },
});

export const { setMovies, addMovie, updateMovie, removeMovie } =
  moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
