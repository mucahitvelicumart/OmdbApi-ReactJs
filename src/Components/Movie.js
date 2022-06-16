import React from 'react'
import { Link } from 'react-router-dom'
export const Movie = (props) => {
    const movie = props.movie

    return (
        <div key={movie.id} className="movie-wrapper">

            <div className={'movie-image-wrapper'}>
                <img alt={'movie-' + movie.id} src={movie.Poster} width={225} height={225} />

            </div>
            <div className={'movie-info-wrapper'}>
                <div className={'movie-title'}>
                    <Link className={'filter-option'}
                        to={{
                            pathname: '/details/' + movie.imdbID,
                            state: { stateParam: true }
                        }}
                    >
                        {movie.Title}
                    </Link>
                </div>
                <div className={'movie-properties-info-wrapper'}>
                    <div className={'movie-properties-element'}>
                        <div className={'movie-properties-label'}>
                            Tarih:
                        </div>
                        <div className={'movie-properties-value'}>
                            {movie.Year}
                        </div>
                    </div>
                    <div className={'movie-properties-element'}>
                        <div className={'movie-properties-label'}>
                            IMDB ID:
                        </div>
                        <div className={'movie-properties-value'}>
                            {movie.imdbID}
                        </div>
                    </div>
                    <div className={'movie-properties-element'}>
                        <div className={'movie-properties-label'}>
                            Type:
                        </div>
                        <div className={'movie-properties-value'}>
                            {movie.Type}
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}
