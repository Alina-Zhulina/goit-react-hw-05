// src/pages/MovieReviews/MovieReviews.jsx

import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../service/moviesApi";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      setError(null);
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data.results);
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
      <ul className={css.reviewList}>
        {reviews.map((review) => (
          <li key={review.id} className={css.reviewItem}>
            <p className={css.reviewAuthor}>{review.author}</p>
            <p className={css.reviewContent}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
