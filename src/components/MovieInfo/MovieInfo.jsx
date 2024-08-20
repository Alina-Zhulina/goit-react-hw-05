import css from "./MovieInfo.module.css";

const MovieInfo = ({ title, poster_path, genres = [], overview }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.poster}>
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
      </div>
      <div className={css.details}>
        <h1 className={css.movieTitle}>{title}</h1>
        <ul className={css.infoList}>
          {overview && (
            <li className={css.overview}>
              <p>
                <b>Overview:</b> {overview}
              </p>
            </li>
          )}
          {genres.length > 0 && (
            <li className={css.genres}>
              <p>
                <b>Genres:</b> {genres.map((genre) => genre.name).join(", ")}
              </p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default MovieInfo;
