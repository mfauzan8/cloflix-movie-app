import { Link } from "react-router-dom";
import React from "react";
import ISO6391 from 'iso-639-1';
import moment from "moment";

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
        <div className="cards_overlay">
          <div className="cards_title">{movie.original_title}</div>
          <div className="cards_date">{moment(movie.release_date).format('MMM YYYY')} • {ISO6391.getName(movie.original_language)}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
