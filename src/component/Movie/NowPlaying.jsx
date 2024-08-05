import React, { useState, useEffect } from 'react';
import { getNowPlaying } from '../../api';
import Card from './Card';

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setLoading(true);
    const data = await getNowPlaying(page);
    setMovies(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <section id='now-playing' className='w-full bg-gray-950 text-white'>
      {loading ? (
        <div className='flex justify-center items-center h-screen'>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div className='flex justify-between px-10 items-center py-10'>
            <h2 className='text-3xl font-bold'>Now Playing</h2>
            <div className='flex gap-3 justify-center items-end'>
              <button
                className='bg-red-800 px-2 py-1 rounded-lg disabled:opacity-70 hover:opacity-90'
                onClick={() => setPage(page - 1)}
                disabled={page <= 1}
              >
                Prev
              </button>
              <span className='bg-white text-black font-bold px-3 py-1 rounded-lg'>{page}</span>
              <button
                className='bg-red-800 px-2 py-1 rounded-lg disabled:opacity-70 hover:opacity-90'
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </div>
          </div>

          <div className='flex flex-wrap justify-center'>
            {movies?.results?.map(movie => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default NowPlaying;
