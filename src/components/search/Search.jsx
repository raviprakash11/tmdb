import React from "react";
import { searchMovies } from '../../services/movies.service';
import "./Search.css";

export const Search = ({ fetchMovieDetailById }) => {
    const [keyword, setKeyword] = React.useState('');
    const [movies, setMovies] = React.useState([]);

    const handleOnChange = (e) => {
        const value = e.target.value;
        if(value.trim().length >= 3) {
            findMovies(value.trim())
        }
        setKeyword(value);
    }

    const findMovies = async (value) => {
        try {
            const data = await searchMovies(value.trim());
            setMovies(data.results);
        } catch (error) {
            console.error(`searchMovie::Error `, error)
        }
    }

    const selectAMovie = (movieId) => {
        fetchMovieDetailById(movieId);
        setKeyword('');
        setMovies([]);
    }

    return (
        <div className="search-field">
            <input type="search" name="search" id="search" placeholder="Search Movie Title..." value={keyword} onChange={handleOnChange} />
            {movies.length ? <ul className="search-suggestion">
                {movies.map((movie) => (<li key={movie.id} onClick={() => selectAMovie(movie.id)}>{movie.title}</li>))}
            </ul> : null}
        </div>
    )
}