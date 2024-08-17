import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../service/moviesApi";
import { useEffect, useState } from "react";
import css from "./MovieCast.module.css";
import Loader from "../Loader/Loader";
const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      setError(null);
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data.cast);
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
      {loader && <Loader />}
      {error && <p>Something went wrong: {error.message}</p>}
      <ul className={css.castList}>
        {cast.map((member) => (
          <li key={member.id} className={css.castItem}>
            <img
              className={css.castPhoto}
              src={
                member.profile_path
                  ? `https://image.tmdb.org/t/p/w200${member.profile_path}`
                  : "/path/to/placeholder.jpg"
              }
              alt={member.name}
            />
            <p>{member.name}</p>
            <p>as {member.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
