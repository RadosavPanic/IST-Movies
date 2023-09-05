import { useSelector } from "react-redux";
import { selectMovies } from "../../store/movies/movie.selector";

import Movie from "../movie/movie.component";

import {
  MovieGrid,
  MoviesContainer,
  StyledMoviesListGrid,
} from "./movies-preview.styles";

const MoviesPreview = () => {
  const movies = useSelector(selectMovies);

  return (
    <MoviesContainer>
      <StyledMoviesListGrid container justifyContent="space-between">
        {movies && movies.length > 0 ? (
          movies.slice(0, 6).map((movie) => (
            <MovieGrid item key={movie.id} xs={12} sm={6} md={4}>
              <Movie {...movie} />
            </MovieGrid>
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </StyledMoviesListGrid>
    </MoviesContainer>
  );
};

export default MoviesPreview;
