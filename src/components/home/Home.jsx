import React, { useState, useEffect } from 'react';
import { getMovieDetailById } from '../../services/movies.service';
import { Navbar } from '../navbar/Navbar';
import { MovieDetail } from '../movie-detail/MovieDetail';
import { BackgroundImage } from '../background-image/BackgroundImage';

const IMAGE_BASE_PATH = 'https://images.tmdb.org/t/p/original'

export const Home = () => {
    const [movieDetail, setMovieDetail] = useState({});

    const fetchMovieDetailById = async (movieId) => {
        try {
            const data = await getMovieDetailById(movieId);
            console.log(data);
            data.poster_path = `${IMAGE_BASE_PATH}${data.poster_path}`;
            setMovieDetail(data);
        } catch (error) {
            console.error(`Home::fetchMovieDetailById::Error`, error);
        }
    }

    useEffect(() => {
        fetchMovieDetailById(157336);
    }, []);

    const content = (<div className='boxed'><Navbar fetchMovieDetailById={fetchMovieDetailById} /><MovieDetail movie={movieDetail} /></div>)

    return (
        <div className="home">
            <BackgroundImage bgImage={movieDetail.backdrop_path ? `${IMAGE_BASE_PATH}${movieDetail.backdrop_path}` : null} content={content} />
        </div>
    )
}