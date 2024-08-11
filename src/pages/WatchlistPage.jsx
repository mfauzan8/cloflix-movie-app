import React, { useState, useEffect } from 'react';
import Navbar from '../component/Movie/Navbar';
import Card from '../component/Movie/Card';

const WatchlistPage = () => {
  const [watchlist, setWatchlist] = useState([]);

  const checkWatchlist = () => {
    const list = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(list);
  };

  useEffect(() => {
    checkWatchlist();

    const handleStorageChange = () => {
      checkWatchlist();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className="w-screen bg-black min-h-screen">
      <Navbar />
      <div className='pt-24 px-4'>
        <p className='text-white text-left text-2xl font-bold italic mb-6 underline'>Watchlist</p>
        <div className={`flex flex-wrap ${watchlist.length > 0 ? 'justify-start' : 'justify-center'} gap-6`}>
          {watchlist.length > 0 ? (
            watchlist.map((movie) => (
              <Card key={movie.id} movie={movie} onLoad={movie.type} />
            ))
          ) : (
            <p className='text-white'>Your watchlist is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default WatchlistPage;
