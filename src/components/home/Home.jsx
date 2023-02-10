import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMovieDetailById } from '../../services/movies.service';
import { moviesActions } from '../../app/movies/movies.slice';
import { Navbar } from '../navbar/Navbar';
import { MovieDetail } from '../movie-detail/MovieDetail';
import { BackgroundImage } from '../background-image/BackgroundImage';

const IMAGE_BASE_PATH = 'https://images.tmdb.org/t/p/original'

export const Home = () => {
    const dispatch = useDispatch();
    const moviesState = useSelector(state => state.movies);

    const fetchMovieDetailById = async (movieId) => {
        dispatch(moviesActions.fetchMovieStart())
        try {
            const data = await getMovieDetailById(movieId);
            data.poster_path = `${IMAGE_BASE_PATH}${data.poster_path}`;
            dispatch(moviesActions.fetchMovieSuccess({ movie: data }))
        } catch (error) {
            console.error(`Home::fetchMovieDetailById::Error`, error);
            dispatch(moviesActions.fetchMovieFailure({ error }))
        }
    }

    useEffect(() => {
        fetchMovieDetailById(157336);
    }, []);

    const content = (<MovieDetail movie={moviesState.movie} />)

    return (
        <div className="home">
            <BackgroundImage bgImage={moviesState.movie.backdrop_path ? `${IMAGE_BASE_PATH}${moviesState.movie.backdrop_path}` : null} content={content} />
        </div>
    )
}