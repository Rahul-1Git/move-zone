import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MovieList from "./components/movieList/MovieList";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MovieList title="popular" type="popular" />
      <MovieList title="top rated" type="top_rated" />
      <MovieList title="upcoming" type="upcoming" />
    </div>
  );
};

export default App;
