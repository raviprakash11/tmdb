import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import { searchMovies } from '../../services/movies.service';
import { moviesActions } from '../../app/movies/movies.slice';
import "./Search.css";

export const Search = ({ fetchMovieDetailById }) => {
    const dispatch = useDispatch();
    const moviesState = useSelector((state) => state.movies);
    const [keyword, setKeyword] = React.useState('');

    const handleOnChange = (e) => {
        const value = e.target.value;
        if(value.trim().length >= 3) {
            findMovies(value.trim())
        }
        setKeyword(value);
    }

    const findMovies = async (value) => {
        dispatch(moviesActions.fetchMoviesStart())
        try {
            const data = await searchMovies(value.trim());
            dispatch(moviesActions.fetchMoviesSuccess({ movies: data.results }))
        } catch (error) {
            console.error(`searchMovie::Error `, error);
            dispatch(moviesActions.fetchMoviesFailure({ error }));
        }
    }

    const selectAMovie = (movieId) => {
        fetchMovieDetailById(movieId);
        setKeyword('');
        dispatch(moviesActions.resetMovies())
    }

    return (
        <div className="search-field">
            <input type="search" name="search" id="search" placeholder="Search Movie Title..." value={keyword} onChange={handleOnChange} />
            {moviesState.movies.length ? <ul className="search-suggestion">
                {moviesState.movies.map((movie) => (<li key={movie.id} onClick={() => selectAMovie(movie.id)}>{movie.title}</li>))}
            </ul> : null}
        </div>
    )
}