import "./App.css";
import axios from "./api/axiosConfig";
import { useState, useEffect } from "react";
import Layout from "./component/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Header from "./component/header/Header";

function App() {
  const [movies, setMovies] = useState();

  // Get movies request
  const getMovies = async () => {
    try {
      const response = await axios.get("/api/v1/movies");

      setMovies(response.data);
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
