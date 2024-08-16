import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import toast from "react-hot-toast";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDhmM2QzMmRmYTI2YjhiZjVkNGRlYmUxMDU1NzQzNyIsIm5iZiI6MTcyMzgzOTE1MS45MzI1NCwic3ViIjoiNjZiZmE5MzU3ZjBmZWI4ZGFmOTdjMDgxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.K7Xa0MYf0Zt7qP-geHYG9g82-0pvI-vp8bwtPAC-pwA",
    },
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(url, options);
        console.log(response.data);

        setMovies(response.data.results);
      } catch (error) {
        toast.error("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className={css.movieContainer}>
      <h1 className={css.trends}>Trending Today</h1>
      <ul className={css.moviesList}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.movieItem}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className={css.moviePoster}
            />
            <h2 className={css.movieTitle}>{movie.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
