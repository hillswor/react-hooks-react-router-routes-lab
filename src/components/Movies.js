import React from "react";
import { movies } from "../data";

function Movies() {
  const movieDetails = movies.map(({ title, time, genres }) => {
    return (
      <div key={title}>
        <h2>{title}</h2>
        <p>{time}</p>
        <p>Genres:</p>
        <ul>
          {genres.map((genre) => {
            return <li key={genre}>{genre}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {movieDetails}
    </div>
  );
}

export default Movies;
