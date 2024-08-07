import React from 'react';
import { NavLink } from 'react-router-dom';
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
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) => 
                            `nav-link ${isActive ? 'active' : ''}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/movie"
                        className={({ isActive }) => 
                            `nav-link ${isActive ? 'active' : ''}`
                        }
                    >
                        Movie
                    </NavLink>
                    <NavLink
                        to="/tv"
                        className={({ isActive }) => 
                            `nav-link ${isActive ? 'active' : ''}`
                        }
                    >
                        Tv Series
                    </NavLink>
                    <NavLink
                        to="/watchlist"
                        className={({ isActive }) => 
                            `nav-link ${isActive ? 'active' : ''}`
                        }
                    >
                        Watchlist
                    </NavLink>
                    <NavLink
                        to="/search"
                        className={({ isActive }) => 
                            `nav-link ${isActive ? 'active' : ''} flex gap-2 items-center`
                        }
                        end
                    >
                        <IoSearch /> Search
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
