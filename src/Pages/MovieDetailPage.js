import React from 'react'
import '../assets/Movie.css'
import { useState, useEffect } from "react"
import { Link ,useParams } from 'react-router-dom'
import { baseService } from '../Services/network/services/baseService'

export const MovieDetailPage = () => {

    const [currentMovie, setCurrentMovie] = useState(null)
    const currentId = useParams()

    useEffect(() => {
        getMovie();
    }, [])

    const getMovie = async () => {
        const data = await baseService.get("i=" + currentId.id)
        setCurrentMovie(data)
    }

    console.log(currentId)
    console.log(currentMovie)
    return (
        <div className="movies-detail-wrapper">
            {currentMovie != null ?
            <>
                <div key={currentMovie.id} >

                    <div className={'movie-image-wrapper'}>
                        <img alt={'currentMovie-'} src={currentMovie.Poster} width={225} height={225} />

                    </div>
                    <div className={'movie-info-wrapper'}>
                        <div className={'movie-title'}>
                            <Link className={'filter-option'}
                                to={{
                                    pathname: '/details/' + currentMovie.imdbID,
                                    state: { stateParam: true }
                                }}
                            >
                                {currentMovie.Title}
                            </Link>
                        </div>
                        
                        <div className={'movie-properties-info-wrapper'}>
                            <div className={'movie-properties-element'}>
                                <div className={'movie-properties-label'}>
                                    Tarih:
                                </div>
                                <div className={'movie-properties-value'}>
                                    {currentMovie.Year}
                                </div>
                            </div>
                            <div className={'movie-properties-element'}>
                                <div className={'movie-properties-label'}>
                                    IMDB ID:
                                </div>
                                <div className={'movie-properties-value'}>
                                    {currentMovie.imdbID}
                                </div>
                            </div>
                            <div className={'movie-properties-element'}>
                                <div className={'movie-properties-label'}>
                                    Type:
                                </div>
                                <div className={'movie-properties-value'}>
                                    {currentMovie.Type}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='movies-detail-wrapper2'>
                <div className={'movie-properties-info-wrapper'}>
                            <div className={'movie-properties-element'}>
                                <div className={'movie-properties-label'}>
                                    Tür:
                                </div>
                                <div className={'movie-properties-value'}>
                                    {currentMovie.Genre}
                                </div>
                            </div>
                            <div className={'movie-properties-element'}>
                                <div className={'movie-properties-label'}>
                                    Süre:
                                </div>
                                <div className={'movie-properties-value'}>
                                    {currentMovie.Runtime}
                                </div>
                            </div>
                            <div className={'movie-properties-element'}>
                                <div className={'movie-properties-label'}>
                                    Yazar: 
                                </div>
                                <div className={'movie-properties-value'}>
                                    {currentMovie.Writer}
                                </div>
                            </div>
                            <div className={'movie-properties-element'}>
                                <div className={'movie-properties-label'}>
                                    Oyuncular: 
                                </div>
                                <div className={'movie-properties-value'}>
                                    {currentMovie.Actors}
                                </div>
                            </div>
                            <div className={'movie-properties-element'}>
                                <div className={'movie-properties-label'}>
                                    Plot: 
                                </div>
                                <div className={'movie-properties-value'}>
                                    {currentMovie.Plot}
                                </div>
                            </div>
                            <div className={'movie-properties-element'}>
                                <div className={'movie-properties-label'}>
                                    Dil: 
                                </div>
                                <div className={'movie-properties-value'}>
                                    {currentMovie.Language}
                                </div>
                            </div>
                            <div className={'movie-properties-element'}>
                                <div className={'movie-properties-label'}>
                                    Ülke: 
                                </div>
                                <div className={'movie-properties-value'}>
                                    {currentMovie.Country}
                                </div>
                            </div>
                            <div className={'movie-properties-element'}>
                                <div className={'movie-properties-label'}>
                                    Ödüller: 
                                </div>
                                <div className={'movie-properties-value'}>
                                    {currentMovie.Awards}
                                </div>
                            </div>
                            <div className={'movie-properties-element'}>
                                <div className={'movie-properties-label'}>
                                    IMDB Puanı: 
                                </div>
                                <div className={'movie-properties-value'}>
                                    {currentMovie.imdbRating}
                                </div>
                            </div>
                            
                        </div>
                </div>
                </>
                :
                <div></div> }
        </div>
    )
}
