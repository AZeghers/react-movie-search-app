import React from 'react'
import { useSearchContext } from '../hooks/useSearch'
import '../style/dropdown.scss'
import { useMoviesContext } from '../hooks/useMovies'

export const Dropdown = () => {
	const { suggestions, setQuery } = useSearchContext()
	const { fillMovieList } = useMoviesContext()

	const handleOnClick = (e) => {
		setQuery(e.target.textContent)
		fillMovieList(e.target.textContent)
	}

	if (!suggestions.length) return <div />

	return (
		<div className="dropdown">
			{suggestions.map(({ id, original_title }) => (
				<div className="dropdown-item" key={id} onMouseDown={handleOnClick}>
					{original_title}
				</div>
			))}
		</div>
	)
}
