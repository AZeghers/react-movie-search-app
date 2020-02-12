import React from 'react'
import { useMoviesContext } from '../hooks/useMovies'

export const MoviesList = () => {
	const { movies } = useMoviesContext()
	if (movies.length) {
		return (
			<div>
				{movies.map(({ id, original_title }) => (
					<div key={id}>{original_title}</div>
				))}
			</div>
		)
	}
	return <strong>no movie found :(</strong>
}
