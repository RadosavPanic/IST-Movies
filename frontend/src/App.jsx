import { Fragment, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import axios from "axios";
import { setMovies } from "./store/movies/movie.reducer";
import { setHalls } from "./store/halls/halls.reducer";

import TopNavigation from "./routes/navigation/top-nav.component";
import BottomNavigation from "./routes/navigation/bottom-nav.component";

import Home from "./routes/home/home.component";
import MoviesList from "./components/movies-list/movies-list.component";
import Halls from "./routes/halls/halls.component";
import Manipulation from "./routes/manipulation/manipulation.component";

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

    const gethallsMap = async () => {
      const hallsMap = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/halls`
      );

      const hallsData = hallsMap.data;

      dispatch(setHalls(hallsData));
    };

    getMoviesMap();
    gethallsMap();
  }, []);

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
        <Route path="halls" element={<Halls />} />
        <Route path="manipulation" element={<Manipulation />} />
      </Route>
    </Routes>
  );
};

export default App;
