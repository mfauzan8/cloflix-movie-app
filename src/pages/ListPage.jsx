import React, { useState, useEffect } from 'react'
import Navbar from '../component/Movie/Navbar'
import Card from '../component/Movie/Card'
import { getMovie, getTV } from '../api'
import Pagination from '../component/Movie/Pagination'
import { useLocation } from 'react-router-dom';
import Spinner from '../component/Movie/Spinner'

const ListPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const location = useLocation();

  const fetchData = async () => {
    setLoading(true);
    const filteredEndpoint = location.pathname == '/movie' ? getMovie(page) : getTV(page)
    const data = await filteredEndpoint;
    setMovies(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page, location]);

  return (
    <div className='w-full bg-black'>
      <Navbar />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className='flex flex-wrap justify-center pt-24 mx-auto'>
            {movies?.results?.map(movie => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
          <Pagination setPage={setPage} page={page} totalPages={100} />
        </>
      )}
    </div>
  )
}

export default ListPage