import React from 'react'
import { useSearchContext } from '../hooks/useSearch'
import '../style/searchbar.scss'
import { Dropdown } from './Dropdown'
import { useMoviesContext } from '../hooks/useMovies'

export const Searchbar = () => {
	const { query, setQuery } = useSearchContext()
	const { fillMovieList } = useMoviesContext()

	const handleOnChange = (e) => {
		setQuery(e.target.value)
	}

	const handleOnSubmit = (e) => {
		e.preventDefault()
		fillMovieList(query)
	}

	const handleKeyStroke = (e) => {
		if (e.keyCode === 13) {
			e.target.blur()
			fillMovieList(query)
		}
	}

	return (
		<form onSubmit={handleOnSubmit}>
			<div className="search-container">
				<div className="searchbar-dropdown-container">
					<input
						type="search"
						value={query}
						onChange={handleOnChange}
						placeholder="Search for a movie..."
						onKeyDown={handleKeyStroke}
					/>
					<Dropdown />
				</div>
				<input type="submit" value="Search" />
			</div>
		</form>
	)
}
