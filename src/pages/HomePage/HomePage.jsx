import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import { getTrendingMovies } from "../../service/moviesApi";
import MoviesList from "../../components/MoviesList/MoviesList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      setError(null);
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loader && <Loader />}
      {error && <p>Something went wrong: {error.message}</p>}
      <MoviesList movies={movies} />
    </div>
  );
};

export default HomePage;
