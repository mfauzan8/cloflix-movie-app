import { Link } from "react-router-dom";
import React from "react";
import ISO6391 from 'iso-639-1';
import moment from "moment";
import { FaStar } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";


const Card = ({ movie }) => {

  return (
    <Link
      to={`/movie/${movie.id}`}
      style={{ textDecoration: "none", color: "white" }}
    >
      <div className="card">
        <img
          className="cards_img"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        />

        <div className="flex justify-between">
          <div className="card_rating flex items-center gap-1"><FaStar className="text-yellow-400" /> {movie.vote_average.toFixed(1)}</div>
          <div className="card_watchlist"><FaBookmark className="text-red-900" /></div>
        </div>
        <div className="cards_overlay">
          <div className="cards_title">{movie.original_title}</div>
          <div className="cards_date">{moment(movie.release_date).format('MMM YYYY')} • {ISO6391.getName(movie.original_language)}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
