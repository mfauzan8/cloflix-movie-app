import React, { useEffect, useState } from "react";
import Navbar from "../component/Movie/Navbar";
import Select from "react-select";
import { TypeSearchCategory } from "../assets/utils/data";
import ISO6391 from "iso-639-1";
import ISO3166 from "iso-3166-1";
import { FaSearch } from "react-icons/fa";
import { getSearch } from "../api";
import Card from "../component/Movie/Card";
import Pagination from "../component/Movie/Pagination";
import Spinner from "../component/Movie/Spinner";

const SearchPage = () => {
  const [country, setCountry] = useState([]);
  const [params, setParams] = useState({
    search: "",
    type: "multi",
    country: "id-ID",
  });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState({ results: [] });

  const getLanguageOptions = () => {
    const languageOptions = ISO6391.getAllCodes().map((code) => {
      const countryCode = ISO3166.whereAlpha2(code.toUpperCase())
        ? code.toUpperCase()
        : "US";
      return {
        value: `${code}-${countryCode}`,
        label: `${ISO6391.getName(code)} (${code.toUpperCase()})`,
      };
    });
    return languageOptions;
  };

  useEffect(() => {
    setCountry(getLanguageOptions());
  }, []);

  const fetchData = async (e) => {
    setLoading(true);
    e.preventDefault();
    const response = await getSearch(
      params.search,
      params.type,
      params.country,
      page,
    );
    setMovies(response);
    setLoading(false);
  };
  return (
    <div className="w-screen bg-black min-h-screen">
      <Navbar />
      <form
        onSubmit={fetchData}
        className="flex items-center justify-center pt-24 gap-3"
      >
        <input
          required
          className="w-2/5 px-3 py-1 rounded-sm text-gray-800 border-2 border-gray-200 focus:outline-blue-500"
          type="text"
          placeholder="Search..."
          value={params.search}
          onChange={(e) => setParams({ ...params, search: e.target.value })}
        />
        <Select
          name="type"
          options={TypeSearchCategory}
          value={TypeSearchCategory.find((item) => item.value == params.type)}
          onChange={(e) => setParams({ ...params, type: e.value })}
          className="w-1/12"
        />
        <Select
          name="country"
          options={country}
          value={country?.find((item) => item.value == params.country)}
          onChange={(e) => setParams({ ...params, country: e.value })}
          className="w-2/12"
        />
        <button className="button-movie bg-red-600 py-3 text-white">
          <FaSearch />
        </button>
      </form>
      {loading ? <Spinner /> : (
        movies.results.length > 0 && (
          <>
            <div className="flex flex-wrap justify-center pt-24">
              {movies?.results?.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </div>
            <Pagination setPage={setPage} page={page} totalPages={100} />
          </>
        )
      )}
    </div>
  );
};

export default SearchPage;
