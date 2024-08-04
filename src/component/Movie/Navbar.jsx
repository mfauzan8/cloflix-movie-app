import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidCameraMovie } from "react-icons/bi";


const Navbar = () => {
    return (
        <nav className="bg-black opacity-60 container py-3 px-20 text-white absolute top-0 z-20">
            <div className="mx-auto flex justify-between items-center">
                <div className="flex text-4xl font-black font-racing opacity-100">
                    <BiSolidCameraMovie />
                    Clo<span className="text-red-800">Flix</span>
                </div>
                <div className="flex gap-10">
                    <Link to="/" className="hover:text-red-500">Home</Link>
                    <Link to="/about" className="hover:text-red-500">Now Playing</Link>
                    <Link to="/contact" className="hover:text-red-500">Coming Soon</Link>
                    <Link to="/contact" className="hover:text-red-500">Popular</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
