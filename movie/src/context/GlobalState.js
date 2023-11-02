import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

function GlobalState(props) {
  const [watchedMovie, setWatchedMovie] = useState([]);
  const [watchListMovie, setWatchListMovie] = useState([])
  
  const addWatchedMovie = (movie) => {
    setWatchedMovie((movies) => [...movies, movie]);
  };
  const addWatchListMovie = (movie) => {
    setWatchListMovie((movies) => [...movies, movie]);
  };

  const deleteWatched=(id)=>{
    const updatedWatchedMovie = watchedMovie.filter((movie) => movie.id !== id);
    setWatchedMovie(updatedWatchedMovie)
  }
  const deleteWatchList =(id)=>{
    const updatedWatchedMovie = watchListMovie.filter((movie) => movie.id !== id);
    setWatchListMovie(updatedWatchedMovie)
  }
  const moveWatched=(movie)=>{
    setWatchedMovie((movies)=>[...movies,movie])
    deleteWatchList(movie.id)
    
  }
  const moveWatchList =(movie)=>{
    setWatchListMovie((movies)=>[...movies,movie])
    deleteWatched(movie.id)
  }

  return (
    <GlobalContext.Provider
      value={{ watchedMovie, addWatchedMovie ,watchListMovie,addWatchListMovie,deleteWatched,deleteWatchList,moveWatched,moveWatchList }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
