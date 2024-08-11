import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full bg-black opacity-70 py-3 px-5 md:px-20 text-white fixed top-0 z-20">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center text-2xl md:text-4xl font-black font-racing">
                    <BiSolidCameraMovie />
                    Clo<span className="text-red-800">Flix</span>
                </div>

                {/* Hamburger Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10 text-lg">
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
                        TV Series
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
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-black text-white flex flex-col gap-4 p-5">
                        <NavLink
                            to="/dashboard"
                            className="nav-link"
                            onClick={toggleMenu}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/movie"
                            className="nav-link"
                            onClick={toggleMenu}
                        >
                            Movie
                        </NavLink>
                        <NavLink
                            to="/tv"
                            className="nav-link"
                            onClick={toggleMenu}
                        >
                            TV Series
                        </NavLink>
                        <NavLink
                            to="/watchlist"
                            className="nav-link"
                            onClick={toggleMenu}
                        >
                            Watchlist
                        </NavLink>
                        <NavLink
                            to="/search"
                            className="nav-link flex gap-2 items-center"
                            onClick={toggleMenu}
                            end
                        >
                            <IoSearch /> Search
                        </NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
