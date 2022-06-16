import {createContext, useState} from "react";
import React from 'react'
const MovieContext = createContext(null);

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([])
    const values = {movies,setMovies}
    return <MovieContext.Provider value={values}>{children}</MovieContext.Provider>

}

export default MovieContext;