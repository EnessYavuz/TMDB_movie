import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function ResultCart({ movies }) {
  const { addWatchedMovie,addWatchListMovie,watchedMovie,watchListMovie } = useContext(GlobalContext);

  const storedMovieWatched = watchedMovie.find((o) => o.id === movies.id);
  const storedMovie = watchListMovie.find((o) => o.id === movies.id)
    ? true
    : !!storedMovieWatched;

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
            <button className="btn" disabled={storedMovie} onClick={()=>addWatchListMovie(movies)}>addlist</button>
            <button className="btn" disabled={storedMovieWatched} onClick={() => addWatchedMovie(movies)}>
              addWatched
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ResultCart;
