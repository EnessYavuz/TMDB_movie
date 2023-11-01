import React, { createContext,useState } from "react";

export const GlobalContext = createContext();


function GlobalState(props) {
    const [watchedMovie, setWatchedMovie] = useState([])
    const addWatchedMovie =(movie)=>{
        setWatchedMovie((movies)=>[...movies,movie])
    }

  return (

    <GlobalContext.Provider value={{enes:"enes",watchedMovie,addWatchedMovie}}>{props.children}</GlobalContext.Provider>
  );
}

export default GlobalState;
