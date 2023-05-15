import { createContext, useReducer, useEffect } from "react";

import { createAction } from "../../utils/reducer/reducer.utils";

import { MOVIE_ACTION_TYPES } from "./movie.types";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const addMovie = (moviesList, movieToAdd) => {
  return [...moviesList, movieToAdd];
};

const updateMovie = (moviesList, movieToUpdate) => {
  return moviesList.map((movie) =>
    movie.id === movieToUpdate.id ? { ...movieToUpdate } : movie
  );
};

const deleteMovie = (moviesList, movieToDelete) => {
  return moviesList.moviesList.filter((movie) => movie.id !== movieToDelete.id);
};

export const MoviesContext = createContext({
  moviesList: [],
  addMovieToList: () => {},
  updateMovieInList: () => {},
  deleteMovieFromList: () => {},
});

export const movieReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case MOVIE_ACTION_TYPES.ADD_MOVIE:
      return {
        ...state,
        moviesList: addMovie(state.moviesList, payload),
      };
    case MOVIE_ACTION_TYPES.UPDATE_MOVIE:
      return {
        ...state,
        moviesList: updateMovie(state.moviesList, payload),
      };
    case MOVIE_ACTION_TYPES.DELETE_MOVIE:
      return {
        ...state,
        moviesList: deleteMovie(state, payload),
      };
    case MOVIE_ACTION_TYPES.SET_MOVIES:
      return {
        moviesList: payload,
      };
    default:
      return state;
  }
};

export const MoviesProvider = ({ children }) => {
  const [state, dispatchMovies] = useReducer(movieReducer, []);

  /*  useEffect(() => {
    addCollectionAndDocuments("movies", DATA);
  }, []); */

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      const movieData = categoryMap.all_movies;

      const action = createAction(MOVIE_ACTION_TYPES.SET_MOVIES, movieData);
      dispatchMovies(action);
    };
    getCategoriesMap();
  }, []);

  const addMovieToList = (movieToAdd) => {
    const action = createAction(MOVIE_ACTION_TYPES.ADD_MOVIE, movieToAdd);
    dispatchMovies(action);
  };

  const updateMovieInList = (movieToUpdate) => {
    const action = createAction(MOVIE_ACTION_TYPES.UPDATE_MOVIE, movieToUpdate);
    dispatchMovies(action);
  };

  const deleteMovieFromList = (movieToDelete) => {
    const action = createAction(MOVIE_ACTION_TYPES.DELETE_MOVIE, movieToDelete);
    dispatchMovies(action);
  };

  const value = {
    moviesList: state,
    addMovieToList,
    updateMovieInList,
    deleteMovieFromList,
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};
