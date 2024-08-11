import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ISO6391 from 'iso-639-1';
import moment from "moment";
import { FaStar } from "react-icons/fa";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";

const Card = ({ movie }) => {
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    const isFind = watchlist.some((item) => item.id === movie.id);
    setIsBookmarked(isFind);
  }, [movie.id]);

  const handleAddBookmark = (movie, e) => {
    e.stopPropagation();

    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    const isFind = watchlist.some((item) => item.id === movie.id);

    if (!isFind) {
      watchlist.push(movie);
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
      setIsBookmarked(true); 
    } else {
      watchlist = watchlist.filter((item) => item.id !== movie.id);
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
      setIsBookmarked(false);
    }

    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="card" onClick={() => navigate(`/movie/detail/${movie.id}`)}>
      <img
        className="cards_img"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.original_title}
      />
      <div className="flex justify-between">
        <div className="card_rating flex items-center gap-1 text-white">
          <FaStar className="text-yellow-400" /> {movie.vote_average?.toFixed(1)}
        </div>
        <div
          className="card_watchlist"
          onClick={(e) => handleAddBookmark(movie, e)}
        >
          {isBookmarked ? (
            <FaBookmark className="text-red-800 h-5 hover:shake" />
          ) : (
            <FaRegBookmark className="text-red-800 h-5 hover:shake" />
          )}
        </div>
      </div>
      <div className="cards_overlay text-white">
        <div className="cards_title">{movie.original_title}</div>
        <div className="cards_date">
          {moment(movie.release_date).format('MMM YYYY')} • {ISO6391.getName(movie.original_language)}
        </div>
      </div>
    </div>
  );
};

export default Card;
