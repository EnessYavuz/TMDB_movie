import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Header from "./Header";

function Watched() {
  const { watchedMovie,deleteWatched,moveWatchList } = useContext(GlobalContext);


  
  return (

    <div>
      <Header />
      <p>izlendi</p>
      <ul className="resultss">
        {watchedMovie.map((movie) => [
          
            <li key={movie.id}>
              <div className="cardMain">
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt="resim"
                />
                <div className="cardContainer">
                  {movie.title}
                  <br />
                  <button className="btn" onClick={()=>moveWatchList(movie)}>tekrar izle</button>
                  <button className="btn" onClick={()=>deleteWatched(movie.id)}>Delete Me</button>
                </div>
              </div>
            </li>
          
        ])}
      </ul>
    </div>
  );
}
export default Watched;
