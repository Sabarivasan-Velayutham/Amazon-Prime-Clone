import React, { useState, useEffect } from 'react';
import './Section.css'
import axios from './axios'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original/"

export default function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }

    const videoClick = (movie) => {
        movieTrailer(movie?.title || movie?.orginal_name || movie?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search)
                const Url = urlParams.get("v")
                if (Url === trailerUrl) {
                    setTrailerUrl('')
                }
                else {
                    setTrailerUrl(Url)
                }
            })
            .catch((error) => alert('Trailer not available ... '))
    }

    return (
        <div className='section'>
            <p>{title}</p>
            <div className='section-posters'>
                {movies.map(movie => (
                    <><img
                        key={movie.id}
                        onClick={() => videoClick(movie)}

                        className={`section-poster `}
                        src={`${base_url}${movie.backdrop_path}`} alt={movie.name} />
                    </>
                ))}

            </div>

            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

