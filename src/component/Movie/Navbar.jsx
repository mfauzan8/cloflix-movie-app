import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav className="w-full bg-black opacity-60 py-3 px-20 text-white absolute top-0 z-20">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex text-4xl font-black font-racing">
                    <BiSolidCameraMovie />
                    Clo<span className="text-red-800">Flix</span>
                </div>
                <div className="flex gap-10">
                    <Link smooth to="/dashboard" className="nav-link">Home</Link>
                    <Link smooth to="/movie"  className="nav-link">Movie</Link>
                    <Link smooth to="/movie-series"  className="nav-link">Tv Series</Link>
                    <Link smooth to="/watchlist"  className="nav-link">Watchlist</Link>
                    <Link smooth to="/search"  className="nav-link flex items-center gap-1"><IoSearch /> Search</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
