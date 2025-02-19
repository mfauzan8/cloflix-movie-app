import React, { useState, useEffect } from 'react';
import Navbar from '../component/Movie/Navbar';
import { getCredits, getDetail } from '../api';
import { useLocation, useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import CardCast from '../component/Movie/CardCast';
import moment from 'moment';
import Spinner from '../component/Movie/Spinner';

const MovieDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const location = useLocation()
    const isMovie = location.pathname.startsWith('/movie');

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await getDetail(isMovie ? 'movie' : 'tv', id);
                const responseCredit = await getCredits(isMovie ? 'movie' : 'tv', id);
                setData({ movie: response, credits: responseCredit });
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };
        fetchMovieDetails();
    }, [id]);

    return (
        <div className="relative w-full min-h-screen bg-black">
            <Navbar />
            {data == null ? <Spinner /> : <div className="relative w-full pt-16 min-h-screen">
                <img
                    src={`https://image.tmdb.org/t/p/original${data?.movie?.backdrop_path}`}
                    alt={data?.movie?.title}
                    className="w-4/5 mx-auto rounded-md h-[70vh] object-cover"
                />
                <div className="relative w-full flex flex-col items-center mt-[-10%]">
                    <div className="w-full md:w-4/5 flex flex-col md:flex-row justify-between items-start px-4 md:px-10">
                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <img
                                src={`https://image.tmdb.org/t/p/original${data?.movie?.poster_path}`}
                                alt={data?.movie?.title}
                                className="w-full rounded-xl shadow-lg"
                            />
                        </div>
                        <div className="w-full md:w-3/4 text-white md:ml-10">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">{data?.movie?.title || data?.movie?.original_name}</h1>
                            <p className="text-xl mb-4 italic drop-shadow-lg">{data?.movie?.tagline}</p>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-3xl font-bold drop-shadow-lg">{data?.movie?.vote_average.toFixed(1)}</span>
                                <FaStar className="text-yellow-400 text-2xl" />
                                <span className="text-lg drop-shadow-lg">({data?.movie?.vote_count} votes)</span>
                            </div>
                            <div className="flex items-center gap-4 mb-4">
                                <span>{data?.movie?.runtime} mins</span>
                                <span>Release date: {moment(data?.movie?.release_date).format('DD MMM YYYY')}</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {data?.movie?.genres.map((genre) => (
                                    <span
                                        key={genre.id}
                                        className="px-3 py-1 bg-gray-700 rounded-full"
                                    >
                                        {genre.name}
                                    </span>
                                ))}
                            </div>
                            <h2 className="text-2xl font-bold mb-2">Synopsis</h2>
                            <p className="text-base leading-relaxed mb-4">{data?.movie?.overview}</p>
                            <h2 className="text-2xl font-bold mb-2">Cast</h2>
                            <div className="scroll flex overflow-auto">
                                {data?.credits?.cast?.map((credit) => (
                                    <div key={'cast' + credit.id} >
                                        <CardCast cast={credit} />
                                    </div>
                                ))}
                            </div>
                            <h2 className="text-2xl font-bold mb-2 mt-5">Crew</h2>
                            <div className="scroll flex overflow-auto">
                                {data?.credits?.crew?.map((credit) => (
                                    <div key={credit.id} >
                                        <CardCast cast={credit} />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>}
        </div>
    );
}

export default MovieDetail;
