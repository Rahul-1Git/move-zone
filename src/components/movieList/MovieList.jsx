import React, { useEffect, useState } from "react";
import _ from "lodash";
import "./MovieList.css";
import MovieCard from "../moviecard/MovieCard";
import FilterGroup from "../filterGroup/FilterGroup";
import { values } from "lodash";
const MovieList = ({ type, title }) => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
      setFilterMovies(sortedMovies);
    }
  }, [sort]);

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=3faee9e3699b092ba6ef29c9e060d547`
    );
    const data = await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
    console.log(movies);
  };

  const handleClick = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);
      const filtered = movies.filter((movies) => movies.vote_average >= rate);
      setFilterMovies(filtered);
      setMinRating(rate);
    }
  };

  function handleSort(e) {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <section className="movie_list" id={type}>
      <header className="movie_list_header">
        <h2>{title}</h2>

        <div className="movie_list_fs">
          <FilterGroup
            minRating={minRating}
            handleClick={handleClick}
            rating={[7, 6, 5]}
          />
          <select
            name="by"
            className="movie_sorting"
            id=""
            onChange={handleSort}
            value={sort.by}
          >
            <option value="default">Store By</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            className="movie_sorting"
            id=""
            onChange={handleSort}
            value={sort.order}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
