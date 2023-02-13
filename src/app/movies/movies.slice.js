import { createSlice } from "@reduxjs/toolkit";

import { getMovieDetailById, searchMovies } from '../../services/movies.service';
import { IMAGE_BASE_PATH } from '../../shared/constants';

const initialState = {
    movies: [],
    movie: {},
    isLoading: false,
    error: null,
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState: initialState,
    reducers: {
        fetchMoviesStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        fetchMoviesSuccess: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.movies = action.payload.movies;
        },
        fetchMoviesFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
        },
        resetMovies: (state) => {
            state.movies = []
        },
        fetchMovieStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        fetchMovieSuccess: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.movie = action.payload.movie;
        },
        fetchMovieFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
        }
    }
});

export const moviesReduers = moviesSlice.reducer;
export const moviesActions = moviesSlice.actions;

export const fetchMovieDetailById = (movieId, reset = false) => async (dispatch) => {
    dispatch(moviesActions.fetchMovieStart())
    try {
        const data = await getMovieDetailById(movieId);
        data.poster_path = `${IMAGE_BASE_PATH}${data.poster_path}`;
        dispatch(moviesActions.fetchMovieSuccess({ movie: data }))
        if(reset) dispatch(moviesActions.resetMovies());
    } catch (error) {
        dispatch(moviesActions.fetchMovieFailure({ error }))
    }
}

export const findMovies = (value) => async (dispatch) => {
    dispatch(moviesActions.fetchMoviesStart())
    try {
        const data = await searchMovies(value.trim());
        dispatch(moviesActions.fetchMoviesSuccess({ movies: data.results }))
    } catch (error) {
        dispatch(moviesActions.fetchMoviesFailure({ error }));
    }
}