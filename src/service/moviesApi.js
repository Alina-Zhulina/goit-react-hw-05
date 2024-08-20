import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDhmM2QzMmRmYTI2YjhiZjVkNGRlYmUxMDU1NzQzNyIsIm5iZiI6MTcyMzgzOTE1MS45MzI1NCwic3ViIjoiNjZiZmE5MzU3ZjBmZWI4ZGFmOTdjMDgxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.K7Xa0MYf0Zt7qP-geHYG9g82-0pvI-vp8bwtPAC-pwA",
  },
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    "/trending/movie/day?language=en-US",
    options
  );
  return data.results;
};

export const fetchMovie = async (id) => {
  const { data } = await axios.get(`/movie/${id}`, options);
  return data;
};

export const fetchMovieCast = async (id) => {
  const { data } = await axios.get(`/movie/${id}/credits`, options);
  return data;
};

export const fetchMovieReviews = async (id) => {
  const { data } = await axios.get(`/movie/${id}/reviews`, options);
  return data;
};

export const searchMovies = async (query) => {
  const { data } = await axios.get(
    `/search/movie?query=${encodeURIComponent(query)}`,
    options
  );
  return data.results;
};
