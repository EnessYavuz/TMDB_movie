import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function ResultCart({ movies }) {
  const { addWatchedMovie,addWatchListMovie } = useContext(GlobalContext);

  const handleClick = (movie) => {
    addWatchedMovie(movie);
  };

  return (
    <>
      {movies.poster_path ? (
        <div className="cardMain">
          <img
            src={`https://image.tmdb.org/t/p/w200${movies.poster_path}`}
            alt="resim"
          />
          <div className="cardContainer">
            <h5 row={3}>{movies.title}</h5>
            <button className="btn" onClick={()=>addWatchListMovie(movies)}>addlist</button>
            <button className="btn" onClick={() => handleClick(movies)}>
              addWatched
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ResultCart;
