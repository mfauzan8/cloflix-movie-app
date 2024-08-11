import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-white">404</h1>
                <p className="text-2xl md:text-3xl font-light text-gray-400 mb-8">
                    Oops! The page you're looking for isn't here.
                </p>
                <Link
                    to="/dashboard"
                    className="inline-block px-6 py-1 mt-4 text-lg font-medium text-white bg-red-800 rounded-lg hover:bg-red-700 focus:outline-none focus:ring"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
