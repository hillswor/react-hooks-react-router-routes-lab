import React from "react";
import { actors } from "../data";

function Actors() {
  const actorDetails = actors.map(({ name, movies }) => {
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
      <h1>Actors Page</h1>
      {actorDetails}
    </div>
  );
}

export default Actors;
