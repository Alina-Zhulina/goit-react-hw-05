import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams, Outlet } from "react-router-dom";
import { fetchMovie } from "../../service/moviesApi";
import Loader from "../../components/Loader/Loader";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import css from "./MovieDetailsPage.module.css";
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const goBack = useRef(location?.state?.from ?? "/");

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      setError(null);
      try {
        const data = await fetchMovie(movieId);
        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      <GoBackBtn path={goBack.current}>Back to movies</GoBackBtn>
      {loader && <Loader />}
      {error && <p>Something went wrong...</p>}
      {movie && (
        <>
          <MovieInfo
            title={movie.title}
            poster_path={movie.poster_path}
            genres={movie.genres}
            overview={movie.overview}
          />
          <div className={css.sideNav}>
            <nav>
              <ul className={css.navList}>
                <li className={css.navItem}>
                  <Link to={`/movies/${movieId}/cast`}>Cast</Link>
                </li>
                <li className={css.navItem}>
                  <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
                </li>
              </ul>
            </nav>
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
