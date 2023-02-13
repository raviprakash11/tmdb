import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMovieDetailById } from "../../app/movies/movies.slice";
import { MovieDetail } from "../movie-detail/MovieDetail";
import { ErrorBoundary } from "../error-boudary/ErrorBoundary";
import { BackgroundImage } from "../background-image/BackgroundImage";

import { IMAGE_BASE_PATH } from "../../shared/constants";

export const Home = () => {
  const dispatch = useDispatch();
  const moviesState = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetailById(157336));
  }, [dispatch]);

  const content = (
    <ErrorBoundary>
      <MovieDetail movie={moviesState.movie} />
    </ErrorBoundary>
  );

  return (
    <div className="home">
      <BackgroundImage
        bgImage={
          moviesState.movie.backdrop_path
            ? `${IMAGE_BASE_PATH}${moviesState.movie.backdrop_path}`
            : null
        }
        content={content}
      />
    </div>
  );
};
