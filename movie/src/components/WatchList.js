import React, { useContext } from "react";
import Header from "./Header";
import { GlobalContext } from "../context/GlobalState";

function WatchList() {
  const { watchListMovie,deleteWatchList,moveWatched } = useContext(GlobalContext);

  return (
    <div>
      <Header />
      <h2>izlenecekler</h2>

      <ul className="resultss">
        {watchListMovie.map((movie) => [
          <li key={movie.id}>
            <div className="cardMain">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt="resim"
              />
              <div className="cardContainer">
                {movie.title}
                <br />
                <button className="btn" onClick={()=>moveWatched(movie)}>izledim</button>
                <button className="btn" onClick={()=>deleteWatchList(movie.id)}>Delete Me</button>
              </div>
            </div>
          </li>,
        ])}
      </ul>
    </div>
  );
}
export default WatchList;
