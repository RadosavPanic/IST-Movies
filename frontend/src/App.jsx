import { Fragment, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import TopNavigation from "./routes/navigation/top-nav.component";
import BottomNavigation from "./routes/navigation/bottom-nav.component";

import { useDispatch } from "react-redux";
import axios from "axios";

import Home from "./routes/home/home.component";
import MoviesList from "./components/movies-list/movies-list.component";
import Manipulation from "./routes/manipulation/manipulation.component";

import { setMovies } from "./store/movies/movie.reducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMoviesMap = async () => {
      const moviesMap = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/movies`
      );
      const movieData = moviesMap.data;

      dispatch(setMovies(movieData));
    };

    getMoviesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Fragment>
            <TopNavigation />
            <Outlet />
            <BottomNavigation />
          </Fragment>
        }
      >
        <Route index element={<Home />} />
        <Route path="movies" element={<MoviesList />} />
        <Route path="manipulation" element={<Manipulation />} />
      </Route>
    </Routes>
  );
};

export default App;
