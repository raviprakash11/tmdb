import { configureStore } from '@reduxjs/toolkit';
import { moviesReduers } from "../app/movies/movies.slice";
import { authReducer } from '../app/auth/auth.slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        movies: moviesReduers
    }
});

export default store;