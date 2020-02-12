import React from 'react'
import { useSearchContext } from '../hooks/useSearch'
import '../style/searchbar.scss'
import { Dropdown } from './Dropdown'

export const Searchbar = () => {
	const { fillList, query, setQuery } = useSearchContext()

	const handleOnChange = (e) => {
		setQuery(e.target.value)
	}

	const handleOnSubmit = (e) => {
		e.preventDefault()
		fillList()
	}

	return (
		<form onSubmit={handleOnSubmit}>
			<div className="searchbar-container">
				<input
					type="search"
					value={query}
					onChange={handleOnChange}
					placeholder="Search for a movie..."
				/>
				<input type="submit" value="Search" />
				<Dropdown />
			</div>
		</form>
	)
}
