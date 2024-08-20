import { Link, useLocation } from "react-router-dom";
import css from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={css.movieContainer}>
      <ul className={css.moviesList}>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id} className={css.movieItem}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {poster_path ? (
                <img
                  className={css.img}
                  src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                  alt={title}
                />
              ) : (
                <div className={css.placeholder}>
                  <p>No foto yet...</p>
                </div>
              )}
              <h2 className={css.movieTitle}>{title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
