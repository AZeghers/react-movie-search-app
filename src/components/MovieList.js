import React from 'react'
import '../style/movieList.scss'
import { useMoviesContext } from '../hooks/useMovies'

export const MovieList = () => {
	const { movies, updateCurrentMovie, cardIsOpen } = useMoviesContext()

	const handleOnClick = (movie) => {
		updateCurrentMovie(movie)
	}

	if (cardIsOpen) return <div />
	else if (!movies.length)
		return <h2 className="no-movie">{'No movie found'}</h2>
	return (
		<div>
			{movies.map((movie) => (
				<div
					className="movie-list-item"
					onClick={() => handleOnClick(movie)}
					key={movie.id}
				>
					{`> ${movie.original_title}`}
				</div>
			))}
		</div>
	)
}
