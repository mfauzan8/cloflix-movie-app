import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { getAllTrending } from "../api";
import { FaStar } from "react-icons/fa";

const DashboardPage = () => {
  const [data, setData] = useState([]);

  const fetchDataTrending = async () => {
    try {
      const trendingData = await getAllTrending();
      setData(trendingData);
    } catch (error) {
      console.error("Error fetching trending data: ", error);
    }
  };

  useEffect(() => {
    fetchDataTrending();
  }, []);

  return (
    <div>
      <Carousel
        swipeable
        emulateTouch
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
      >
        {data?.results?.map((item) => (
          <div key={item.id} className="relative">
            <img
              src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
              alt={item.title}
            />
            <div className="absolute top-1/3 left-10 z-2 text-white p-2 rounded w-2/5 text-justify">
              <div className="flex flex-col gap-2">
                <p className="text-5xl font-extrabold uppercase">{item.original_title || item.original_name}</p>
                <div className="bg-yellow-500 py-1 text-center w-12 rounded-md text-black font-bold">{item.adult ? '13+' :'18+'}</div>
                <p className="text-lg mt-10">{item.overview}</p>
                <div className="flex gap-3 items-center text-2xl">
                  <FaStar className="text-yellow-400" />
                  <div className="font-bold">{item.vote_average.toFixed(1)} <span className="font-normal text-xl ms-3 ps-3 border-s-2">{item.vote_count}</span></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DashboardPage;
