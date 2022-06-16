import React from 'react'
import SearchUrlContext from '../Context/SearchUrlContext';
import SearchBox from '../Components/SearchBox'
import '../assets/Global.css'
import '../assets/Movie.css'
import { useContext, useEffect } from "react"
import MovieContext from '../Context/MovieContext'
import { Movie } from '../Components/Movie'
import { baseService } from '../Services/network/services/baseService'
const HomePage = () => {
  // eslint-disable-next-line
  const { searchUrl, setSearchUrl } = useContext(SearchUrlContext)
  const { movies, setMovies } = useContext(MovieContext)
  useEffect(() => {
    getMovies();
    
  }, [searchUrl])
  const getMovies = async () => {
    const data = await baseService.get(searchUrl)
    setMovies(data.Search)
  }
 
  return (
    <div className='container'>
      <SearchBox></SearchBox>
      <div className={'movies-wrapper'}>
        {movies !== null && (
          movies.map((movie,index) => (
            <Movie movie={movie} key={index}></Movie>
          ))
        )}
      </div>
    </div>
  )
}
export default HomePage
