import React from "react";

const FilterGroup = ({ minRating, handleClick, rating }) => {
  return (
    <ul className="movie_filter">
      {rating.map((rate) => (
        <li
          className={
            minRating === rate ? "movie_filter active" : "movie_filter"
          }
          onClick={() => handleClick(rate)}
          key={rate}
        >
          {rate}+ Star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
