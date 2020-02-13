import React from 'react'
import { useMoviesContext } from '../hooks/useMovies'

export const MovieCard = () => {
	const { cardIsOpen, currMovie, setCardIsOpen } = useMoviesContext()
	const { overview, poster, title, vote_average } = currMovie

	if (!cardIsOpen) return <div />
	return (
		<div>
			<button
				onClick={() => {
					setCardIsOpen(false)
				}}
			>
				{'< Back'}
			</button>
			<div className="movie-info">
				<div>{title}</div>
				<div>{vote_average}</div>
				<div>{overview || 'no description'}</div>
			</div>
			<img className="movie-poster" src={poster} alt="movie-poster" />
		</div>
	)
}
