import React from 'react';
import { Navbar } from '../navbar/Navbar';
import { MovieDetail } from '../movie-detail/MovieDetail';
import { BackgroundImage } from '../background-image/BackgroundImage';

export const Home = () => {
    const content = (<div className='boxed'><Navbar /><MovieDetail /></div>)

    return (
        <div className="home">
            <BackgroundImage content={content} />
        </div>
    )
}