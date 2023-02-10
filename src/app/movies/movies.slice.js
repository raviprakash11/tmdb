import { createSlice } from "@reduxjs/toolkit";

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