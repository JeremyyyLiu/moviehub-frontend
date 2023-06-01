import "./App.css";
import axios from "./api/axiosConfig";
import { useState, useEffect } from "react";
import Layout from "./component/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Header from "./component/header/Header";
import Trailer from "./component/trailer/Trailer";
import Reviews from "./component/reviews/Reviews";

function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  // Get all movies
  const getMovies = async () => {
    try {
      const response = await axios.get("/api/v1/movies");

      setMovies(response.data);
    } catch (err) {
      return err;
    }
  };

  // Get single movie
  const getMovieData = async (movieId) => {
    try {
      const response = await axios.get(`/api/v1/movies/${movieId}`);

      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviews);
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>
          <Route
            path="/Reviews/:movieId"
            element={
              <Reviews
                getMovieData={getMovieData}
                movie={movie}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
