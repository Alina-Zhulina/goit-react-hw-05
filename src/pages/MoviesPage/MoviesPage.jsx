import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { searchMovies } from "../../service/moviesApi";
import Loader from "../../components/Loader/Loader";
import MoviesList from "../../components/MoviesList/MoviesList";
import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const [inputValue, setInputValue] = useState(query);
  const [searchQuery, setSearchQuery] = useState(query);
  const [results, setResults] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (searchQuery) {
      const fetchMovies = async () => {
        setLoader(true);
        setError("");
        try {
          const searchResults = await searchMovies(searchQuery);
          setResults(searchResults);
        } catch (error) {
          setError(error);
        } finally {
          setLoader(false);
        }
      };
      fetchMovies();
    }
  }, [searchQuery]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setSearchQuery(inputValue.trim());
      setSearchParams({ query: inputValue.trim() });
    }
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search film..."
          className={css.searchInput}
        />
        <button type="submit" className={css.searchButton}>
          <FiSearch size="16px" />
        </button>
      </form>
      {loader && <Loader />}
      {error && <p>{error}</p>}
      <div>
        {!results && <p className={css.noResults}>No results...</p>}
        {results.length > 0 && <MoviesList movies={results} />}
      </div>
    </div>
  );
};

export default MoviesPage;
