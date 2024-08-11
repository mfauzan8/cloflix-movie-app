import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { getAllTrending } from "../api";
import { FaStar } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import Navbar from "../component/Movie/Navbar";
import { FaPlus } from "react-icons/fa";
import NowPlaying from "../component/Movie/NowPlaying";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
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
    <div className="relative">
      <Navbar />
      <Carousel
        swipeable
        emulateTouch
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
        className="z-10"
      >
        {data?.results?.map((item) => (
          <div key={item.id} className="relative">
            <img
              src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
              alt={item.title}
            />
            <div className="absolute top-1/4 left-10 z-2 text-white p-2 rounded w-1/2 text-start">
              <div className="flex flex-col gap-3">
                <p className="text-5xl font-extrabold uppercase">{item.original_title || item.original_name}</p>
                <div className="flex gap-2 text-center">
                  <p className="bg-yellow-500 text-black py-1 px-3 rounded-lg font-bold">{item.adult ? '13+' : '18+'}</p>
                  <p className="bg-red-800 py-1 px-3 rounded-lg capitalize">{item.media_type}</p>
                  {/* <p className="bg-gray-900 py-1 px-3 rounded-lg capitalize">{moment(item.release_date).format('DD MMM YYYY')}</p> */}
                </div>
                <p className="text-lg mt-10 text-justify">{item.overview}</p>

                <div className="flex gap-3 items-center text-2xl">
                  <FaStar className="text-yellow-400" />
                  <div className="font-bold border-e-2 pe-3">{item.vote_average.toFixed(1)} </div>
                  <BiSolidLike className=" text-xl" />
                  <span className="font-normal text-xl"> {item.vote_count}</span>
                </div>
                <div className="flex w-2/5 gap-2">
                  {/* <button className="button-movie bg-red-800">Details</button> */}
                  <button className="flex items-center gap-1 button-movie bg-black " onClick={() => navigate(`/movie/detail/${item.id}`)}>Detail</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <NowPlaying />
    </div>
  );
};

export default DashboardPage;
