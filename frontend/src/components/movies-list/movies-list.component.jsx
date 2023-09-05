import { Fragment } from "react";

import Movie from "../movie/movie.component";

import {
  MovieGrid,
  MoviesContainer,
  StyledMoviesListGrid,
  HeaderContainer,
} from "./movies-list.styles";
import { Typography } from "@mui/material";

import { selectMovies } from "../../store/movies/movie.selector";
import { useSelector } from "react-redux";

const MoviesList = () => {
  const movies = useSelector(selectMovies);

  return (
    <Fragment>
      <HeaderContainer>
        <Typography variant="h2" align="left" color="textPrimary" gutterBottom>
          All movies
        </Typography>
      </HeaderContainer>
      <MoviesContainer>
        <StyledMoviesListGrid container justifyContent="space-between">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieGrid item key={movie.id} xs={12} sm={6} md={4}>
                <Movie {...movie} />
              </MovieGrid>
            ))
          ) : (
            <p>Loading movies...</p>
          )}
        </StyledMoviesListGrid>
      </MoviesContainer>
    </Fragment>
  );
};

export default MoviesList;
