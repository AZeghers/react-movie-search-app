import React from 'react'
import { useMoviesContext } from '../hooks/useMovies'
import { useSearchContext } from '../hooks/useSearch'
import '../style/dropdown.scss'

export const Dropdown = () => {
	const { setQuery, suggestions } = useSearchContext()
	const { fillMovieList, setCardIsOpen } = useMoviesContext()

	const handleOnClick = (e) => {
		setQuery(e.target.textContent)
		setCardIsOpen(false)
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
