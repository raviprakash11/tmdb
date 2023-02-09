import axios from './request.service';

const API_KEY = '421e0bdaf5f724e1114905f6648ba94e';

export const searchMovies = async (query) => {
    try {
        const res = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
        return res.data;
    } catch (error) {
        throw error;
    }
}

export const getMovieDetailById = async (movieId) => {
    try {
        const res = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);
        return res.data;
    } catch (error) {
        throw error;
    }
}