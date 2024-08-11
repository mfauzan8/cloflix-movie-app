import React from "react";

const CardCast = ({ cast }) => {
    return (
        <div className="card">
            <img
                className="cards_img"
                src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                alt={cast.name}
            />
            <div className="cards_overlay text-white">
                <div className="cards_title">{cast.name}</div>
                <div className="cards_date">
                    {cast.character || cast.job}
                </div>
            </div>
        </div>
    );
};

export default CardCast;
