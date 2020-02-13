import React from 'react'
import { useMoviesContext } from '../hooks/useMovies'

export const MoviesList = () => {
	const { movies, updateCurrentMovie, cardIsOpen } = useMoviesContext()
	if (cardIsOpen) return <div />
	if (movies.length) {
		return (
			<div>
				{movies.map((movie) => (
					<div
						onClick={() => {
							updateCurrentMovie(movie)
						}}
						key={movie.id}
					>
						{movie.title}
					</div>
				))}
			</div>
		)
	}
	return <strong>no movie found :(</strong>
}
