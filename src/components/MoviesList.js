import React from 'react'
import { useSearchContext } from '../hooks/useSearch'

export const MoviesList = () => {
	const { movies } = useSearchContext()
	if (movies.length) {
		return (
			<ul>
				{movies.map(({ id, original_title }) => (
					<li key={id}>{original_title}</li>
				))}
			</ul>
		)
	}
	return <strong>no movie found :(</strong>
}
