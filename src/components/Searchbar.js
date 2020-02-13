import React from 'react'
import { useMoviesContext } from '../hooks/useMovies'
import { useSearchContext } from '../hooks/useSearch'
import { Dropdown } from './Dropdown'
import '../style/searchbar.scss'

const ENTER_KEY_CODE = 13

export const Searchbar = () => {
	const { query, setQuery } = useSearchContext()
	const { fillMovieList, setCardIsOpen } = useMoviesContext()

	const handleOnChange = (e) => {
		setQuery(e.target.value)
	}

	const handleOnSubmit = (e) => {
		e.preventDefault()
		setCardIsOpen(false)
		fillMovieList(query)
	}

	const handleKeyStroke = (e) => {
		if (e.keyCode === ENTER_KEY_CODE) {
			e.target.blur()
			setCardIsOpen(false)
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
						onKeyDown={handleKeyStroke}
						placeholder="Search for a movie..."
					/>
					<Dropdown />
				</div>
				<input type="submit" value="Search" />
			</div>
		</form>
	)
}
