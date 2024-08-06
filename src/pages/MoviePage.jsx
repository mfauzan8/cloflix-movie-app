import React,{useState, useEffect} from 'react'
import Navbar from '../component/Movie/Navbar'
import Card from '../component/Movie/Card'
import { getMovie } from '../api'
import Pagination from '../component/Movie/Pagination'

const MoviePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
  
    const fetchData = async () => {
      setLoading(true);
      const data = await getMovie(page);
      setMovies(data);
      setLoading(false);
    };
  
    useEffect(() => {
      fetchData();
    }, [page]);
  
  return (
    <div className='w-screen bg-black '>
        <Navbar/>
        {loading ? (
        <div className='flex justify-center items-center h-screen'>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div className='flex flex-wrap justify-center pt-24'>
            {movies?.results?.map(movie => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
          <Pagination setPage={setPage} page={page} totalPages={100}/>
        </>
      )}
    </div>
  )
}

export default MoviePage