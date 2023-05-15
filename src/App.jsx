import { Fragment } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import TopNavigation from "./routes/navigation/top-nav.component";
import BottomNavigation from "./routes/navigation/bottom-nav.component";

import Home from "./routes/home/home.component";
import MoviesList from "./components/movies-list/movies-list.component";
import Manipulation from "./routes/manipulation/manipulation.component";

function App() {
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
}

export default App;
