import { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { searchMovies } from "../../service/moviesApi";
import Loader from "../../components/Loader/Loader";
import MoviesList from "../../components/MoviesList/MoviesList";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    setLoader(true);
    setError("");
    try {
      const searchResults = await searchMovies(query);
      setResults(searchResults);
    } catch (error) {
      console.error(error);
      setError("try again");
    } finally {
      setLoader(false);
    }
    setQuery("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search film..."
        />
        <button type="submit">
          <FiSearch size="16px" />
        </button>
      </form>

      {loader && <Loader />}
      {error && <p>Something went wrong: {error.message}</p>}
      <div>
        {results.length > 0 ? (
          <MoviesList movies={results} />
        ) : (
          !loader && <p>No results...</p>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;
