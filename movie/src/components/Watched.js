import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Header from "./Header";

function Watched() {
  const { watchedMovie } = useContext(GlobalContext);

  return (
    <div>
      <Header />
      <p>izlendi</p>
      <h1>İzlenen Filmler</h1>
      <ul>
        {watchedMovie.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Watched;
