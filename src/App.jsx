import "./App.css";
import { Toaster } from "react-hot-toast";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
// import MoviesPage from "path/to/MoviesPage";
// import MovieDetailsPage from "path/to/MovieDetailsPage";
// import MovieCast from "path/to/MovieCast";
// import MovieReviews from "path/to/MovieReviews";
// import NotFoundPage from "path/to/NotFoundPage";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
