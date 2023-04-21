import React from "react";
import { directors } from "../data";

function Directors() {
  const directorDetails = directors.map(({ name, movies }) => {
    return (
      <div key={name}>
        <h2>{name}</h2>
        <p>Movies:</p>
        <ul>
          {movies.map((movie) => {
            return <li key={movie}>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {directorDetails}
    </div>
  );
}

export default Directors;
