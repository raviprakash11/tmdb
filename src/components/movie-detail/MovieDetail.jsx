import React from 'react';
import "./MovieDetail.css";

export const MovieDetail = () => {
    return (
        <div className="movie-detail">
            <div className="movie-img">
                <img src="https://source.unsplash.com/random" alt="Movie image" />
            </div>
            <div className="movie-data">
                <div className="movie-data-main">
                    <h2 className="movie-name">interstellar</h2>
                    <h6 className="movie-tagline">tagline</h6>
                    <p className="movie-synopsis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni officia tempora laudantium! Soluta dolorem ab debitis quaerat totam nemo officia quasi. Quibusdam cum mollitia consequuntur cupiditate aliquid accusantium aut.</p>
                </div>
                <div className="movie-data-meta">
                    <p className="movie-category">Adventure, Drama, Ficture</p>
                    <p className="movie-producers">Legendary Pictures</p>
                    <div className="movie-meta">
                        <h4 className='movie-meta-key'>Original Release:</h4>
                        <p className="movie-meta-value">2014-11-05</p>
                    </div>
                    <div className="movie-meta">
                        <h4 className='movie-meta-key'>Original Release:</h4>
                        <p className="movie-meta-value">2014-11-05</p>
                    </div>
                    <div className="movie-meta">
                        <h4 className='movie-meta-key'>Original Release:</h4>
                        <p className="movie-meta-value">2014-11-05</p>
                    </div>
                    <div className="movie-meta">
                        <h4 className='movie-meta-key'>Original Release:</h4>
                        <p className="movie-meta-value">2014-11-05</p>
                    </div>
                </div>
            </div>
        </div>
    )
}