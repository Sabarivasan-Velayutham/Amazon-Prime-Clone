

import React, { useEffect, useState } from 'react';
import axios from './axios'
import requests from './requests';
import './Banner.css'

export default function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchLatestMovies)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
            return request
        }
        fetchData()
    }, [])
    console.log(movie)

    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                backgroundPosition: "center center ",
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className='whole-banner'>
                <h1 className='banner-title'>
                    {movie?.title || movie?.orginal_name || movie?.name}
                </h1>
            </div>
        </header>
    );
}
