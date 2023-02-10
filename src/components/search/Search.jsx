import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import { findMovies, fetchMovieDetailById } from '../../app/movies/movies.slice';
import "./Search.css";

export const Search = () => {
    const dispatch = useDispatch();
    const moviesState = useSelector((state) => state.movies);
    const [keyword, setKeyword] = React.useState('');

    const handleOnChange = (e) => {
        const value = e.target.value;
        if(value.trim().length >= 3) {
            dispatch(findMovies(value.trim()))
        }
        setKeyword(value);
    }

    const selectAMovie = (movieId) => {
        dispatch(fetchMovieDetailById(movieId, true));
        setKeyword('');
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